/// This is the landing page. You need to add a link to the login page here.
/// Maybe also check from the backend if the user is already logged in and then show them a logout button
/// Logging a user out is as simple as deleting the token from the local storage.

function Landing() {
  return (
    <div className="landing-container">
      <h1>Welcome to course selling website!</h1>
      <h2 style={{ marginBottom: "30px" }}>User side</h2>
      <a href="/register">Register</a>
      <a href="/login">Login</a>
    </div>
  );
}

export default Landing;
