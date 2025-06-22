function submitData(name, email) {
  const formData = {
    name: name,
    email: email
  };

  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (object) {
    const newId = document.createElement("div");
    newId.textContent = object.id;
    document.body.appendChild(newId);
  })
  .catch(function (error) {
    const errorMsg = document.createElement("div");
    errorMsg.textContent = error.message;
    document.body.appendChild(errorMsg);
  });
}
