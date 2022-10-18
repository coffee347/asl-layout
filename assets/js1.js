let stripe = document.getElementById('footer');

function moveStripe() {
    let wwidth = document.body.clientWidth;    
    if (wwidth >= 992) {
        let desc = document.getElementById('desc').clientHeight;
        let test = desc;
        stripe.style.marginTop = test+15+"px";
    } else {
        stripe.style.marginTop = '2.125em';
    }    
}

moveStripe();
window.addEventListener('resize', moveStripe);