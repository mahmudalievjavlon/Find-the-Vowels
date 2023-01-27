let elCount = document.querySelector('.count');
let elInput = document.querySelector('.input');
let elForm = document.querySelector('.form');
arr = ['a','e','i','o','u','A','E','I','O','U'];
let count = 0

elForm.addEventListener("submit",(e) =>{
    e.preventDefault()
    let inputVal = elInput.value.trim();
    
    for(let i = 0; i<inputVal.length; i++){
        for(let j = 0; j<inputVal.length; j++){
            if(inputVal[i] == arr[j])
            count++
        }
    }
    elCount.textContent = `Vowels:${count}`
});
