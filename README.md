# 🏎️ Nitro Horizon 3D &mdash; Arcade Car Racing Game

A fast-paced, arcade-style 3D car racing game built for the browser using **Three.js**, **Tailwind CSS**, and **Web Audio API**. Dodge traffic, grab spinning coins, collect shields and nitro canisters, unlock high-performance supercars, and race through 50 progressive stages across 10 dynamic environments.

---

## 🎮 Play Online & Live Demo

Play directly in your desktop or mobile browser at:
**[https://sourav-17a.github.io/Car-Racing/](https://sourav-17a.github.io/Car-Racing/)**

---

## ✨ Features

- **3D Graphics & Physical Guardrails**: Built using Three.js with procedural geometries, dynamic lighting, motion blur particle streams, neon underglow, 3D barrier rails with posts, and camera shake impacts.
- **Realistic Edge & Barrier Crash Detection**:
  - **Track Edge / Guardrail Collision**: Hitting or grinding against the road guardrail now deals physical damage, slows the car down, bursts sparks, and shakes the camera.
  - **Full Edge-to-Edge Car Hitbox**: Physical car dimensions, wheels, wings, bumpers, and steering yaw angles are fully detectable &mdash; touching any edge of a traffic car triggers a real collision!
- **50 Progressive Unlockable Levels**:
  - Complete Level 1 to unlock Level 2, Level 2 to unlock Level 3, all the way to Level 50!
  - 10 distinct thematic zones:
    1. 🏖️ **Sunny Coastline** (Levels 1–5, 1,000m – 1,600m)
    2. 🏜️ **Sunset Canyon** (Levels 6–10, 1,750m – 2,400m)
    3. 🌆 **Neon Cyber City** (Levels 11–15, 2,550m – 3,200m)
    4. ❄️ **Alpine Snow Pass** (Levels 16–20, 3,350m – 4,000m)
    5. 🌋 **Volcano Inferno** (Levels 21–25, 4,150m – 4,800m)
    6. 🌴 **Emerald Jungle** (Levels 26–30, 4,950m – 5,600m)
    7. 🌸 **Sakura Twilight** (Levels 31–35, 5,750m – 6,400m)
    8. ⚡ **Electric Thunderstorm** (Levels 36–40, 6,550m – 7,200m)
    9. 🌌 **Cosmic Nebula** (Levels 41–45, 7,400m – 8,250m)
    10. 🏆 **Apex Grand Prix** (Levels 46–50, 8,500m – 10,000m)
- **5 Unlockable 3D Cars**:
  - 🚗 **Street Cruiser**: Crimson coupe balanced for effortless handling.
  - 🏎️ **Drift Viper**: Cyan tuner with razor-sharp lane response.
  - 🚙 **Desert Titan**: Heavy armored rally beast with strong coin magnet pull.
  - ⚡ **Cyber Blade**: Futuristic wedge supercar with high-output nitro jets.
  - 🚀 **Apex Hyperion**: Ultimate hypercar with maximum velocity and magnet reach.
- **Phone-Ergonomic Two-Thumb Mobile Controls**:
  - **Left side of screen**: Large Steer Left button (◀) & Brake (▼).
  - **Right side of screen**: Nitro boost (⚡) & Large Steer Right button (▶).
- **Powerups & Collectibles**:
  - 🟡 **Gold Coins**: Currency used in the garage to purchase faster cars.
  - 🧲 **Coin Magnet**: Automatically pulls nearby coins towards your vehicle.
  - 🛡️ **Armor Shield**: Absorbs barrier or traffic collisions without taking damage.
  - ⚡ **Nitro Refill**: Instantly tops up your boost meter.
- **Procedural Sound Engine**: Powered by Web Audio API &mdash; no heavy audio downloads required. Real-time synthesized engine revving, nitro boost whoosh, crash effects, and win chimes.
- **Persistent Progress**: Automatically saves your coins, unlocked vehicles, and highest unlocked stage in `localStorage`.

---

## 🕹️ Controls

| Action | Desktop Keyboard | Mobile / Touch Screen |
| :--- | :--- | :--- |
| **Steer Left** | `A` or `Left Arrow (←)` | **Left side:** Left button (◀) |
| **Brake / Slow Down** | `S` or `Down Arrow (↓)` | **Left side:** Brake button (▼) |
| **Nitro Boost** | `Spacebar` or `W` or `Up Arrow (↑)` | **Right side:** Nitro button (⚡) |
| **Steer Right** | `D` or `Right Arrow (→)` | **Right side:** Right button (▶) |
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
├── LICENSE           # MIT License
└── README.md         # Game overview, controls, and deployment instructions
```

---

## 🚀 How to Deploy

### GitHub Pages (Already Configured)
- Deployed directly from the `main` branch.
- Play online anytime at: `https://sourav-17a.github.io/Car-Racing/`

### Vercel / Netlify
- Import this repository into [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
- Deploys instantly with zero configuration needed.

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).
