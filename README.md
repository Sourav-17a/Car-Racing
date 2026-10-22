# 🏎️ Nitro Horizon 3D &mdash; Arcade Car Racing Game

A fast-paced, arcade-style 3D car racing game built for the browser using **Three.js**, **Tailwind CSS**, and **Web Audio API**. Dodge traffic, grab spinning coins, collect shields and nitro canisters, unlock 10 real-world supercars, and race through 50 progressive stages across 10 dynamic environments.

---

## 🎮 Play Online & Live Demo

Play directly in your desktop or mobile browser at:
**[https://sourav-17a.github.io/Car-Racing/](https://sourav-17a.github.io/Car-Racing/)**

---

## ✨ Features

- **10 Real-World Supercars with Progressive Unlocks**:
  - 🚗 **Suzuki Swift Sport** &bull; *Starter (FREE)* &bull; 125 km/h &bull; Braking: 75 km/s &bull; Lightweight Japanese hot-hatch with quick city handling.
  - 🏎️ **Honda Civic Type R** &bull; *10,000 Coins* &bull; 140 km/h &bull; Braking: 95 km/s &bull; Track-bred turbo tuner with front splitter & triple center exhaust.
  - 🚙 **Ford Mustang GT V8** &bull; *25,000 Coins* &bull; 155 km/h &bull; Braking: 115 km/s &bull; American muscle icon packed with a roaring 5.0L Coyote V8 and quad exhausts.
  - 🚗 **BMW M4 Competition** &bull; *50,000 Coins* &bull; 172 km/h &bull; Braking: 140 km/s &bull; Iconic German coupe with famous double-kidney grille and M carbon brakes.
  - 🏎️ **Audi R8 V10 Plus** &bull; *90,000 Coins* &bull; 188 km/h &bull; Braking: 165 km/s &bull; Mid-engine howling V10 supercar featuring carbon sideblades & Quattro grip.
  - 🏁 **Porsche 911 GT3 RS** &bull; *150,000 Coins* &bull; 205 km/h &bull; Braking: 195 km/s &bull; High-downforce track weapon with swan-neck rear wing & carbon ceramics.
  - ⚡ **Lamborghini Huracán STO** &bull; *230,000 Coins* &bull; 220 km/h &bull; Braking: 225 km/s &bull; Stealth-fighter Italian V10 with roof air scoop & extreme aero.
  - 🐎 **Ferrari SF90 Stradale** &bull; *330,000 Coins* &bull; 238 km/h &bull; Braking: 255 km/s &bull; 1,000 HP hybrid Italian stallion with F1 nose & instant carbon brakes.
  - 🚀 **McLaren P1 GTR** &bull; *450,000 Coins* &bull; 252 km/h &bull; Braking: 285 km/s &bull; F1-inspired hypercar with massive carbon rear wing & teardrop canopy.
  - 👑 **Bugatti Chiron Super Sport** &bull; *600,000 Coins* &bull; 270 km/h &bull; Braking: 320 km/s &bull; Quad-turbo W16 apex king with horseshoe grille, longtail body & 300+ mph stopping power.
- **Advanced High-Performance Braking System**:
  - Each car features a dedicated braking power rating (`car.braking`).
  - High-tier cars with carbon-ceramic brakes slow down significantly faster for aggressive late-braking maneuvers.
  - Full visual details: visible metallic brake rotor discs and bright Brembo brake calipers behind the alloy wheels, plus illuminated brake lights when decelerating.
- **Next-Gen Photorealistic Graphics & Cockpit Design**:
  - **Procedural HDR Environment Map & Image-Based Lighting (IBL)**: 360&deg; high-dynamic-range panoramic skydome generating realistic specular glints, cloud reflections, and horizon light sliding across car body clearcoats, glass, and alloy wheels.
  - **PBR Automotive Clearcoat Paint**: Multi-layer `THREE.MeshPhysicalMaterial` with realistic metallic base coats, crystal-clear reflective clearcoat (`clearcoat: 1.0`), tinted automotive glass, and diamond-cut alloy wheels.
  - **Interactive 3D Showroom Turntable**: Luxury circular podium with glowing neon halo and studio spotlight in the Garage & Menu &mdash; touch or mouse drag allows full 360&deg; free orbit inspection of any supercar.
  - **Cyber-Arc Cockpit Instrument Cluster**: Futuristic SVG arc tachometer sweeping from cyan to redline, digital gear indicator (`GEAR 1` to `TOP GEAR`), real-time Lateral G-force meter, and animated stage progress track ribbon with moving car pin.
  - **Dynamic Collision Friction Sparks**: Showers of glowing golden friction sparks spraying off the metal barriers when grinding the guardrail or colliding with traffic.
  - **Speed Blur Vignette & Supersonic Nitro Shock Diamonds**: Dynamic radial speed vignette that intensifies at 110+ km/h, camera dynamic FOV warp (60&deg; &rarr; 84&deg;), and supersonic exhaust flames with pulsating shock diamond rings.
  - **Real-Time Soft Shadows & Road Shaders**: High-res 2048x2048 soft shadow maps, granular asphalt with 3-lane racing tire rubber wear, checkered racing rumble curbs, and distant mountain ridge horizons.
- **Detailed 3D Car Models**:
  - Real-world signature styling cues: BMW dual-kidney grilles, Bugatti horseshoe grille and C-line curve, Audi carbon side blades, Porsche GT3 RS swan-neck wing, Mustang racing stripes, and custom quad exhausts.
  - Dual nitro flame exhausts shooting directly from exhaust tips.
  - Functional side door mirrors, front aero splitters, and rear diffusers.
- **Realistic Edge & Barrier Crash Detection**:
  - **Track Edge / Guardrail Collision**: Hitting or grinding against the road guardrail deals physical damage, slows the car down, bursts sparks, and shakes the camera.
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
- **Phone-Ergonomic Two-Thumb Mobile Controls**:
  - **Left side of screen**: Large Steer Left button (◀) & Brake (▼).
  - **Right side of screen**: Nitro boost (⚡) & Large Steer Right button (▶).
- **Powerups & Collectibles**:
  - 🟡 **Gold Coins**: Currency used in the garage to purchase faster cars.
  - 🧲 **Coin Magnet**: Automatically pulls nearby coins towards your vehicle.
  - 🛡️ **Armor Shield**: Absorbs barrier or traffic collisions without taking damage.
  - ⚡ **Nitro Refill**: Instantly tops up your boost meter.
- **Procedural Sound Engine**: Powered by Web Audio API &mdash; synthesized engine revving, brake squeal, nitro boost whoosh, crash effects, and win chimes.
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

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).
