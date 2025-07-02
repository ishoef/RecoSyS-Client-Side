# 🛍️ Product Recommendation System

A full-stack web application enabling users to raise queries about questionable products, receive community-driven recommendations, and explore better alternatives — all in a dynamic, interactive, and secure environment.

### 🚀 Live Site  
🔗 [https://recoosys.netlify.app/](https://recoosys.netlify.app/)

---

## 📚 Overview

**RecooSys** empowers users to:

- Post queries regarding specific products and seek alternatives.
- Browse and interact with community-generated queries.
- Recommend better alternatives to existing product queries.
- Manage their queries and recommendations securely.

Inspired by platforms like **Quora**, this app delivers a smooth, responsive experience across all devices.

---

## 🎯 Key Features

### 🔐 Authentication
- Firebase-based Email/Password & Google Sign-In
- JWT implementation for backend protection
- Persistent auth state across page reloads

### 💬 Query System
- Add, update, and delete personal product queries
- Searchable and sortable queries
- Real-time recommendation counts

### 💡 Recommendation System
- Suggest alternatives for any query
- View and manage personal recommendations
- Monitor community feedback on personal queries

### 📱 UI/UX & Responsiveness
- Mobile-first responsive layout
- Animated transitions (sliders, counters, modals)
- Layout toggle: 2-column or 3-column views
- Conditional rendering based on auth state
- Custom 404 error page with redirection

### 🔍 Additional Features
- Product name-based search functionality
- Timestamp-based query sorting
- Clean, consistent UI with engaging animations and color schemes

---

## 🧑‍💻 Tech Stack

### 🖥️ Frontend
- **React.js** – UI library
- **React Router DOM** – Routing
- **Firebase Auth** – Authentication & auth state
- **TailwindCSS + DaisyUI** – Styling & components
- **Axios** – HTTP client
- **React Icons** – Scalable icons
- **JWT Decode** – Decoding JWT tokens

### 🛠 Backend
- **Node.js + Express.js** – Server & REST API
- **MongoDB** – NoSQL database
- **dotenv** – Environment variable management
- **CORS** – Cross-origin resource sharing
- **JWT** – Secure authentication token

---

## 🔐 Security & Environment
- Sensitive credentials (Firebase, MongoDB) stored securely in `.env`
- Backend endpoints protected with JWT verification middleware
- User data access restricted to authorized sessions only

---

## ✅ Testing & Reliability
- All private routes tested with reload and session preservation
- Backend returns correct status codes with CORS handling
- Functional testing for search, layout toggle, validation, and error pages

---

## ⚙️ Deployment
- **Frontend**: Deployed on [Netlify](https://recoosys.netlify.app/)
- **Backend**: Deployed on [Render] *(or specify your provider)*
- Firebase domain whitelisting enabled for redirect handling

---

## 📦 NPM Packages Used

### 🔧 Frontend Dependencies
- `react`, `react-dom` – Core React libraries
- `react-router-dom` – Client-side routing
- `firebase` – Firebase SDK for auth
- `axios` – HTTP requests
- `react-toastify` – Toast notifications
- `sweetalert2` – Alert modals
- `swiper` – Responsive sliders
- `tailwindcss`, `daisyui` – Styling and UI components
- `react-icons` – Icon library
- `jwt-decode` – Decode JWT tokens

### 🛠 Development Tools
- `vite`, `@vitejs/plugin-react` – Development/build tool
- `eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh` – Linting
- `@types/react`, `@types/react-dom` – Type definitions
- `globals` – ESLint global variables
- `vite-plugin-pwa` – PWA support
- `@tailwindcss/vite` – Tailwind & Vite integration

---

## 👨‍💻 Developed By

**MD. Ismail Hossan Nayef**  
📧 Email: [ismailhossennayeb@gmail.com](mailto:ismailhossennayeb@email.com)

