import { describe, it, expect, vi, beforeEach } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Contact from "../page"

// Mock fetch
global.fetch = vi.fn()

describe("Contact Page", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe("Rendering", () => {
    it("renders the page header", () => {
      render(<Contact />)
      expect(screen.getByText("Contact Us")).toBeInTheDocument()
    })

    it("renders contact information with email", () => {
      render(<Contact />)
      const emailLink = screen.getByRole("link", { name: /jetiller@jetiller.com/i })
      expect(emailLink).toBeInTheDocument()
      expect(emailLink).toHaveAttribute("href", "mailto:jetiller@jetiller.com")
    })

    it("renders location as Tampa, Florida", () => {
      render(<Contact />)
      expect(screen.getByText("Tampa, Florida")).toBeInTheDocument()
    })

    it("renders all form fields", () => {
      render(<Contact />)
      expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/subject/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
    })

    it("renders submit button", () => {
      render(<Contact />)
      expect(screen.getByRole("button", { name: /send message/i })).toBeInTheDocument()
    })

    it("renders honeypot field as hidden", () => {
      render(<Contact />)
      const honeypot = screen.getByLabelText(/don't fill this out/i)
      expect(honeypot).toBeInTheDocument()
      expect(honeypot.closest("p")).toHaveClass("hidden")
    })
  })

  describe("Validation", () => {
    it("requires name field", () => {
      render(<Contact />)
      const nameInput = screen.getByLabelText(/name/i)
      expect(nameInput).toBeRequired()
    })

    it("requires email field", () => {
      render(<Contact />)
      const emailInput = screen.getByLabelText(/email/i)
      expect(emailInput).toBeRequired()
    })

    it("requires message field", () => {
      render(<Contact />)
      const messageInput = screen.getByLabelText(/message/i)
      expect(messageInput).toBeRequired()
    })

    it("does not require subject field", () => {
      render(<Contact />)
      const subjectInput = screen.getByLabelText(/subject/i)
      expect(subjectInput).not.toBeRequired()
    })

    it("email field has type email for browser validation", () => {
      render(<Contact />)
      const emailInput = screen.getByLabelText(/email/i)
      expect(emailInput).toHaveAttribute("type", "email")
    })
  })

  describe("Form Submission", () => {
    it("shows success message after successful submission", async () => {
      const user = userEvent.setup()
      
      // Mock successful fetch
      vi.mocked(global.fetch).mockResolvedValueOnce({
        ok: true,
      } as Response)

      render(<Contact />)

      // Fill out form
      await user.type(screen.getByLabelText(/name/i), "John Doe")
      await user.type(screen.getByLabelText(/email/i), "john@example.com")
      await user.type(screen.getByLabelText(/message/i), "Test message")

      // Submit form
      await user.click(screen.getByRole("button", { name: /send message/i }))

      // Check for success message
      await waitFor(() => {
        expect(screen.getByText(/thank you for your message/i)).toBeInTheDocument()
      })
    })

    it("hides form after successful submission", async () => {
      const user = userEvent.setup()
      
      vi.mocked(global.fetch).mockResolvedValueOnce({
        ok: true,
      } as Response)

      render(<Contact />)

      // Fill out and submit form
      await user.type(screen.getByLabelText(/name/i), "John Doe")
      await user.type(screen.getByLabelText(/email/i), "john@example.com")
      await user.type(screen.getByLabelText(/message/i), "Test message")
      await user.click(screen.getByRole("button", { name: /send message/i }))

      // Form should be hidden
      await waitFor(() => {
        expect(screen.queryByRole("button", { name: /send message/i })).not.toBeInTheDocument()
      })
    })

    it("includes form-name in submission for Netlify", async () => {
      const user = userEvent.setup()
      
      vi.mocked(global.fetch).mockResolvedValueOnce({
        ok: true,
      } as Response)

      render(<Contact />)

      await user.type(screen.getByLabelText(/name/i), "John Doe")
      await user.type(screen.getByLabelText(/email/i), "john@example.com")
      await user.type(screen.getByLabelText(/message/i), "Test message")
      await user.click(screen.getByRole("button", { name: /send message/i }))

      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledWith(
          "/contact",
          expect.objectContaining({
            method: "POST",
            body: expect.stringContaining("form-name=contact"),
          })
        )
      })
    })
  })
})
