# Smart Mobile Library Management System — Starter Prototype

COMP826 Milestone 2 development starter. This is **not** a complete submission.

## Implemented in source code
- Search demo catalog by title, author or category
- View book details and availability
- Borrow available books with a 14-day due date
- Return books and update local availability
- Reserve unavailable books and cancel reservations
- View borrowed books and reservations

## Not implemented yet
Authentication, Firebase persistence, Node.js API, notifications, QR scanning, librarian dashboard, automated testing and measured evaluation. The demo uses local React state; data resets on restart. Do not describe it as a completed cloud-connected system.

## Requirements
- Node.js LTS and npm
- Expo Go on an Android phone, or Android emulator

## Run
1. Unzip and open a terminal in the project directory.
2. Run `npm install`.
3. Run `npx expo start`.
4. Scan the QR code using Expo Go on Android, or press `a` for a configured Android emulator.

## Initial manual test ideas
1. Search `clean` and check Clean Code appears.
2. Open Clean Code, borrow it, and verify it appears under My Library.
3. Return it and check it becomes available again.
4. Reserve Design Patterns and verify it appears under Reservations.
5. Cancel reservation and verify the list updates.

Record actual test results and screenshots after running the app. No tests have been executed by the author of this starter package.

## GitHub submission
Create a repository, commit these files to `main`, and add later implementation, tests, screenshots, and documentation. Export the final `main` branch as ZIP for Canvas.
