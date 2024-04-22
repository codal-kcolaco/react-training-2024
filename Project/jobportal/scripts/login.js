document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var requestBody = {
      email: email,
      password: password,
    };

    fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Network response is not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        alert("Login successful");

        const avatarUrl = data.avatarUrl;

        const isIndexPage = window.location.pathname === "/index.html";

        if (isIndexPage) {
          document.querySelector(".nav-button-wrapper").style.display = "none";

          const userAvatar = document.createElement("img");
          userAvatar.classList.add("user-avatar");
          userAvatar.src = avatarUrl;

          document
            .getElementById("user-avatar-container")
            .appendChild(userAvatar);
        } else {
          setTimeout(() => {
            window.location.href = "index.html";
          }, 2000);
        }
      })
      .catch((error) => {
        console.log(error);
        alert(`${error}. Please try again.`);
      });
  });
