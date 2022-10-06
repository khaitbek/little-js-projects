// converter
const currencyForm = document.querySelector("#primaryForm")
const currencyUserBudgetInput = document.querySelector("#userBudget")
const currencyUserSelect = document.querySelector("#userSelect")
const resultInput = document.querySelector("#currencyResult")

currencyForm.addEventListener("submit",function(e){
    e.preventDefault()
    const currencyResult = currencyUserBudgetInput.valueAsNumber * Number(currencyUserSelect.value)
    resultInput.value = `${currencyResult} so'm`
    currencyUserBudgetInput.value = ""
})

// random number
const randomNumberInput = document.querySelector("#randomNumber")
const randomNumberForm = document.querySelector("#randomForm")
const numOfGames = document.querySelector("#num_of_games")
const result = document.querySelector("#randomResult")
const randomBtn = document.querySelector("#randomBtn")
let MAX_NUM_OF_GAMES = 6

randomNumberForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const computerChoice = Math.round(Math.random() * 1000)
    const userGuess = randomNumberInput.valueAsNumber
    MAX_NUM_OF_GAMES--;
    numOfGames.textContent = `${MAX_NUM_OF_GAMES} tries left`
    randomNumberInput.value = ""
    const isEqual = computerChoice === userGuess
    if(isEqual){
        result.textContent = "Yutdingiz, winner!"
        randomNumberInput.setAttribute("disabled","")
        randomBtn.setAttribute("disabled","")
        return
    }
    if(MAX_NUM_OF_GAMES === 0 && !isEqual){
        result.textContent = "TUGADI"
        result.classList.add("bg-danger")
        randomNumberInput.setAttribute("disabled","")
        randomBtn.setAttribute("disabled","")
        return
    }
    if(!isEqual){
        result.textContent = "Kalla qo'ydingiz, loser!"
        return
    }
})