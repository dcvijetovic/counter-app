# Single Digit Counter App
Single Digit Counter App is a fullstack app that allows you to encode strings into a secret code that is not so hard to crack. It includes a simple algorithm, backend API endpoint, and frontend login and encoder pages.

## Design
The design of The Secret Encoder is inspired by nature, with a calming mountain background image, blue linear gradient overlay, and complementary accents. The font is a playful and bold sans-serif, allowing the content to take center stage. The accent colors are dutch orange, because I love the Netherlands and orange is the complementary color of blue.

## Backend 
The backend API endpoint is implemented using Node.js and Express. The /encode endpoint accepts a string as input, passes it through the encoder() function, and returns the encoded string. The email and password are also handled on the backend.

## Frontend
The frontend is implemented using React and React Router. The login page allows users to enter their email and password, and uses simple input validation to ensure that the email is a valid email and the password is at least 6 characters long and includes at least one number. The encoder page allows users to enter a secret, sends it to the backend /encode endpoint, and displays the encoded secret. The encoder page is protected by a ProtectedRoute component to ensure that only logged-in users can access it.

## Technology Stack
Node.js
Express
React
React Router
Jest