const baseUrl = "https://api.currencyapi.com/v3/latest?apikey=cur_live_tb7SAxgiK8cE1PRCMzlMv6BP7DTJJJcwPnaf3hb4";
const selectElements = document.querySelectorAll("select");
const amountInput = document.querySelector("input");
const convertButton = document.querySelector("button");
const resultText = document.querySelector(".msg");
const fromFlag = document.querySelector(".from img");
const toFlag = document.querySelector(".to img");

// Populate dropdowns with currency options
Object.keys(countryList).forEach(currency => {
    selectElements.forEach(select => {
        let option = document.createElement("option");
        option.value = currency;
        option.innerText = currency;
        select.appendChild(option);
    });
});

// Set default values for dropdowns
selectElements[0].value = "USD";
selectElements[1].value = "INR";

// Function to update flag image based on selected currency
const updateFlag = (selectElement, flagElement) => {
    const currencyCode = selectElement.value;
    const countryCode = countryList[currencyCode]; // Get country code from currency
    flagElement.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
};

// Event listeners for dropdowns to update flags dynamically
selectElements.forEach((select, index) => {
    select.addEventListener("change", () => {
        updateFlag(select, index === 0 ? fromFlag : toFlag);
    });
});

// Fetch exchange rate and update UI
const getExchangeRate = async () => {
    const amount = parseFloat(amountInput.value);
    const fromCurrency = selectElements[0].value;
    const toCurrency = selectElements[1].value;

    if (isNaN(amount) || amount <= 0) {
        resultText.innerText = "Please enter a valid amount.";
        return;
    }

    try {
        const response = await fetch(baseUrl);
        const data = await response.json();
        const exchangeRate = data.data[toCurrency].value / data.data[fromCurrency].value;
        const convertedAmount = (amount * exchangeRate).toFixed(2);

        resultText.innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    } catch (error) {
        resultText.innerText = "Error fetching exchange rate. Try again!";
        console.error(error);
    }
};

// Add event listener to button
convertButton.addEventListener("click", (e) => {
    e.preventDefault();
    getExchangeRate();
});
