# Fentech Store - Next.js E-commerce App

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3-blue?style=flat-square)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=flat-square)](https://www.mongodb.com/)

---

## 📄 Project Description

**Fentech Store** is a modern e-commerce web application built with **Next.js 15 (App Router)**.  
It allows users to:

- Browse products
- View product details
- Login and manage products via a protected dashboard

The app features:

- Authentication with **NextAuth.js** (Google or credentials)
- Server-side API routes
- Dynamic product data using **MongoDB**
- Responsive and themeable design using **Tailwind CSS + DaisyUI**
- Dark/Light mode support

---

## ✨ Features

### Public Pages
- Landing page with Hero & Product Highlights
- Product listing page
- Product detail page

### Authentication
- Login with **Google** or credentials
- Protected product management pages

### Protected Pages
- Add new products (only for logged-in users)

### Optional Enhancements
- Loading spinner on form submission
- Dark/Light theme toggle

---

## 🛣 Route Summary

| Route                         | Method  | Description                        | Auth Required |
|--------------------------------|--------|------------------------------------|---------------|
| `/products`                     | GET    | List all products                  | ❌ No         |
| `/products/[id]`                | GET    | View details of a single product   | ❌ No         |
| `/dashboard/add-product`        | GET/POST | Add a new product (form + API)   | ✅ Yes        |
| `/api/products`                 | GET    | Fetch all products (JSON)          | ❌ No         |
| `/api/products`                 | POST   | Add a new product                  | ✅ Yes        |
| `/api/products/[id]`            | GET    | Fetch a single product by ID       | ❌ No         |

---

## 🛠 Setup & Installation

1. **Clone the repository**
```bash
git clone https://github.com/morshedrifat1/fentech-store.git
cd fentech-store

**Install dependencies**
npm install


**Create .env.local file in the root directory:**

MONGO_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

**Run the development server**
npm run dev

