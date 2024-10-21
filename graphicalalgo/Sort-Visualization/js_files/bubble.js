async function bubble() {
    console.log('In bubble()');
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length-1; i++){
        console.log('In ith loop');
        for(let j = 0; j < ele.length-i-1; j++){
            console.log('In jth loop');
            ele[j].style.background = 'cyan';
            ele[j+1].style.background = 'cyan';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                console.log('In if condition');
                await waitforme(delay);
                swap(ele[j], ele[j+1]);
            }
            ele[j].style.background = 'lightblue';
            ele[j+1].style.background = 'lightblue';
        }
        ele[ele.length-1-i].style.background = 'lightgreen';
    }
    ele[0].style.background = 'lightgreen';
    array = [];
    for (let i = 0; i < ele.length; i++) {
        array.push(parseInt(ele[i].style.height) / 2); 
    }

    // Display sorted array values
    const arrayValues = document.querySelector("#arrayValues");
    arrayValues.innerHTML = `Sorted Array: ${array.join(", ")}`;
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    disableCustomArrayBtn();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    enableCustomArrayBtn();
});
