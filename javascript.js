var addtitle = document.getElementById('add_title')
var addnotes = document.getElementById('add_notes')
var container = document.querySelector(".container")
var addbtn = document.getElementById('add_notes_btn')
var cancel = document.getElementById('cancel_btn');
var addinputfield= document.getElementById('add_inputfield')

addbtn.addEventListener("click",function(){
    var div = document.createElement('div')
    div.setAttribute("class","book")
    div.innerHTML= `<h1>${addtitle.value}</h1>
    <p>${addnotes.value}</p>
    <button onclick="remove(event)">delete</button>`
    container.append(div)
    document.getElementById('form').style.display="none";
    document.getElementById("add_title").value='';
    document.getElementById("add_notes").value='';
})

function remove(event){
    event.target.parentElement.remove()
}
cancel.addEventListener("click",function(){
    document.getElementById("form").style.display="none";
    document.getElementById("add_title").value='';
    document.getElementById("add_notes").value='';
    
})
addinputfield.addEventListener("click",function(){
    document.getElementById('form').style.display="block";
})
