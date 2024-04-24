document.getElementById("loginForm").addEventListener("submit", (event) => {
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
      const jwtToken = data.jwt;

      document.cookie = `jwt_token=${jwtToken}; expires=${new Date(
        Date.now() + 86400 * 1000
      ).toUTCString()}; path=/`;
      alert("Login successful");
    })
    .catch((error) => {
      alert(`${error}. Please try again.`);
    });
});
