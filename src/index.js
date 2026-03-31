function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "82b9bd6db39ddcc03a3e0fof4tf0adf4";
  let prompt = `Use instructions: Generate a french poem about ${instructionsInput.value}`;
  let context =
    "You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem and separate each line with a <br />. Make sure to follow the user instructions. Sign the powem with 'SheCodes AI'in bold.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `Generating a French poem about ${instructionsInput.value}`;

  axios.get(apiUrl).then(displayPoem);
}

let formElement = document.querySelector("#poem-generator-form");
formElement.addEventListener("submit", generatePoem);
