class Book {
    constructor(title, author, status) {
        this.title = title;
        this.author = author;
        this.status = status;
    }
}



addBookToList();

function addBookToList()
{
    var readbook=0;
    var unreadbook=0;
    document.getElementById("book-list").innerHTML="";
let lib=new Array();
    lib=JSON.parse(localStorage.getItem("book"))?JSON.parse(localStorage.getItem("book")):[]
 
if(lib)
{
    
for(let i=0;i<lib.length;i++)
{
const row = document.createElement('tr');
row.innerHTML = `
        <td> ${lib[i].title} </td>
        <td> ${lib[i].author} </td>
        <td> ${lib[i].status} </td>
       
        <td> <button class="btn btn-info" onclick="deleteData(${i})">Delete</button></td>
    `;
    document.getElementById("book-list").appendChild(row);
   
    if( lib[i].status==="true"){
    readbook+=1;
    

    }else{
        unreadbook+=1;
        

    }
}
document.getElementById("readBook").innerHTML=readbook;
document.getElementById("unreadBook").innerHTML=unreadbook;
document.getElementById("allBook").innerHTML=lib.length;
console.log(readbook);
console.log(unreadbook);
console.log(lib.length);


}
//<td><a href="#" class="btn btn-danger btn-sm delete" onclick="deleteData('+${i}+')">X</a></td>

}
document.querySelector('.book-form').addEventListener('submit', (e) => {

    e.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
   // const status = document.querySelector('#status').value;
    var status=document.getElementById('status').checked?document.getElementById('status').value='true':'false';
    
    let lib=new Array();
    lib=JSON.parse(localStorage.getItem("book"))?JSON.parse(localStorage.getItem("book")):[]
    if (title === '' || author === '') {
        alert("Please fill in all fileds", "danger");
    } else {
        const book = new Book(title, author, status);
       
        lib.push(book);
        
        localStorage.setItem('book', JSON.stringify(lib));
                addBookToList();
                

    }
     
    // console.log(lib[1]);
    // console.log(lib[1].book);
    // console.log(lib[1].title);
    
});

function deleteData(index)
{
    
 let lib=new Array();
 lib=JSON.parse(localStorage.getItem("book"))?JSON.parse(localStorage.getItem("book")):[]
lib.splice(index,1)
localStorage.setItem("book",JSON.stringify(lib));
this.addBookToList();
}
function clearData()
{
  localStorage.clear();
  this.addBookToList();
}