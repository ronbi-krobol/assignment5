

document.getElementById("donate-now").addEventListener('click', function (event) {
    event.preventDefault();

    document.getElementById('history-details').classList.add('hidden')

    const balance = document.getElementById("account-balance").innerText
    const balanceNumber = parseFloat(balance)

    const moneyInput = document.getElementById('addMoney1').value
    const moneyInputNumber = parseFloat(moneyInput)

    if (isNaN(moneyInputNumber) || moneyInputNumber <= 0) {
        alert('Please enter a valid donation amount');
        return;
    }


    if (moneyInputNumber <= balanceNumber) {
        const p = document.createElement('p')
        const date = new Date();
        p.innerText = `${moneyInputNumber} Taka is donated for Flood at Noakhali
    
        Date:  ${date}`
        p.classList.add('donation-message')
        document.getElementById("donation-history-details").appendChild(p)



        const donationNoakhali = document.getElementById("donation1").innerText
        const donationNoakhaliNumber = parseFloat(donationNoakhali)

        const newMoney = donationNoakhaliNumber + moneyInputNumber
        document.getElementById("donation1").innerText = newMoney



        const newBalance = balanceNumber - moneyInputNumber

        document.getElementById("account-balance").innerText = newBalance

        const modalMessage = document.getElementById('modal-message');
        modalMessage.innerText = `You have donated ${moneyInputNumber} Taka for Humankind`;
        document.getElementById('my_modal_1').showModal();
    } 
    
    else {
        alert('You dont have enough money to donate');
    }


})

document.getElementById("donate-now2").addEventListener('click', function (event) {
    event.preventDefault();

    document.getElementById('history-details').classList.add('hidden')

    const balance2 = document.getElementById("account-balance").innerText
    const balanceNumber2 = parseFloat(balance2)

    const moneyInput2 = document.getElementById('addMoney2').value
    const moneyInputNumber2 = parseFloat(moneyInput2)

    if (isNaN(moneyInputNumber2) || moneyInputNumber2 <= 0) {
        alert('Please enter a valid donation amount');
        return;
    }

    if (moneyInputNumber2 <= balanceNumber2) {
        const p = document.createElement('p')
        const date = new Date();
        p.innerText = `${moneyInputNumber2} Taka is donated for Flood at Feni
    
    Date:  ${date}`
        p.classList.add('donation-message')

        document.getElementById("donation-history-details").appendChild(p)

        const donationFeni = document.getElementById("donation2").innerText
        const donationFeniNumber = parseFloat(donationFeni)

        const newMoney2 = donationFeniNumber + moneyInputNumber2
        document.getElementById("donation2").innerText = newMoney2



        const newBalance2 = balanceNumber2 - moneyInputNumber2

        document.getElementById("account-balance").innerText = newBalance2

        const modalMessage = document.getElementById('modal-message');
        modalMessage.innerText = `You have donated ${moneyInputNumber2} Taka for Humankind`;
        document.getElementById('my_modal_1').showModal();

    }

    else {
        alert('You Dont Have Money To Donate')
    }



})

document.getElementById("donate-now3").addEventListener('click', function (event) {
    event.preventDefault();

    document.getElementById('history-details').classList.add('hidden')

    const balance3 = document.getElementById("account-balance").innerText
    const balanceNumber3 = parseFloat(balance3)

    const moneyInput3 = document.getElementById('addMoney3').value
    const moneyInputNumber3 = parseFloat(moneyInput3)

    if (isNaN(moneyInputNumber3) || moneyInputNumber3 <= 0) {
        alert('Please enter a valid donation amount');
        return;
    }


    if (moneyInputNumber3 <= balanceNumber3) {

        const p = document.createElement('p')
        const date = new Date();

        p.innerText = `${moneyInputNumber3} Taka is donated for Aid for Injured in the Quota Movement
    
    Date:  ${date}`

        p.classList.add('donation-message')

        document.getElementById("donation-history-details").appendChild(p)

        const donationQuota = document.getElementById("donation3").innerText
        const donationQuotaNumber = parseFloat(donationQuota)

        const newMoney3 = donationQuotaNumber + moneyInputNumber3
        document.getElementById("donation3").innerText = newMoney3



        const newBalance3 = balanceNumber3 - moneyInputNumber3

        document.getElementById("account-balance").innerText = newBalance3

        const modalMessage = document.getElementById('modal-message');
        modalMessage.innerText = `You have donated ${moneyInputNumber3} Taka for Humankind`;
        document.getElementById('my_modal_1').showModal();
    }

    else {
        alert('You Dont Have Money To Donate')
    }

})



// function showSectionById(id){
// document.getElementById('donation-button').classList.add('hidden')
// document.getElementById('history-button').classList.add('hidden')

// document.getElementById(id).classList.remove('hidden')
// }



document.getElementById('donation-button').addEventListener('click', function () {
    document.getElementById('donation-details').classList.remove('hidden')
    document.getElementById('history-details').classList.add('hidden')

})

document.getElementById('history-button').addEventListener('click', function () {

    document.getElementById('donation-details').classList.add('hidden')
    document.getElementById('history-details').classList.remove('hidden')
})



