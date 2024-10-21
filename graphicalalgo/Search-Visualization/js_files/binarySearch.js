async function binary(target) {
    console.log('In binary search()');
    const ele = document.querySelectorAll(".bar");
    let start=0;
    let end=ele.length-1;
    while(start<=end){
        let mid=Math.floor(start+(end-start)/2);
        await waitforme(delay);
        ele[mid].style.background='red';
        
        if(parseInt(ele[mid].style.height)===target){
            await waitforme(delay);
            ele[mid].style.background='green';
            document.getElementById('searchResult').innerHTML = `Element found at index : ${mid+1}`;
            return mid;
        }else if(target<parseInt(ele[mid].style.height)){
            end=mid-1;
        }else{
            start=mid+1;
        }
        await waitforme(delay);
        ele[mid].style.background = 'lightblue';
    }
    document.getElementById('searchResult').innerHTML = "Element not found";
    // If the element is not found
    for (let i = 0; i < ele.length; i++) {
        ele[i].style.background = 'lightblue';
    }
        return -1;
}

async function bubbleSort() {
    console.log('In bubbleSort()');
    const ele = document.querySelectorAll(".bar");
    for (let i = 0; i < ele.length - 1; i++) {
        for (let j = 0; j < ele.length - i - 1; j++) {
            ele[j].style.background = 'cyan';
            ele[j + 1].style.background = 'cyan';
            if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
                await waitforme(delay);
                swap(ele[j], ele[j + 1]);
            }
            ele[j].style.background = 'lightblue';
            ele[j + 1].style.background = 'lightblue';
        }
        ele[ele.length - 1 - i].style.background = 'lightgreen';
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

const binSearchbtn = document.querySelector(".binarySearch");
binSearchbtn.addEventListener('click', async function(){
    const targetInput=document.getElementById('search');
    const target=parseInt(targetInput.value);
    if (!isNaN(target)) {
        disableSearchingBtn();
        disableSizeSlider();
        disableNewArrayBtn();
        disableCustomArrayBtn();
        await bubbleSort();
        const index=await binary(target*2);
        enableSearchingBtn();
        enableSizeSlider();
        enableNewArrayBtn();
        enableCustomArrayBtn();
    } else {
        alert('Please enter a valid number');
    }
});
