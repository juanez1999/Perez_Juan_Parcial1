var circle=document.querySelector('.circle');
var body=document.querySelector('body');

   function handleCircleClick(event){
        console.log(event);
        var newElement = document.createElement('div');
        newElement.classList.add('circle');
        body.appendChild(newElement);
        random_bg_color(newElement);
        printer(newElement);
    }

    body.addEventListener('click', handleCircleClick);


    function random_bg_color(element) {
        var colorx = Math.floor(Math.random() * 256);
        var colory = Math.floor(Math.random() * 256);
        var colorz = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + colorx + "," + colory + "," + colorz + ")";
        console.log(colorz);
        
        element.style.background = bgColor;
    }

    function printer(element){
        var randomnumber=Math.floor(Math.random()*window.innerWidth);
        var randomnumberTop=Math.floor(Math.random()*window.innerHeight);
        element.style.transform = `translate(${randomnumber}px,${randomnumberTop}px)`;
        
    }

    
    

    




