const add=document.querySelector(".add");
const input=document.querySelector(".input");
const list=document.querySelector(".list");

let newButton;
let newDiv;
let newLabel;
let todolist=[];
todolist=loadFromLocalStorage();

function addTask(){
    if(input.value.trim()!=""){
        newButton=document.createElement("button");
        newButton.innerText="DELETE";
        newButton.addEventListener("click",deleteDiv);
        newDiv=document.createElement("div");
        newLabel=document.createElement("label");
        newLabel.innerText=input.value;
        todolist.push(newLabel.innerText);   
        newDiv.append(newLabel);
        newDiv.append(newButton);
        list.append(newDiv);
        input.value="";
        localStorage.clear();
        localStorage.removeItem("todo");
        localStorage.setItem("todo",JSON.stringify(todolist));
    }
    
}
add.addEventListener("click",(ev)=>{
    addTask();
});
function loadFromLocalStorage(){
    let arr=[];
    if(localStorage.getItem("todo")!=null){
        console.log("here");
        arr=JSON.parse(localStorage.getItem("todo") );
        if(JSON.parse(localStorage.getItem("todo").length==0)){
            arr=[];
        }
        console.log(arr);
    }
    for(task of arr){
        newButton=document.createElement("button");
        newButton.innerText="DELETE";
        newButton.addEventListener("click",deleteDiv);
        newDiv=document.createElement("div");
        newLabel=document.createElement("label");
        newLabel.innerText=task;
        newDiv.append(newLabel);
        newDiv.append(newButton);
        list.append(newDiv);
    }
    return arr;

}
function displayFromList(){
    for(task of todolist){
        newDiv=document.createElement("div");
        newLabel=document.createElement("Label");
        newButton=document.createElement("button");
        newButton.innerText="DELETE";
        newLabel.innerText=task;
        newButton.addEventListener("click",deleteDiv);
        newDiv.append(label);
        newDiv.append(button);
        list.append(newDiv);
    }
}
function deleteDiv(ev){
    list.removeChild(ev.target.parentElement);
    todolist.splice(getListIndex(ev),1);
    localStorage.clear();
    localStorage.removeItem("todo");
    localStorage.setItem("todo",JSON.stringify(todolist)); 
}
function getListIndex(ev){
    let index=-1;
    for(let i=0;i<list.children.length;i++){
        if(ev.target==list.children[i]){
            index=i;
            console.log(i);        
        }
    }
    return index;
}