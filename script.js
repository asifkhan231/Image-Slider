// flag(0,1,2,3,4)
let flag = 0;


function slider(x){
    flag = flag + x;

    // logic
    // on prev 
    // flag = 2 + -1 = 1
    // on next
    // flag = 2 + 1 = 3

    slideshow(flag);
}
slideshow(flag);

function slideshow(num){
    let slides = document.getElementsByClassName("slider");

    if(flag == slides.length){
        flag = 0;
        num = 0;
    }

    if(flag < 0 ){
        flag = slides.length-1;
        num = slides.length-1;
    }

    for(let y of slides){
        y.style.display = "none"
    }

    slides[num].style.display = "block";
}