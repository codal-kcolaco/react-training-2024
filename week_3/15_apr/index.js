const para = document.querySelectorAll('p')
para.forEach(element => {
    elementText = element.textContent
    if (elementText.includes("error")) {
        element.classList.add('error')
    }
    else if (elementText.includes("success")) {
        element.classList.add('success')
    }
});