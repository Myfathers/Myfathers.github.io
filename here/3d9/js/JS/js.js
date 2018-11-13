var next=document.getElementById("next");
var prev=document.getElementById("prev");
var slider=document.getElementsByClassName("slider");
var imgs=slider[0].getElementsByTagName("img");

var i=0;
next.onclick=function(){
    next.style.background="red";
  
    i++;
   if(i>imgs.length-1){
        i=0;
    }
    for(var j=0;j <imgs.length; j++){
        imgs[j].style.opacity="0";
        

    }
    console.log(i);
   
   
    imgs[i].style.opacity="1";
  
}
prev.onclick=function(){
    prev.style.background="red";

    i--;
    if(i<0){
        i=imgs.length-1;

    }
    for(var j=0;j<imgs.length; j++){
        imgs[j].style.opacity="0";

    }
    imgs[i].style.opacity="1";
}