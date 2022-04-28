let btnScroll = document.querySelector('.btn-scroll');

function scroll(){
    let scrollY = window.scrollY;
    if(scrollY >= 100){
        btnScroll.style.display = "flex"
    }else{
        btnScroll.style.display = "none"
    }
}

function scrollUp(){
    scrollTo(0, 0)
}

window.addEventListener('scroll', scroll)
btnScroll.addEventListener('mousedown', scrollUp)

