import jwtDecode from "jwt-decode";
import { Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function AppBar() {
  const navigate = useNavigate();
  const adminToken = localStorage.getItem("adminToken");
  const admin = jwtDecode(adminToken);
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    toast.success("Logged out !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigate("/");
  };

  const handleCreateCourse = () => {
    navigate("/admin/create-course");
  };
  const handleShowCourses = () => {
    navigate("/admin/courses");
  };
  return (
    <>
      <div
        style={{
          height: "70px",
          width: "100vw",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <div>
          <button
            style={{ margin: "0", marginRight: "10px" }}
            onClick={handleShowCourses}
          >
            Show Courses
          </button>
          <button style={{ margin: "0" }} onClick={handleCreateCourse}>
            Create Course
          </button>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p>{admin.username}</p>
          <button
            style={{ margin: "0", marginLeft: "10px" }}
            onClick={handleLogout}
          >
            Log out
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
}
