const list = document.getElementById("email-list");

for (let i = 0; i < 10; i++) {
  axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((response) => {
      const email = response.data.response;
      list.innerHTML += `<li>${email}</li>`
    })
    .catch((error) => {
      console.error(error);
      list.innerHTML += `Error: ${error}`
    });
}
