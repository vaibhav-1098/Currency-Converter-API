// form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  getData(fromList.value, toList.value, amount.value);
});

// get data
async function getData(FromValue, ToValue, AmountValue) {
  try {
    gifLoader.classList.remove("hidden");
    const APIkey = "5da64aaf-4baf2f65-2a602c0c-f603189c";
    const URL = `https://api.exconvert.com/convert?access_key=${APIkey}&from=${FromValue}&to=${ToValue}&amount=${AmountValue}`;
    const response = await fetch(URL);
    const data = await response.json();
    gifLoader.classList.add("hidden");
    showData(data); //
  } catch (error) {
    output.innerHTML = "ERROR 404";
  }
}

// show data
function showData(data) {
  output.innerHTML = `${amount.value} ${fromList.value} = ${data.result.rate.toFixed(2)} ${toList.value}`;
}

// default
getData("NOK", "NPR", 1);
