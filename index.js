const errorMsgElem = document.getElementById("error-msg");
const errorIconElem = document.getElementById("error-icon");
const inputElems = document.querySelectorAll("input");

function errorDisplay() {
  inputElems.forEach((inputElem) => {
    if (inputElem.value === "") {
      if (inputElem.id === "firstName") {
        inputElem.nextElementSibling.innerHTML = ` 
          <img
            src="/images/icon-error.svg"
            class="error-icon"
            id="error-icon"
            alt=""
          />
          <p class="error-msg" id="error-msg">
            First Name cannot be empty
          </p>
        `;
      }

      if (inputElem.id === "lastName") {
        inputElem.nextElementSibling.innerHTML = `
          <img
            src="/images/icon-error.svg"
            class="error-icon"
            id="error-icon"
            alt=""
          />
          <p class="error-msg" id="error-msg">
            Last Name cannot be empty
          </p>
        `;
      }

      if (inputElem.id === "email") {
        inputElem.nextElementSibling.innerHTML = `
          <img
            src="/images/icon-error.svg"
            class="error-icon"
            id="error-icon"
            alt=""
          />
          <p class="error-msg" id="error-msg">
            Looks like this is not an email
          </p>
        `;
        inputElem.placeholder = "email@example/com";
      }

      if (inputElem.id === "password") {
        inputElem.nextElementSibling.innerHTML = `
          <img
            src="images/icon-error.svg"
            class="error-icon"
            id="error-icon"
            alt=""
          />
          <p class="error-msg" id="error-msg">
            Password cannot be empty
          </p>
        `;
      }

      inputElem.style.border = "2px solid hsl(0, 100%, 74%)";
    }
  });
}
