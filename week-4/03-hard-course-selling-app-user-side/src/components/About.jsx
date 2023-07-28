import jwtDecode from "jwt-decode";

function About() {
  const userToken = localStorage.getItem("userToken");
  const user = jwtDecode(userToken);
  console.log({ user });
  return (
    <div className="about-container">
      <h1 style={{ color: "#fff" }}>Hey👋, {user.fullname}</h1>
      <h2 style={{ marginBottom: "30px", color: "#fff" }}>
        Welcome to your dashboard
      </h2>
    </div>
  );
}

export default About;
