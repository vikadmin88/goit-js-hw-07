
const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    let inputData = event.currentTarget.value.trim();
    
    if (! inputData.replace(/\s/g, '').length) {
        event.currentTarget.value = inputData;
        inputData = "Anonymous";
    }
    output.textContent = inputData;

});