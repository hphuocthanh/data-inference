# React & Vite App

- Use MUI mostly for UI presentation.
- Use Redux Toolkit Query for API management.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:
- Node.js (16.x or later)
- npm (8.x or later) or Yarn (1.22.x or later)

## Getting Started

1. **Clone the Repository**

   First, clone the repository to your local machine using Git:

   ```bash
   git clone https://github.com/hphuocthanh/rhombus
   cd fe
   ```

2. **Install Dependencies**

   Navigate to the project directory and install the necessary dependencies:

   ```bash
   npm install
   ```
   or if you are using Yarn:
   ```bash
   yarn install
   ```

3. **Set Up Environment Variables**

   Copy the `.env.development.example` file to `.env.development`:

   ```bash
   cp .env.development.example .env.development
   ```

   Open the `.env.development` file in a text editor and update the environment variables as necessary for your local development environment.

4. **Start the Development Server**

   Run the development server using Vite:

   ```bash
   npm run dev
   ```
   or if you are using Yarn:
   ```bash
   yarn dev
   ```

   This will start the local development server and open your browser to `http://localhost:5173`. The application should now be running and accessible.

## Folder Structure

├── features -> handle state management, including API calls
├── routes -> handle routing of the web
├── pages/
│ ├── [DataInference](/fe/src/pages/DataInference/index.tsx)
│ │   └── components/ --> custom components for table view
│ │   └── utils/ --> handle custom string presentation for components
│ │



## Building for Production

To build the application for production, run the build command:

```bash
npm run build
```
or if you are using Yarn:
```bash
yarn build
```
