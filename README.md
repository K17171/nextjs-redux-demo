
# Next.js Application: User CRUD & Counter

This project is a **Next.js 15 application** (using the `app` directory) built with **TypeScript**, **Redux Toolkit**, **React Hook Form**, and **Tailwind CSS**. It consists of two key modules:

1. **Counter Application**:
   - A simple counter with increment and decrement functionalities.
   - State managed using **Redux Toolkit**.

2. **User CRUD Application**:
   - A responsive **Create, Read, Update, and Delete (CRUD)** application for user data.
   - Includes an Add/Edit form in a responsive modal.

---

## Features

### Counter Application
- Simple counter to display, increment, and decrement a value.
- State managed via Redux.
- Includes three pages:
  - **Count Page**: Displays the current count.
  - **Increment Page**: Increases the count by one.
  - **Decrement Page**: Decreases the count by one.

### User CRUD Application
- Add, edit, delete, and display user data.
- User fields include:
  - **First Name**
  - **Last Name**
  - **Age**
  - **Email**
  - **Phone Number**
- Responsive **Add/Edit Form** modal.
- Form validation using **React Hook Form**.
- State managed with Redux Toolkit.
- Styled with Tailwind CSS.

---

## Tech Stack
- **Framework**: [Next.js 13](https://nextjs.org/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: TypeScript

---

## Setup and Installation

### 1. Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 2. Clone the Repository
```bash
git clone <repository-url>
cd nextjs-crud-counter
```

### 3. Install Dependencies
```bash
npm install
# or
yarn install
```

### 4. Run the Development Server
```bash
npm run dev
# or
yarn dev
```

### 5. Open the App
Visit [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Project Structure
```
src/
|-- app/
|   |-- counter/                 // Counter Application
|   |   |-- page.tsx             // Main Counter Page
|   |   |-- increment.tsx        // Increment Page
|   |   |-- decrement.tsx        // Decrement Page
|   |-- crud/                    // User CRUD Application
|       |-- page.tsx             // Main User CRUD Page
|       |-- components/
|           |-- UserForm.tsx     // Form Modal for Add/Edit User
|           |-- UserTable.tsx    // Table to Display Users
|-- redux/
|   |-- counterSlice.ts          // Redux Slice for Counter
|   |-- userSlice.ts             // Redux Slice for User CRUD
|   |-- store.ts                 // Redux Store Configuration
```

---

## Counter Application

### 1. Pages
- **Count Page**: Displays the current count from Redux state.
- **Increment Page**: Increments the count by 1 using Redux actions.
- **Decrement Page**: Decrements the count by 1 using Redux actions.

### 2. Redux Slice
The `counterSlice.ts` manages the counter state with the following actions:
- `increment`: Increases the count by 1.
- `decrement`: Decreases the count by 1.

---

## User CRUD Application

### 1. Components

#### UserForm Component
A modal that allows users to add or edit details. It features:
- **Responsive Design**: Adjusts to desktop and mobile screens.
- **Form Validation**: Ensures required fields are filled and correctly formatted.
- **Redux Integration**: Dispatches actions for adding or editing users.

#### UserTable Component
Displays a list of users in a responsive table. It includes:
- **Edit Functionality**: Opens the `UserForm` modal with pre-filled data.
- **Delete Functionality**: Removes the selected user.

### 2. Redux Slice
The `userSlice.ts` manages the user data with the following actions:
- `addUser`: Adds a new user to the state.
- `editUser`: Updates an existing user's details.
- `deleteUser`: Removes a user from the state.

---

## Styling
- The application uses **Tailwind CSS** for modern, responsive, and utility-first styling.
- The modal and table components are optimized for both desktop and mobile devices.

---

## Usage Instructions

### Counter Application
1. Navigate to the **Count Page** to view the current counter value.
2. Go to the **Increment Page** to increase the counter.
3. Go to the **Decrement Page** to decrease the counter.

### User CRUD Application
1. View existing users in the **User Table**.
2. Click **Add User** to open the responsive modal form.
3. Fill in the user details and submit to add a new user.
4. Click **Edit** on a user to modify their details in the form.
5. Click **Delete** to remove a user from the list.

---

## Future Enhancements
- **Counter Application**:
  - Add reset functionality.
  - Enable persistence of counter value in local storage or backend.

- **User CRUD Application**:
  - Integrate with a backend for persistent storage.
  - Add filtering and sorting capabilities for the table.
  - Implement pagination for large datasets.

---

## Screenshots

### Counter Application
#### Count Page
![Count Page](https://i.ibb.co/pxMBpPc/counter-Page.png)

#### Increment Page
![Increment Page](https://via.placeholder.com/800x400?text=Counter+Application+-+Increment+Page)

#### Decrement Page
![Decrement Page](https://via.placeholder.com/800x400?text=Counter+Application+-+Decrement+Page)

---

### User CRUD Application
#### User Table
![User Table](https://via.placeholder.com/800x400?text=User+CRUD+Application+-+User+Table)

#### Add/Edit User Modal
![User Modal](https://via.placeholder.com/800x400?text=User+CRUD+Application+-+Add+or+Edit+User)
