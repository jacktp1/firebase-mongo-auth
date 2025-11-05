document.getElementById("userForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  const res = await fetch("/api/addUser", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email })
  });

  const data = await res.json();
  alert(data.message);
  document.getElementById("userForm").reset();
});

document.getElementById("loadUsers").addEventListener("click", async () => {
  const res = await fetch("/api/users");
  const users = await res.json();

  const list = document.getElementById("userList");
  list.innerHTML = "";
  users.forEach(u => {
    const li = document.createElement("li");
    li.textContent = `${u.name} (${u.email})`;
    list.appendChild(li);
  });
});
