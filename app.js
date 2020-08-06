const inputField = document.querySelector(".input-field");
const selectInput = document.querySelector(".select-list");
const selectOptions = document.querySelectorAll(".select-option");
const checkbox = document.querySelectorAll(".checkbox-field");
const result = document.querySelector(".container-secondary");
const results = document.querySelectorAll(".container-secondary--grey");

loadEventListeners();

function loadEventListeners() {
  document.addEventListener("DOMContentLoaded", (e) => {
    hideElements();
  });

  document.querySelector(".btn").addEventListener("click", (e) => {

    document.querySelector(".img-convert").style.display = "inline";

    setTimeout(function() {
      document.querySelector(".img-convert").remove();
    }, 1000);

    setInterval(function() {
      result.nextElementSibling.nextElementSibling.style.display = "block";;
    }, 1000);

    selectOptions.forEach((optionItem) => {
      if(optionItem.selected) {
        if(optionItem.value === "Kilogramme(kg)") {
          convertFromKg();
        } else if(optionItem.value === "Pounds(lb)") {
          convertFromPounds();
        } else if(optionItem.value === "Gram(g)") {
          convertFromGram();
        } else if(optionItem.value === "Ounces(oz)") {
          convertFromOunces();
        }
        results.forEach((resultEl) => {
          if(optionItem.value === resultEl.id) {
            resultEl.style.display = "none";   
          } else {
            resultEl.style.display =  "block";
          }
               
        });
      }
    });

    e.preventDefault();
  });

  document.getElementById("reset").addEventListener("click", (e) => {
    window.location. reload(true);

    e.preventDefault();
  });

}

function hideElements() {
 document.querySelector(".img-convert").style.display = "none";
 result.nextElementSibling.nextElementSibling.style.display = "none";
}

function convertFromKg() {
  const pounds = inputField.value * 2.2046;
  const ounces = inputField.value * 35.274;
  const gram = inputField.value * 1000;

  results.forEach((resultEl) => {
    if(resultEl.id === "Pounds(lb)") {
      resultEl.textContent = `Pounds: ${pounds}`;
    } else if(resultEl.id === "Gram(g)") {
      resultEl.textContent = `Gram: ${gram}`;
    } else if(resultEl.id === "Ounces(oz)") {
      resultEl.textContent = `Ounces: ${ounces}`;
    }
  });
}

function convertFromPounds() {
  const kilogramme = inputField.value / 2.2046;
  const ounces = inputField.value * 16;
  const gram = inputField.value / 0.0022046;

  results.forEach((resultEl) => {
    if(resultEl.id === "Kilogramme(kg)") {
      resultEl.textContent = `Kilogramme ${kilogramme}`;
    } else if(resultEl.id === "Gram(g)") {
      resultEl.textContent = `Gram: ${gram}`;
    } else if(resultEl.id === "Ounces(oz)") {
      resultEl.textContent = `Ounces: ${ounces}`;
    }
  });
}

function convertFromGram() {
  const pounds = inputField.value * 0.0022046;
  const kilogramme = inputField.value / 1000;
  const ounces = inputField.value * 0.035274;

  results.forEach((resultEl) => {
    if(resultEl.id === "Pounds(lb)") {
      resultEl.textContent = `Pounds: ${pounds}`;
    } else if(resultEl.id === "Kilogramme(kg)") {
      resultEl.textContent = `Kilogramme ${kilogramme}`;
    } else if(resultEl.id === "Ounces(oz)") {
      resultEl.textContent = `Ounces: ${ounces}`;
    }
  });
}

function convertFromOunces() {
  const pounds = inputField.value * 0.0625;
  const kilogramme = inputField.value / 35.274;
  const gram = inputField.value / 0.035274;

  results.forEach((resultEl) => {
    if(resultEl.id === "Pounds(lb)") {
      resultEl.textContent = `Pounds: ${pounds}`;
    } else if(resultEl.id === "Kilogramme(kg)") {
      resultEl.textContent = `Kilogramme ${kilogramme}`;
    } else if(resultEl.id === "Gram(g)") {
      resultEl.textContent = `Gram: ${gram}`;
    }
  });
}
