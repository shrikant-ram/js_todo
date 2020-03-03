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
        console.log(this.wheel)
    }
}


var aCompany = new Company(4, 'Black', 7, 'Hundai', 'Tokiyo', '4UASS');
aCompany.companyDetails();



(function () {
    var xPosiotion = 12;
    var yPosiotion = 12;
    var canvas = document.getElementById('demo');
    console.log(window.innerHeight);
    canvas.style.height = (window.innerHeight - 20) + 'px';
    canvas.style.width = (window.innerWidth - 20) + 'px';
    var ctx = canvas.getContext("2d");  

    dummy(xPosiotion, yPosiotion);

    



    function dummy(x, y) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }
    var start;
    var counter = 0;
    function move(val){
        clearInterval(start);
      start =  setInterval(() => {               
            if ( xPosiotion > 1 && yPosiotion > 1 && xPosiotion < (canvas.width - 10) && yPosiotion < (canvas.height - 10)) {
                counter ++;
                document.getElementById('couter').innerHTML = counter;
                switch(val){
                    case 'up': yPosiotion --; break;
                    case 'down': yPosiotion ++; break;
                    case 'right': xPosiotion ++; break;
                    case 'left':xPosiotion --; break;
                }
                dummy(xPosiotion, yPosiotion);
            }else{
                ctx.font = "30px Arial";
                ctx.fillText("Game Over (*_*)", 10, 50);
            }
        }, 10)
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
    })
})();