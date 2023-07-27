import { useParams } from "react-router-dom";
import CourseForm from "./CourseForm";
/// You need to add input boxes to take input for users to create a course.
/// I've added one input so you understand the api to do it.
function CreateCourse({ update }) {
  const { _id } = useParams();
  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        {update ? "Update" : "Create"} Course Page
      </h1>
      <CourseForm _id={_id} update />
    </div>
  );
}
export default CreateCourse;
