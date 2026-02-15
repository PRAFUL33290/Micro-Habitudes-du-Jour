'use client';

import { useState } from 'react';
import type { Habit } from '@/data/habits';

interface HabitCardProps {
  habit: Habit;
  onReset: () => void;
}

export default function HabitCard({ habit, onReset }: HabitCardProps) {
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleShare = () => {
    const text = `Ma micro-habitude du jour : ${habit.text} ${habit.emoji}\n\nTrouve la tienne sur`;
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(tweetUrl, '_blank');
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // TODO: Integrate with email service (e.g., Supabase, SendGrid)
      setEmailSubmitted(true);
      setTimeout(() => {
        alert('Merci ! Tu recevras ta micro-habitude demain 🎉');
      }, 300);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8 animate-scale-in">
      {/* Main Card */}
      <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-purple-700 rounded-3xl shadow-2xl p-8 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 -mb-12"></div>
        
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-light mb-2 opacity-90">
              Ta micro-habitude du jour
            </h2>
            <div className="text-8xl mb-6 animate-float">
              {habit.emoji}
            </div>
          </div>

          {/* Habit Text */}
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 mb-6">
            <p className="text-2xl font-semibold text-center leading-relaxed">
              {habit.text}
            </p>
          </div>

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="w-full bg-white text-purple-600 font-bold py-4 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300 mb-6 flex items-center justify-center gap-3"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
            Partager sur X
          </button>

          {/* Email Opt-in */}
          {!emailSubmitted ? (
            <form onSubmit={handleEmailSubmit} className="space-y-3">
              <p className="text-sm text-center opacity-90">
                Reçois une nouvelle habitude demain 📬
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ton@email.com"
                  className="flex-1 px-4 py-3 rounded-full text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  OK
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-4">
              <p className="font-semibold">✅ Email enregistré !</p>
              <p className="text-sm opacity-90">À demain pour une nouvelle habitude</p>
            </div>
          )}
        </div>
      </div>

      {/* Reset Button */}
      <div className="mt-6 text-center">
        <button
          onClick={onReset}
          className="text-gray-600 hover:text-gray-800 transition-colors duration-200 underline"
        >
          ↻ Recommencer
        </button>
      </div>

      <style jsx>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-scale-in {
          animation: scale-in 0.5s ease-out;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
