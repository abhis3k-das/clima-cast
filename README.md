# 🌦️ Clima Cast

Clima Cast is a modern weather forecasting web application that provides real-time weather updates, forecasts, and climate insights for any city around the world.

🔗 Live Website: https://clima-cast.abhis3k-das.com/

------------------------------------------------------------

## 🚀 Features

- Real-time weather updates using the OpenWeather API  
- Clean and responsive UI built with Tailwind + shadcn/ui components  
- Data visualization using Recharts (https://recharts.github.io/)  
- Optimized data fetching and caching with TanStack Query  
- Search by city name  
- Displays temperature, humidity, pressure, wind speed, and weather description  
- Built with Vite + React + TypeScript for blazing-fast performance

------------------------------------------------------------

## 🧩 Tech Stack

- **Frontend:** React + Vite + TypeScript  
- **Styling:** Tailwind CSS + shadcn/ui  
- **Data Fetching:** TanStack Query  
- **Charts & Visualization:** Recharts (https://recharts.github.io/)  
- **API Provider:** OpenWeather API (https://openweathermap.org/api)

------------------------------------------------------------

## 🛠️ Setup Instructions

### 1️⃣ Clone the repository
git clone https://github.com/abhis3k-das/clima-cast.git  
cd clima-cast

### 2️⃣ Install dependencies
npm install

### 3️⃣ Get your API key
1. Go to https://openweathermap.org/api  
2. Create a free account  
3. Generate your API Key

### 4️⃣ Create a .env file in the project root
touch .env

Then add the following line:
VITE_OPENWEATHER_API_KEY=your_api_key_here

⚠️ Keep your .env file private and never commit it to GitHub.

### 5️⃣ Run the project locally
npm run dev

Then open http://localhost:5173 in your browser.

------------------------------------------------------------

## 📊 Build for Production
npm run build

------------------------------------------------------------

## 🧑‍💻 Author

Abhisek Das  
🐙 https://github.com/abhis3k-das

------------------------------------------------------------

## 📜 License

This project is open-source under the MIT License.
