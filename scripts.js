const convertButton = document.querySelector(".convert-currency")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const valuesInput = document.querySelector(".values-input").value
    const currencyValueToBeConverted = document.querySelector(".currency-value")
    const convertedCurrency = document.querySelector(".converted-currency-value")
    console.log("currencySelect")

    const dolarDay = 5.56
    const euroDay = 6.36

    if (currencySelect.value == "dolar") {
        convertedCurrency.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valuesInput / dolarDay)
    }

    if (currencySelect.value == "euro") {
        convertedCurrency.innerHTML = new Intl.NumberFormat("es-ES", {
            style: "currency",
            currency: "EUR"
        }).format(valuesInput / euroDay)
    }

    currencyValueToBeConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valuesInput)

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dolar americano"
        currencyImg.src = "./assets/dolar-usa.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    convertValues()
    
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)