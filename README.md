# BlogBoost Application

Blog Application is a dynamic and interactive blogging platform where users can create, read, update, and delete blog posts. It provides an engaging experience with real-time updates for likes and comments.

## Features
- **Create Blog Posts**: Add new blog posts with titles, descriptions, and content.
- **Read Blog Posts**: View blog posts with full content, title, and description.
- **Update Blog Posts**: Edit blog posts after creation.
- **Delete Blog Posts**: Remove blog posts permanently.
- **Like Button**: Like blog posts with real-time updates.
- **Comment System**: Users can add comments to blog posts.
- **Responsive Design**: Optimized for both desktop and mobile.
- **Fast Performance**: Built with Vite for a quick development experience.

## Technologies Used
- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **State Management**: React hooks
- **Icons**: Lucide React

## Installation

Follow these steps to set up the project:

### Backend Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/Swathijettiboina/BlogBoost_FullStack-App.git
    ```
2. Navigate to the backend directory:
    ```bash
    cd blog-app/backend
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Create a `.env` file and add:
    ```plaintext
    PORT=5000
    MONGO_URI=your-mongodb-connection-string
    ```
5. Start the backend server:
    ```bash
    npm run dev
    ```

### Frontend Setup
1. Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm run dev
    ```
4. Open the application in your browser at `http://localhost:5173/`.

## Usage

### CRUD Operations
- **Create**: Add a new blog with a title, description, and content.
- **Read**: View blog posts, like, and comment.
- **Update**: Edit existing blog posts.
- **Delete**: Remove unwanted blog posts.


## Folder Structure for backend 

backend ├── config │ ├── db.js ├── controllers │ ├── blogController.js │ ├── commentController.js ├── models │ ├── blog.js ├── routers │ ├── blogRouter.js ├── .env ├── package-lock.json ├── package.json ├── server.js
## Folder Structure for frontend 
frontend ├── public ├── src │ ├── assets │ │ ├── logo-blog-boost.webp │ ├── components │ │ ├── AddBlog.jsx │ │ ├── BlogCard.jsx │ │ ├── BlogsList.jsx │ │ ├── CommentSection.jsx │ │ ├── Footer.jsx │ │ ├── Header.jsx │ │ ├── Home.jsx │ │ ├── ReadFullBlog.jsx │ ├── pages │ │ ├── About.jsx │ │ ├── CategoryBlogs.jsx │ │ ├── EditBlog.jsx │ │ ├── FeaturedBlogs.jsx │ │ ├── HeroSection.jsx │ │ ├── Profile.jsx │ │ ├── RecentBlogs.jsx │ ├── App.jsx │ ├── index.css │ ├── main.jsx ├── .gitignore ├── eslint.config.js ├── index.html ├── output.txt ├── package-lock.json ├── package.json ├── README.md ├── vite.config.js

## Contribution
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Create a pull request.

## License
This project is licensed under the **MIT License**.
