## 📚 BookNest - Online Book Store
BookNest is a modern, full-stack online bookstore where users can explore, search, and purchase books across various categories with easy navigation and a user-friendly interface. The platform offers a seamless shopping experience, combining robust backend functionality with a clean, responsive frontend.
![Screenshot 2025-06-26 163200](https://github.com/user-attachments/assets/cfababc9-8460-4e90-855e-d1c595c179cc)

## Admin Dashboard
![image](https://github.com/user-attachments/assets/3723ec62-78bf-4068-8262-faa988e449b1)


### 🚀 Live Demo
👉 Visit BookNest on Vercel
<a href ="https://book-nest-store-frontend.vercel.app/">BookNest-online book store</a>

### 🛠 Tech Stack
Frontend: React, Tailwind CSS, Redux

Backend: Node.js, Express.js, MongoDB (MERN Stack)

Authentication: Firebase Authentication, JWT

Deployment: Vercel

### ✨ Features
Explore a wide range of books across categories like Fiction, Romance, Business, and more

Search functionality to find books by title or keyword

Category-based filtering for easy browsing

Trending books and price discounts

Secure user authentication with Firebase

Seamless purchasing experience (basic cart/checkout simulation)

Fully responsive and optimized UI with Tailwind CSS

### 📂 Project Structure

📁frontend
 ├── 📁public
 │    ├── books.json
 │    ├── fav-icon.png
 │    └── vite.svg
 ├── 📁src
 │    ├── App.css
 │    ├── App.jsx
 │    ├── 📁assets
 │    │    ├── avatar.png
 │    │    ├── banner.png
 │    │    ├── 📁books
 │    │    │    ├── book-1.png
 │    │    │    ├── book-2.png
 │    │    │    ├── ... (other book images)
 │    │    ├── fav-icon.png
 │    │    ├── footer-logo.png
 │    │    ├── github-cover.png
 │    │    ├── 📁news
 │    │    │    ├── news-1.png
 │    │    │    ├── news-2.png
 │    │    │    ├── news-3.png
 │    │    │    └── news-4.png
 │    │    └── react.svg
 │    ├── 📁components
 │    │    ├── AdminLogin.jsx
 │    │    ├── Footer.jsx
 │    │    ├── Loading.jsx
 │    │    ├── Login.jsx
 │    │    ├── Navbar.jsx
 │    │    └── Register.jsx
 │    ├── 📁context
 │    │    └── AuthContext.jsx
 │    ├── 📁firebase
 │    │    └── firebase.config.js
 │    ├── index.css
 │    ├── main.jsx
 │    ├── 📁pages
 │    │    ├── 📁books
 │    │    │    ├── BookCard.jsx
 │    │    │    ├── CartPage.jsx
 │    │    │    ├── CheckOutPage.jsx
 │    │    │    ├── OrderPage.jsx
 │    │    │    └── SingleBook.jsx
 │    │    ├── 📁dashboard
 │    │    │    ├── 📁addBook
 │    │    │    │    ├── AddBook.jsx
 │    │    │    │    ├── InputField.jsx
 │    │    │    │    └── SelectField.jsx
 │    │    │    ├── Dashboard.jsx
 │    │    │    ├── DashboardLayout.jsx
 │    │    │    ├── 📁EditBook
 │    │    │    │    └── UpdateBook.jsx
 │    │    │    ├── 📁manageBooks
 │    │    │    │    └── ManageBooks.jsx
 │    │    │    ├── RevenueCharts.jsx
 │    │    │    └── 📁users
 │    │    │         └── UserDashboard.jsx
 │    │    ├── 📁home
 │    │    │    ├── Banner.jsx
 │    │    │    ├── Home.jsx
 │    │    │    ├── News.jsx
 │    │    │    ├── Recommened.jsx
 │    │    │    └── TopSellers.jsx
 │    ├── 📁redux
 │    │    ├── 📁features
 │    │    │    ├── 📁books
 │    │    │    │    └── booksApi.js
 │    │    │    ├── 📁cart
 │    │    │    │    └── cartSlice.js
 │    │    │    └── 📁orders
 │    │    │         └── ordersApi.js
 │    │    └── store.js
 │    ├── 📁routers
 │    │    ├── AdminRoute.jsx
 │    │    ├── PrivateRoute.jsx
 │    │    └── router.jsx
 │    └── 📁utils
 │         ├── baseURL.js
 │         └── getImgUrl.js
 ├── .env.local
 ├── .gitignore
 ├── eslint.config.js
 ├── index.html
 ├── package-lock.json
 ├── package.json
 ├── postcss.config.js
 ├── README.md
 ├── tailwind.config.js
 ├── vercel.json
 └── vite.config.js


⚙️ Getting Started (Local Setup)
Frontend:

```
bash
cd client
npm install
npm start

```
Backend:
```
cd backend
npm install
npm run dev

```
### Environment Variables Required:

MongoDB connection URI

Firebase configuration keys

Vercel deployment configurations (for production)

### 🔐 Authentication
Secure signup and login using Firebase Authentication

User state managed in the frontend for personalized experience

### 📦 Deployment
Frontend deployed using Vercel

Backend hosted on Render or any preferred cloud service

### 💡 Future Improvements
Real payment gateway integration

Wishlist and favorites feature

Admin dashboard for book management

Reviews and ratings system

## How to run this project:

### For Frontend 
Follow the below steps to run the project: 
- Firstly clone or unzip the project folder.
* Go to the frontend directory by using the following command ``` cd frontend ```.
* * create a **.env.local** file in the backend root directory as the same level where the **package.json** is located and keep the following environment variables there:
```
>>> Stepup firebase app and configure the environment

VITE_API_KEY="your_key"
VITE_Auth_Domain="book-store-mern-app.firebaseapp.com"
VITE_PROJECT_ID="book-store-mern-app"
VITE_STORAGE_BUCKET="book-store-mern-app.appspot.com"
VITE_MESSAGING_SENDERID= "your_id"
VITE_APPID="1:205632822247:web:b0db0ec66bf6de0bbb3b42"
```
+ Then run `` npm install `` commend to install node dependencies.
- Finally, to run the project, use ``npm run dev`` command.


### For Backend
Follow the below steps to run the project: 
- Firstly clone or unzip the project folder.
* Go to the backend directory by using the following command ``` cd backend```.
+ Then run `` npm install `` commend to install node dependencies.
* create a **.env** file in the backend root directory as the same level where the **package.json** is located and keep the following environment variables there: 
```
DB_URL = "mongodb+srv://yourUserName:password@cluster0.qc3bq.mongodb.net/book-store?retryWrites=true&w=majority&appName=Cluster0"

JWT_SECRET_KEY = 'your_key_bc992a20cb6706f741433686be814e3df45e57ea1c2fc85f9dbb0ef7df12308a669bfa7c976368ff32e32f6541480ce9ec1b122242f9b1257ab669026aeaf16'

Note: Please setup mongodb and change the MongoDB url and set your jwt secret key above.
```

- Finally, to run the project, use ``npm run start:dev`` command.













# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
