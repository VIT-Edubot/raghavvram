
var userName = "";
let userEmail = "";
const isSatisfied = document.getElementById('yes').checked;

function validateForm() {
    userName = document.getElementById('name').value;
    userEmail = document.getElementById('email').value;
    let isValid = true;

    if (userName.trim() === "") {
        console.error("Error: Name field is empty.");
        isValid = false;
    }

    if (!userEmail.includes("@")) {
        console.error("Error: Invalid email format.");
        isValid = false;
    }

    console.log("User Name:", userName);
    console.log("User Email:", userEmail);
    console.log("Is Satisfied:", isSatisfied);

    return isValid;
}

function calculateScore(feature1, feature2, feature3) {
    const totalScore = feature1 + feature2 + feature3;
    const averageScore = totalScore / 3;
    console.log("Total Score:", totalScore);
    console.log("Average Score:", averageScore);
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    if (validateForm()) {
        const feature1 = 5; //maually defined rating  
        const feature2 = 4;
        const feature3 = 3;
        calculateScore(feature1, feature2, feature3);
    }
});

