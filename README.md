# Micro-Habitudes du Jour ✨

Une application Next.js minimaliste qui génère une micro-habitude personnalisée par jour pour améliorer votre vie.

## 🎯 Fonctionnalités

- **Wizard interactif** : 4 questions simples pour personnaliser votre habitude
  - Comment te sens-tu aujourd'hui ? (Énergique, Calme, Stressé, Fatigué)
  - Quel est ton objectif principal ? (Santé, Productivité, Bien-être, Social)
  - Combien de temps as-tu ? (5min, 15min, 30min, 1h)
  - Quel jour sommes-nous ? (Lundi à Dimanche)

- **Génération intelligente** : Algorithme de matching pour trouver l'habitude parfaite
- **Design moderne** : Gradient bleu-violet, animations légères, mobile-first
- **Partage social** : Bouton "Partager sur X" avec tweet pré-rempli
- **Email opt-in** : Inscription pour recevoir une nouvelle habitude demain
- **20+ micro-habitudes** : Base de données variée adaptée à tous les profils

## 🚀 Installation et lancement

### Prérequis
- Node.js 18+ 
- npm

### Installation

```bash
# Cloner le repository
git clone https://github.com/PRAFUL33290/Micro-Habitudes-du-Jour.git
cd Micro-Habitudes-du-Jour

# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000)

### Production

```bash
# Build pour la production
npm run build

# Lancer en production
npm start
```

## 📁 Structure du projet

```
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Page d'accueil
│   └── globals.css         # Styles globaux
├── components/
│   ├── Wizard.tsx          # Composant wizard 4 questions
│   └── HabitCard.tsx       # Carte d'affichage de l'habitude
├── data/
│   └── habits.ts           # Base de données des habitudes
└── public/                 # Assets statiques
```

## 🎨 Technologies utilisées

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS v4** - Framework CSS utility-first
- **React** - Bibliothèque UI

## 🌟 Déploiement

L'application peut être déployée facilement sur :
- [Vercel](https://vercel.com) (recommandé)
- [Netlify](https://netlify.com)
- Tout hébergeur supportant Next.js

### Déploiement Vercel

```bash
npm install -g vercel
vercel
```

## 🔧 Personnalisation

### Ajouter de nouvelles habitudes

Éditez le fichier `data/habits.ts` et ajoutez vos habitudes :

```typescript
{
  id: 21,
  text: "Votre nouvelle habitude",
  emoji: "🎯",
  mood: ['energique', 'calme'],
  goal: ['productivite'],
  time: ['15min'],
  days: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
}
```

## 📝 Licence

ISC

## 👨‍💻 Auteur

PRAFUL33290