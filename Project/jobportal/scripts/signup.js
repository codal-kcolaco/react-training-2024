document
  .getElementById("registrationForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;

    if (password !== confirm_password) {
      alert("Passwords do not match");
      return;
    }

    var requestBody = {
      name: fullname,
      email: email,
      password: password,
    };

    fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then(async (response) => {
        if (!response.ok) {
          const data = await response.json();

          if (data.email) {
            throw new Error(data.email[0]);
          } else if (data.password) {
            throw new Error(data.password[0]);
          } else {
            throw new Error("Network response is not ok");
          }
        }
        return response.json();
      })
      .then((data) => {
        alert("Registration successful");
      })
      .catch((error) => {
        alert(`${error}. Please try again.`);
      });
  });
