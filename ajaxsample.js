function loadUsers() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    const users = JSON.parse(this.responseText);
    const body = document.querySelector("body");

    body.innerHTML = `
            <h1>GitHub Users</h1>
            <div class="container">
                ${users
                  .map(
                    (user) => `
                      <div class="user-card">
                          <img src="${user.avatar_url}" alt="${user.login}" />
                          <div class="details">
                              <h2>${user.login}</h2>
                              <a href="${user.html_url}" target="_blank">View Profile</a>
                          </div>
                      </div>`
                  )
                  .join("")}
            </div>`;
  };
  xhttp.open("GET", "https://api.github.com/users", true);
  xhttp.send();
}

loadUsers();
