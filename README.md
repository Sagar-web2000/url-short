# 🔗 URL Shortener

A full-stack **URL Shortener** application that converts long URLs into short, easy-to-share links.

The project is built using **React.js** for the frontend and **Node.js, Express.js, and MongoDB** for the backend. Short URLs are generated using the `shortid` package and stored in MongoDB.

## 🚀 Features

* 🔗 Convert long URLs into short URLs
* ⚡ Fast URL generation
* 📋 Easy-to-copy shortened URLs
* 🔄 Redirect short URLs to their original destination
* 🗄️ Store URLs in MongoDB
* 🌐 React-based frontend
* 🛠️ Express.js REST API
* 🔐 CORS-enabled backend
* 📱 Simple and user-friendly interface

## 🛠️ Technologies Used

### Frontend

* React.js
* JavaScript
* HTML5
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* ShortID
* CORS

The backend dependencies currently include Express, Mongoose, ShortID, and CORS.

## 📂 Project Structure

```text
url-short/
│
├── controllers/
│   └── ...
│
├── models/
│   └── ...
│
├── routes/
│   └── ...
│
├── frontend/
│   └── urlshort/
│       ├── src/
│       ├── public/
│       ├── package.json
│       └── ...
│
├── connect.js
├── index.js
├── package.json
├── package-lock.json
└── .gitignore
```

The repository is organized into separate backend controllers, models, routes, and a dedicated React frontend.

## ⚙️ How It Works

The application follows a simple URL-shortening workflow:

```text
User enters long URL
        ↓
React Frontend
        ↓
Express API
        ↓
Generate unique Short ID
        ↓
Store URL in MongoDB
        ↓
Return Short URL
        ↓
User opens Short URL
        ↓
Express finds original URL
        ↓
Redirect to original website
```

## 🔄 URL Shortening Process

1. The user enters a long URL into the application.
2. The frontend sends the URL to the backend.
3. Express processes the request.
4. A unique short ID is generated.
5. The original URL and short ID are stored in MongoDB.
6. The backend returns the shortened URL.
7. When the shortened URL is visited, the server finds the corresponding original URL.
8. The user is redirected to the original website.

## 🧩 Backend API

### Create Short URL

```http
POST /url
```

Creates a shortened URL from the provided original URL.

### Redirect to Original URL

```http
GET /:shortId
```

Uses the short ID to find the original URL and redirects the user.

> **Note:** Make sure the API paths in this README match your current route implementation if you change the backend routes.

## 💻 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Sagar-web2000/url-short.git
```

### 2. Navigate to the Project

```bash
cd url-short
```

### 3. Install Backend Dependencies

```bash
npm install
```

### 4. Configure MongoDB

Create/configure your MongoDB connection in the project's database configuration.

For example, use an environment variable:

```env
MONGODB_URI=your_mongodb_connection_string
```

**Do not upload your MongoDB connection string or other private credentials to GitHub.**

### 5. Start the Backend

```bash
npm start
```

The root `package.json` currently defines `npm start` as `node index.js`.

## 🎨 Frontend Setup

Navigate to the frontend directory:

```bash
cd frontend/urlshort
```

Install the frontend dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm run dev
```

Vite will provide the local development URL in the terminal.

## 🗄️ Database

This project uses **MongoDB** to store shortened URL information.

A typical record can contain information similar to:

```json
{
  "originalUrl": "https://example.com/very/long/url",
  "shortId": "Ab12Cd"
}
```

The exact fields depend on the current Mongoose model implementation.

## 📸 Application Workflow

### Step 1 — Enter URL

The user enters a long URL into the frontend.

### Step 2 — Generate Short URL

The backend generates a unique short identifier and stores the mapping in MongoDB.

### Step 3 — Receive Short URL

The application displays the generated short URL.

### Step 4 — Redirect

When the short URL is opened, the backend retrieves the original URL and redirects the user.

## 🔮 Future Improvements

Possible improvements for future versions:

* 👤 User authentication
* 📊 URL click analytics
* 📈 Dashboard for created URLs
* 📅 URL expiration
* 🔐 Private/password-protected URLs
* 📋 One-click copy button
* 🗑️ Delete shortened URLs
* ✏️ Custom aliases
* 🌐 Custom domain support
* 📱 Improved responsive design
* ☁️ Deployment with MongoDB Atlas
* 📈 Click-count tracking

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a new branch:

```bash
git checkout -b feature/your-feature
```

3. Make your changes.
4. Commit your changes:

```bash
git commit -m "Add new feature"
```

5. Push your branch:

```bash
git push origin feature/your-feature
```

6. Create a Pull Request.

## 👨‍💻 Author

**Sagar Sahu**

GitHub:
https://github.com/Sagar-web2000

## 📄 License

This project is intended for learning and development purposes.

---

⭐ If you found this project useful, consider giving the repository a star!

🔗 **Repository:** https://github.com/Sagar-web2000/url-short
