🛍️ Product Recommendation System
A full-stack web application where users can share queries about products, get community recommendations, and explore better alternatives — all in a dynamic and interactive environment.

🚀 Live Site https://recoosys.netlify.app/
🌐 Live URL https://recoosys.netlify.app/

📚 Project Overview
This platform allows users to:

Post queries about questionable products or seek alternatives.

View queries and recommend better product options.

Explore personal and community recommendations.

Register/login via Firebase authentication.

Securely interact with a protected backend using JWT tokens.

Inspired by Q&A platforms like Quora, this app is optimized for a smooth, responsive user experience on all devices.

🎯 Key Features
🔐 Authentication
Firebase-based Email/Password & Google Login

JWT implementation for private route protection

Auth state persistence on route reload

💬 Query Features
Add/Update/Delete own queries

View all queries (searchable & sortable)

Real-time recommendation count for each query

💡 Recommendation Features
Recommend alternatives to existing queries

View all recommendations on a query

Manage personal recommendations (delete only)

View all recommendations made for your queries

📊 UI/UX & Responsiveness
Mobile-first responsive design

Animated sections (slider, counters, transitions)

Layout toggle buttons on All Queries page (2/3 column switch)

Smooth conditional rendering (based on auth state)

Elegant error (404) page with home redirection

🔍 Extra Features
Product name search functionality

Timestamp-based sorting

Clean UI with meaningful animation & colors

🔧 Tech Stack
Client:
React.js

React Router DOM

Firebase Auth

TailwindCSS + DaisyUI

Axios

React Icons

JWT Decode

Server:
Node.js

Express.js

MongoDB

CORS

dotenv

JSON Web Token (JWT)

🛡️ Security & Environment
Firebase & MongoDB credentials are stored securely in .env files.

Backend endpoints are protected via JWT verification.

Only authorized users can access their respective data.

🧪 Testing
All private routes were tested for reloading and auth state preservation.

The server returns appropriate status codes and CORS headers.

Search, toggle layouts, form validations, and error pages were all tested.

📃 Deployment
Frontend deployed on [Vercel/Netlify]

Backend deployed on [Render/Other]

Domain authorized in Firebase for proper login redirects

👨‍💻 Developed By
MD. Ismail Hossan Nayef
Email: ismailhossennayeb@email.com

📦 **NPM Packages Used**
✅ Frontend Dependencies
React – Frontend UI library (react, react-dom)

React Router – Client-side routing (react-router)

React Icons – Scalable vector icons (react-icons)

Firebase – Authentication and user state management (firebase)

Axios – HTTP requests to backend (axios)

React Toastify – Toast notifications (react-toastify)

SweetAlert2 – Beautiful alert modals (sweetalert2)

Swiper – Responsive and touch-friendly sliders (swiper)

TailwindCSS – Utility-first CSS framework (tailwindcss)

DaisyUI – Tailwind CSS component library (daisyui)

🛠️ Development & Build Tools
Vite – Fast development and build tool (vite, @vitejs/plugin-react)

ESLint – Code linting (eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh)

Type Definitions – For TypeScript support in React (@types/react, @types/react-dom)

Globals – ESLint global variable definitions (globals)

vite-plugin-pwa – Progressive Web App support (vite-plugin-pwa)

@tailwindcss/vite – Tailwind integration with Vite
