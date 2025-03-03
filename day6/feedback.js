// feedback.js

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('feedbackForm').addEventListener('submit', submitFeedback);
    document.getElementById('feedbackForm').addEventListener('reset', resetForm);
    document.querySelectorAll('input[name="rating"]').forEach(radio => {
        radio.addEventListener('change', handleRatingChange);
    });
});

function submitFeedback(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const satisfaction = document.querySelector('input[name="satisfaction"]:checked');
    const feature = document.getElementById('feature').value;
    const rating = document.querySelector('input[name="rating"]:checked');

    if (!name) {
        alert('Name cannot be empty');
        return;
    }

    if (!email.includes('@')) {
        alert('Invalid email address');
        return;
    }

    if (!satisfaction) {
        alert('Please select your satisfaction level');
        return;
    }

    if (!feature) {
        alert('Please select a preferred feature');
        return;
    }

    if (rating && (rating.value < 1 || rating.value > 5)) {
        alert('Rating must be between 1 and 5');
        return;
    }

    const scores = [5, 4, 3, 5, 2];
    scores.forEach(score => console.log(score));

    alert('Feedback submitted successfully!');
}

function validateFields() {
    const inputs = document.querySelectorAll('#feedbackForm input, #feedbackForm select');
    inputs.forEach(input => {
        if (!input.value) {
            alert(`${input.name} cannot be empty`);
        }
    });
}

function handleRatingChange() {
    const rating = document.querySelector('input[name="rating"]:checked').value;
    alert(`Thank you for rating us: ${rating}`);
}

function resetForm() {
    alert('Form has been reset');
}
