## Currency Converter App — ALX FE Capstone Project

A simple and functional currency converter built with React, Vite, and Tailwind CSS. It fetches live exchange rates from a public API and lets users convert any amount between two currencies. The goal of this project is to demonstrate core frontend development skills: API integration, state management, UI design, and deployment.


# Features
1. Fetches real-time exchange rates

2. Convert an amount from one currency to another

3. Clean UI for selecting currencies

4. Swap button for quick switching

5. Responsive layout built with Tailwind CSS

6. Error handling for failed network requests

7. Mobile-friendly interface


# Tech Stack
1. React (Vite)

2. Tailwind CSS

3. Fetch/Axios

4. ExchangeRate API (or any reliable currency API)

5. Netlify / Vercel (for deployment)


# Getting Started
A. Getting Started
1. git clone https://github.com/YOUR-USERNAME/currency-converter.git

cd currency-converter

B. Install Dependencies
npm install

C. Add Your API Key
1. create a .env file:
2. VITE_EXCHANGE_API_KEY=your_api_key_here

D. Run the App
1. npm run dev -- --open

2. src/
 ├── components/
 ├── pages/
 ├── hooks/
 ├── utils/
 ├── App.jsx
 └── main.jsx


 # How It Works
1. The app loads available currencies from the API

2. User selects the “from” and “to” currencies

3. User enters the amount

4. The app calculates the converted value using stored rates

5. UI updates instantly

Everything runs on client-side logic. No backend needed.


# Future Improvements
1. Show historical trends

2. Save favorite currency pairs

3. Convert a single amount into multiple currencies

4. Dark mode

5. Rate alerts


# Deployment
You can deploy this app easily on:
1. Netlify

2. Vercel

3. GitHub Pages

Each platform works smoothly with Vite.


# Author
Theophilus Mensah (Paa Tee)
 ALX Front-End Development Student

