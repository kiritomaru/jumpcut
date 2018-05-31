var button = document.getElementById('freevids');
var popup = document.querySelector('.popup');
var close = document.querySelector('.close');
var body = document.querySelector('body');
var signbutton = document.getElementById('signupbutton');

signbutton.addEventListener('click', function(e){
    e.preventDefault();
});

button.addEventListener('click', popupDiv);
function popupDiv(){
    popup.style.transform = "translate(-50%, -50%)"; 
    setTimeout(popup.style.opacity = 1, 2000);
    popup.style.zIndex = 20; 
    body.style.overflow = "hidden";
}

close.addEventListener('click', closeDiv);
function closeDiv(event){
    popup.style.transform = "translate(-50%, 0%)";
    setTimeout(popup.style.opacity = 0, 2000);
    popup.style.zIndex = 0; 
    body.style.overflow = "auto";
}



// document.addEventListener('click', function(event){
//     if (event.target.closest(".popup")) return;
//     popup.style.transform = "translate(-50%, -50%)";
//     setTimeout(popup.style.opacity = 0, 2000);
// });

