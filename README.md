# Bet Frontend

Welcome to the Bet-Frontend project! This is a responsive web application built to showcase my frontend development skills as part of a technical assessment for the Frontend Developer position. The project demonstrates the creation of a responsive webpage using modern tools and best practices.

## Live Demo

You can view the live version of the project here: Bet-Frontend Live Demo https://bet-frontend-3daw.onrender.com

## Project Overview

he objective of this task was to build a responsive webpage based on a Figma design, tailored for mobile, tablet, and desktop views. The webpage ensures pixel-perfect accuracy and maintains a smooth, responsive layout across different screen sizes.

## Features

- **Responsive Design**: Ensures a smooth, pixel-perfect experience across mobile, tablet, and desktop views.
- **Component Reusability**: Components are cleanly structured and modular for ease of reuse.
- **Storybook Integration**: Storybook is included to highlight the reusable components and showcase their different states.

## Tools and Technologies

- **React.js**: The primary JavaScript library for building the UI components.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **Storybook**: A development environment for UI components to build, test, and showcase them in isolation.
- **Render**: Used to deploy the app as a static website for the live demo.
- **GitHub**: The code repository for version control and collaboration.
- **CI/CD Pipeline**: Setup CI/CD pipeline with Github actions for monitoring code, proofing and continuous deployment.
- **Jest and @testing-library/react**: The libraries for performing unit and integration testing.
- **ES Lint**: Code quality check, formatting and enforcing best practices.
- **Vite**: A fast development environment and build tool for modern web applications.

## Installation and Setup

1. **Clone the Repository**
   `git clone https://github.com/yourusername/bet-frontend.git ` <br>
   `cd bet-frontend`. <br>

2. **Install Dependencies**: Ensure you have Node.js installed, then run the following command to install the project dependencies:
   `npm install`

3. **Run the Development Server**: To start the development server, run: <br>
   `npm run dev`

This will open the project in your default browser on http://localhost:5173 (or another port depending on your environment).

4. **Storybook**:

- To view the Storybook components locally, run: `npm run storybook`

Storybook will be available at http://localhost:6006

- To create a production build, run: `npm run build-storybook`

5. **Build for Production:** To generate a production build, run:

`npm run build`

## Storybook Integration

- To view the Storybook components locally, run: `npm run storybook`. Storybook will be available at http://localhost:6006

- To create a production build, run: `npm run build-storybook` and it will be ready for deployment.

## Deployment

The application is deployed on Render as a static website. You can access the live demo using the link above.

## Design Approach

- Responsive Design: I used Tailwind CSS for styling components and implementing responsiveness.
- Component Reusability: I followed a modular approach, making the components reusable and scalable. Each component is self-contained with its styles and logic.
- Separation of concerns of a component: Each component has types, story, and some have a test file for modularly storing the props, story component and unit testing logic.
- Storybook Integration: I leveraged Storybook to showcase each component in isolation, making it easier to test and document component behavior.

## 🔗 Links

**Github Repository:** https://github.com/PeterKampete/bet-frontend
**Live Link:** https://bet-frontend-3daw.onrender.com
