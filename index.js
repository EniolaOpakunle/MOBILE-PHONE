let pow = false;
const onphone = () => {
    if(pow == false){
        home();
        pow = true;
    } else{
        homescreenButtons.style.display = `none`;
        phonebody.style.backgroundColor = "black";
        pow = false;
    }
}
const home = () => {
    homescreenButtons.style.display = `block`;
    // phonebtn.style.display = "inline";
    // voucherbtn.style.display = "inline";
    phonebody.style.backgroundColor = "red";
}