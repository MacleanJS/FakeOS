// Application 1
const deskBtnOne = document.getElementsByClassName("desktop-btn-1"); //create btn from desktop icon app 1
const appBtnOne = document.getElementsByClassName("app-1-btn"); //create btn from bottom nav app 1
const displayApp1 = document.getElementsByClassName("display-app1"); //create element for app 1 div container
const deskBtnOneClick = () => {
    console.log("displayed 1");
    displayApp1[0].style.display = "block"; //changes container div to be visible/interactable
};
deskBtnOne[0].addEventListener("dblclick", deskBtnOneClick); // change this to doubleclick down the line
appBtnOne[0].addEventListener("click", deskBtnOneClick); // change this to doubleclick down the line

// Application 2
const deskBtnTwo = document.getElementsByClassName("desktop-btn-2"); //create btn from desktop icon app 2
const appBtnTwo = document.getElementsByClassName("app-2-btn"); //create btn from bottom nav app 2
const displayApp2 = document.getElementsByClassName("display-app2"); //create element for app 2 div container
const deskBtnTwoClick = () => {
    console.log("displayed 2");
    displayApp2[0].style.display = "block"; //changes container div to be visible/interactable
};
deskBtnTwo[0].addEventListener("dblclick", deskBtnTwoClick); // change this to doubleclick down the line
appBtnTwo[0].addEventListener("click", deskBtnTwoClick); // change this to doubleclick down the line

// Application 3
const deskBtnThree = document.getElementsByClassName("desktop-btn-3"); //create btn from desktop icon app 3
const appBtnThree = document.getElementsByClassName("app-3-btn"); //create btn from bottom nav app 3
const displayApp3 = document.getElementsByClassName("display-app3"); //create element for app 3 div container
const deskBtnThreeClick = () => {
    console.log("displayed 3");
    displayApp3[0].style.display = "block"; //changes container div to be visible/interactable
};
deskBtnThree[0].addEventListener("dblclick", deskBtnThreeClick); // change this to doubleclick down the line
appBtnThree[0].addEventListener("click", deskBtnThreeClick); // change this to doubleclick down the line

// Application 1 Nav
const closeBtn1 = document.getElementsByClassName("close-btn1");
const closeBtn1Click = () => {
    displayApp1[0].style.display = "none";
};
closeBtn1[0].addEventListener("click", closeBtn1Click);
closeBtn1[1].addEventListener("click", closeBtn1Click);

// Application 2 Nav
const closeBtn2 = document.getElementsByClassName("close-btn2");
const closeBtn2Click = () => {
    displayApp2[0].style.display = "none";
};
closeBtn2[0].addEventListener("click", closeBtn2Click);
closeBtn2[1].addEventListener("click", closeBtn2Click);

// Application 3 Nav
const closeBtn3 = document.getElementsByClassName("close-btn3");
const closeBtn3Click = () => {
    displayApp3[0].style.display = "none";
};
closeBtn3[0].addEventListener("click", closeBtn3Click);
closeBtn3[1].addEventListener("click", closeBtn3Click);

// Time function
const updateClock = () => {
    const today = new Date();
    const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    document.getElementById("dateTime").innerHTML = time;
    setTimeout(updateClock, 100);
};
updateClock();

// Start Menu
const startBtn = document.getElementsByClassName("start-btn");
const startNavContent = document.getElementsByClassName("start-drop-content");
const startBtnClick = () => {
    console.log("Start clicked");
    startNavContent[0].classList.toggle("show");
};
startBtn[0].addEventListener("click", startBtnClick);

//Function where if user clicks away from start menu, menu closes
window.onclick = function (event) {
    if (!event.target.matches(".start-btn")) {
        let dropdowns = document.getElementsByClassName("start-drop-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
};

const startBtn1 = document.getElementsByClassName("start-app-1");
startBtn1[0].addEventListener("click", deskBtnOneClick);
const startBtn2 = document.getElementsByClassName("start-app-2");
startBtn2[0].addEventListener("click", deskBtnTwoClick);
const startBtn3 = document.getElementsByClassName("start-app-3");
startBtn3[0].addEventListener("click", deskBtnThreeClick);
