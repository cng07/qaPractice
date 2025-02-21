# qaPractice

On Terminal, to run all tests with @Run tag:
npx playwright test --grep "@Run"

To run on chromium browser only:
npx playwright test --grep "@Run" --project="chromium"

To run specific test:
npx playwright test --grep "@RunSolo"