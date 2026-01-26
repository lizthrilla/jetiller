---
agent: 'agent'
---

# Rule: Processing a Task List with User Oversight

## Goal

To guide an AI assistant in implementing a task list step-by-step, with the user overseeing and approving progress at each stage. The AI handles the implementation while the user maintains control over the direction and quality of the work.

## Process

1.  **Receive Task List:** The user provides a link to an existing task list (e.g., `/.tasks/tasklist-[feature-name].md`).
2.  **Review and Confirm:** The AI reads the task list and presents a summary to the user, confirming:
    - Total number of tasks and subtasks
    - Any dependencies or prerequisites
    - Suggested order of execution
3.  **Work Through Tasks:** For each task:
    - **Announce:** Tell the user which task/subtask is being worked on.
    - **Implement:** Complete the subtask (create/modify files, write code).
    - **Report:** Summarize what was done and show key changes.
    - **Checkpoint:** Ask the user to confirm before moving to the next subtask.
4.  **Handle Issues:** If a blocker or question arises, pause and ask the user for guidance before proceeding.
5.  **Mark Progress:** Update the task list file to mark completed items as the work progresses.
6.  **Final Review:** Once all tasks are complete, provide a summary of all changes made.

## Checkpoint Questions

At each checkpoint, the AI should ask one of the following (adapt based on context):

- "Subtask 1.1 is complete. Ready to proceed to Subtask 1.2?"
- "I've finished Task 1. Would you like to review before I start Task 2?"
- "I ran into an issue with [X]. How would you like me to proceed?"
  - a) Try an alternative approach
  - b) Skip this subtask for now
  - c) Let me provide more context
- "The implementation differs slightly from the spec because [reason]. Is this acceptable?"
  - a) Yes, proceed
  - b) No, let's adjust

## Progress Tracking Format

As tasks are completed, update the task list with status indicators:

```markdown
### Task 1: Create the data model for user preferences ✅

**Status:** Complete

#### Subtask 1.1: Define the UserPreferences interface ✅
#### Subtask 1.2: Create default preference values ✅

---

### Task 2: Build the UserPreferences component 🔄

**Status:** In Progress

#### Subtask 2.1: Create the component file and basic structure ✅
#### Subtask 2.2: Implement the preference editing UI ⏳ (current)
```

**Status Icons:**
- ✅ Complete
- 🔄 In Progress
- ⏳ Current subtask
- ⏸️ Paused/Blocked
- ❌ Skipped

## Implementation Guidelines

When implementing each subtask, the AI should:

1.  **Read First:** Review any existing files that will be modified.
2.  **Follow Patterns:** Match the existing code style and conventions in the project.
3.  **Minimal Changes:** Only make changes required by the subtask — avoid scope creep.
4.  **Show Work:** Display the key code changes to the user (not every line, but the important parts).
5.  **Verify:** Run any relevant linters or type checks after making changes.

## Handling Blockers

If the AI encounters an issue:

1.  **Stop:** Do not attempt to work around the issue without user input.
2.  **Explain:** Clearly describe what the blocker is.
3.  **Offer Options:** Provide 2-3 possible ways to proceed (lettered for easy selection).
4.  **Wait:** Do not continue until the user responds.

Example:
```
🚧 **Blocker Encountered**

While working on Subtask 2.1, I noticed that the `UserContext` provider referenced in the PRD doesn't exist yet.

How would you like to proceed?
- a) Create the UserContext provider now (adds a new subtask)
- b) Skip the context integration for now and add a TODO comment
- c) Point me to an existing context I should use instead
```

## Summary Report Format

At the end of the session (or when requested), provide a summary:

```markdown
## Session Summary

**Task List:** `/.tasks/tasklist-user-preferences.md`

### Completed
- ✅ Task 1: Create the data model (2 subtasks)
- ✅ Task 2: Build the UserPreferences component (3 subtasks)

### In Progress
- 🔄 Task 3: Add preferences to settings page (1/2 subtasks done)

### Not Started
- Task 4: Write unit tests
- Task 5: Update documentation

### Files Modified
- `src/types/UserPreferences.ts` (created)
- `src/constants/defaults.ts` (modified)
- `src/components/UserPreferences.tsx` (created)
- `src/components/UserPreferences.module.css` (created)

### Notes
- Subtask 3.2 is blocked pending design review
- Suggested adding error boundary in Task 2 (approved by user)
```

## User Control Commands

The user can direct the workflow at any time with commands like:

- **"Skip this"** — Skip the current subtask and move on.
- **"Pause"** — Stop after the current subtask and wait.
- **"Show me the task list"** — Display current progress.
- **"Go back to [task/subtask]"** — Revisit a previous item.
- **"What's next?"** — Show upcoming tasks/subtasks.
- **"Summarize progress"** — Get the summary report.

## Target Audience

The user overseeing the work may have varying levels of technical expertise. Therefore:

- **Be Clear:** Explain what you're doing in plain language.
- **Be Concise:** Don't over-explain simple changes.
- **Be Responsive:** Adapt to user feedback and preferences.
- **Be Transparent:** If something is unclear or risky, say so.

The goal is a collaborative workflow where the AI does the heavy lifting but the user stays informed and in control.
