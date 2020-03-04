// "use strict"

class Car {
    constructor(wheel, color, seat) {
        this.wheel = wheel;
        this.color = color;
        this.seat = seat;
    }
    carName() {
        return { ...this };
    }
}

// const myCar = new Car(4, 'Black',7);
// const vaaal = myCar.carName();
// console.log(vaaal);

class Company extends Car {
    constructor(wheel, color, seat, name, city, model) {
        super(wheel, color, seat);
        this.name = name;
        this.city = city;
        this.model = model;
    }
    companyDetails() {
        // console.log(this.wheel)
    }
}


var aCompany = new Company(4, 'Black', 7, 'Hundai', 'Tokiyo', '4UASS');
aCompany.companyDetails();



(function () {
    var xPosiotion = 12;
    var yPosiotion = 12;
    var img = new Image();
    img.src = 'https://lh3.googleusercontent.com/proxy/ChXCFMZUqYH4CSJEylqDOYDfOPXJ_vw5J1Su3-ujj-v-b0DRqvhz4vqNoDsv02eN1EYZtRVfQAH3ej06dDBw6dC0CTTj4MRD';
    var img1 = new Image();
    img1.src = 'https://upload.wikimedia.org/wikipedia/commons/4/45/Alien_pixel.png';
    var homeImg = new Image();
    homeImg.src='https://www.pikpng.com/pngl/m/101-1014381_home-icons-blue-home-icon-for-game-clipart.png';
    myObject=[
        {x:212, y:130, type:'box'},
        {x:250, y:20, type:'box'},
        {x:150, y:80, type:'box'},
        {x:50, y:90, type:'box'},
        {x:100, y:40, type:'box'}
    ]
    var canvas = document.getElementById('demo');
    // console.log(window.innerHeight);
    canvas.style.height = (window.innerHeight - 150) + 'px';
    canvas.style.width = (window.innerWidth - 190) + 'px';
    var ctx = canvas.getContext("2d");  
    
    dummy(xPosiotion, yPosiotion);    
    


    function dummy(x, y) {      
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(homeImg,(canvas.width-50), (canvas.height-30),  50, 30)
       for(var i= 0; i<myObject.length; i++){
         ctx.drawImage(img1, myObject[i].x,myObject[i].y, 26,11)
       }       
        // ctx.beginPath();
        // ctx.arc(x, y, 5, 0, 2 * Math.PI);
        // ctx.fillStyle = "#0095DD";
        // ctx.fill();
        // ctx.closePath();
        ctx.drawImage(img,x,y,12, 12);
    }
    var start;
    var counter = 0;
    timeDuration= 30;

    function move(val){
        if(counter%1000 == 0){
            console.log('Counter',(counter%1000))
            timeDuration = timeDuration - 2;
        }
        clearInterval(start);
      start =  setInterval(() => {  
        // if(myObject[0].x > 12 && myObject[0].x < (canvas.width - 30)){ myObject[0].x = myObject[0].x + Math.random(); myObject[0].y = myObject[0].y - Math.random()}             
        // if(myObject[1].x > 12 && myObject[1].x < (canvas.width - 30)){ myObject[1].x = myObject[1].x + Math.random();myObject[0].y = myObject[0].y - Math.random()}             
        
            if ( xPosiotion > 1 && yPosiotion > 1 && xPosiotion < (canvas.width - 10) && yPosiotion < (canvas.height - 10)) {               
                switch(val){
                    case 'up': yPosiotion --; break;
                    case 'down': yPosiotion ++; break;
                    case 'right': xPosiotion ++; break;
                    case 'left':xPosiotion --; break;
                }
                for(var j=0; j<myObject.length; j++){
                   
                     if(xPosiotion <= (myObject[j].x - 6) || xPosiotion > (myObject[j].x + 18) || yPosiotion <= (myObject[j].y - 6) || yPosiotion > (myObject[j].y + 11)){                        
                        counter ++;
                        document.getElementById('couter').innerHTML = counter;
                        dummy(xPosiotion, yPosiotion);
                     }else
                     {
                      
                        gameResult(0);
                         clearInterval(start);
                     }
                }
                if(xPosiotion > (canvas.width-50) && yPosiotion > (canvas.height-30)){
                    gameResult(1);
                    clearInterval(start);
                }
            }else{
                gameResult(0);
                clearInterval(start);
            }
        }, timeDuration)
    }
    document.getElementById('startGame').addEventListener('click',function(){
       move('right');
    });
    document.getElementById('restart').addEventListener('click',function(){
        xPosiotion = 12;
        yPosiotion = 12;
        clearInterval(start);
        move('right');
    });

    document.getElementById('up').addEventListener('click',()=>{
        move('up');
    })
    document.getElementById('down').addEventListener('click',()=>{
        move('down');
    })
    document.getElementById('left').addEventListener('click',()=>{
        move('left');
    })
    document.getElementById('right').addEventListener('click',()=>{
        move('right');
    });

    function gameResult(val){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = "30px Arial";      
        
        if(val){
            ctx.fillStyle = "green"; 
            ctx.fillText("* You Win *", 40, 70);    
        }else{
            ctx.fillStyle = "#ff4747"; 
        ctx.fillText("Game Over (*_*)", 40, 70);}
       
    }
    document.addEventListener("keydown", function(event) {
               switch(event.which){
            case 38:{ move('up'); break;}
            case 40:{ move('down'); break;}
            case 37:{ move('left'); break;}
            case 39:{ move('right'); break;}
            default:{break;}
        }
      })


})();