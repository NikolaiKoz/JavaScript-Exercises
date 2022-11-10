const div = document.getElementById('inside-mouse');

div.addEventListener( "mouseenter" , () => {
    div.style.backgroundColor = "blue";
});

div.addEventListener( "mouseleave" , () => {
    div.style.backgroundColor = "red";
});