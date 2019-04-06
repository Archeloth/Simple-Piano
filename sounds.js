window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors =[
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
    ];


    pads.forEach((pad, index) => {
        pad.addEventListener("click", function(){
            sounds[index].currentTime=0;
            sounds[index].play();

            createVisual(index);
        });
    });

    const createVisual = index =>{
        const ball = document.createElement("div");
        visual.appendChild(ball);
        ball.style.backgroundColor=colors[Math.floor(Math.random()*colors.length)];
        let anim="jump0 1s ease";
        const myAnimation = function() {
            return anim.replace("jump0","jump"+(index+1));
        };
        //console.log(myAnimation());
        ball.style.animation = myAnimation();
        ball.addEventListener('animationend', function(){
            visual.removeChild(this);
        });
    };
});