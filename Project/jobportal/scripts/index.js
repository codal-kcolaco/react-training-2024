document.addEventListener("DOMContentLoaded", () => {
  const jwtCookie = document.cookie
    .split(";")
    .find((cookie) => cookie.trim().startsWith("jwt_token="));

  if (jwtCookie) {
    document.querySelector(".nav-button-wrapper").style.display = "none";

    const userAvatar = document.createElement("img");
    userAvatar.classList.add("user-avatar");
    userAvatar.src = "images/wallpaper.png";

    const logoutButton = document.createElement("a");
    logoutButton.classList.add("logout-button");
    logoutButton.textContent = "Logout";
    logoutButton.id = "logout-button";

    document.getElementById("user-avatar-container").appendChild(userAvatar);
    document.getElementById("user-avatar-container").appendChild(logoutButton);
    document.getElementById("user-avatar-container").style.display = "flex";
  }

  document.getElementById("logout-button").addEventListener("click", () => {
    document.cookie =
      "jwt_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    location.reload();
  });
});
