# Architecture Overview

This document provides a detailed overview of the Workspace Automation project's architecture. The project is structured as a monorepo, containing several distinct but interconnected applications.

## High-Level Diagram

```
┌─────────────┐
│  Next.js    │
│  Frontend   │
└──────┬──────┘
       │
┌──────▼──────────┐
│  Vercel API     │
│  Backend        │
└──────┬──────────┘
       │
   ┌───┴────┬──────────┐
   │        │          │
┌──▼──┐ ┌──▼──┐  ┌────▼────┐
│Apps │ │Fire │  │Firebase  │
│Scrip│ │base │  │Functions │
└─────┘ └─────┘  └──────────┘
```

## Core Components

The project is divided into the following main directories:

-   **`apps-script`**: The automation engine, running on Google Apps Script.
-   **`backend`**: The API layer and user interface, built with Next.js and deployed on Vercel.
-   **`frontend`**: A React-based frontend application (if a separate frontend is desired).
-   **`firebase`**: Firebase configuration, security rules, and Cloud Functions.
-   **`docs`**: Project documentation.
-   **`scripts`**: Helper scripts for deployment, setup, etc.
-   **`config`**: Environment configuration files.
-   **`.github`**: GitHub Actions workflows and templates.

### `apps-script`

This is the heart of the automation system. It directly interacts with Google Workspace APIs (Gmail, Calendar, Drive, etc.).

-   **`src/`**: Contains the source code for the Apps Script project. Each file is responsible for a specific API or functionality (e.g., `GmailAPI.gs`, `CalendarAPI.gs`).
-   **`tests/`**: Unit tests for the Apps Script code.
-   **`docs/`**: Documentation specific to the Apps Script project.

### `backend`

The backend serves as the bridge between the user and the automation engine. It provides a web interface and a set of API endpoints.

-   **`pages/`**: Contains the Next.js pages and API routes.
    -   **`api/`**: API endpoints for managing workflows, tasks, etc.
-   **`components/`**: Reusable React components for the UI.
-   **`lib/`**: Helper functions, API clients, and other libraries.
-   **`middleware/`**: Middleware for authentication, logging, etc.

### `frontend`

This directory is for a standalone frontend application, if needed. It is built with React and Vite.

-   **`src/`**: Source code for the frontend application.
    -   **`pages/`**: Individual pages of the application.
    -   **`components/`**: Reusable React components.
    -   **`hooks/`**: Custom React hooks.
    -   **`services/`**: Functions for interacting with the backend API.

### `firebase`

This directory contains all the Firebase-related configuration.

-   **`firestore.rules`**: Security rules for the Firestore database.
-   **`storage.rules`**: Security rules for Cloud Storage.
-   **`functions/`**: Cloud Functions that can be triggered by events in Firebase or called directly.

## Data Flow

1.  A user interacts with the **frontend** or **backend** UI.
2.  The UI sends a request to a **backend** API endpoint.
3.  The backend API endpoint might interact with the **Firebase** database or trigger a **Cloud Function**.
4.  For Google Workspace automations, the backend sends a request to the **Apps Script** web app.
5.  The **Apps Script** project executes the requested workflow, interacting with Google Workspace APIs.
6.  The result is returned to the backend and then to the user.
