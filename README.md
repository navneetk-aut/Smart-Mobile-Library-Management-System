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


## Milestone 2 update: demo login and QR scanner

This update adds a simulated login page and a camera-based QR scanner tab. Existing catalog, borrowing, returns and reservations remain.

### Required setup

1. Open the `SMLMS_Starter` folder in VS Code.
2. Open a **Command Prompt (cmd)** terminal in VS Code.
3. Run `npm install`.
4. Run `npx expo install expo-camera` (selects the version compatible with your Expo SDK).
5. Run `npx expo start -c` and open the project in a compatible Expo Go app.
6. Allow camera access on your phone.

The QR scanner matches codes containing a demo book ID (`1` through `5`) or an exact book title. Use the 'Demo: open Clean Code' button if you do not have a printed QR code. Test actual camera scanning on a physical device.

### Important limitations

- Login accepts any valid-looking email and any non-empty password; **not real authentication**. Credentials are not saved.
- No Firebase, Node.js API, account database, push notifications, or persistence.
- Data resets when the app restarts.
- React Native / Expo is cross-platform, but this version has **not been verified on iOS**.
- Do not claim camera scanning is tested until you have tested it on your phone.
