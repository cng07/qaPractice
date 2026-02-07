# qaPractice

A Playwright-based test automation framework for QA practice, implementing the Page Object Model (POM) pattern.

## Project Overview

This project contains automated test suites written in TypeScript using Playwright for end-to-end testing of web applications.

## Technologies & Dependencies

- **Playwright**: `^1.50.1` - End-to-end testing framework
- **TypeScript**: For type-safe test code
- **Node.js**: Runtime environment

## Project Structure

```
.
├── page-objects/              # Page Object Model implementations
│   ├── spotTheBugsPage.ts     # Page object for Spot The Bugs application
│   └── helper.ts              # Shared helper utilities and functions
├── tests/                      # Test files
│   └── testCase.test.ts       # Main test cases
├── tests-examples/            # Example test files (reference)
├── test-data/                 # Test data files
├── test-results/              # Test execution results
│   └── junit-results.xml      # JUnit format test results
├── playwright-report/         # HTML test reports
│   └── index.html
├── playwright.config.ts       # Playwright configuration
├── package.json               # Project dependencies
└── README.md                  # This file
```

## Configuration

The project uses `playwright.config.ts` with:
- **Test Directory**: `./tests`
- **Parallel Execution**: Enabled
- **Reporters**: HTML and JUnit XML formats
- **Multiple Browser Support**: Configured for Chromium and other browsers

## Running Tests

### Run all tests with @Run tag:
```bash
npx playwright test --grep "@Run"
```

### Run tests on Chromium browser only:
```bash
npx playwright test --grep "@Run" --project="chromium"
```

### Run specific test with @RunSolo tag:
```bash
npx playwright test --grep "@RunSolo"
```

### Run all tests:
```bash
npx playwright test
```

### Run a specific test file:
```bash
npx playwright test tests/testCase.test.ts
```

## Test Files

- **testCase.test.ts** - Contains the main test cases for the project

## Page Objects

Page objects follow the POM pattern for better test maintainability:

- **spotTheBugsPage.ts** - Encapsulates interactions with the Spot The Bugs application
- **helper.ts** - Contains shared utilities and helper functions used across tests

## Test Reports

After running tests, reports are available in:

- **HTML Report**: `playwright-report/index.html` - Detailed visual report
- **JUnit Report**: `test-results/junit-results.xml` - For CI/CD integration