# MSES602 Hello World

Regis University DevOps coursework adapted from Bill Masters' course example.
Original project: https://github.com/RegisUniversity/MSES602_helloWorld

## Run

Use Node.js 22 or newer, then `npm ci`, `npm test`, and `npm start`.
The application listens on http://127.0.0.1:8082.

## Validation

The built-in Node test runner starts the exported server on an available local
port, verifies HTTP status, content type and the full greeting, and closes it.
Jenkins installs from the lockfile and runs the same test. A passing local test
is not evidence that a Jenkins or SonarQube job has run.

## Contributions

The greeting identifies Yosish Datla. Maintenance fixes separate startup from
imports, repair test syntax and lifecycle, and add a test stage to Jenkins.
Original course attribution remains in package metadata. SonarQube results are
not included in this repository.
