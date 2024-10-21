async function insertion(){
    console.log('In insertion()');
    const ele = document.querySelectorAll(".bar");
    ele[0].style.background = 'lightgreen';
    for(let i = 1; i < ele.length; i++){
        console.log('In ith loop');
        let j = i - 1;
        let key = ele[i].style.height;
        ele[i].style.background = 'lightblue';

        await waitforme(delay);

        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
            console.log('In while loop');
            ele[j].style.background = 'lightblue';
            ele[j + 1].style.height = ele[j].style.height;
            j--;

            await waitforme(delay);
            for(let k = i; k >= 0; k--){
                ele[k].style.background = 'lightgreen';
            }
        }
        ele[j + 1].style.height = key;
        ele[i].style.background = 'lightgreen';
    }
    array = [];
    for (let i = 0; i < ele.length; i++) {
        array.push(parseInt(ele[i].style.height) / 2); 
    }

    // Display sorted array values
    const arrayValues = document.querySelector("#arrayValues");
    arrayValues.innerHTML = `Sorted Array : ${array.join(", ")}`;
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    disableCustomArrayBtn();
    await insertion();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    enableCustomArrayBtn();
});


