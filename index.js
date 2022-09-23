const formInfo = document.getElementById("formInfo");

let hasJob = false;
if(hasJob) {
    // If I have a job
    showMessage("Thanks for visiting, I'm currently employed.");
}
else {
    // If I need a job
    showMessage("Please look around, I'm currently looking for a position.");
}

let today = new Date();
let dayOfWeek = today.getDay();
if(dayOfWeek === 0 || dayOfWeek ===6) {
    showMessage("Since it's the weekend, please be patient with my returning your email.");
}

function showMessage(message) {
    
    formInfo.innerHTML = "<p>" + message + "</p>";
} 

function clearMessage() {
    formInfo.innerHTML = "";
}

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    showMessage("Sending your message...");
});

// function sendMessage() {
//     showMessage("Please wait, sending your email.");
// }

const experience = document.getElementsByClassName("experience");
for (let x = 0; x < experience.length; x++) {
    const item = experience[x];
    item.addEventListener("mouseenter", function (event) {
        event.target.style = "background-color:#808080; color: white;"
    })

    item.addEventListener("mouseleave", function (event) {
        event.target.style = "";
    })

}
