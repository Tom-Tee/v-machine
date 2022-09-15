  const coinInput = document.querySelectorAll(".cents")
  const cardInput = document.querySelector("#card-payment")
  const cardValue = document.querySelector("#card-value")
  const resetBtn = document.querySelector(".reset-btn")
  const allItems = document.querySelectorAll(".can")
  const totalAmount = document.querySelector(".total-amount")
  const alert = document.querySelector(".alert")
  let balanceInCents = 0;

  let inventory = {
    Red : {
      Amount : 5,
      Price: 150
    },
    Blue : {
      Amount : 5,
      Price: 150
    },
    Purple : {
      Amount : 5,
      Price: 150
    },
    Yellow : {
      Amount : 5,
      Price: 150
    },
    Orange : {
      Amount : 5,
      Price: 150
    },
    Pink : {
      Amount : 5,
      Price: 150
    },
    Green : {
      Amount : 5,
      Price: 150
    },
    Brown : {
      Amount : 5,
      Price: 150
    },
    White : {
      Amount : 5,
      Price: 150
    },
    Black : {
      Amount : 5,
      Price: 150
    }
  }

  resetBtn.addEventListener("click", () => {
    location.reload();
  })

  function vendingMachine() {
    purchaseFromVendingMachine()
    addMoneyToVendingMachine()
  }

  function purchaseFromVendingMachine(){
    allItems.forEach(can => {
      can.addEventListener("click", e => {
        calculateProductDetail(e.target.innerHTML)
      })
    })
  }

  function calculateProductDetail(canColor) {
    let price = inventory[canColor].Price
    let amount = inventory[canColor].Amount
    if (amount > 0) {
      vendingMachineTransaction(price, canColor)
    } else {
      alert.innerHTML = '<h3>Sold Out! Please select another option</h3>'
    }
  }

  function vendingMachineTransaction (canPrice, canColor) {
    if (balanceInCents > 0 && canPrice === balanceInCents) {
      inventory[canColor].Amount -= 1
      alert.innerHTML = `<h3 class="alert">You Bought the ${canColor}</h3>`
      balanceInCents = 0;
      displayVendingMachineAmount()
      displayInventory(canColor)
    } else {
      alert.innerHTML = `<h3 class="alert">Please use exact change</h3>`
      balanceInCents = 0
      displayVendingMachineAmount()
    }
  }

  function addMoneyToVendingMachine () {
    coinInput.forEach(button => {
      button.addEventListener("click", (e) => {
        insertAmountToVendingMachine(parseInt(e.target.innerHTML))
      })
    })
    cardInput.addEventListener("click", () => insertAmountToVendingMachine(parseInt(cardValue.value)))
  }

  function insertAmountToVendingMachine(amount) {
    if (isNaN(amount) || amount <  0) {
      alert.innerHTML = `<h3 class="alert">You must use positive numbers</h3>`
    } else {
    balanceInCents += parseInt(amount)
    displayVendingMachineAmount()
    }
  }

  function displayVendingMachineAmount() {
  const dollars = (balanceInCents / 100).toLocaleString("en-US", {style:"currency", currency:"USD"});
    totalAmount.innerHTML = dollars
  }

  function displayInventory(color) {
    const updatedAmount = inventory[color].Amount
    allItems.forEach(value => {
        if (value.innerHTML == color) {
          value.parentElement.nextElementSibling.innerHTML = updatedAmount
        }
    })
    value.parentElement.nextElementSibling.innerHTML
  }

vendingMachine();
