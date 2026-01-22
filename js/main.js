const list = document.getElementById("email-list");

// Loop 10 volte
for (let i = 0; i < 10; i++) {
  axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
    // Se la chiamata ha successo allora:
    .then((response) => {
      const email = response.data.response;
      list.innerHTML += `<li>${email}</li>`
    })
    // Se la chiamata non ha successo allora:
    .catch((error) => {
      console.error(error);
      list.innerHTML += `Error: ${error}`
    });
}
