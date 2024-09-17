# Maintenance Request System

A full-stack web application built using **React.js**, **Express.js**, and **Mongoose** to allow residents to create maintenance requests and for admins to manage and track the status of these requests.

## Technologies Used

### Frontend:

- **React.js** – A JavaScript library for building user interfaces, handling dynamic content on the client-side.
- **Axios** – A promise-based HTTP client for making API requests to the backend.
- **Formik** – A form management library that simplifies form state and validation.
- **@reduxjs/toolkit** – A state management tool for handling global state within the application.
- **React Toastify** – Provides easy-to-use, customizable notifications for form submissions and errors.

### Backend:

- **Express.js** – A minimalist web framework for building the REST API.
- **Mongoose** – An ODM (Object Data Modeling) library for MongoDB, simplifying database interactions.
- **Nodemailer** – A package for sending emails via SMTP, used for email notifications.
- **jsonwebtoken** – Used for creating and verifying tokens to authenticate requests.
- **express-async-handler** – Simplifies error handling in Express route handlers.
- **CORS** – Middleware for enabling Cross-Origin Resource Sharing in Express, allowing frontend and backend communication.
- **bcryptjs** – A library for hashing and comparing passwords securely.

## Features

### Resident:

- **Create Maintenance Request** – Residents can create and submit maintenance requests, providing necessary details such as service type and extra comments.

### Admin:

- **View All Requests** – The admin can see a list of all maintenance requests in a table format.
- **Solved vs. Unsolved** – Requests are clearly marked with icons that differentiate between solved and unsolved requests.
- **Update Request** – Admins can update the status of a request once it's resolved. Clicking the "solved" button marks the request as completed.

## Special Features

### Email Confirmation

- **Request Submission** – When a resident submits a maintenance request, an automatic email is sent to the resident confirming receipt of their request and providing assurance that the issue will be addressed soon.
- **Request Completion** – Once the maintenance request is marked as solved by the admin, another email is automatically sent to the resident notifying them that the issue has been resolved and requesting feedback.

This feature ensures constant communication between the **Admin** and the **Resident**, keeping both parties informed and engaged.

## Packages Used and Their Purpose

### Frontend Packages:

- **Axios** – Used to handle HTTP requests between the frontend and the backend.
- **Formik** – Simplifies form handling, validation, and submission in React.
- **@reduxjs/toolkit** – Manages global state efficiently, helping track the application's data.
- **React Toastify** – Displays toast notifications to the user for actions like successful request submission or errors.

### Backend Packages:

- **Nodemailer** – Sends emails for notifying the resident when a request is created or completed.
- **jsonwebtoken** – Provides secure token-based authentication for protected routes.
- **express-async-handler** – Simplifies error handling by wrapping route handlers in asynchronous functions.
- **CORS** – Enables cross-origin requests, allowing the frontend to interact with the backend API.
- **bcryptjs** – Hashes passwords to enhance security before storing them in the database.

## Installation and Setup

### Backend:

**Navigate to the Server Directory**:

```bash
cd Server
npm install
npm start
```

### Frontend:

**Navigate to the Client Directory**:

```bash
  cd Client
  npm run build
  npm run dev
```

## Personal Note

This project was initially intended to be developed with Angular for the frontend and NestJS for the backend. As a MERN stack developer, I can easly grasp new technologies quickly. Given my experience with TypeScript and related technologies, transitioning to Angular and NestJS is manageable. I was able to complete this application in a short time for your reference. I hope you appreciate the effort put into this project and allow me some time to learn Angular and NestJS for our future projects.
