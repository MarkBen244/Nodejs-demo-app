# Node.js CI/CD Pipeline

## About the Project
This project demonstrates a Continuous Integration and Continuous Delivery (CI/CD) pipeline using GitHub Actions, Node.js, Docker, and Docker Hub.

When code is pushed to the main branch, GitHub Actions automatically installs dependencies, runs automated tests, builds a Docker image, and pushes the image to Docker Hub.
Technologies Used
- Node.js
- Express
- Supertest
- Git and GitHub
- GitHub Actions
- Docker
- Docker Hub


# Run Locally
1. Clone the repository
2. Install dependencies
npm ci


3. Run automated tests
npm test


4. Start the application
npm start


Open http://localhost:3000 in your browser to view the response.

# Run with Docker
Pull the published image:
docker pull bernardmark1/nodejs-demo-app:latest


# Run the container:
docker run --rm -p 3000:3000 bernardmark1/nodejs-demo-app:latest


Open http://localhost:3000 in your browser.
CI/CD Workflow
The GitHub Actions workflow is located at .github/workflows/main.yml.

The pipeline performs these steps:
1. Checks out the repository.
2. Sets up Node.js.
3. Installs project dependencies.
4. Runs automated tests.
5. Logs in to Docker Hub using GitHub Actions Secrets.
6. Builds the Docker image.
7. Pushes the image to Docker Hub when code is pushed to main.
The Docker image is published to:

https://hub.docker.com/r/bernardmark1/nodejs-demo-app
Security
Docker Hub credentials are stored in GitHub Actions Secrets rather than hard-coded in the workflow.
Author

Mark Bernard</WritingBlock>