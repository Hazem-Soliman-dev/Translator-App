const inputFrom = document.getElementById("translate-from");
const inputTo = document.getElementById("translate-to");
const translateButton = document.getElementById("translate-btn");
const swicthButton = document.getElementById("switch-btn");

swicthButton.addEventListener("click", () => {
  const temp = selectFrom.value;
  selectFrom.value = selectTo.value;
  selectTo.value = temp;
});

translateButton.addEventListener("click", () => {
  const text = inputFrom.value.trim();
  const from = selectFrom.value;
  const to = selectTo.value;

  if (text === "") {
    alert("Please enter text");
    return;
  }

  if (from === to) {
    alert("Please select different language");
    return;
  }

  fetch(
    `https://api.mymemory.translated.net/get?q=${text}&langpair=${from}|${to}`
  )
    .then((response) => response.json())
    .then((data) => {
      const translatedText = data.responseData.translatedText;
      inputTo.value = translatedText;
      inputFrom.value = "";
    })
    .catch((error) => {
      console.error(error.message);
    });
});
