import React, { useEffect } from "react";
import { backendUrl } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const coursesTemp = [
  {
    title: "Title",
    description: "Description",
    price: 1000,
    imageLink: "some_url",
    published: true,
  },
  {
    title: "Title",
    description: "Description",
    price: 1000,
    imageLink: "some_url",
    published: true,
  },
];

function ShowCourses() {
  const [courses, setCourses] = React.useState([]);
  const adminToken = localStorage.getItem("adminToken");

  // Add code to fetch courses from the server
  // and set it in the courses state variable.
  useEffect(() => {
    async function getCourses() {
      const response = await fetch(`${backendUrl}/admin/courses`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: `Bearer ${adminToken}`,
        },
      });

      const json = await response.json();
      const { courses } = json;
      setCourses(courses);
    }
    getCourses();
  }, []);
  return (
    <div style={{ overflow: "auto" }}>
      <h1 style={{ marginTop: "20px", marginLeft: "20px" }}>
        Course list page
      </h1>
      <div className="courses-list-container">
        {courses.map((c, i) => (
          <Course
            key={i}
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
  const { title, description, price, imageLink, published } = props;
  return (
    <div className="course-card">
      <img src={imageLink} className="course-img" />
      <div className="course-info">
        <p>Title: {title}</p>
        <p>Description: {description}</p>
        <p>Price: {price}</p>
        <p>Published: {String(published)}</p>
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
      >
        <FontAwesomeIcon icon={faPenToSquare} />
      </button>
    </div>
  );
}

export default ShowCourses;
