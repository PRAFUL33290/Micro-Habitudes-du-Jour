'use client';

import { useState } from 'react';
import type { Mood, Goal, TimeAvailable, DayOfWeek, WizardAnswers } from '@/data/habits';

interface WizardProps {
  onComplete: (answers: WizardAnswers) => void;
}

export default function Wizard({ onComplete }: WizardProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<WizardAnswers>>({});

  const questions = [
    {
      id: 'mood',
      question: 'Comment te sens-tu aujourd\'hui ?',
      emoji: '😊',
      options: [
        { value: 'energique', label: 'Énergique', emoji: '⚡' },
        { value: 'calme', label: 'Calme', emoji: '😌' },
        { value: 'stresse', label: 'Stressé', emoji: '😰' },
        { value: 'fatigue', label: 'Fatigué', emoji: '😴' },
      ]
    },
    {
      id: 'goal',
      question: 'Quel est ton objectif principal ?',
      emoji: '🎯',
      options: [
        { value: 'sante', label: 'Santé', emoji: '💚' },
        { value: 'productivite', label: 'Productivité', emoji: '📈' },
        { value: 'bien-etre', label: 'Bien-être', emoji: '✨' },
        { value: 'social', label: 'Social', emoji: '👥' },
      ]
    },
    {
      id: 'time',
      question: 'Combien de temps as-tu ?',
      emoji: '⏰',
      options: [
        { value: '5min', label: '5 minutes', emoji: '⚡' },
        { value: '15min', label: '15 minutes', emoji: '⏱️' },
        { value: '30min', label: '30 minutes', emoji: '⏲️' },
        { value: '1h', label: '1 heure', emoji: '🕐' },
      ]
    },
    {
      id: 'day',
      question: 'Quel jour sommes-nous ?',
      emoji: '📅',
      options: [
        { value: 'lundi', label: 'Lundi', emoji: '1️⃣' },
        { value: 'mardi', label: 'Mardi', emoji: '2️⃣' },
        { value: 'mercredi', label: 'Mercredi', emoji: '3️⃣' },
        { value: 'jeudi', label: 'Jeudi', emoji: '4️⃣' },
        { value: 'vendredi', label: 'Vendredi', emoji: '5️⃣' },
        { value: 'samedi', label: 'Samedi', emoji: '6️⃣' },
        { value: 'dimanche', label: 'Dimanche', emoji: '7️⃣' },
      ]
    },
  ];

  const currentQuestion = questions[step];
  const progress = ((step + 1) / questions.length) * 100;

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      setTimeout(() => onComplete(newAnswers as WizardAnswers), 300);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8 animate-fade-in">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-gray-500 mt-2 text-center">
          Question {step + 1} sur {questions.length}
        </p>
      </div>

      {/* Question */}
      <div className="text-center mb-8 animate-slide-up">
        <div className="text-6xl mb-4 animate-bounce-slow">{currentQuestion.emoji}</div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          {currentQuestion.question}
        </h2>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {currentQuestion.options.map((option, index) => (
          <button
            key={option.value}
            onClick={() => handleAnswer(option.value)}
            className="group relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95 border-2 border-transparent hover:border-purple-400"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
              {option.emoji}
            </div>
            <div className="text-lg font-semibold text-gray-700">
              {option.label}
            </div>
          </button>
        ))}
      </div>

      {/* Back button */}
      {step > 0 && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setStep(step - 1)}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200 underline"
          >
            ← Retour
          </button>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
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
          50% { transform: translateY(-10px); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
