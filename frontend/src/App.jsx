import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddBlog from "./components/AddBlog";
import About from "./pages/About";
import Profile from "./pages/Profile";
import ReadFullBlog from "./components/ReadFullBlog";
import EditBlog from "./pages/EditBlog";
import BlogsList from "./components/BlogsList";
import CategoryBlogs from "./pages/CategoryBlogs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<BlogsList />} />
        <Route path="/addblog" element={<AddBlog />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blogs/read-blog/:id" element={<ReadFullBlog />} />
        <Route path="/edit-blog/:id" element={<EditBlog />} />
        <Route path="/categoryblogs" element={<CategoryBlogs/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
