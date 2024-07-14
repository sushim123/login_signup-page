// DOM elements
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const signInBtnLink = document.querySelector('.signInBtn-link');
const wrapper = document.querySelector('.wrapper');

// Toggle form view
signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

signInBtnLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

// Form submission
document.addEventListener('DOMContentLoaded', () => {
    const signUpForm = document.querySelector('.sign-up-form');
    const signInForm = document.querySelector('.sign-in-form');

    signUpForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(signUpForm);
        const username = formData.get('username');
        const email = formData.get('email');
        const password = formData.get('password');
        const agree = formData.get('agree'); // Assuming terms checkbox

        try {
            const response = await fetch('/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password, agree }),
            });

            if (!response.ok) {
                throw new Error('Failed to sign up');
            }

            // Redirect to success page
            window.location.href = '/signup-success.html'; // Replace with your actual success page URL
        } catch (error) {
            console.error('Error signing up:', error.message);
            // Handle error (e.g., show error message to user)
        }
    });

    signInForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(signInForm);
        const username = formData.get('username');
        const password = formData.get('password');

        try {
            const response = await fetch('/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error('Failed to sign in');
            }

            // Handle sign in success as needed
        } catch (error) {
            console.error('Error signing in:', error.message);
            // Handle error (e.g., show error message to user)
        }
    });
});
document.getElementById('loginBtn').addEventListener('click', function() {
    window.location.href = 'https://www.facebook.com/v14.0/dialog/oauth?client_id=1004975204591399&redirect_uri=https://www.facebook.com/&scope=public_profile,pages_show_list,instagram_basic';
});