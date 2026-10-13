# Lin Lae Phyu Portfolio

A React, TypeScript, and Vite portfolio website.

## Local development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Create a production build with `npm run build`. Preview the production build locally with `npm run preview`.

## Future updates

- **Portfolio content:** Edit `src/content.ts` to update the profile, contact details, education, certifications, experience, skills, projects, and achievements. Add project `github` and `preview` URLs when available.
- **Page sections:** Edit `src/Sections.tsx` to change section content and navigation labels. Keep the section IDs aligned with the navigation links.
- **Section order and behavior:** Edit `src/App.tsx` to reorder page sections or update shared reveal and pointer behavior.
- **Visual design:** Edit `src/styles.css` for layout, colors, typography, responsive behavior, and motion.
- **Images and documents:** Put static assets in `public/`. The portrait is `public/profile.png`, the achievements background is `public/OPOW-hackathon.png`, and the Contact background is `public/navy-ocean-waves.png`. CV downloads use `public/cv.pdf`.
- **Browser title and metadata:** Edit `index.html`.

After changes, run `npm run build` to check TypeScript and produce the deployable site in `dist/`.

## Credits

See [CREDIT.md](./CREDIT.md).
