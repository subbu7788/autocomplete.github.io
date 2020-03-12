autocom();
function autocom(){
let elements = document.querySelectorAll('input');
[].slice.call(elements).forEach(function(ele) {  
if(ele.type ==='email' || ele.type ==='text' || ele.type ==='image' || ele.type ==='date' || ele.type ==='datetime-local' || ele.type ==='month' || ele.type ==='number' || ele.type ==='password' || ele.type ==='tel' || ele.type ==='url' || ele.type ==='week' ){
    if(ele.autocomplete===""){  
        var dt = new Date();    
        var ids = "id"+dt.getTime()+ "_"+ Math.floor(Math.random()*1000);       
      ele.style.outline="#af4a00 solid 5px"    ;                        
ele.insertAdjacentHTML("beforeBegin"," <br><div style='color:#af4a00;position:relative;bottom:5px;font-weight:700;background-color: white'> autocomplete attribute not provided   <button style='color: rgba(0,0,0,.8);border: 1px solid #999;background-color: #e6e6e6;border-radius: 2px;' onclick=\"copytext('"+ids +"');\" > Copy Code</button></div>  ");
ele.insertAdjacentHTML("afterEnd"," <br>  <textarea  type='hidden' style='display:none' id=  '"+ids +"'>" + ele.outerHTML+"</textarea> ");
    }
    else{
        var dt = new Date();
        var rn = Math.random() * 1000;
        var ids = "id"+dt.getTime()+ "_"+Math.floor(Math.random()*1000);  
        ele.style.outline="#af4a00 solid 5px" ;                           
ele.insertAdjacentHTML("beforeBegin", " <br><div style='color:#af4a00;position:relative;bottom:5px;font-weight:700;background-color: white'> autocomplete='"+ ele.autocomplete+"'  <button style='color: rgba(0,0,0,.8);border: 1px solid #999;background-color: #e6e6e6;border-radius: 2px;' onclick=\"copytext('"+ids +"');\" > Copy Code</button></div> ");
ele.insertAdjacentHTML("afterEnd"," <br>  <textarea  type='hidden' style='display:none' id=  '"+ids +"'>" + ele.outerHTML+"</textarea> ");
    }
    }
});
}

function copytext(id){
  var copyElement =document.querySelector('#'+ id +''); 
  copyElement.removeAttribute('style');
      copyElement.select();
    document.execCommand('copy');
    copyElement.style.display = 'none';
    event.preventDefault();
}
