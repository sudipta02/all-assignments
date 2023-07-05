import React from "react";

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
  const [courses, setCourses] = React.useState(coursesTemp);

  // Add code to fetch courses from the server
  // and set it in the courses state variable.
  return (
    <div>
      <h1 style={{ marginTop: "20px", marginLeft: "20px" }}>
        Course list page
      </h1>
      <div className="courses-list-container">
        {courses.map((c) => (
          <Course
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
      <div className="course-img"></div>
      <div className="course-info">
        <p>Title: {title}</p>
        <p>Description: {description}</p>
        <p>Price: {price}</p>
        <p>Published: {String(published)}</p>
      </div>
    </div>
  );
}

export default ShowCourses;