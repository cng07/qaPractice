# QA Practice Framework

A Playwright-based test automation framework for QA practice, implementing the Page Object Model (POM) pattern.

## Project Overview

This repository contains automated end-to-end test suites written in **TypeScript** using **Playwright**. The framework creates a structured approach to testing web applications, featuring reusable components and data-driven tests.

## Technologies & Dependencies

- **[Playwright](https://playwright.dev/)**: `^1.50.1` - End-to-end testing framework
- **[TypeScript](https://www.typescriptlang.org/)**: For robust, type-safe code
- **[Node.js](https://nodejs.org/)**: Runtime environment
- **[fast-csv](https://c2fo.github.io/fast-csv/)**: `^5.0.2` - For parsing CSV data files used in data-driven testing

## Project Structure

```
.
├── page-objects/              # Page Object Model implementations
│   ├── spotTheBugsPage.ts     # Encapsulates interactions with the styled registration form
│   └── helper.ts              # Shared utilities (e.g., CSV reader)
├── tests/                     # Test suites
│   └── testCase.test.ts       # Main test file containing 13 scenarios
├── test-data/                 # Data files for testing
│   └── linkFile.csv           # CSV file containing URLs and input test data
├── test-results/              # Artifacts from test execution
│   └── junit-results.xml      # JUnit format reports
├── playwright-report/         # HTML test reports
├── playwright.config.ts       # Playwright configuration (browsers, reporters, etc.)
├── package.json               # Dependencies and scripts
└── README.md                  # Project documentation
```

## Features & Test Scenarios

The framework currently covers 13 test scenarios for the generic registration form, handling various edge cases and validations:

1.  **Mandatory Field Validation**: Verifies errors when required fields (Last Name, Email) are missing.
2.  **Field Type Verification**: Checks that sensitive fields like Password are masked.
3.  **UI Text Validation**: Ensures correct spelling and visibility of labels and notes.
4.  **Input Validation**:
    *   Invalid Email format
    *   Invalid Phone Number format
    *   Invalid First/Last Name characters
    *   Password length requirements (6-20 characters)
5.  **Checkbox Logic**: Verifies Terms & Conditions checkbox state and enforcement.
6.  **Successful Flow**: Verifies successful registration with valid data and checks the resulting confirmation page.
7.  **API Check**: Includes a basic GET request to verify the application's availability.

## Configuration & Data

### Data-Driven Testing
The project uses a CSV file (`test-data/linkFile.csv`) to externalize test data. This file references:
*   Application URLs
*   Valid and Invalid test inputs (Names, Phones, Emails, Passwords)

The `Helper` class reads this file to supply data to the tests dynamically.

### Playwright Config (`playwright.config.ts`)
*   **Test Directory**: `./tests`
*   **Parallel Execution**: Enabled (fully parallel)
*   **Browsers**: Configured to run on Chromium, Firefox, and WebKit
*   **Reporters**: Generates both HTML and JUnit XML reports
*   **Artifacts**: Screenshots and videos are retained on test failure

## Running Tests

### Run all tests
```bash
npx playwright test
```

### Run tests with specific tags
The tests are tagged for selective execution:
*   Run tests tagged with `@Run`:
    ```bash
    npx playwright test --grep "@Run"
    ```
*   Run specific solo tests (if tagged):
    ```bash
    npx playwright test --grep "@RunSolo"
    ```

### Run on a specific browser
```bash
npx playwright test --project="chromium"
```

### Run in debug mode (with UI)
```bash
npx playwright test --ui
```

## Reports

After execution, you can view the detailed HTML report:
```bash
npx playwright show-report
```
Reports are located in `playwright-report/index.html`.