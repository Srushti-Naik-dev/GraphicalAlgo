async function partitionLomuto(ele, l, r){
    console.log('In partitionLomuto()');
    let i = l - 1;
    //pivot element
    ele[r].style.background = 'red';
    for(let j = l; j <= r - 1; j++){
        console.log('In partitionLomuto for j');
        ele[j].style.background = 'blue';
        await waitforme(delay);

        if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){
            console.log('In partitionLomuto for j if');
            i++;
            swap(ele[i], ele[j]);
            ele[i].style.background = 'lightblue';
            if(i != j) ele[j].style.background = 'lightblue';
            await waitforme(delay);
        }
        else{
            ele[j].style.background = 'white';
        }
    }
    i++; 
    await waitforme(delay);
    swap(ele[i], ele[r]); 
    console.log(`i = ${i}`, typeof(i));
    ele[r].style.background = 'white';
    ele[i].style.background = 'lightgreen';

    await waitforme(delay);
    for(let k = 0; k < ele.length; k++){
        if(ele[k].style.background != 'lightgreen')
            ele[k].style.background = 'lightblue';
    }

    return i;
}

async function quickSort(ele, l, r){
    console.log('In quickSort()', `l=${l} r=${r}`, typeof(l), typeof(r));
    if(l < r){
        let pivot_index = await partitionLomuto(ele, l, r);
        await quickSort(ele, l, pivot_index - 1);
        await quickSort(ele, pivot_index + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l <ele.length && r <ele.length){
            ele[r].style.background = 'lightgreen';
            ele[l].style.background = 'lightgreen';
        }
    }
    array = [];
    for (let i = 0; i < ele.length; i++) {
        array.push(parseInt(ele[i].style.height) / 2); 
    }

    // Display sorted array values
    const arrayValues = document.querySelector("#arrayValues");
    arrayValues.innerHTML = `Sorted Array : ${array.join(", ")}`;
}


const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    disableCustomArrayBtn();
    await quickSort(ele, l, r);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    enableCustomArrayBtn();
});