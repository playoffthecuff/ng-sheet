# Ng Sheet

Processes data entered through a spreadsheet interface using formula expressions.
This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.2.2.

## Installation

- Clone the repository
- Install dependencies using one of the npm registry package managers
- Create a project using [Firebase Console](https://console.firebase.google.com/) and add authentication to it (use [Doc](https://firebase.google.com/docs))
- Replace the keys in the environment folder files with the keys of your firebase project

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Getting started

- Login to the app using convenient method
- Create a new table
- Enter the data you want to process into the table sheets cells using the editor capabilities (In data entry mode, you have access to a context menu with formulas, and outside of it, with operations on cells by right-clicking)
- After each input, the results of dependent calculations will be updated and actualized in the corresponding cells of the sheet
- You can save the result of your work as a document or as a starter template

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Deployment

To deploy a project to GitHub pages:

- Specify the relative path in `angular.json` and `index.html`
- Run

```bash
ng deploy
```

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Architecture Diagram

<img width="1569" height="1715" alt="image" src="https://github.com/user-attachments/assets/f857ee25-169f-45aa-94ea-ed8b54ec346e" />

## Signals vs RxJs. Short rationale

By default, RxJs is preferred as a more powerful and versatile API. Signals can be used at lower levels of the reactive graph, or as simple reactive primitives in components, their inputs/outputs, or for rapid prototyping.

## Lighthouse gains

<img width="803" height="292" alt="image" src="https://github.com/user-attachments/assets/40043ace-02cc-4740-b1c9-e88d49d4f963" />

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
