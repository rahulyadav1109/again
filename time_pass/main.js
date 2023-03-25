const nameInput=document.getElementById('name');
const emailInput=document.getElementById('email');

const msg=document.getElementById('msg');
const myForm=document.getElementById('my-form');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e)
{
    e.preventDefault();

    const name=e.target.name.value;
    const email=e.target.email.value;
    
    let obj={
        name,email
    }

    console.log(obj)
    localStorage.setItem(obj.email,JSON.stringify(obj))

    let x=document.getElementById('users');
    let y=document.createElement('li');
    y.textContent=obj.name+ " " + obj.email +' ';
    x.appendChild(y);
}