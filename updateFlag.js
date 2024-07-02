const output = document.getElementById("output");
const fromList = document.getElementById("fromList");
const toList = document.getElementById("toList");
const amount = document.getElementById("amount");
const form = document.querySelector("form");
const flag1 = document.getElementById("flag1");
const flag2 = document.getElementById("flag2");
const gifLoader=document.getElementById("gif");

// add options in from list
for (let code in countryList) {
  const newOption = document.createElement("option");
  newOption.innerHTML = code;
  newOption.value = code;
  fromList.append(newOption); //

  if (newOption.innerHTML == "NOK") {
    newOption.selected = true;
  }
}

// add options in to list
for (let code in countryList) {
  const newOption = document.createElement("option");
  newOption.innerHTML = code;
  newOption.value = code;
  toList.append(newOption); //

  if (newOption.innerHTML == "NPR") {
    newOption.selected = true;
  }
}

// update from list flag
fromList.addEventListener("change", (e) => {
  let currCode = e.target.value;
  flag1.src = `https://flagsapi.com/${countryList[currCode]}/flat/64.png`;
});

// update to list flag
toList.addEventListener("change", (e) => {
  let currCode = e.target.value;
  flag2.src = `https://flagsapi.com/${countryList[currCode]}/flat/64.png`;
});
