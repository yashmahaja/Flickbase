# Flickbase

Flickbase is a picture-sharing web application built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to post photos, share experiences, and engage with content. The app features two roles: Admin and Client. Admin users have additional permissions to manage content and users, while clients can browse, post, and interact with photos.

![Flickbase Screenshot](/client/assets/photo.png)

![Flickbase Screenshot](/client/assets/photo2.png)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Secure login and registration using JWT tokens.
- **Admin and Client Roles**: Admins have permissions to manage users and content.
- **Photo Upload**: Users can upload photos and share experiences.
- **Infinite Scroll**: Smooth loading of photos using the react-infinite-scroll-component.
- **State Management**: Managed using React reducers and Redux Toolkit.
- **Material UI**: Modern UI components for an enhanced user experience.
- **Image Color Analysis**: Extracts dominant colors from images using react-palette.

## Tech Stack

- **Frontend**:
  - React
  - Redux Toolkit
  - Material-UI
  - Axios
  - React Infinite Scroll Component
  - React Palette
- **Backend**:
  - Node.js
  - Express
  - MongoDB
  - Mongoose
  - JWT Authentication
- **Other**:
  - Docker for containerization
  - GitHub Actions for CI/CD

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yashmahaja/Flickbase.git
   cd Flickbase
