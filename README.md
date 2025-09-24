# Play Store Clone

A pixel-accurate, interactive clone of the Google Play Store built with React, React Router, and Tailwind CSS. This app replicates the exact look and behavior of the Play Store screenshots provided.

## Features

- **Mobile-first responsive design** (375px baseline)
- **Dark theme** matching Play Store aesthetics
- **Three main screens**: Home, Search/Explore, and Search Results
- **Interactive bottom navigation** with smooth transitions
- **Functional search** with special handling for "i&m bank" queries
- **Configurable external links** for app "Open" buttons
- **Pixel-accurate styling** with proper spacing, shadows, and typography

## Tech Stack

- React 18+
- React Router for navigation
- Tailwind CSS for styling
- Modern functional components with hooks

## Quick Start

1. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

2. **Start development server:**
   \`\`\`bash
   npm start
   \`\`\`

3. **Open in browser:**
   Navigate to `http://localhost:3000`

## Configuration

### External Links

To modify the external links that open when users tap "Open" buttons:

1. Edit `src/config/app-config.json`
2. Update the `externalLinks` object:
   \`\`\`json
   {
     "externalLinks": {
       "i&m": "https://your-custom-link.com",
       "mpesa": "https://another-link.com"
     }
   }
   \`\`\`

### App Content

You can customize app information, hero content, and other data in the same config file:

- `heroContent`: Hero section title and update label
- `apps`: App details including names, ratings, categories, etc.

### Images

Replace placeholder images by updating the `src` attributes in components:
- Hero image: `src/pages/HomePage.tsx` (hero section)
- App icons: Various components use placeholder.svg with queries
- Screenshots: `src/pages/SearchResultsPage.tsx` (app gallery)

## Screen Navigation

- **Home (/)**: Main "For you" tab with hero, sponsored apps, and interest chips
- **Search (/search)**: Explore games and apps with category grids
- **Search Results (/search/results)**: Shows when searching for "i&m bank" or variants

## Special Features

### I&M Bank Search
When users search for variations of "i&m bank" (i&m, iandm, i and m), the app shows:
- Sponsored results with M-PESA and I&M OTG Personal KE
- Detailed app information (3.9★ rating, 1K reviews, 500K+ downloads)
- Horizontally scrollable screenshots
- Working "Open" button that opens configurable external link

### Smooth Transitions
- Page transitions with fade/slide effects
- Ripple effects on interactive elements
- Hover states and micro-interactions

## Build for Production

\`\`\`bash
npm run build
\`\`\`

This creates an optimized build in the `build` folder ready for deployment.

## Deployment

The app can be deployed to any static hosting service:
- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the `build` folder
- **GitHub Pages**: Use `gh-pages` package

## QA Checklist

- [x] Home screen shows hero card with "Chess is now on Duolingo"
- [x] Sponsored section displays ChatGPT, FBS, and ExpertOption apps
- [x] Interest chips section with Social, Communication, Finance, etc.
- [x] Bottom navigation switches between Games, Apps, and Search
- [x] Search screen shows game and app category grids
- [x] Searching "i&m bank" shows specialized results page
- [x] I&M app row displays "Open" button with configurable external link
- [x] App details show 3.9★ rating, 1K reviews, 500K+ downloads
- [x] Dark theme matches screenshots with proper colors and shadows
- [x] Mobile-responsive design works on 375px width
- [x] Smooth transitions between screens
- [x] All interactive elements have hover/active states

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This is a demonstration project for educational purposes. Not affiliated with Google or Google Play Store.
