```markdown
# AGENTS.md File Guidelines

These guidelines are designed to ensure the consistent, maintainable, and high-quality development of the AGENTS repository. Adherence to these principles is crucial for project longevity and developer efficiency.

## 1. DRY (Don't Repeat Yourself)

*   All code must be reusable.  Avoid duplicating logic or classes across multiple files.
*   When reusing existing functionality, clearly document the intent and purpose of the reuse.
*   Refactor duplicate code into single, well-named functions or classes.

## 2. KISS (Keep It Simple, Stupid)

*   Strive for simple, understandable code.  Avoid unnecessary complexity.
*   Prioritize clarity over brevity.
*   Break down complex tasks into smaller, manageable steps.

## 3. SOLID Principles

*   **Single Responsibility Principle:** Each class or module should have one, and only one, reason to change.
*   **Open/Closed Principle:** The system should be extensible without modifying its existing code.
*   **Liskov Substitution Principle:**  Subclasses must be substitutable for their base classes without altering the correctness of the program.
*   **Interface Segregation Principle:** Clients should not be forced to bound to methods they do not use.
*   **Dependency Inversion Principle:**  High-level modules should not depend on low-level modules; they should depend on abstractions.

## 4. YAGNI (You Aren't Gonna Need It)

*   Only implement functionality that is explicitly required at the current time.
*   Don't add features or code that is not currently needed.
*   Defer implementation until the need is identified.

## 5. Code Structure & Best Practices

*   **File Size Limit:** Each file must be no more than 180 lines of code.
*   **Naming Conventions:** Use clear and descriptive naming conventions for classes, functions, variables, and files. Follow a consistent naming scheme (e.g., snake_case).
*   **Comments:** Add concise comments where necessary to explain complex logic, assumptions, or edge cases.  Prefer clear, direct language.
*   **Error Handling:** Implement appropriate error handling, avoiding excessive logging for brevity.
*   **Data Structures:** Employ appropriate data structures to efficiently manage data.  Document any chosen structures.
*   **Modularity:**  Organize code into logical modules and components to improve maintainability.
*   **Unit Testing:** Ensure all code is thoroughly unit tested.
*   **Code Style:**  Adhere to a consistent code style guide (e.g., Google Style).

## 6. Testing

*   **Comprehensive Tests:**  All code must be thoroughly tested, covering all potential scenarios and edge cases.
*   **Test Coverage:**  Aim for at least 80% test coverage.
*   **Test Driven Development:** Implement tests before code.
*   **Mocking:**  Utilize mocks and stubs exclusively for unit testing – avoid using real implementations.  Tests will clearly isolate the code under test.
*   **Test Case Design:** Design tests to clearly define expected behaviors and validate requirements.

## 7.  Specific Requirements (Example - Adjust as needed)

*   **Agent Communication:**  Implement a clear and robust agent communication protocol.
*   **Data Persistence:** Design a data persistence strategy.
*   **Algorithm Implementation:**  Implement specific algorithms (e.g., routing, consensus).
*   **API Design:** Define clear API contracts.

## 8.  Documentation

*   **README:** Provide a detailed README with setup instructions, API documentation, and project overview.
*   **Code Comments:**  Add comments explaining each file's purpose, input, and output.

## 9.  Version Control

*   Use Git and a well-defined branching strategy.
*   Commit frequently with meaningful messages.

## 10.  Code Review

*   All code must be reviewed by another developer before merging.
*   Reviewer should focus on adherence to guidelines and code quality.

By following these guidelines, we aim to produce a high-quality, maintainable, and extensible AGENTS repository.
```