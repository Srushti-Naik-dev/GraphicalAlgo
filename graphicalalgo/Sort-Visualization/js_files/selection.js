async function selection(){
    console.log('In selection()');
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length; i++){
        console.log('In ith loop');
        let min_index = i;
        ele[i].style.background = 'blue';
        for(let j = i+1; j < ele.length; j++){
            console.log('In jth loop');
            ele[j].style.background = 'red';

            await waitforme(delay);
            if(parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)){
                console.log('In if condition height comparision');
                if(min_index !== i){
                    ele[min_index].style.background = 'lightblue';
                }
                min_index = j;
            } 
            else{
                ele[j].style.background = 'lightblue';
            }   
        }
        await waitforme(delay);
        swap(ele[min_index], ele[i]); 
        ele[min_index].style.background = 'cyan';
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

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    disableCustomArrayBtn();
    await selection();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    enableCustomArrayBtn();
});