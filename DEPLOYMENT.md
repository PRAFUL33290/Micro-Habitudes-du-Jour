# Guide de Déploiement - Micro-Habitudes du Jour

## Déploiement sur Vercel (Recommandé)

### Méthode 1 : Via l'interface Web Vercel

1. Créez un compte sur [vercel.com](https://vercel.com)
2. Cliquez sur "New Project"
3. Importez votre repository GitHub
4. Vercel détectera automatiquement Next.js
5. Cliquez sur "Deploy"
6. Votre app sera en ligne en quelques minutes!

### Méthode 2 : Via CLI

```bash
# Installer Vercel CLI
npm install -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Pour déployer en production
vercel --prod
```

## Déploiement sur Netlify

1. Créez un compte sur [netlify.com](https://netlify.com)
2. Connectez votre repository GitHub
3. Configuration de build :
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
4. Cliquez sur "Deploy site"

## Variables d'environnement (optionnel)

Si vous intégrez des services externes (Supabase, SendGrid, etc.), ajoutez vos variables d'environnement :

### Sur Vercel :
1. Allez dans Settings > Environment Variables
2. Ajoutez vos variables (ex: `NEXT_PUBLIC_SUPABASE_URL`)

### Sur Netlify :
1. Site settings > Build & deploy > Environment
2. Ajoutez vos variables

## Domaine personnalisé

### Vercel :
1. Settings > Domains
2. Ajoutez votre domaine
3. Configurez les DNS selon les instructions

### Netlify :
1. Domain settings > Add custom domain
2. Suivez les instructions DNS

## Performance

L'application est optimisée pour :
- ⚡ Temps de chargement rapide
- 📱 Performance mobile excellente
- 🎯 SEO-friendly
- 🚀 Static generation pour pages ultra-rapides

## Support

Pour toute question sur le déploiement, consultez :
- [Documentation Vercel](https://vercel.com/docs)
- [Documentation Netlify](https://docs.netlify.com/)
- [Documentation Next.js](https://nextjs.org/docs)
