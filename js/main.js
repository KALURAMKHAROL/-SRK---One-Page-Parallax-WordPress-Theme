let calcScrollvalue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressvalue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = 
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
    let scrollvalue = Math.round((pos * 100) / calcHeight);
    if(pos > 100) {
        scrollProgress.style.display = "grid";
    }
else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollvalue}%, #d7d7d7 ${scrollvalue}%)`;
};

window.onscroll = calcScrollvalue;
window.onload = calcScrollvalue;



//counterUp
let counter = document.querySelectorAll(".counter");
let arr = Array.from(counter);

arr.map((item)=>{
    let count = item.innerHTML;
    item.innerHTML = "";
    let countNumber = 0;
    function counterUp(){
        item.innerHTML = countNumber++;
        if(countNumber > count){
            clearInterval(stop);
        }
    }
    let stop = setInterval(()=>{
        counterUp();
    }, item.dataset.speed/count);     
})


