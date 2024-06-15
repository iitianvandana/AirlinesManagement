## Description
The objective of this project is to design and develop an airline management system. The primary function would be to enable a customer to book airline tickets. It will allow the customer to make bookings/search for flights through different ways such as by choosing the convenient source and destination places or by favorable dates. This system will be a real-time system, and the pricing of the tickets will vary with time. Each new customer will be required to make a login account with their details, which enables them to reach the booking stage. The same account can be used again for future bookings

## Objectives
  Auth
  Bookings
  Real time flight booking system

## Platform
  web Application


# Installation and Run
- Install the required react and next dependencies through.

        npm install
- Add Environment Variable in .env file

        MONGO_URI=mongodb://127.0.0.1:27017/flight
        NEXTAUTH_SECRET='Next_Auth_Secret'
        NEXTAUTH_URL=http://localhost:3000

        RAZORPAY_API_KEY='RAZORPAY_API_KEY'
        RAZORPAY_APT_SECRET='RAZORPAY_APT_SECRET'
- Run the Project through:

        npm run dev


