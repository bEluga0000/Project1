
// Creating Variables
const genBtn = document.querySelector(".generate-btn"),
copyBtn = document.querySelector(".copy-btn"),
checkBtn = document.querySelector(".check-btn"),
word = document.querySelector(".in-text"),
modal = document.querySelector(".modal"),
close = document.querySelector(".close"),
modalText = document.querySelector(".modal-text");

// alert(reverseLetters);

// add eventlistner for close
close.addEventListener("click",closeModal);
modal.addEventListener("click",closeModal);

// creating Open and Colsing Modal Function

function openModal()
{
    modal.style.display = 'block';
};

function closeModal()
{
    modal.classList.add("slide-up");
    setTimeout(()=>
    {
        modal.style.display = 'none';
        modal.classList.remove("slide-up");
    });
};


// Adding Event listner
genBtn.addEventListener("click",generate);

copyBtn.addEventListener("click",copyText);

checkBtn.addEventListener("click",checkPalindrome);

// Generate Function
function generate(e)
{
    e.preventDefault();
    let genWord = Math.random().toString(16).substring(2,8);
    word.value = '#'+genWord;
    document.body.style.backgroundColor = word.value;
    modalText.innerHTML =word.value+" is the color genrated";
    openModal();
}

function copyText(e)
{
    e.preventDefault();
    let letter = word.value;
    word.select();
    word.setSelectionRange(0,999999);
    document.execCommand("copy");
    modalText.innerHTML = word.value + " word is copied";
    copyBtn.innerHTML = "Copied";
    openModal();
    setTimeout(()=>
    {
        copyBtn.innerHTML = "copy";
    },2000);
};

function checkPalindrome(e)
{
    
    e.preventDefault();
    let letters = word.value.toLowerCase();
    let subLetters = letters.substring(0,letters.length);
    let reverseLetters = subLetters.split("").reverse().join("");
    
    
    if(letters == reverseLetters)
    {
        modalText.innerHTML = letters.toUpperCase() + " word is Palindrome";
        openModal();
    }
    else
    {
        modalText.innerHTML = letters.toUpperCase() + " word is not a palindrome";
        openModal();
    }
}

