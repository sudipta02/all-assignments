import React from "react";
import CourseForm from "./CourseForm";
/// You need to add input boxes to take input for users to create a course.
/// I've added one input so you understand the api to do it.
function CreateCourse() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Create Course Page
      </h1>
      <CourseForm />
    </div>
  );
}
export default CreateCourse;
