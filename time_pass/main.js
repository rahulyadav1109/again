let form=document.getElementById('my-form');

form.addEventListener('submit', onClick)

function onClick(e){
    e.preventDefault();

    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;

    localStorage.setItem(name,email);

}