function calculateShipping() {
    const inputElement = document.querySelector('.cost-input')
    let cost = Number(inputElement.value)

    if (cost < 40) {
        cost += 10
    }

    document.querySelector('.total-cost').innerHTML = `${cost}`
}

function handleCostKeydown(event) {
    if (event.key === 'Enter') {
        calculateShipping();
    }
}