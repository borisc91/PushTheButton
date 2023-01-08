const button = document.querySelector('button');
let player = document.querySelector('.Human');
let player1 = parseInt(player.innerText);
let x = 0;
let computer1 = document.querySelector('.Computer');
let computer2 = parseInt (computer1.innerText);

var y = 1;

function prikazi(){
       
    button.onclick = function() {
       
        y++;

    x+=1;

    player1++;
    player.innerText =player1;

    this.onclick=null;
  
     }
        
     if(y===0){
        computer2++;
        computer1.innerText = computer2;
    
    }
    y = 0; 

button.style.display='none'
button.style.left = Math.random() * (innerWidth - 100) + 'px'
    button.style.top = Math.random() * (innerHeight - 100) + 'px'
setTimeout(() => {


    button.style.display='';
}, 2000)

                setTimeout(prikazi,
                     3000

                    )}

                    
 prikazi()

