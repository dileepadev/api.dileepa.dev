# Changelog

All notable changes to this project are documented in this file.

## [Unreleased]

- Changes for the next release are available in development branches.

## [1.0.0] - 2025-05-04

- **Added (New features):**

  - Set up initial project structure using [NestJS](https://nestjs.com/) and [TypeScript](https://www.typescriptlang.org/) running on [Node.js](https://nodejs.org/).
  - Built and tested the following RESTful API endpoints:
    - `/about` – Provides general profile information about me.
    - `/experiences` – Returns a list of my professional work experiences and roles.
    - `/educations` – Displays my academic background including degrees and institutions.
    - `/events` – Lists upcoming or past events, talks, or appearances I’ve been part of.
    - `/videos` – Links to video content such as talks, tutorials, or interviews I’ve done.
    - `/blogs` – Returns metadata or summaries of blog posts I’ve written.
    - `/communities` – Tech communities I've volunteered with, both currently and in the past.
    - `/tools` – Lists the tools, frameworks, and technologies I currently work with.
  - Configured database using [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/) ODM. Seeded initial data and connected it to API endpoints.
  - Implemented image upload and delivery via [Azure Blob Storage](https://azure.microsoft.com/en-us/services/storage/blobs/).
  - Generated interactive API documentation using [Swagger](https://swagger.io/) and [Swagger UI](https://swagger.io/tools/swagger-ui/).
  - Deployed application to production using [Azure App Service](https://azure.microsoft.com/en-us/services/app-service/) with optional CI/CD.
  - Integrated code linting and formatting with [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/).
  - Managed dependencies using [npm](https://www.npmjs.com/).

## [0.0.1] - 2025-05-04

- **Added (New features):**

  - Initialize project with **NestJS**
  - Add Documentation:
    - [`README.md`](https://github.com/dileepadev/api.dileepa.dev/blob/main/README.md)
    - [`CHANGELOG.md`](https://github.com/dileepadev/api.dileepa.dev/blob/main/CHANGELOG.md)
    - [`BRANCH_NAMING_GUIDELINES.md`](https://github.com/dileepadev/api.dileepa.dev/blob/main/BRANCH_NAMING_GUIDELINES.md)
    - [`CODE_OF_CONDUCT.md`](https://github.com/dileepadev/api.dileepa.dev/blob/main/CODE_OF_CONDUCT.md)
    - [`COMMIT_MESSAGE_GUIDELINES.md`](https://github.com/dileepadev/api.dileepa.dev/blob/main/COMMIT_MESSAGE_GUIDELINES.md)
    - [`CONTRIBUTING.md`](https://github.com/dileepadev/api.dileepa.dev/blob/main/CONTRIBUTING.md)
    - [`LICENSE`](https://github.com/dileepadev/api.dileepa.dev/blob/main/LICENSE)
    - [`PULL_REQUEST_GUIDELINES.md`](https://github.com/dileepadev/api.dileepa.dev/blob/main/PULL_REQUEST_GUIDELINES.md)
    - [`SECURITY.md`](https://github.com/dileepadev/api.dileepa.dev/blob/main/SECURITY.md)
    - [`PULL_REQUEST_TEMPLATE.md`](https://github.com/dileepadev/api.dileepa.dev/blob/main/.github/PULL_REQUEST_TEMPLATE.md)
    - [`Issue Templates:`](https://github.com/dileepadev/api.dileepa.dev/blob/main/.github/ISSUE_TEMPLATE)
      - [`bug_report.md`](https://github.com/dileepadev/api.dileepa.dev/blob/main/.github/ISSUE_TEMPLATE/bug_report.md)
      - [`documentation_update.md`](https://github.com/dileepadev/api.dileepa.dev/blob/main/.github/ISSUE_TEMPLATE/documentation_update.md)
      - [`feature_requestE.md`](https://github.com/dileepadev/api.dileepa.dev/blob/main/.github/ISSUE_TEMPLATE/feature_request.md)
      - [`feedback.md`](https://github.com/dileepadev/api.dileepa.dev/blob/main/.github/ISSUE_TEMPLATE/feedback.md)
      - [`other.md`](https://github.com/dileepadev/api.dileepa.dev/blob/main/.github/ISSUE_TEMPLATE/other.md)
  - Deploy the app to the production environment.

- **Changed (Improvements):**
  
  - Update README.md

<!-- Unreleased -->
<!-- 1.0.0 -->
<!-- v0.0.1 -->

[Unreleased]: https://github.com/dileepadev/api.dileepa.dev/branches
[1.0.0]: https://github.com/dileepadev/api.dileepa.dev/compare/v0.0.1...v1.0.0
[0.0.1]: https://github.com/dileepadev/api.dileepa.dev/releases/tag/v0.0.1
