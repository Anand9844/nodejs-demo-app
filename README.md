# Node.js Demo App - DevOps Task 1

## Objective
Automate the build and deployment of a sample Node.js web application using GitHub Actions and Docker.

## Tools
- GitHub
- GitHub Actions
- Node.js 24
- Docker
- Docker Hub

## CI/CD Flow
1. Developer pushes code to the `main` branch.
2. GitHub Actions starts automatically.
3. The `test` job checks out the code, installs/configures Node.js, and runs `npm test`.
4. If tests pass, the `build-and-push` job starts.
5. GitHub Actions logs in to Docker Hub using repository variables/secrets.
6. Docker builds the image from the Dockerfile.
7. The image is pushed to Docker Hub as `DOCKERHUB_USERNAME/nodejs-demo-app:latest`.

## Repository Structure
```text
nodejs-demo-app/
├── .github/
│   └── workflows/
│       └── main.yml
├── test/
│   └── app.test.js
├── .dockerignore
├── .gitignore
├── Dockerfile
├── README.md
├── app.js
└── package.json
```

## Run locally without Docker
```bash
npm test
npm start
```
Open http://localhost:3000

## Run with Docker
```bash
docker build -t nodejs-demo-app:local .
docker run --rm -p 3000:3000 nodejs-demo-app:local
```
Open http://localhost:3000

## GitHub Actions configuration
Create this repository variable:
- `DOCKERHUB_USERNAME` = your Docker Hub username

Create this repository secret:
- `DOCKERHUB_TOKEN` = your Docker Hub access token

Do not put passwords or access tokens directly in `main.yml`.

## Expected Result
A successful push to `main` should show both jobs passing in the GitHub Actions tab, and the Docker image should appear in Docker Hub.
DevOps task 1 completed using GitHub Actions.