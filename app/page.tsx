'use client';

import { useState } from 'react';
import Wizard from '@/components/Wizard';
import HabitCard from '@/components/HabitCard';
import { getMatchingHabit } from '@/data/habits';
import type { WizardAnswers, Habit } from '@/data/habits';

export default function Home() {
  const [showWizard, setShowWizard] = useState(false);
  const [habit, setHabit] = useState<Habit | null>(null);

  const handleStart = () => {
    setShowWizard(true);
  };

  const handleWizardComplete = (answers: WizardAnswers) => {
    const selectedHabit = getMatchingHabit(answers);
    setHabit(selectedHabit);
    setShowWizard(false);
  };

  const handleReset = () => {
    setHabit(null);
    setShowWizard(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      {!showWizard && !habit && (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            {/* Logo/Icon */}
            <div className="text-8xl mb-6 animate-bounce-slow">
              ✨
            </div>

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Micro-Habitudes du Jour
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-700 mb-8 leading-relaxed">
              Une petite habitude par jour pour transformer ta vie 🌱
            </p>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Réponds à 4 questions rapides et découvre la micro-habitude parfaite pour toi aujourd'hui
            </p>

            {/* CTA Button */}
            <button
              onClick={handleStart}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Découvrir mon habitude
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
              <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="font-semibold text-gray-800 mb-2">Rapide</h3>
                <p className="text-sm text-gray-600">Moins de 2 minutes pour trouver ton habitude</p>
              </div>
              <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="font-semibold text-gray-800 mb-2">Personnalisé</h3>
                <p className="text-sm text-gray-600">Adapté à ton humeur et tes objectifs</p>
              </div>
              <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="text-4xl mb-3">🌟</div>
                <h3 className="font-semibold text-gray-800 mb-2">Simple</h3>
                <p className="text-sm text-gray-600">Une micro-habitude facile à appliquer</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Wizard */}
      {showWizard && !habit && (
        <div className="flex items-center justify-center min-h-screen">
          <Wizard onComplete={handleWizardComplete} />
        </div>
      )}

      {/* Habit Card */}
      {habit && (
        <div className="flex items-center justify-center min-h-screen">
          <HabitCard habit={habit} onReset={handleReset} />
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
