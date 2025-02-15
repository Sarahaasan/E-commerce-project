const iconButton = document.querySelector('.icon');
let clicked = false;
iconButton.addEventListener('click',()=>
{
    if(!clicked){
iconButton.querySelector('i').style.color="red";

    }
    else {
    iconButton.querySelector('i').style.color= "rgba(36, 164, 248, 1)";
}
clicked=!clicked;
}
)
const loveIcon = document.querySelectorAll('.love-icon');

let loveCartIcon = false;
loveIcon.forEach(loveIcon =>
{
    loveIcon.addEventListener('click',()=>
    {
        if(!loveCartIcon)
        {
            loveIcon.querySelector('i').style.color="red";
        }
        else{
        loveIcon.querySelector("i").style.color="rgba(36, 164, 248, 1)";
        }
        loveCartIcon=!loveCartIcon;
        }
    )
}
)
