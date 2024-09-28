const balance = document.getElementById("account-balance").innerText
const balanceNumber = parseFloat(balance)

const donationNoakhali = document.getElementById("donation1").innerText
const donationNoakhaliNumber = parseFloat(donationNoakhali)

document.getElementById("donate-now").addEventListener('click', function(event){
    event.preventDefault();
    
    const moneyInput = document.getElementById('addMoney1').value
    const moneyInputNumber = parseFloat(moneyInput)

    const newMoney = donationNoakhaliNumber+ moneyInputNumber
    document.getElementById("donation1").innerText = newMoney

    const newBalance = balanceNumber-moneyInputNumber

    document.getElementById("account-balance").innerText = newBalance




})