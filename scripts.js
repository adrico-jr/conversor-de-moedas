const convertButton = document.querySelector(".convert-currency")
const currencySelect = document.querySelector(".currency-select")
const currencyConvert = document.querySelector(".currency-convert")

function convertValues() {
    const valuesInput = document.querySelector(".values-input").value
    const currencyValueToBeConverted = document.querySelector(".currency-value")
    const convertedCurrency = document.querySelector(".converted-currency-value")
    const currencyValue = document.querySelector(".currency-value")

    const dolarDay = 5.51
    const euroDay = 6.36
    const libraDay = 7.54
    const ieneDay = 0.038
    const bitcoinDay = 609669.02
    const realDay = 1
    const dolarComparedDolar = 1
    const euroComparedDolar = 1.16
    const libraComparedDolar = 1.36

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

    if (currencySelect.value == "libra") {
        convertedCurrency.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valuesInput / libraDay)
    }

    if (currencySelect.value == "iene") {
        convertedCurrency.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(valuesInput / ieneDay)
    }

    if (currencySelect.value == "real") {
        convertedCurrency.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valuesInput / realDay)
    }

    if (currencySelect.value == "bitcoin") {
        convertedCurrency.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(valuesInput / bitcoinDay)
    }

    currencyValueToBeConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valuesInput)






    if (currencyConvert.value == "dolar-convert") {
        currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(valuesInput)
    }

    if (currencyConvert.value == "dolar-convert" && currencySelect.value == "dolar") {
        currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valuesInput)
        convertedCurrency.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valuesInput / dolarComparedDolar)
    }

    if (currencyConvert.value == "dolar-convert" && currencySelect.value == "real") {
        currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valuesInput)
        convertedCurrency.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valuesInput / dolarDay)
    }

    if (currencyConvert.value == "dolar-convert" && currencySelect.value == "euro") {
        currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valuesInput)
        convertedCurrency.innerHTML = new Intl.NumberFormat("es-ES", {
            style: "currency",
            currency: "EUR"
        }).format(valuesInput / euroComparedDolar)
    }

    if (currencyConvert.value == "dolar-convert" && currencySelect.value == "libra") {
        currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valuesInput)
        convertedCurrency.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valuesInput / libraComparedDolar)
    }

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")
    const currency = document.getElementById("currency-one")
    const imageConvert = document.querySelector(".image-convert")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dolar americano"
        currencyImg.src = "./assets/dolar-usa.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"
    }

    if (currencySelect.value == "iene") {
        currencyName.innerHTML = "Iene"
        currencyImg.src = "./assets/iene.png"
        currencyImg.style.width = "50px"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImg.src = "./assets/real.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }


    if (currencyConvert.value == "dolar-convert") {
        currency.innerHTML = "Dolar americano"
        imageConvert.src = "./assets/dolar-usa.png"
    }

    if (currencyConvert.value == "real-convert") {
        currency.innerHTML = "Real"
        imageConvert.src = "./assets/real.png"
    }

    if (currencyConvert.value == "euro-convert") {
        currency.innerHTML = "Euro"
        imageConvert.src = "./assets/euro.png"
    }

    if (currencyConvert.value == "libra-convert") {
        currency.innerHTML = "Libra"
        imageConvert.src = "./assets/libra.png"
    }

    if (currencyConvert.value == "iene-convert") {
        currency.innerHTML = "Iene"
        imageConvert.src = "./assets/iene.png"
        imageConvert.style.width = "50px"
    }

    if (currencyConvert.value == "bitcoin-convert") {
        currency.innerHTML = "Bitcoin"
        imageConvert.src = "./assets/bitcoin.png"
    }


    convertValues()
}

currencyConvert.addEventListener("change", changeCurrency)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
