async function linear(target) {
    console.log('In linear search()');
    const ele = document.querySelectorAll(".bar");
    for (let i = 0; i < ele.length; i++) {
        let val = parseInt(ele[i].style.height);
        ele[i].style.background = 'blue';
        await waitforme(delay);
        if (val === target) {
            ele[i].style.background = 'green';
            document.getElementById('searchResult').innerHTML = `Element found at index : ${i+1}`;
            return i + 1;
        }
        ele[i].style.background = 'lightblue';
    }
    document.getElementById('searchResult').innerHTML = "Element not found";
    // If the element is not found
    for (let i = 0; i < ele.length; i++) {
        ele[i].style.background = 'lightblue';
    }
    return -1;
}

const linSearchbtn = document.querySelector(".linearSearch");
linSearchbtn.addEventListener('click', async function() {
    const targetInput = document.getElementById('search');
    const target = parseInt(targetInput.value);
    if (!isNaN(target)) {
        disableSearchingBtn();
        disableSizeSlider();
        disableNewArrayBtn();
        disableCustomArrayBtn();
        await linear(target * 2); // Multiplied by 2 to match bar heights
        enableSearchingBtn();
        enableSizeSlider();
        enableNewArrayBtn();
        enableCustomArrayBtn();
    } else {
        alert('Please enter a valid number');
    }
});
