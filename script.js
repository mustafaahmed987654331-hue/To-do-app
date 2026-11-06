var addBtn = document.getElementById("addBtn");
var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");
var completedList = document.getElementById("completedList");
addBtn.addEventListener("click",function(){
    if(taskInput.value.trim()===""){
        alert("Please enter a task");
        return;
    }
    var li=document.createElement("li");
   var taskText=document.createElement("span");
   taskText.innerText=taskInput.value;
   li.appendChild(taskText);

   var completeBtn=document.createElement("button");
   completeBtn.innerText="Complete";
   completeBtn.addEventListener("click",function(){
    completedList.appendChild(li);
    completeBtn.remove();
   });
   
   var deleteBtn=document.createElement("button");
   deleteBtn.innerText="Delete";
   deleteBtn.addEventListener("click",function(){
    li.remove();
   });
     
   taskList.appendChild(li)
   li.appendChild(deleteBtn);
   li.appendChild(completeBtn);

   taskInput.value=""
});