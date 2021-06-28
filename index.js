var form = document.getElementById('form');
var list = document.getElementById('items');
var search = document.getElementById('filter');


//form event
form.addEventListener('submit', addItem)

//list event
list.addEventListener('click', deleteItem)

//search event
search.addEventListener('keyup', filterItem)


function addItem(e){
    e.preventDefault();
    var newInput = document.getElementById('input-item').value;
    var li = document.createElement('li')
    li.className = "list-items"

    li.appendChild(document.createTextNode(newInput))


    var deleteBtn = document.createElement('button')
    deleteBtn.className = "delete"
    deleteBtn.appendChild(document.createTextNode(' X'));


    li.appendChild(deleteBtn);
    list.appendChild(li);



}

function deleteItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are you sure you want to proceed?")){
            var li = e.target.parentElement;
            list.removeChild(li)
        }
    }
}


function filterItem(e){
    var searchText = e.target.value.toLowerCase();
    
    var items = document.getElementsByTagName('li')

    //converting HTML collect to Array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;

        if(itemName.toLowerCase().indexOf(searchText) != -1){
            item.style.display = "block"
        }
        else{
            item.style.display = "none"
        }
    })

}