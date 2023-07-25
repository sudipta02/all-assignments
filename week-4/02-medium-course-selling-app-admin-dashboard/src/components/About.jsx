import jwtDecode from "jwt-decode";

function About() {
  const adminToken = localStorage.getItem("adminToken");
  const admin = jwtDecode(adminToken);
  console.log({ admin });
  return (
    <div className="about-container">
      <h1>Hey👋, {admin.fullname}</h1>
      <h2 style={{ marginBottom: "30px" }}>Welcome to your dashboard</h2>
    </div>
  );
}

export default About;
