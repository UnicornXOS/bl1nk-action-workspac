# Firebase Setup

This directory contains the configuration for the Firebase project, currently set up to use Firestore.

## Files

-   [`firebase.json`](firebase.json): Main configuration for Firebase services. It defines which files are used for rules and indexes.
-   [`firestore.rules`](firestore.rules): Security rules for protecting your Firestore data.
-   [`firestore.indexes.json`](firestore.indexes.json): Definitions for composite indexes required for complex Firestore queries. It's normal for this to be empty initially.

## Automated Deployment (CI/CD)

This project uses **GitHub Actions** to automatically deploy to Firebase when changes are pushed to the `main` branch.

The workflow is defined in `.github/workflows/deploy.yml`.

For the deployment to work, a `FIREBASE_TOKEN` must be created and added to the GitHub repository's secrets. To generate a token, run the following command on your local machine and follow the instructions:

```bash
firebase login:ci
```

## Documentation

-   [Security Rules (`docs/RULES.md`)](docs/RULES.md)
-   [Setup Guide (`docs/SETUP.md`)](docs/SETUP.md)
