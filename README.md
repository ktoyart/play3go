# Play3Go - Modern Game & Virtual Server Hosting Platform

Play3Go is a sleek, high-performance landing page and frontend interface for a modern server hosting provider. It showcases available server plans (VPS, Dedicated, Game Servers), key advantages, and pricing options in a smooth, animated, and responsive user interface.

![Play3Go Preview](./public/land/general.png)

## Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, and Tailwind CSS v4.
- **Fluid Animations**: Integrated with `framer-motion` for scroll reveals, staggering list animations, and interactive hover states.
- **Dynamic Counters**: Animated number tickers to showcase active users, server counts, and metrics in real-time.
- **Responsive Design**: Fully mobile-optimized layouts with grid-based component structures.
- **Interactive Pricing Plans**: Seamlessly switch between Virtual Servers, Game Servers, Dedicated Hosting, Domains, and DDoS protection with real-time currency conversion (₽ and €).
- **Clean Architecture**: Component-based structure with reusable UI elements (Icons, Buttons, Sections).

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Geist & Geist Mono

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/app`: Core Next.js App Router pages and layouts.
  - `/components`: Reusable UI components (`Hero`, `Advantages`, `Services`, `FAQ`, `NumberTicker`, etc.).
  - `/globals.css`: Global styles and custom Tailwind utilities.
- `/public`: Static assets, icons, and illustration images.

## License

This project is licensed under the ISC License.
