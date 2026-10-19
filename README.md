# 🏎️ Nitro Horizon 3D &mdash; Arcade Car Racing Game

A fast-paced, arcade-style 3D car racing game built for the browser using **Three.js**, **Tailwind CSS**, and **Web Audio API**. Dodge traffic, grab spinning coins, collect shields and nitro canisters, unlock high-performance supercars, and race through 5 dynamic environments.

---

## 🎮 Play Online & Live Demo

Once GitHub Pages is enabled, you can play directly at:
**[https://sourav-17a.github.io/Car-Racing/](https://sourav-17a.github.io/Car-Racing/)**

---

## ✨ Features

- **3D Graphics & Visual Effects**: Built using Three.js with procedural geometries, dynamic lighting, motion blur particle streams, neon underglow, and day/night/cyberpunk stage themes.
- **5 Unlockable 3D Cars**:
  - 🚗 **Street Cruiser**: Crimson coupe balanced for effortless handling.
  - 🏎️ **Drift Viper**: Cyan tuner with razor-sharp lane response.
  - 🚙 **Desert Titan**: Heavy armored rally beast with strong coin magnet pull.
  - ⚡ **Cyber Blade**: Futuristic wedge supercar with high-output nitro jets.
  - 🚀 **Apex Hyperion**: Ultimate hypercar with maximum velocity and magnet reach.
- **5 Themed Racing Tracks**:
  - 🏖️ **Sunny Coastline** (1,000m) &mdash; Ocean highway lined with palms and golden sand.
  - 🌆 **Neon Cyber City** (1,500m) &mdash; High-speed expressway flanked by skyscrapers and neon lights.
  - 🏜️ **Sunset Canyon** (2,200m) &mdash; Winding red rock desert road during twilight.
  - ❄️ **Alpine Storm** (3,000m) &mdash; Snowy mountain pass with pine trees and icy wind.
  - 🌋 **Magma Volcano** (4,000m) &mdash; Fiery highway cut through glowing volcanic rock and ash.
- **Powerups & Collectibles**:
  - 🟡 **Gold Coins**: Currency used in the garage to purchase faster cars.
  - 🧲 **Coin Magnet**: Automatically pulls nearby coins towards your vehicle.
  - 🛡️ **Armor Shield**: Absorbs a collision without damaging your car.
  - ⚡ **Nitro Refill**: Instantly tops up your boost meter.
- **Procedural Sound Engine**: Powered by Web Audio API &mdash; no heavy audio downloads required. Real-time synthesized engine revving, nitro boost whoosh, crash effects, and win chimes.
- **Cross-Platform Responsive Controls**:
  - Full touch controls for mobile phones and tablets.
  - Keyboard controls for desktop gaming.
- **Persistent Progress**: Automatically saves your coins, unlocked vehicles, and high scores in `localStorage`.

---

## 🕹️ Controls

| Action | Desktop Keyboard | Mobile / Touch |
| :--- | :--- | :--- |
| **Steer Left** | `A` or `Left Arrow (←)` | Left button (◀) |
| **Steer Right** | `D` or `Right Arrow (→)` | Right button (▶) |
| **Nitro Boost** | `Spacebar` or `W` or `Up Arrow (↑)` | Nitro button (⚡) |
| **Brake / Slow Down** | `S` or `Down Arrow (↓)` | Brake button (▼) |
| **Pause Game** | `P` | Pause icon (⏸) |

> **Tip:** You can toggle **Easy Cruise Control** on the main dashboard to automatically accelerate so you can focus entirely on steering and dodging traffic.

---

## 📂 Project Structure

```text
Car-Racing/
├── index.html        # Main HTML markup, HUD overlays, garage & menus
├── css/
│   └── style.css     # Glassmorphism UI styles, HUD layouts & animations
├── js/
│   └── game.js       # Three.js 3D engine, game loop, physics, sound & logic
├── .gitignore        # Git ignore file for editor and OS caches
└── README.md         # Game overview, controls, and deployment instructions
```

---

## 🚀 How to Deploy

### Option 1: GitHub Pages (Recommended - 100% Free)

1. Open this repository on GitHub: [Sourav-17a/Car-Racing](https://github.com/Sourav-17a/Car-Racing)
2. Go to **Settings** &rarr; **Pages** (under "Code and automation" in the left sidebar).
3. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` and folder `/ (root)`.
4. Click **Save**.
5. Wait 1–2 minutes, and your game will be live at:
   `https://sourav-17a.github.io/Car-Racing/`

### Option 2: Vercel or Netlify

- Simply import this repository into [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
- No build command or output directory configuration needed &mdash; it deploys instantly as a static website!

---

## 💻 Local Development

To play locally on your computer:
1. Clone the repository:
   ```bash
   git clone https://github.com/Sourav-17a/Car-Racing.git
   cd Car-Racing
   ```
2. Open `index.html` directly in your favorite web browser (Chrome, Edge, Firefox, Safari), or serve it with any local server:
   ```bash
   npx serve .
   ```

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).
