# Smart Mobile Library Management System (SMLMS)

COMP826 Milestone 2 — React Native / Expo Android demonstration prototype.

## Implemented functionality
- Demo sign-in screen (local input check only; **not secure authentication**)
- Search a five-book demonstration catalogue; inspect book details and availability
- Borrow and return available books; see loans and calculated due dates in My Library
- Reserve unavailable books and cancel reservations
- Camera-based QR scanning using `expo-camera`, with catalogue matching
- Mobile navigation across catalogue, library, reservations, and scanner screens

## Technical architecture and scope
React Native, Expo SDK 54, React hooks, `expo-camera`. Catalogue and loan/reservation state are held locally in memory. Restarting the app resets state. No backend API, Firebase database, persistent accounts, librarian dashboard, notification service, or automated test suite is implemented. The login is a demonstration interface, not production authentication.

## Run locally
1. Install a compatible Node.js/npm toolchain and Expo Go on Android.
2. From this project directory run `npm install`.
3. Run `npx expo start -c`.
4. Open the QR code using Expo Go. Grant camera permission to test QR scanning.

## Evidence
- `docs/class-diagram.png`: UML class diagram prepared for the report.
- `docs/screenshots/`: project screenshots supplied for the assessment.
- `docs/test-log.md`: documented manual functional checks and limitations.

## Evaluation integrity
Functional checks in the report are developer-reported manual observations, not automated or independently verified tests. Nielsen heuristic inspection is a developer review. No SUS participant study or timed performance benchmark is claimed.

## Submission
Submit this repository ZIP with the COMP826 Milestone 2 report. The GitHub repository is https://github.com/navneetk-aut/Smart-Mobile-Library-Management-System . This ZIP is a local prepared package; uploading it to Canvas does not automatically update GitHub `main`.
