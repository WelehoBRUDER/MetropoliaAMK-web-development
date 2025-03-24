async function getUserInfo() {
  const res = await fetch("https://reqres.in/api/users/1");
  const data = await res.json();
  console.log(data.data);
}

getUserInfo();
