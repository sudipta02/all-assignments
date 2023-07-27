import React, { useState } from "react";
import { backendUrl } from "../../constants";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const CourseForm = ({ _id, update }) => {
  const location = useLocation();
  // const { title, price, description, imageLink, published } = location.state;
  // const [courseData, setCourseData] = useState({
  //   title: "",
  //   description: "",
  //   price: 0,
  //   imageLink: "",
  //   published: false,
  // });

  const [courseData, setCourseData] = useState(location.state);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you can handle the form submission, for now, let's just log the data
    console.log(courseData);
    const adminToken = localStorage.getItem("adminToken");
    if (update) {
      try {
        const response = await fetch(`${backendUrl}/admin/courses/${_id}`, {
          method: "PUT",
          headers: {
            // Accept: "application/json",
            "Content-Type": "application/json",
            authorization: `Bearer ${adminToken}`,
          },
          body: JSON.stringify(courseData),
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
          navigate("/admin/about");
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

        setCourseData({
          title: "",
          description: "",
          price: 0,
          imageLink: "",
          published: false,
        });
      } catch (err) {
        console.log({ err });
      }
    } else {
      try {
        const response = await fetch(`${backendUrl}/admin/courses`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: `Bearer ${adminToken}`,
          },
          body: JSON.stringify(courseData),
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
          navigate("/admin/about");
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

        setCourseData({
          title: "",
          description: "",
          price: 0,
          imageLink: "",
          published: false,
        });
      } catch (err) {
        console.log({ err });
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="create-course-container">
      <form onSubmit={handleSubmit} className="create-course-form">
        <label>
          <span>Title:</span>
          <input
            type="text"
            name="title"
            value={courseData.title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          <span>Description:</span>
          <input
            type="text"
            name="description"
            value={courseData.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          <span>Price:</span>
          <input
            type="number"
            name="price"
            value={courseData.price}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          <span>Image Link:</span>
          <input
            type="text"
            name="imageLink"
            value={courseData.imageLink}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          <span>Published:</span>
          <input
            type="checkbox"
            name="published"
            checked={courseData.published}
            onChange={(e) =>
              setCourseData((prevState) => ({
                ...prevState,
                published: e.target.checked,
              }))
            }
          />
        </label>
        <br />
        <button type="submit">{update ? "Update course" : "Submit"}</button>
      </form>
    </div>
  );
};

export default CourseForm;
