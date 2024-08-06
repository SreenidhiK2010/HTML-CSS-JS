   var ul=document.getElementById("list")
   var input=document.getElementById("input")
   function add(){
      var li=document.createElement("li")
      li.innerHTML=input.value + "<button onclick='cancel(event)' class='but'>Completed</button>"+"<button onclick='deleteItem(event)' class='but'>Clear</button>"
      ul.append(li)
   }
   function deleteItem(event){

      event.target.parentElement.remove()

   }   
   function cancel(event){
      event.target.parentElement.style="text-decoration:line-through;color:black;"
      
   }

     
