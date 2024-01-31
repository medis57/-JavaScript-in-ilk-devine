let user =prompt("Adinizi Giriniz")
let  myName=document.querySelector(`#myName`)
myName.innerHTML=`${user}`

function Saat() {
    let today=new Date();
    let h=today.getHours();
   let m=today.getMinutes();
    let s=today.getSeconds();
    let d = new Date();
    let gunler= ["Pazar","Pazartesi","Sali","Çarşamba","Perşembe","Cuma","Cumartesi"];
  
   
 let myClock= document.getElementById('myClock')
   myClock.innerHTML=h+":"+m+":"+s+gunler[d.getDay()];
 

 

   }
 setInterval( Saat, 1000); 
   

