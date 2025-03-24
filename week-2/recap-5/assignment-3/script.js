async function getUserInfo() {
  try {
    const res = await fetch("https://reqres.in/api/unknown/23");
    if (res.ok) {
      const data = await res.json();
      console.log(data.data);
    } else {
      throw new Error(res.status);
    }
  } catch (error) {
    console.log(error);
  }
}
async function postUserInfo() {
  const data = null;
  try {
    const res = await fetch("https://reqres.in/api/users/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const response = await res.json();
      console.log(response);
    } else {
      throw new Error(res.status);
    }
  } catch (error) {
    console.log(error);
  }
}

async function putUserInfo() {
  const data = NaN;
  try {
    const res = await fetch("https://reqres.in/api/users/NaN", {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const response = await res.json();
      console.log(response);
    } else {
      throw new Error(res.status);
    }
  } catch (error) {
    console.log(error);
  }
}

async function deleteUser() {
  try {
    const res = await fetch("https://reqres.in/api/users/null", {
      method: "DELETE",
    });
    if (res.ok) {
      const data = await res.json();
      console.log(data);
    } else {
      throw new Error(res.status);
    }
  } catch (error) {
    console.log(error);
  }
}

getUserInfo();
postUserInfo();
putUserInfo();
