const displayAppOnDblClick = (element) => {
    element[0].style.display = "block"; //Makes parent div element passed in visible
};

const displayAppOnClick = (element) => {
    element[0].style.display = "block";
};

// Application 1
const appBtnOne = document.getElementsByClassName("app-1-btn"); //create btn from bottom nav app 1
const deskBtnOne = document.getElementsByClassName("desktop-btn-1"); //create btn from desktop icon app 1
const displayApp1 = document.getElementsByClassName("display-app1"); //create element for app 1 div container
deskBtnOne[0].addEventListener("dblclick", () => {
    displayAppOnDblClick(displayApp1); //When deskBtnOne is clicked call the DisplayAppOnDbClick function, and pass in the App 1 parent div
});
appBtnOne[0].addEventListener("click", () => {
    displayAppOnClick(displayApp1);
});

// Application 2
const deskBtnTwo = document.getElementsByClassName("desktop-btn-2"); //create btn from desktop icon app 2
const appBtnTwo = document.getElementsByClassName("app-2-btn"); //create btn from bottom nav app 2
const displayApp2 = document.getElementsByClassName("display-app2"); //create element for app 2 div container
deskBtnTwo[0].addEventListener("dblclick", () => {
    displayAppOnDblClick(displayApp2);
});
appBtnTwo[0].addEventListener("click", () => {
    displayAppOnClick(displayApp2);
});

// Application 3
const deskBtnThree = document.getElementsByClassName("desktop-btn-3"); //create btn from desktop icon app 3
const appBtnThree = document.getElementsByClassName("app-3-btn"); //create btn from bottom nav app 3
const displayApp3 = document.getElementsByClassName("display-app3"); //create element for app 3 div container
deskBtnThree[0].addEventListener("dblclick", () => {
    displayAppOnDblClick(displayApp3);
});
appBtnThree[0].addEventListener("click", () => {
    displayAppOnClick(displayApp3);
});

// Close app function
const closeBtnOnClick = (element) => {
    element[0].style.display = "none"; //Makes the parent div invisible again, hiding the application and freeing up room on page
};

// Application 1 Nav
const closeBtn1 = document.getElementsByClassName("close-btn1");
closeBtn1[0].addEventListener("click", () => {
    closeBtnOnClick(displayApp1);
});
closeBtn1[1].addEventListener("click", () => {
    closeBtnOnClick(displayApp1);
});

// Application 2 Nav
const closeBtn2 = document.getElementsByClassName("close-btn2");
closeBtn2[0].addEventListener("click", () => {
    closeBtnOnClick(displayApp2);
});
closeBtn2[1].addEventListener("click", () => {
    closeBtnOnClick(displayApp2);
});

// Application 3 Nav
const closeBtn3 = document.getElementsByClassName("close-btn3");
closeBtn3[0].addEventListener("click", () => {
    closeBtnOnClick(displayApp3);
});
closeBtn3[1].addEventListener("click", () => {
    closeBtnOnClick(displayApp3);
});

// Time function - Get's current Date in hours, minutes, seconds, and AM/PM. Appends this to dateTime element. Refreshes 100ms
const updateClock = () => {
    const today = new Date();
    let ampm;
    if (today.getHours() > 12) {
        ampm = " PM";
    } else {
        ampm = " AM";
    }
    const time =
        today.getHours() +
        ":" +
        today.getMinutes() +
        ":" +
        today.getSeconds() +
        ampm;
    document.getElementById("dateTime").innerHTML = time;
    setTimeout(updateClock, 100);
};
updateClock();

// Start Menu - When start button is clicked, class of show is toggled, which has CSS enabling the menu to appear
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

// Start popup menu functionality - buttons open corresponding apps
const startBtn1 = document.getElementsByClassName("start-app-1");
startBtn1[0].addEventListener("click", () => {
    displayAppOnDblClick(displayApp1);
});
const startBtn2 = document.getElementsByClassName("start-app-2");
startBtn2[0].addEventListener("click", () => {
    displayAppOnClick(displayApp2);
});
const startBtn3 = document.getElementsByClassName("start-app-3");
startBtn3[0].addEventListener("click", () => {
    displayAppOnClick(displayApp3);
});
