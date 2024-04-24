import React from "react";
import "./styles/Signup.css";

function Signup() {
  //   useEffect(() => {
  //     document
  //       .getElementById("registrationForm")
  //       .addEventListener("submit", (event) => {
  //         event.preventDefault();
  //         var fullname = document.getElementById("fullname").value;
  //         var email = document.getElementById("email").value;
  //         var password = document.getElementById("password").value;
  //         var confirm_password =
  //           document.getElementById("confirm_password").value;

  //         if (password !== confirm_password) {
  //           alert("Passwords do not match");
  //           return;
  //         }

  //         var requestBody = {
  //           name: fullname,
  //           email: email,
  //           password: password,
  //         };

  //         fetch("http://127.0.0.1:8000/api/register", {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify(requestBody),
  //         })
  //           .then(async (response) => {
  //             if (!response.ok) {
  //               const data = await response.json();

  //               if (data.email) {
  //                 throw new Error(data.email[0]);
  //               } else if (data.password) {
  //                 throw new Error(data.password[0]);
  //               } else {
  //                 throw new Error("Network response is not ok");
  //               }
  //             }
  //             return response.json();
  //           })
  //           .then((data) => {
  //             alert("Registration successful");
  //           })
  //           .catch((error) => {
  //             alert(`${error}. Please try again.`);
  //           });
  //       });

  //     return () => {
  //       second;
  //     };
  //   }, [third]);

  return (
    <div className="signup-class">
      <div class="signup-container">
        <h2>Register</h2>
        <form id="registrationForm">
          <input
            type="text"
            name="fullname"
            id="fullname"
            className="signup-fullname"
            placeholder="Your Name / Company Name"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            className="signup-email"
            placeholder="Email Address"
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            className="signup-password"
            placeholder="Password"
            required
          />
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            className="signup-confirm-password"
            placeholder="Confirm Password"
            required
          />
          <input type="submit" className="signup-submit" value="Register" />
        </form>
      </div>
    </div>
  );
}

export default Signup;
