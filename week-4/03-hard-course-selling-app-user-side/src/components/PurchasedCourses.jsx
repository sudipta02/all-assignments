import React, { useEffect } from "react";
import { backendUrl } from "../../../02-medium-course-selling-app-admin-dashboard/constants";

function PurchasedCourses() {
  const [purchasedCourses, setPurchasedCourses] = React.useState([]);
  const userToken = localStorage.getItem("userToken");

  // Add code to fetch courses from the server
  // and set it in the courses state variable.
  useEffect(() => {
    async function getCourses() {
      const response = await fetch(`${backendUrl}/users/purchasedCourses`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: `Bearer ${userToken}`,
        },
      });

      const json = await response.json();
      const { purchasedCourses } = json;
      setPurchasedCourses(purchasedCourses);
    }
    getCourses();
  }, []);

  return (
    <div>
      <h1 style={{ marginTop: "20px", marginLeft: "20px" }}>
        My purchased courses
      </h1>
      <div className="courses-list-container">
        {purchasedCourses.map((c, i) => (
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
  const { _id, title, description, price, imageLink } = props;

  return (
    <div className="course-card">
      <img src={imageLink} className="course-img" />
      <div className="course-info">
        <p>Title: {title}</p>
        <p>Description: {description}</p>
        <p>Price: {price}</p>
      </div>
    </div>
  );
}

export default PurchasedCourses;
