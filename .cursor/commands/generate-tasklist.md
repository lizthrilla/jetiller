---
agent: 'agent'
---

# Rule: Generating a Task List from a PRD or Feature Request

## Goal

To guide an AI assistant in creating a detailed, actionable Task List in Markdown format, based on an existing Product Requirements Document (PRD) or a feature request. The task list should break down the work into clear, sequential steps that a junior developer can follow to implement the feature.

## Process

1.  **Receive Input:** The user provides either:
    - A link or reference to an existing PRD (e.g., `/.tasks/prd-[feature-name].md`), or
    - A brief description of a feature to be implemented.
2.  **Ask Clarifying Questions:** Before generating the task list, the AI _must_ ask clarifying questions to understand the implementation context. The goal is to understand the "how" — the technical approach, constraints, and priorities. Provide options in letter/number lists so the user can respond easily with their selections.
3.  **Generate High-Level Tasks:** Based on the PRD/feature request and the user's answers, generate a list of high-level tasks (without subtasks). Present these to the user for review.
4.  **Confirm Before Subtasks:** Ask the user:
    - "Would you like me to break down these tasks into subtasks?"
    - "Are there specific tasks you'd like me to expand with more detail?"
    - "Would you like to add, remove, or modify any tasks before I generate subtasks?"
5.  **Generate Subtasks:** Once the user confirms, break down each task into actionable subtasks using the structure outlined below.
6.  **Save Task List:** Save the generated document as `tasklist-[feature-name].md` inside the `/.tasks` directory.

## Clarifying Questions (Examples)

The AI should adapt its questions based on the input, but here are common areas to explore:

- **Existing PRD:** "Is there an existing PRD for this feature? If so, where is it located?"
- **Priority/Sequence:** "Are there any tasks that must be completed before others? What are the dependencies?"
- **Technical Approach:** "Are there preferred technologies, libraries, or patterns to use for this implementation?"
- **Existing Code:** "Are there existing components, utilities, or modules that should be reused or extended?"
- **File Structure:** "Where should new files be placed? Are there naming conventions to follow?"
- **Testing Requirements:** "What level of testing is expected (unit tests, integration tests, manual QA)?"
- **Time Constraints:** "Is there a deadline or time estimate we should keep in mind when scoping tasks?"
- **Blockers:** "Are there any known blockers or dependencies on external teams/systems?"
- **Definition of Done:** "What criteria must be met for a task to be considered complete?"

## Task List Structure

The generated task list should include the following sections:

1.  **Overview:** A brief summary of the feature being implemented and a link to the relevant PRD (if applicable).
2.  **Dependencies:** List any prerequisites, external dependencies, or tasks that must be completed first.
3.  **Tasks:** A numbered list of high-level tasks. Each task should include:
    - **Task Title:** A concise, action-oriented title (e.g., "Create UserProfile component").
    - **Description:** A brief explanation of what the task involves.
    - **Dependencies:** Note any other tasks that must be completed first (e.g., "Requires Task 2").
    - **Subtasks:** A numbered list of smaller, actionable steps within the task. Each subtask should include:
        - **Subtask Title:** A specific action (e.g., "Define props interface").
        - **Affected Files:** List the files that will be created or modified (when known).
        - **Acceptance Criteria:** A checklist of conditions that must be met for the subtask to be considered done.
4.  **Testing Tasks:** Dedicated tasks for writing tests and performing QA.
5.  **Stretch Goals (Optional):** Nice-to-have tasks that can be completed if time permits.
6.  **Notes:** Any additional context, warnings, or tips for the developer.

## Example Task Format (High-Level Only)

Present this format first, before generating subtasks:

```markdown
### Task 1: Create the data model for user preferences

**Description:** Define the TypeScript interface and default values for storing user preferences.

**Dependencies:** None

---

### Task 2: Build the UserPreferences component

**Description:** Create a React component that displays and allows editing of user preferences.

**Dependencies:** Requires Task 1
```

## Example Task Format (With Subtasks)

After user confirms, expand tasks with subtasks:

```markdown
### Task 1: Create the data model for user preferences

**Description:** Define the TypeScript interface and default values for storing user preferences.

**Dependencies:** None

#### Subtask 1.1: Define the UserPreferences interface

**Affected Files:**
- `src/types/UserPreferences.ts` (create)

**Acceptance Criteria:**
- [ ] Interface includes all required preference fields (theme, language, notifications)
- [ ] Types are properly exported for use in other modules

#### Subtask 1.2: Create default preference values

**Affected Files:**
- `src/constants/defaults.ts` (modify)

**Acceptance Criteria:**
- [ ] Default values are defined for each preference field
- [ ] Defaults are exported as a constant

---

### Task 2: Build the UserPreferences component

**Description:** Create a React component that displays and allows editing of user preferences.

**Dependencies:** Requires Task 1

#### Subtask 2.1: Create the component file and basic structure

**Affected Files:**
- `src/components/UserPreferences.tsx` (create)

**Acceptance Criteria:**
- [ ] Component file exists with proper imports
- [ ] Component accepts preferences as props

#### Subtask 2.2: Implement the preference editing UI

**Affected Files:**
- `src/components/UserPreferences.tsx` (modify)

**Acceptance Criteria:**
- [ ] Each preference has an appropriate input control
- [ ] Changes trigger the onUpdate callback
```

## Target Audience

Assume the primary reader of the task list is a **junior developer**. Therefore:

**High-level tasks** should be:
- **Clear:** Describe the overall objective of the work.
- **Logical:** Ordered to respect dependencies between tasks.
- **Scoped:** Each task represents a distinct piece of functionality.

**Subtasks** should be:
- **Explicit:** Clearly state what needs to be done.
- **Atomic:** Each subtask should represent a single, completable unit of work.
- **Sequential:** Ordered logically within their parent task.
- **Actionable:** Use action verbs (Create, Add, Update, Remove, Implement, Test).

Avoid jargon where possible and provide enough context for the developer to understand both the task and how it fits into the larger feature.
