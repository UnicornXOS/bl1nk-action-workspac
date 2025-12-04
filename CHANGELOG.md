# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
-   **CI/CD for Firebase:** Implemented a GitHub Actions workflow (`.github/workflows/deploy.yml`) to automatically deploy Firebase assets (Firestore rules) upon push to the `main` branch.

### Changed
-   **Firebase Configuration:** Refactored the Firebase setup to exclusively use Firestore. Cloud Functions have been entirely removed to avoid Google Cloud billing requirements.

### Removed
-   All Cloud Functions code and configuration files (`firebase/functions` directory).
-   Documentation related to the removed Cloud Functions (`firebase/docs/FUNCTIONS.md`).

### Fixed
-   N/A
