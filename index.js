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
    img.src = 'data:image/png;base64,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';
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
