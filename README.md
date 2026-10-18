# Student Management System

A simple student management application built using React.js to add, view, edit, and delete student details.

## Features

* Add new student details.
* View all student records in a table.
* Edit existing student information.
* Delete student records.
* Validate form fields before submission.
* Display student details using a simple and responsive interface.

## Technologies Used

* React.js
* JavaScript
* HTML5
* CSS3
* Axios
* React Router DOM
* JSON Server
* Vite

## API Features

* Used Axios to connect the React application to the backend API.
* Created a reusable Axios instance with a base URL.
* Used GET to fetch student details.
* Used POST to add new students.
* Used PUT to update student details.
* Used DELETE to remove student records.
* Created separate service functions to manage API requests.
* Used try-catch blocks to handle API errors.

## Student Details

The application manages the following information:

* Student ID
* Name
* Email
* Phone Number
* Department

## Project Structure

```text
src/
├── api/
│   └── api.js
├── components/
│   ├── AddStudent.jsx
│   ├── DisplayStudent.jsx
│   └── EditStudent.jsx
├── services/
│   └── studentService.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx

db.json
package.json
vite.config.js
```

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/abimuthu2424/React-Student-Management.git
```

### 2. Open the Project Folder

```bash
cd React-Student-Management
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start JSON Server

```bash
npx json-server --watch db.json --port 3000
```

The API will run at `http://localhost:3000`.

### 5. Start the React Application

Open another terminal and run:

```bash
npm run dev
```

Open the local URL displayed in your terminal to use the application.

## API Endpoints

| Method | Endpoint        | Purpose                |
| ------ | --------------- | ---------------------- |
| GET    | `/students`     | Get all students       |
| GET    | `/students/:id` | Get a student by ID    |
| POST   | `/students`     | Add a new student      |
| PUT    | `/students/:id` | Update student details |
| DELETE | `/students/:id` | Delete a student       |

## What I Learned

* Building React components using functional components and Hooks.
* Managing form data using `useState`.
* Fetching data using `useEffect`.
* Navigating between pages using React Router.
* Integrating REST APIs using Axios.
* Performing CRUD operations.
* Organizing API requests into separate service functions.

## Author

**Abimuthu P**

GitHub: [abimuthu2424](https://github.com/abimuthu2424)
