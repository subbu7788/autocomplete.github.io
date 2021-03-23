    function autocom(){

        var script=document.createElement('script'); 
        script.type='text/javascript'; 
       
        document.head.appendChild(script);

        let elements = document.querySelectorAll('input');
        elements.forEach(ele =>{
            
            if(ele.type ==='email' || ele.type ==='text' || ele.type ==='image' || ele.type ==='date' || ele.type ==='datetime-local' || ele.type ==='month' || ele.type ==='number' || ele.type ==='password' || ele.type ==='tel' || ele.type ==='url'){ 
            console.log(ele,ele.autocomplete,!ele.getAttribute('autocomplete'));
            if(ele.getAttribute('autocomplete')==="" || !ele.getAttribute('autocomplete')){  
                var dt = new Date(); 
                
                var ids = "id"+dt.getTime()+ "_"+ Math.floor(Math.random()*1000);       
              ele.style.outline="#af4a00 solid 5px"                            
        ele.insertAdjacentHTML("beforeBegin"," <br><div style='color:#af4a00;position:relative;bottom:5px;font-weight:700'> autocomplete attribute not provided   <button onclick=\"copytext('"+ids +"');\" > Copy Code</button></div>  ");
        ele.insertAdjacentHTML("afterEnd"," <br>  <textarea  type='hidden' style='display:none' id=  '"+ids +"'>" + ele.outerHTML+"</textarea> ");
            }
            else{
                var dt = new Date();
                var rn = Math.random() * 1000;
                var ids = "id"+dt.getTime()+ "_"+Math.floor(Math.random()*1000);  
                ele.style.outline="#af4a00 solid 5px"   
                                        
        ele.insertAdjacentHTML("beforeBegin", " <br><div style='color:#af4a00;position:relative;bottom:5px;font-weight:700'> autocomplete='"+ ele.getAttribute('autocomplete')+"'  <button aria-label= \"Copy Code\" onclick=\"copytext('"+ids +"');\" > <svg class=\"svg-icon\" viewBox=\"0 0 20 20\"><path d=\"M17.391,2.406H7.266c-0.232,0-0.422,0.19-0.422,0.422v3.797H3.047c-0.232,0-0.422,0.19-0.422,0.422v10.125c0,0.232,0.19,0.422,0.422,0.422h10.125c0.231,0,0.422-0.189,0.422-0.422v-3.797h3.797c0.232,0,0.422-0.19,0.422-0.422V2.828C17.812,2.596,17.623,2.406,17.391,2.406 M12.749,16.75h-9.28V7.469h3.375v5.484c0,0.231,0.19,0.422,0.422,0.422h5.483V16.75zM16.969,12.531H7.688V3.25h9.281V12.531z\"></path></svg></button></div> ");
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
