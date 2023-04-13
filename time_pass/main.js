let form=document.getElementById('my-form');

form.addEventListener('submit', onClick)

function onClick(e){
    e.preventDefault();

    let name1=document.getElementById('name').value;
    let email1=document.getElementById('email').value;

    let my_obj={
        name:name1,
        email:email1
    }
    let my_obj_serial=JSON.stringify(my_obj);
    localStorage.setItem(name1,my_obj_serial);

}