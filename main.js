var form=document.getElementById('addForm');
let itemList=document.getElementById('items');
let filter=document.getElementById('filter');

form.addEventListener('submit', additem);

itemList.addEventListener('click', removeItem);

filter.addEventListener('keyup', filterItem);

var liItem=document.getElementsByClassName('list-group-item');
for(let i=0;i<liItem.length;i++){
    let newbtn=document.createElement('button');
    newbtn.className="btn btn-sm btn-primary edit float-right"
    newbtn.appendChild(document.createTextNode("edit"));
    liItem[i].appendChild(newbtn);

}

function additem(e){
    e.preventDefault();

    // get input value
    let newItem=document.getElementById('item').value;
    let newItem2=document.getElementById('description').value;
    // Create new li element

    let li=document.createElement('li');
    li.className='list-group-item';

    // Add text node with input value

    li.appendChild(document.createTextNode(newItem2+' '));
    li.appendChild(document.createTextNode(newItem));

    // Create delete button

    var button=document.createElement('button');

    button.className='btn btn-danger btn-sm float-right delete';
    button.appendChild(document.createTextNode('X'));
    var btn2=document.createElement('button');
    btn2.appendChild(document.createTextNode("Edit"));
    btn2.className='btn btn-sm btn-primary edit float-right';
    li.appendChild(btn2);
    li.appendChild(button);

    itemList.appendChild(li);
    



}

function removeItem(e){
    // e.preventDefault();
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure')){
            var li=e.target.parentElement;
            itemList.removeChild(li);

        }
    }

}

function filterItem(e){
    e.preventDefault();

    var text=e.target.value.toLowerCase();
    var items= itemList.getElementsByTagName('li');
    

    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        var itemName2=item.childNodes[1].textContent;

        if(itemName.toLowerCase().indexOf(text) != -1 || itemName2.toLowerCase().indexOf(text) != -1){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    })
}

// Create one more input
let new_input=document.createElement('input');
new_input.className='form-control mr-2';
new_input.type='text';
new_input.id='description';
let get_2=document.getElementById('item');
form.insertBefore(new_input,get_2);

