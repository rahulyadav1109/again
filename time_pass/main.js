let form=document.getElementById('my-form');
let ul=document.createElement('ul');
ul.id="listofusers";
form.parentNode.insertBefore(ul,form.nextSibling);



form.addEventListener('submit', onClick)

function onClick(e){
    e.preventDefault();

    let name1=document.getElementById('name').value;
    let email1=document.getElementById('email').value;
    console.log(name1)
    let my_obj={
        name:name1,
        email:email1
    }
    let my_obj_serial=JSON.stringify(my_obj);
    localStorage.setItem(name1,my_obj_serial);

    let pe1=document.getElementById('listofusers');
    let childele=document.createElement('li');
    childele.textContent=name1+' '+email1;
    pe1.appendChild(childele);

    //add delete buttin
    let button=document.createElement('button');
    button.innerText='delete';

    childele.appendChild(button);

    button.addEventListener('click',function(){
        childele.remove();
        localStorage.removeItem(name1);
    })

    //add edit button
    let edit=document.createElement('button');
    edit.innerText='Edit';
    childele.appendChild(edit);
    let n=document.getElementById('name');
    let em=document.getElementById('email');

    edit.addEventListener('click',function(){
        n.value=name1;
        em.value=email1;
        localStorage.removeItem(name1);
        childele.remove();
    })


}