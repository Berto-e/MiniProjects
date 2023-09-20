const navBar = document.querySelector('.nav');
window.addEventListener('scroll',fixNav)

function fixNav(){
    if(window.scrollY > navBar.offsetHeight + 150){
        navBar.classList.add('active')
    }else{
        navBar.classList.remove('active')
    }
}



