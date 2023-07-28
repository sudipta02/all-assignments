import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { backendUrl } from "../../../02-medium-course-selling-app-admin-dashboard/constants";

function ShowCourses() {
  const [courses, setCourses] = React.useState([]);
  const userToken = localStorage.getItem("userToken");

  // Add code to fetch courses from the server
  // and set it in the courses state variable.
  useEffect(() => {
    async function getCourses() {
      const response = await fetch(`${backendUrl}/users/courses`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: `Bearer ${userToken}`,
        },
      });

      const json = await response.json();
      const { courses } = json;
      setCourses(courses);
    }
    getCourses();
  }, []);
  return (
    <div>
      <h1 style={{ marginTop: "20px", marginLeft: "20px" }}>
        Course list page
      </h1>
      <div className="courses-list-container">
        {courses.map((c, i) => (
          <Course
            key={i}
            _id={c._id}
            title={c.title}
            description={c.description}
            price={c.price}
            imageLink={c.imageLink}
            published={c.published}
          />
        ))}
      </div>
    </div>
  );
}

function Course(props) {
  const [open, setOpen] = useState(false);
  const { _id, title, description, price, imageLink } = props;
  const navigate = useNavigate();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const handlePurchaseModal = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const handlePurchaseConfirm = async () => {
    const userToken = localStorage.getItem("userToken");
    try {
      const response = await fetch(`${backendUrl}/users/courses/${_id}`, {
        method: "POST",
        headers: {
          // Accept: "application/json",
          "Content-Type": "application/json",
          authorization: `Bearer ${userToken}`,
        },
      });

      const json = await response.json();
      console.log(json);
      if (response.status !== 403) {
        toast.success(json.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/user/purchased-courses");
      } else {
        toast.error(json.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <div className="course-card">
      <img src={imageLink} className="course-img" />
      <div className="course-info">
        <p>Title: {title}</p>
        <p>Description: {description}</p>
        <p>Price: {price}</p>
      </div>
      <button
        style={{
          margin: "0",
          padding: "0",
          border: "none",
          background: "rgba(0,0,0,0)",
          position: "absolute",
          bottom: "30px",
          right: "30px",
        }}
        onClick={() => handlePurchaseModal()}
      >
        <FontAwesomeIcon icon={faCartShopping} />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Do you want to purchase {title} course ?
          </Typography>
          <button onClick={handleClose}>Cancel</button>
          <button
            onClick={handlePurchaseConfirm}
            style={{ width: "90px", marginLeft: "20px" }}
          >
            Yes
          </button>
        </Box>
      </Modal>
    </div>
  );
}

export default ShowCourses;
