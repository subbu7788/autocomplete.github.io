autocom();
function autocom(){
let elements = document.querySelectorAll('input');
[].slice.call(elements).forEach(function(ele) {  
if(ele.type !=='hidden'){ 
    if(ele.autocomplete==""){  
        var dt = new Date();    
        var ids = "id"+dt.getTime()+ "_"+ Math.floor(Math.random()*1000);       
      ele.style.outline="#af4a00 solid 5px"    ;                        
ele.insertAdjacentHTML("beforeBegin"," <br><div style='color:#af4a00;position:relative;bottom:5px;font-weight:700'> autocomplete attribute not provided   <button onclick=\"copytext('"+ids +"');\" > Copy Code</button></div>  ");
ele.insertAdjacentHTML("afterEnd"," <br>  <textarea  type='hidden' style='display:none' id=  '"+ids +"'>" + ele.outerHTML+"</textarea> ");
    }
    else{
        var dt = new Date();
        var rn = Math.random() * 1000;
        var ids = "id"+dt.getTime()+ "_"+Math.floor(Math.random()*1000);  
        ele.style.outline="#af4a00 solid 5px" ;                           
ele.insertAdjacentHTML("beforeBegin", " <br><div style='color:#af4a00;position:relative;bottom:5px;font-weight:700'> autocomplete='"+ ele.autocomplete+"'  <button onclick=\"copytext('"+ids +"');\" > Copy Code</button></div> ");
ele.insertAdjacentHTML("afterEnd"," <br>  <textarea  type='hidden' style='display:none' id=  '"+ids +"'>" + ele.outerHTML+"</textarea> ");
    }
    }
});
}