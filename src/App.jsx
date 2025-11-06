import React from 'react';
import BreakfastList from './components/BreakfastList';
import './styles/App.css';
import Footer from './components/Footer'

function App() {
   return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <script src="https://cdn.tailwindcss.com"></script>

      <style>
        {`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fadeInDown 1.5s ease-out forwards;
        }
        `}
      </style>

      <header className="banner bg-red-800 text-white p-6 shadow-2xl">
        

        <h1 
          className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl 
                     font-extrabold text-center tracking-tight 
                     text-yellow-300 drop-shadow-lg 
                     animate-fade-in-down"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Sri Balaji Food Court
        </h1>
      </header>
      
      {/* Content */}
      <main className="pb-16">
        <BreakfastList />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;