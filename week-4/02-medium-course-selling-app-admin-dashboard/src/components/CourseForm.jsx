import React, { useState } from "react";

const CourseForm = () => {
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    price: 0,
    imageLink: "",
    published: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, for now, let's just log the data
    console.log(courseData);
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CourseForm;
