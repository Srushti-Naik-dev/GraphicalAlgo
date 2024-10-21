function swap(el1, el2) {
    console.log('In swap()');
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}

function disableSearchingBtn(){
    document.querySelector(".binarySearch").disabled = true;
    document.querySelector(".linearSearch").disabled = true;
}

function enableSearchingBtn(){
    document.querySelector(".binarySearch").disabled = false;
    document.querySelector(".linearSearch").disabled = false;
}

function disableSizeSlider(){
    document.querySelector("#arr_sz").disabled = true;
}

function enableSizeSlider(){
    document.querySelector("#arr_sz").disabled = false;
}

function disableNewArrayBtn(){
    document.querySelector(".newArray").disabled = true;
}

function enableNewArrayBtn(){
    document.querySelector(".newArray").disabled = false;
}

function disableCustomArrayBtn(){
    document.querySelector("#setCustomArray").disabled = true;
}

function enableCustomArrayBtn(){
    document.querySelector("#setCustomArray").disabled = false;
}

function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

let arraySize = document.querySelector('#arr_sz');

arraySize.addEventListener('input', function(){
    console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value));
});

let delay = 260;

let delayElement = document.querySelector('#speed_input');

delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});

let array = [];

createNewArray();

function createNewArray(noOfBars = 40) {
    deleteBars();

    array = [];
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 250) + 1);
    }
    console.log(array);

    const bars = document.querySelector("#bars");
    const arrayValues = document.querySelector('#arrayValues');
    arrayValues.innerHTML = `Array: ${array.join(",")}`;
    
    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i] * 2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

function deleteBars() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function(){
    console.log("From newArray " + arraySize.value);
    console.log("From newArray " + delay);
    enableSearchingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
});

const customArrayBtn = document.querySelector("#setCustomArray");
customArrayBtn.addEventListener("click", function(){
    const customArrayInput = document.querySelector("#customArray").value;
    const customArray = customArrayInput.split(",").map(Number);
    createCustomArray(customArray);
});

function createCustomArray(customArray) {
    deleteBars();

    array = customArray;
    console.log(array);

    const bars = document.querySelector("#bars");
    const arrayValues = document.querySelector('#arrayValues');
    arrayValues.innerHTML = `Array: ${array.join(",")}`;

    for (let i = 0; i < array.length; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i] * 2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}
