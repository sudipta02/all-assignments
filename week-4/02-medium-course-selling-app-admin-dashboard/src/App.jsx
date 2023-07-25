import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Landing from "./components/Landing";
import CreateCourse from "./components/CreateCourse";
import Register from "./components/Register";
import ShowCourses from "./components/ShowCourses";
import AppBar from "./components/AppBar";
import About from "./components/About";

// This file shows how you can do routing in React.
// Try going to /login, /register, /about, /courses on the website and see how the html changes
// based on the route.
// You can also try going to /random and see what happens (a route that doesnt exist)
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="admin" element={<AppBar />}>
          <Route path="about" element={<About />} />
          <Route path="create-course" element={<CreateCourse />} />
          <Route path="courses" element={<ShowCourses />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
