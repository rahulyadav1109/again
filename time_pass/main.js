const nameInput=document.getElementById('name');
const emailInput=document.getElementById('email');

const msg=document.getElementById('msg');
const myForm=document.getElementById('my-form');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e)
{
    e.preventDefault();

    localStorage.setItem('name',nameInput.value);
    localStorage.setItem('email',emailInput.value);
    console.log(emailInput.value)

}

var a = localStorage.getItem('name');
console.log(typeof(a));