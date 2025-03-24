async function getUserInfo() {
  const res = await fetch("https://reqres.in/api/users/1");
  const data = await res.json();
  console.log(data.data);
}

async function postUserInfo() {
  const data = {
    name: "morpheus",
    job: "leader",
    email: "morpheus@mail.com",
  };
  const res = await fetch("https://reqres.in/api/users", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = await res.json();
  console.log(response);
}

postUserInfo();
