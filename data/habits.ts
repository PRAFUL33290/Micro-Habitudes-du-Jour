export type Mood = 'energique' | 'calme' | 'stresse' | 'fatigue';
export type Goal = 'sante' | 'productivite' | 'bien-etre' | 'social';
export type TimeAvailable = '5min' | '15min' | '30min' | '1h';
export type DayOfWeek = 'lundi' | 'mardi' | 'mercredi' | 'jeudi' | 'vendredi' | 'samedi' | 'dimanche';

export interface Habit {
  id: number;
  text: string;
  emoji: string;
  mood: Mood[];
  goal: Goal[];
  time: TimeAvailable[];
  days: DayOfWeek[];
}

export const habits: Habit[] = [
  // Santé - Court
  {
    id: 1,
    text: "Boire un grand verre d'eau au réveil",
    emoji: "💧",
    mood: ['energique', 'calme', 'fatigue'],
    goal: ['sante', 'bien-etre'],
    time: ['5min'],
    days: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche']
  },
  {
    id: 2,
    text: "5 respirations profondes conscientes",
    emoji: "🌬️",
    mood: ['stresse', 'fatigue', 'calme'],
    goal: ['bien-etre', 'sante'],
    time: ['5min'],
    days: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche']
  },
  {
    id: 3,
    text: "Étirer ses bras et son dos pendant 2 minutes",
    emoji: "🤸",
    mood: ['energique', 'fatigue', 'stresse'],
    goal: ['sante', 'bien-etre'],
    time: ['5min'],
    days: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche']
  },
  // Productivité - Court
  {
    id: 4,
    text: "Noter ses 3 priorités du jour sur papier",
    emoji: "📝",
    mood: ['energique', 'calme', 'stresse'],
    goal: ['productivite'],
    time: ['5min', '15min'],
    days: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
  },
  {
    id: 5,
    text: "Ranger son bureau pendant 5 minutes",
    emoji: "🗂️",
    mood: ['energique', 'stresse'],
    goal: ['productivite', 'bien-etre'],
    time: ['5min'],
    days: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
  },
  // Bien-être - Moyen
  {
    id: 6,
    text: "Méditer pendant 10 minutes",
    emoji: "🧘",
    mood: ['stresse', 'calme', 'fatigue'],
    goal: ['bien-etre'],
    time: ['15min'],
    days: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche']
  },
  {
    id: 7,
    text: "Lire 10 pages d'un livre inspirant",
    emoji: "📚",
    mood: ['calme', 'fatigue'],
    goal: ['bien-etre', 'productivite'],
    time: ['15min', '30min'],
    days: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche']
  },
  {
    id: 8,
    text: "Écrire 3 choses pour lesquelles tu es reconnaissant",
    emoji: "🙏",
    mood: ['calme', 'stresse', 'fatigue'],
    goal: ['bien-etre'],
    time: ['5min', '15min'],
    days: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche']
  },
  // Social
  {
    id: 9,
    text: "Envoyer un message gentil à un proche",
    emoji: "💌",
    mood: ['energique', 'calme'],
    goal: ['social', 'bien-etre'],
    time: ['5min'],
    days: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche']
  },
  {
    id: 10,
    text: "Appeler un ami pour prendre des nouvelles",
    emoji: "📞",
    mood: ['energique', 'calme'],
    goal: ['social'],
    time: ['15min', '30min'],
    days: ['mercredi', 'samedi', 'dimanche']
  },
  // Santé - Moyen
  {
    id: 11,
    text: "Marcher 15 minutes dehors",
    emoji: "🚶",
    mood: ['energique', 'stresse', 'fatigue'],
    goal: ['sante', 'bien-etre'],
    time: ['15min', '30min'],
    days: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche']
  },
  {
    id: 12,
    text: "Préparer un repas sain avec des légumes frais",
    emoji: "🥗",
    mood: ['energique', 'calme'],
    goal: ['sante'],
    time: ['30min', '1h'],
    days: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche']
  },
  // Productivité - Long
  {
    id: 13,
    text: "Apprendre quelque chose de nouveau pendant 30 min",
    emoji: "🎓",
    mood: ['energique', 'calme'],
    goal: ['productivite'],
    time: ['30min', '1h'],
    days: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche']
  },
  {
    id: 14,
    text: "Planifier la semaine prochaine",
    emoji: "📅",
    mood: ['energique', 'calme'],
    goal: ['productivite'],
    time: ['30min'],
    days: ['vendredi', 'dimanche']
  },
  // Weekend spécial
  {
    id: 15,
    text: "Cuisiner un nouveau plat",
    emoji: "👨‍🍳",
    mood: ['energique', 'calme'],
    goal: ['sante', 'bien-etre'],
    time: ['1h'],
    days: ['samedi', 'dimanche']
  },
  {
    id: 16,
    text: "Faire du yoga pendant 20 minutes",
    emoji: "🧘‍♀️",
    mood: ['calme', 'stresse', 'fatigue'],
    goal: ['sante', 'bien-etre'],
    time: ['30min'],
    days: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche']
  },
  {
    id: 17,
    text: "Écouter un podcast inspirant",
    emoji: "🎧",
    mood: ['calme', 'fatigue'],
    goal: ['productivite', 'bien-etre'],
    time: ['30min', '1h'],
    days: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche']
  },
  {
    id: 18,
    text: "Nettoyer un coin de la maison",
    emoji: "🧹",
    mood: ['energique'],
    goal: ['bien-etre', 'productivite'],
    time: ['30min'],
    days: ['samedi', 'dimanche']
  },
  {
    id: 19,
    text: "Dessiner ou faire une activité créative",
    emoji: "🎨",
    mood: ['calme', 'energique'],
    goal: ['bien-etre'],
    time: ['30min', '1h'],
    days: ['samedi', 'dimanche']
  },
  {
    id: 20,
    text: "Faire 10 pompes ou squats",
    emoji: "💪",
    mood: ['energique'],
    goal: ['sante'],
    time: ['5min', '15min'],
    days: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche']
  }
];

export interface WizardAnswers {
  mood: Mood;
  goal: Goal;
  time: TimeAvailable;
  day: DayOfWeek;
}

export function getMatchingHabit(answers: WizardAnswers): Habit {
  // Filter habits that match all criteria
  const matchingHabits = habits.filter(habit => 
    habit.mood.includes(answers.mood) &&
    habit.goal.includes(answers.goal) &&
    habit.time.includes(answers.time) &&
    habit.days.includes(answers.day)
  );

  // If we have matches, return a random one
  if (matchingHabits.length > 0) {
    return matchingHabits[Math.floor(Math.random() * matchingHabits.length)];
  }

  // Fallback: relax constraints progressively
  const relaxedMatches = habits.filter(habit =>
    habit.mood.includes(answers.mood) &&
    habit.goal.includes(answers.goal) &&
    habit.time.includes(answers.time)
  );

  if (relaxedMatches.length > 0) {
    return relaxedMatches[Math.floor(Math.random() * relaxedMatches.length)];
  }

  // Second fallback: just mood and goal
  const moreRelaxedMatches = habits.filter(habit =>
    habit.mood.includes(answers.mood) &&
    habit.goal.includes(answers.goal)
  );

  if (moreRelaxedMatches.length > 0) {
    return moreRelaxedMatches[Math.floor(Math.random() * moreRelaxedMatches.length)];
  }

  // Ultimate fallback: return a random habit
  return habits[Math.floor(Math.random() * habits.length)];
}
