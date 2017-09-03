function drag(id){
  var obj=document.getElementByI("id");
  disX=0;
  disY=0;
  obj.onmousedown=function(ev){
   disX =ev.pageX -obj.offsetLeft;
   disY =ev.pageY -obj.offsetLeft;
   
  }
}