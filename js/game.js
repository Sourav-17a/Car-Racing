    const CARS = [
      {
        id: 'swift',
        name: 'Suzuki Swift Sport',
        desc: 'Lightweight, agile Japanese hot-hatch with rapid city cornering and responsive disc brakes.',
        cost: 0,
        bodyColor: 0xfacc15,
        accentColor: 0x0f172a,
        neonColor: 0x38bdf8,
        caliperColor: 0xef4444,
        maxSpeed: 125,
        accel: 60,
        braking: 75,
        handling: 36,
        magnetRadius: 3.2,
        style: 'hatchback',
        brandTag: 'Hot Hatch'
      },
      {
        id: 'civic',
        name: 'Honda Civic Type R',
        desc: 'Track-bred turbo tuner with aerodynamic front splitter, triple center exhaust, and Brembo brakes.',
        cost: 10000,
        bodyColor: 0xf8fafc,
        accentColor: 0xdc2626,
        neonColor: 0xf87171,
        caliperColor: 0xdc2626,
        maxSpeed: 140,
        accel: 68,
        braking: 95,
        handling: 40,
        magnetRadius: 3.8,
        style: 'tuner_hatch',
        brandTag: 'Track Tuner'
      },
      {
        id: 'mustang',
        name: 'Ford Mustang GT V8',
        desc: 'American muscle icon packed with a roaring 5.0L Coyote V8, quad exhausts, and heavy-duty stopping power.',
        cost: 25000,
        bodyColor: 0x0284c7,
        accentColor: 0xffffff,
        neonColor: 0x38bdf8,
        caliperColor: 0xfacc15,
        maxSpeed: 155,
        accel: 76,
        braking: 115,
        handling: 38,
        magnetRadius: 4.4,
        style: 'muscle_v8',
        brandTag: 'V8 Muscle'
      },
      {
        id: 'bmw',
        name: 'BMW M4 Competition',
        desc: 'Twin-turbo German precision coupe boasting the iconic double-kidney grille, M sport differential, and carbon brakes.',
        cost: 50000,
        bodyColor: 0x059669,
        accentColor: 0x111827,
        neonColor: 0x34d399,
        caliperColor: 0x0284c7,
        maxSpeed: 172,
        accel: 85,
        braking: 140,
        handling: 44,
        magnetRadius: 5.0,
        style: 'bmw_coupe',
        brandTag: 'German Precision'
      },
      {
        id: 'audi_r8',
        name: 'Audi R8 V10 Plus',
        desc: 'Mid-engine howling V10 supercar featuring signature carbon sideblades, Quattro AWD, and ceramic discs.',
        cost: 90000,
        bodyColor: 0x64748b,
        accentColor: 0xdc2626,
        neonColor: 0xf87171,
        caliperColor: 0xdc2626,
        maxSpeed: 188,
        accel: 93,
        braking: 165,
        handling: 46,
        magnetRadius: 5.6,
        style: 'audi_super',
        brandTag: 'V10 Supercar'
      },
      {
        id: 'porsche',
        name: 'Porsche 911 GT3 RS',
        desc: 'Extreme track weapon with giant swan-neck rear wing, fender louvers, and laser-precise carbon ceramics.',
        cost: 150000,
        bodyColor: 0x0284c7,
        accentColor: 0xef4444,
        neonColor: 0x38bdf8,
        caliperColor: 0xfacc15,
        maxSpeed: 205,
        accel: 102,
        braking: 195,
        handling: 50,
        magnetRadius: 6.2,
        style: 'gt3_rs',
        brandTag: 'Track Weapon'
      },
      {
        id: 'lamborghini',
        name: 'Lamborghini Huracan STO',
        desc: 'Stealth-fighter Italian V10 dressed in aggressive carbon aero, roof air scoop, and high-G brake calipers.',
        cost: 230000,
        bodyColor: 0xf97316,
        accentColor: 0x0284c7,
        neonColor: 0xfbbf24,
        caliperColor: 0xef4444,
        maxSpeed: 220,
        accel: 110,
        braking: 225,
        handling: 52,
        magnetRadius: 6.8,
        style: 'lambo_wedge',
        brandTag: 'Italian V10'
      },
      {
        id: 'ferrari',
        name: 'Ferrari SF90 Stradale',
        desc: '1,000 HP hybrid Italian stallion with twin-turbo V8, F1 aero nose, and instantaneous carbon-ceramic anchors.',
        cost: 330000,
        bodyColor: 0xdc2626,
        accentColor: 0xfacc15,
        neonColor: 0xef4444,
        caliperColor: 0xfacc15,
        maxSpeed: 238,
        accel: 120,
        braking: 255,
        handling: 54,
        magnetRadius: 7.5,
        style: 'ferrari_f1',
        brandTag: 'Hyper Hybrid'
      },
      {
        id: 'mclaren',
        name: 'McLaren P1 GTR',
        desc: 'Formula 1 inspired British hypercar equipped with a colossal carbon rear wing, dihedral scoops, and DRS boost.',
        cost: 450000,
        bodyColor: 0xeab308,
        accentColor: 0x18181b,
        neonColor: 0xfef08a,
        caliperColor: 0x06b6d4,
        maxSpeed: 252,
        accel: 130,
        braking: 285,
        handling: 56,
        magnetRadius: 8.2,
        style: 'mclaren_aero',
        brandTag: 'Track Hypercar'
      },
      {
        id: 'bugatti',
        name: 'Bugatti Chiron Super Sport',
        desc: 'Quad-turbo W16 king of hypercars with iconic horseshoe grille, aerodynamic longtail, and 300+ mph stopping power.',
        cost: 600000,
        bodyColor: 0x090d16,
        accentColor: 0xf97316,
        neonColor: 0xf97316,
        caliperColor: 0xf97316,
        maxSpeed: 270,
        accel: 142,
        braking: 320,
        handling: 58,
        magnetRadius: 9.0,
        style: 'bugatti_longtail',
        brandTag: 'W16 Apex King'
      }
    ];

    const LEVEL_ZONES = [
      { name: 'All 50 Stages', range: [1, 50] },
      { name: '1. Coastline', range: [1, 5] },
      { name: '2. Canyon', range: [6, 10] },
      { name: '3. Cyber City', range: [11, 15] },
      { name: '4. Alpine Snow', range: [16, 20] },
      { name: '5. Volcano', range: [21, 25] },
      { name: '6. Jungle', range: [26, 30] },
      { name: '7. Sakura', range: [31, 35] },
      { name: '8. Storm', range: [36, 40] },
      { name: '9. Nebula', range: [41, 45] },
      { name: '10. Apex Grand Prix', range: [46, 50] }
    ];

    const LEVELS = [
      // Zone 1: Sunny Coastline (Levels 1-5)
      { id: 1, name: 'Sunny Coastline', desc: 'Breezy ocean highway lined with tropical palms and golden sand.', distance: 1000, coinMult: 1.0, trafficLabel: 'Easy', trafficInterval: 1.25, trafficSpeedRatio: 0.38, skyColor: 0x38bdf8, fogColor: 0x7dd3fc, groundColor: 0xfde68a, roadColor: 0x334155, stripeColor: 0xf8fafc, sceneryType: 'palm' },
      { id: 2, name: 'Palm Bay Breeze', desc: 'Smooth coastal cruise past swaying palms and azure lagoons.', distance: 1150, coinMult: 1.1, trafficLabel: 'Easy', trafficInterval: 1.20, trafficSpeedRatio: 0.40, skyColor: 0x0ea5e9, fogColor: 0x38bdf8, groundColor: 0xfef08a, roadColor: 0x334155, stripeColor: 0xf8fafc, sceneryType: 'palm' },
      { id: 3, name: 'Oceanview Highway', desc: 'Long winding ocean straightaway with accelerating beach traffic.', distance: 1300, coinMult: 1.2, trafficLabel: 'Easy+', trafficInterval: 1.15, trafficSpeedRatio: 0.42, skyColor: 0x0284c7, fogColor: 0x38bdf8, groundColor: 0xfde047, roadColor: 0x1e293b, stripeColor: 0xfef08a, sceneryType: 'palm' },
      { id: 4, name: 'Coral Shore Drift', desc: 'Vibrant turquoise shoreline road with fast incoming traffic.', distance: 1450, coinMult: 1.3, trafficLabel: 'Moderate', trafficInterval: 1.10, trafficSpeedRatio: 0.44, skyColor: 0x06b6d4, fogColor: 0x67e8f9, groundColor: 0xfacc15, roadColor: 0x334155, stripeColor: 0xffffff, sceneryType: 'palm' },
      { id: 5, name: 'Sunset Coast Sprint', desc: 'Golden hour coastal sprint into the setting horizon sun.', distance: 1600, coinMult: 1.4, trafficLabel: 'Moderate', trafficInterval: 1.05, trafficSpeedRatio: 0.45, skyColor: 0xf59e0b, fogColor: 0xfbbf24, groundColor: 0xd97706, roadColor: 0x1e293b, stripeColor: 0xfef08a, sceneryType: 'palm' },

      // Zone 2: Sunset Canyon (Levels 6-10)
      { id: 6, name: 'Red Rock Canyon', desc: 'Warm dusk sprint through towering red rock mesas and desert cacti.', distance: 1750, coinMult: 1.5, trafficLabel: 'Moderate', trafficInterval: 1.00, trafficSpeedRatio: 0.46, skyColor: 0xf97316, fogColor: 0xfb923c, groundColor: 0xd97706, roadColor: 0x292524, stripeColor: 0xfde047, sceneryType: 'canyon' },
      { id: 7, name: 'Dune Valley Pass', desc: 'Rally through deep orange dunes and rocky sandstone ridges.', distance: 1900, coinMult: 1.6, trafficLabel: 'Moderate+', trafficInterval: 0.96, trafficSpeedRatio: 0.48, skyColor: 0xea580c, fogColor: 0xf97316, groundColor: 0xb45309, roadColor: 0x292524, stripeColor: 0xfde047, sceneryType: 'canyon' },
      { id: 8, name: 'Mirage Desert Way', desc: 'Heat-shimmering asphalt stretching across arid clay flats.', distance: 2050, coinMult: 1.7, trafficLabel: 'Fast', trafficInterval: 0.92, trafficSpeedRatio: 0.49, skyColor: 0xc2410c, fogColor: 0xf97316, groundColor: 0x9a3412, roadColor: 0x1c1917, stripeColor: 0xfef08a, sceneryType: 'canyon' },
      { id: 9, name: 'Sandstorm Gorge', desc: 'High-speed blast through a narrow desert corridor with rising dust.', distance: 2200, coinMult: 1.8, trafficLabel: 'Fast', trafficInterval: 0.88, trafficSpeedRatio: 0.50, skyColor: 0x9a3412, fogColor: 0xc2410c, groundColor: 0x7c2d12, roadColor: 0x292524, stripeColor: 0xfde047, sceneryType: 'canyon' },
      { id: 10, name: 'Obsidian Canyon Run', desc: 'Chamber finale between towering black basalt and crimson sandstone.', distance: 2400, coinMult: 1.9, trafficLabel: 'Fast+', trafficInterval: 0.85, trafficSpeedRatio: 0.52, skyColor: 0x7c2d12, fogColor: 0x9a3412, groundColor: 0x431407, roadColor: 0x1c1917, stripeColor: 0xf97316, sceneryType: 'canyon' },

      // Zone 3: Neon Cyber City (Levels 11-15)
      { id: 11, name: 'Neon Cyber City', desc: 'High-speed midnight expressway lit by glowing synthwave towers.', distance: 2550, coinMult: 2.0, trafficLabel: 'Fast', trafficInterval: 0.82, trafficSpeedRatio: 0.52, skyColor: 0x0f172a, fogColor: 0x1e1b4b, groundColor: 0x090d16, roadColor: 0x1e293b, stripeColor: 0x22d3ee, sceneryType: 'city' },
      { id: 12, name: 'Synthwave Boulevard', desc: 'Pulsing purple neon towers and aggressive rush-hour tuners.', distance: 2700, coinMult: 2.1, trafficLabel: 'Dense', trafficInterval: 0.80, trafficSpeedRatio: 0.53, skyColor: 0x312e81, fogColor: 0x4338ca, groundColor: 0x0f172a, roadColor: 0x1e1b4b, stripeColor: 0xe879f9, sceneryType: 'city' },
      { id: 13, name: 'Midnight Skyline', desc: 'Elevated urban freeway with dazzling skyscrapers and fast traffic.', distance: 2850, coinMult: 2.2, trafficLabel: 'Dense', trafficInterval: 0.77, trafficSpeedRatio: 0.54, skyColor: 0x1e1b4b, fogColor: 0x2e1065, groundColor: 0x090d16, roadColor: 0x0f172a, stripeColor: 0x38bdf8, sceneryType: 'city' },
      { id: 14, name: 'Cyber Grid Freeway', desc: 'Futuristic hyper-loop avenue flanked by glowing holographic signs.', distance: 3000, coinMult: 2.3, trafficLabel: 'Dense+', trafficInterval: 0.74, trafficSpeedRatio: 0.55, skyColor: 0x030712, fogColor: 0x1e1b4b, groundColor: 0x111827, roadColor: 0x1f2937, stripeColor: 0x06b6d4, sceneryType: 'city' },
      { id: 15, name: 'Neon Overdrive', desc: 'Max-speed urban pursuit through midnight electronic downtown.', distance: 3200, coinMult: 2.5, trafficLabel: 'Intense', trafficInterval: 0.72, trafficSpeedRatio: 0.56, skyColor: 0x18181b, fogColor: 0x27272a, groundColor: 0x090d16, roadColor: 0x18181b, stripeColor: 0xf43f5e, sceneryType: 'city' },

      // Zone 4: Alpine Snow Pass (Levels 16-20)
      { id: 16, name: 'Pine Ridge Pass', desc: 'Crisp mountain highway winding past frosted pines and icy peaks.', distance: 3350, coinMult: 2.6, trafficLabel: 'Dense', trafficInterval: 0.72, trafficSpeedRatio: 0.56, skyColor: 0x93c5fd, fogColor: 0xdbeafe, groundColor: 0xf1f5f9, roadColor: 0x475569, stripeColor: 0x38bdf8, sceneryType: 'snow' },
      { id: 17, name: 'Glacier Valley', desc: 'Frozen sub-zero pass flanked by crystal blue glacial walls.', distance: 3500, coinMult: 2.7, trafficLabel: 'Dense', trafficInterval: 0.70, trafficSpeedRatio: 0.57, skyColor: 0x60a5fa, fogColor: 0xbfdbfe, groundColor: 0xe2e8f0, roadColor: 0x334155, stripeColor: 0x0284c7, sceneryType: 'snow' },
      { id: 18, name: 'Frozen Summit Way', desc: 'High altitude mountain ridge where biting wind tests your handling.', distance: 3650, coinMult: 2.8, trafficLabel: 'Intense', trafficInterval: 0.68, trafficSpeedRatio: 0.58, skyColor: 0x3b82f6, fogColor: 0x93c5fd, groundColor: 0xffffff, roadColor: 0x1e293b, stripeColor: 0x38bdf8, sceneryType: 'snow' },
      { id: 19, name: 'Blizzard Mountain', desc: 'Whiteout snowstorm sprint demanding ultra-sharp reflexes.', distance: 3800, coinMult: 3.0, trafficLabel: 'Intense', trafficInterval: 0.66, trafficSpeedRatio: 0.59, skyColor: 0x1d4ed8, fogColor: 0x60a5fa, groundColor: 0xf8fafc, roadColor: 0x334155, stripeColor: 0x67e8f9, sceneryType: 'snow' },
      { id: 20, name: 'Arctic Aurora Pass', desc: 'Glowing polar sky shimmering over high-speed frozen highway.', distance: 4000, coinMult: 3.2, trafficLabel: 'Intense+', trafficInterval: 0.64, trafficSpeedRatio: 0.60, skyColor: 0x0c4a6e, fogColor: 0x0284c7, groundColor: 0xe0f2fe, roadColor: 0x0f172a, stripeColor: 0x38bdf8, sceneryType: 'snow' },

      // Zone 5: Volcano Inferno (Levels 21-25)
      { id: 21, name: 'Magma Foothills', desc: 'Championship finale road across obsidian rock and glowing magma vents.', distance: 4150, coinMult: 3.3, trafficLabel: 'Intense', trafficInterval: 0.64, trafficSpeedRatio: 0.60, skyColor: 0x450a0a, fogColor: 0x7f1d1d, groundColor: 0x1c1917, roadColor: 0x18181b, stripeColor: 0xef4444, sceneryType: 'volcano' },
      { id: 22, name: 'Ashfall Causeway', desc: 'Volcanic highway covered in glowing embers and smoke clouds.', distance: 4300, coinMult: 3.5, trafficLabel: 'Intense', trafficInterval: 0.62, trafficSpeedRatio: 0.61, skyColor: 0x581c87, fogColor: 0x701a75, groundColor: 0x18181b, roadColor: 0x27272a, stripeColor: 0xf97316, sceneryType: 'volcano' },
      { id: 23, name: 'Molten Ridge', desc: 'Fiery highway bounded by boiling lava pools and sharp turns.', distance: 4450, coinMult: 3.6, trafficLabel: 'Expert', trafficInterval: 0.60, trafficSpeedRatio: 0.62, skyColor: 0x7f1d1d, fogColor: 0x991b1b, groundColor: 0x292524, roadColor: 0x1c1917, stripeColor: 0xfbbf24, sceneryType: 'volcano' },
      { id: 24, name: 'Obsidian Crater', desc: 'Black volcanic glass highway through a smoking lava basin.', distance: 4600, coinMult: 3.8, trafficLabel: 'Expert', trafficInterval: 0.58, trafficSpeedRatio: 0.62, skyColor: 0x3b0764, fogColor: 0x581c87, groundColor: 0x18181b, roadColor: 0x090d16, stripeColor: 0xf43f5e, sceneryType: 'volcano' },
      { id: 25, name: 'Inferno Caldera', desc: 'Extreme survival race at the heart of an erupting volcano.', distance: 4800, coinMult: 4.0, trafficLabel: 'Expert', trafficInterval: 0.56, trafficSpeedRatio: 0.63, skyColor: 0x7f1d1d, fogColor: 0xb91c1c, groundColor: 0x1c1917, roadColor: 0x0c0a09, stripeColor: 0xf59e0b, sceneryType: 'volcano' },

      // Zone 6: Emerald Jungle (Levels 26-30)
      { id: 26, name: 'Rainforest Canopy', desc: 'Dense jungle corridor winding beneath towering tropical trees.', distance: 4950, coinMult: 4.2, trafficLabel: 'Expert', trafficInterval: 0.56, trafficSpeedRatio: 0.63, skyColor: 0x064e3b, fogColor: 0x047857, groundColor: 0x065f46, roadColor: 0x1f2937, stripeColor: 0x34d399, sceneryType: 'jungle' },
      { id: 27, name: 'Emerald Falls Highway', desc: 'Mist-shrouded jungle road following roaring tropical waterfalls.', distance: 5100, coinMult: 4.4, trafficLabel: 'Expert+', trafficInterval: 0.55, trafficSpeedRatio: 0.63, skyColor: 0x065f46, fogColor: 0x059669, groundColor: 0x047857, roadColor: 0x111827, stripeColor: 0x6ee7b7, sceneryType: 'jungle' },
      { id: 28, name: 'Deep Jungle Serpent', desc: 'Curving asphalt through ancient moss-covered ruins and lush vines.', distance: 5250, coinMult: 4.5, trafficLabel: 'Extreme', trafficInterval: 0.54, trafficSpeedRatio: 0.64, skyColor: 0x022c22, fogColor: 0x065f46, groundColor: 0x064e3b, roadColor: 0x1f2937, stripeColor: 0xa7f3d0, sceneryType: 'jungle' },
      { id: 29, name: 'Monsoon Corridor', desc: 'High-speed rainforest sprint under dramatic tropical downpours.', distance: 5400, coinMult: 4.7, trafficLabel: 'Extreme', trafficInterval: 0.53, trafficSpeedRatio: 0.64, skyColor: 0x042f2e, fogColor: 0x0f766e, groundColor: 0x134e4a, roadColor: 0x1e293b, stripeColor: 0x2dd4bf, sceneryType: 'jungle' },
      { id: 30, name: 'Temple of Jade', desc: 'Sacred jungle plateau sprint lined by golden totems and statues.', distance: 5600, coinMult: 5.0, trafficLabel: 'Extreme', trafficInterval: 0.52, trafficSpeedRatio: 0.64, skyColor: 0x064e3b, fogColor: 0x10b981, groundColor: 0x065f46, roadColor: 0x0f172a, stripeColor: 0xfacc15, sceneryType: 'jungle' },

      // Zone 7: Sakura Twilight (Levels 31-35)
      { id: 31, name: 'Cherry Blossom Valley', desc: 'Peaceful twilight road blanketed by swirling pink sakura blossoms.', distance: 5750, coinMult: 5.2, trafficLabel: 'Extreme', trafficInterval: 0.52, trafficSpeedRatio: 0.64, skyColor: 0x4c1d95, fogColor: 0x6d28d9, groundColor: 0x3b0764, roadColor: 0x1e1b4b, stripeColor: 0xf472b6, sceneryType: 'sakura' },
      { id: 32, name: 'Twilight Lantern Trail', desc: 'Atmospheric evening avenue lined with glowing red Japanese lanterns.', distance: 5900, coinMult: 5.4, trafficLabel: 'Extreme+', trafficInterval: 0.51, trafficSpeedRatio: 0.65, skyColor: 0x581c87, fogColor: 0x7e22ce, groundColor: 0x3b0764, roadColor: 0x18181b, stripeColor: 0xfb7185, sceneryType: 'sakura' },
      { id: 33, name: 'Mount Fuji Horizon', desc: 'Majestic twilight speedway facing the snow-capped peak silhouette.', distance: 6050, coinMult: 5.6, trafficLabel: 'Insane', trafficInterval: 0.50, trafficSpeedRatio: 0.65, skyColor: 0x312e81, fogColor: 0x4338ca, groundColor: 0x1e1b4b, roadColor: 0x0f172a, stripeColor: 0xf43f5e, sceneryType: 'sakura' },
      { id: 34, name: 'Golden Pagoda Freeway', desc: 'High-speed sprint flanked by ancient tier pagodas and blossom groves.', distance: 6200, coinMult: 5.8, trafficLabel: 'Insane', trafficInterval: 0.49, trafficSpeedRatio: 0.65, skyColor: 0x3b0764, fogColor: 0x581c87, groundColor: 0x2e1065, roadColor: 0x18181b, stripeColor: 0xfacc15, sceneryType: 'sakura' },
      { id: 35, name: 'Midnight Sakura Drift', desc: 'Championship drift zone under a luminous full moon and falling petals.', distance: 6400, coinMult: 6.0, trafficLabel: 'Insane', trafficInterval: 0.48, trafficSpeedRatio: 0.65, skyColor: 0x1e1b4b, fogColor: 0x312e81, groundColor: 0x0f172a, roadColor: 0x030712, stripeColor: 0xe879f9, sceneryType: 'sakura' },

      // Zone 8: Electric Thunderstorm (Levels 36-40)
      { id: 36, name: 'Thunder Valley Route', desc: 'Dark supercell storm pass illuminated by violent lightning strikes.', distance: 6550, coinMult: 6.2, trafficLabel: 'Insane', trafficInterval: 0.48, trafficSpeedRatio: 0.65, skyColor: 0x1e293b, fogColor: 0x334155, groundColor: 0x0f172a, roadColor: 0x020617, stripeColor: 0x38bdf8, sceneryType: 'storm' },
      { id: 37, name: 'Tempest Canyon', desc: 'Howling gale forces and charged ozone energy alongside narrow cliff walls.', distance: 6700, coinMult: 6.4, trafficLabel: 'Insane+', trafficInterval: 0.47, trafficSpeedRatio: 0.65, skyColor: 0x0f172a, fogColor: 0x1e293b, groundColor: 0x020617, roadColor: 0x1e293b, stripeColor: 0x818cf8, sceneryType: 'storm' },
      { id: 38, name: 'Lightning Ridge', desc: 'Electrified high-altitude expressway where sparks leap off guardrails.', distance: 6850, coinMult: 6.6, trafficLabel: 'Master', trafficInterval: 0.46, trafficSpeedRatio: 0.65, skyColor: 0x1e1b4b, fogColor: 0x2e1065, groundColor: 0x0f172a, roadColor: 0x030712, stripeColor: 0xa855f7, sceneryType: 'storm' },
      { id: 39, name: 'Supercell Vortex', desc: 'Racing inside the swirling eye of an immense lightning supercell.', distance: 7000, coinMult: 6.8, trafficLabel: 'Master', trafficInterval: 0.45, trafficSpeedRatio: 0.65, skyColor: 0x0c0a09, fogColor: 0x1c1917, groundColor: 0x18181b, roadColor: 0x090d16, stripeColor: 0x22d3ee, sceneryType: 'storm' },
      { id: 40, name: 'Storm Chaser Grand Prix', desc: 'Championship electrical storm race pushing hypercars to the brink.', distance: 7200, coinMult: 7.0, trafficLabel: 'Master', trafficInterval: 0.44, trafficSpeedRatio: 0.65, skyColor: 0x030712, fogColor: 0x1e1b4b, groundColor: 0x020617, roadColor: 0x000000, stripeColor: 0x38bdf8, sceneryType: 'storm' },

      // Zone 9: Cosmic Nebula (Levels 41-45)
      { id: 41, name: 'Quantum Bypass', desc: 'Interstellar expressway running across a celestial starlight ribbon.', distance: 7400, coinMult: 7.2, trafficLabel: 'Master', trafficInterval: 0.44, trafficSpeedRatio: 0.65, skyColor: 0x0b0f19, fogColor: 0x111827, groundColor: 0x030712, roadColor: 0x0f172a, stripeColor: 0x22d3ee, sceneryType: 'quantum' },
      { id: 42, name: 'Starlight Nebula', desc: 'Luminous galactic dust clouds and pulsar beams surrounding the track.', distance: 7600, coinMult: 7.5, trafficLabel: 'Master+', trafficInterval: 0.43, trafficSpeedRatio: 0.65, skyColor: 0x170b28, fogColor: 0x241242, groundColor: 0x090412, roadColor: 0x130924, stripeColor: 0xe879f9, sceneryType: 'quantum' },
      { id: 43, name: 'Cosmic Rift Causeway', desc: 'Spanning gravitational rifts where speed warps the horizon lights.', distance: 7800, coinMult: 7.8, trafficLabel: 'Legend', trafficInterval: 0.43, trafficSpeedRatio: 0.65, skyColor: 0x061826, fogColor: 0x0c2f4d, groundColor: 0x020b12, roadColor: 0x081f33, stripeColor: 0x38bdf8, sceneryType: 'quantum' },
      { id: 44, name: 'Supernova Highway', desc: 'Blinding stellar explosion shockwaves illuminating pure velocity.', distance: 8000, coinMult: 8.0, trafficLabel: 'Legend', trafficInterval: 0.42, trafficSpeedRatio: 0.65, skyColor: 0x240715, fogColor: 0x420c27, groundColor: 0x12020a, roadColor: 0x210413, stripeColor: 0xf43f5e, sceneryType: 'quantum' },
      { id: 45, name: 'Event Horizon Speedzone', desc: 'Racing at the razor boundary of a supermassive cosmic anomaly.', distance: 8250, coinMult: 8.5, trafficLabel: 'Legend', trafficInterval: 0.42, trafficSpeedRatio: 0.65, skyColor: 0x020617, fogColor: 0x0f172a, groundColor: 0x000000, roadColor: 0x090d16, stripeColor: 0x06b6d4, sceneryType: 'quantum' },

      // Zone 10: Apex Championship (Levels 46-50)
      { id: 46, name: "Champion's Ascent", desc: 'The golden championship road opening for the galaxy’s greatest drivers.', distance: 8500, coinMult: 8.8, trafficLabel: 'Legend+', trafficInterval: 0.42, trafficSpeedRatio: 0.65, skyColor: 0x1e1b4b, fogColor: 0x312e81, groundColor: 0x0f172a, roadColor: 0x18181b, stripeColor: 0xfacc15, sceneryType: 'apex' },
      { id: 47, name: 'Hyper Velocity Circuit', desc: 'Hypersonic proving grounds built for maximum adrenaline and nitro.', distance: 8800, coinMult: 9.0, trafficLabel: 'Apex', trafficInterval: 0.41, trafficSpeedRatio: 0.65, skyColor: 0x18181b, fogColor: 0x27272a, groundColor: 0x090d16, roadColor: 0x0f172a, stripeColor: 0x38bdf8, sceneryType: 'apex' },
      { id: 48, name: 'Apex Titans Expressway', desc: 'Immense golden championship arches rising above a 10-mile runway.', distance: 9100, coinMult: 9.3, trafficLabel: 'Apex', trafficInterval: 0.41, trafficSpeedRatio: 0.65, skyColor: 0x2e1065, fogColor: 0x3b0764, groundColor: 0x18181b, roadColor: 0x1e1b4b, stripeColor: 0xf59e0b, sceneryType: 'apex' },
      { id: 49, name: 'Horizon Omega Speedway', desc: 'The penultimate grand championship showdown against relentless traffic.', distance: 9500, coinMult: 9.6, trafficLabel: 'Apex+', trafficInterval: 0.40, trafficSpeedRatio: 0.65, skyColor: 0x0f172a, fogColor: 0x1e293b, groundColor: 0x020617, roadColor: 0x000000, stripeColor: 0x10b981, sceneryType: 'apex' },
      { id: 50, name: 'Ultimate Horizon Champion', desc: 'The 10,000-meter supreme master challenge. Cross the finish line to become the legendary Horizon God!', distance: 10000, coinMult: 10.0, trafficLabel: 'Godlike', trafficInterval: 0.40, trafficSpeedRatio: 0.65, skyColor: 0x000000, fogColor: 0x18181b, groundColor: 0x0a0a0a, roadColor: 0x141414, stripeColor: 0xfacc15, sceneryType: 'apex' }
    ];

    let activeZoneIndex = 0;
    let cameraShake = 0;

    const state = {
      coins: 0,
      unlockedCars: ['swift'],
      selectedCarId: 'swift',
      selectedLevelId: 1,
      highestUnlockedLevel: 1,
      autoAccel: true,
      soundEnabled: true,
      mode: 'MENU',
      distance: 0,
      raceCoins: 0,
      speed: 0,
      nitro: 100,
      hearts: 3,
      invulnerableTimer: 0,
      shieldTimer: 0,
      playerX: 0,
      finishSpawned: false
    };

    function loadSaveData() {
      try {
        const raw = localStorage.getItem('nitro_horizon_3d_save_v1');
        if (raw) {
          const parsed = JSON.parse(raw);
          if (typeof parsed.coins === 'number') state.coins = parsed.coins;
          if (Array.isArray(parsed.unlockedCars) && parsed.unlockedCars.length > 0) {
            // Filter to ensure unlocked cars exist in CARS catalog
            const valid = parsed.unlockedCars.filter(id => CARS.some(c => c.id === id));
            if (valid.length > 0) state.unlockedCars = valid;
          }
          if (!state.unlockedCars.includes('swift')) {
            state.unlockedCars.unshift('swift');
          }
          if (parsed.selectedCarId && CARS.some(c => c.id === parsed.selectedCarId)) {
            state.selectedCarId = parsed.selectedCarId;
          } else {
            state.selectedCarId = state.unlockedCars[0] || 'swift';
          }
          if (parsed.selectedLevelId) state.selectedLevelId = Math.min(LEVELS.length, Math.max(1, parsed.selectedLevelId));
          if (parsed.highestUnlockedLevel) state.highestUnlockedLevel = Math.min(LEVELS.length, Math.max(1, parsed.highestUnlockedLevel));
        }
      } catch (e) {
        // Ignore storage error
      }
    }

    function saveGameData() {
      try {
        localStorage.setItem('nitro_horizon_3d_save_v1', JSON.stringify({
          coins: state.coins,
          unlockedCars: state.unlockedCars,
          selectedCarId: state.selectedCarId,
          selectedLevelId: state.selectedLevelId,
          highestUnlockedLevel: state.highestUnlockedLevel
        }));
      } catch (e) {
        // Ignore storage error
      }
    }

    let audioCtx = null;

    function initAudio() {
      if (!audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          audioCtx = new AudioContextClass();
        }
      }
      if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
    }

    function playSound(type) {
      if (!state.soundEnabled) return;
      initAudio();
      if (!audioCtx) return;

      const now = audioCtx.currentTime;

      if (type === 'coin') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(880, now);
        osc.frequency.exponentialRampToValueAtTime(1760, now + 0.12);
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.14);
      } else if (type === 'powerup') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.linearRampToValueAtTime(880, now + 0.1);
        osc.frequency.linearRampToValueAtTime(1320, now + 0.22);
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.25);
      } else if (type === 'crash') {
        const bufferSize = audioCtx.sampleRate * 0.35;
        const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
        }
        const noise = audioCtx.createBufferSource();
        noise.buffer = buffer;
        const filter = audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(850, now);
        filter.frequency.exponentialRampToValueAtTime(120, now + 0.35);

        const gain = audioCtx.createGain();
        gain.gain.setValueAtTime(0.45, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(audioCtx.destination);
        noise.start(now);
      } else if (type === 'brake') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(160, now + 0.18);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.18);
      } else if (type === 'win') {
        const notes = [523.25, 659.25, 783.99, 1046.5];
        notes.forEach((freq, idx) => {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.11);
          gain.gain.setValueAtTime(0.2, now + idx * 0.11);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.11 + 0.25);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start(now + idx * 0.11);
          osc.stop(now + idx * 0.11 + 0.25);
        });
      } else if (type === 'click') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(300, now + 0.05);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.05);
      }
    }

    let scene, camera, renderer;
    let roadMesh, groundMesh, finishGateGroup;
    let playerCarGroup, playerWheels = [], nitroFlameMesh, nitroFlameMesh2, shieldBubbleMesh;
    let playerBrakeLights = [];
    let laneDashMeshes = [];
    let sceneryItems = [];
    let trafficList = [];
    let coinsList = [];
    let powerupsList = [];
    let particleBursts = [];

    const ROAD_WIDTH = 14;
    const LANES = [-4.2, 0, 4.2];

    function initThreeScene() {
      const container = document.getElementById('canvas-container');
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x38bdf8);
      scene.fog = new THREE.FogExp2(0x7dd3fc, 0.0068);

      camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 450);
      camera.position.set(0, 4.2, 9.5);
      camera.lookAt(0, 1.2, -15);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.05;
      container.appendChild(renderer.domElement);

      const hemiLight = new THREE.HemisphereLight(0xffffff, 0x334155, 0.8);
      hemiLight.position.set(0, 50, 0);
      scene.add(hemiLight);

      const dirLight = new THREE.DirectionalLight(0xfffbeb, 1.2);
      dirLight.position.set(25, 45, 20);
      scene.add(dirLight);

      const roadGroup = new THREE.Group();
      scene.add(roadGroup);

      const groundGeo = new THREE.PlaneGeometry(380, 420);
      const groundMat = new THREE.MeshLambertMaterial({ color: 0xfde68a });
      groundMesh = new THREE.Mesh(groundGeo, groundMat);
      groundMesh.rotation.x = -Math.PI / 2;
      groundMesh.position.set(0, -0.05, -120);
      roadGroup.add(groundMesh);

      const roadGeo = new THREE.PlaneGeometry(ROAD_WIDTH, 420);
      const roadMat = new THREE.MeshPhongMaterial({ color: 0x334155, shininess: 18 });
      roadMesh = new THREE.Mesh(roadGeo, roadMat);
      roadMesh.rotation.x = -Math.PI / 2;
      roadMesh.position.set(0, 0, -120);
      roadGroup.add(roadMesh);

      // Elevated 3D Racing Guardrails (Left and Right)
      const curbGeo = new THREE.BoxGeometry(0.5, 0.22, 420);
      const curbMat = new THREE.MeshLambertMaterial({ color: 0xf43f5e });
      const leftCurb = new THREE.Mesh(curbGeo, curbMat);
      leftCurb.position.set(-ROAD_WIDTH / 2 - 0.22, 0.11, -120);
      const rightCurb = new THREE.Mesh(curbGeo, curbMat);
      rightCurb.position.set(ROAD_WIDTH / 2 + 0.22, 0.11, -120);
      roadGroup.add(leftCurb, rightCurb);

      const railBeamGeo = new THREE.BoxGeometry(0.32, 0.55, 420);
      const railMat = new THREE.MeshPhongMaterial({ color: 0x94a3b8, shininess: 80 });
      const leftRail = new THREE.Mesh(railBeamGeo, railMat);
      leftRail.position.set(-ROAD_WIDTH / 2 - 0.25, 0.5, -120);
      const rightRail = new THREE.Mesh(railBeamGeo, railMat);
      rightRail.position.set(ROAD_WIDTH / 2 + 0.25, 0.5, -120);
      roadGroup.add(leftRail, rightRail);

      // Neon Reflective Guardrail Top Strip
      const neonStripGeo = new THREE.BoxGeometry(0.34, 0.09, 420);
      const neonStripMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
      const leftStrip = new THREE.Mesh(neonStripGeo, neonStripMat);
      leftStrip.position.set(-ROAD_WIDTH / 2 - 0.25, 0.8, -120);
      const rightStrip = new THREE.Mesh(neonStripGeo, neonStripMat);
      rightStrip.position.set(ROAD_WIDTH / 2 + 0.25, 0.8, -120);
      roadGroup.add(leftStrip, rightStrip);

      // Guardrail Support Posts
      const postGeo = new THREE.BoxGeometry(0.36, 0.85, 0.36);
      const postMat = new THREE.MeshLambertMaterial({ color: 0x475569 });
      for (let pz = 10; pz >= -300; pz -= 12) {
        const pLeft = new THREE.Mesh(postGeo, postMat);
        pLeft.position.set(-ROAD_WIDTH / 2 - 0.25, 0.42, pz);
        const pRight = new THREE.Mesh(postGeo, postMat);
        pRight.position.set(ROAD_WIDTH / 2 + 0.25, 0.42, pz);
        roadGroup.add(pLeft, pRight);
      }

      // Lane Dashes
      const dashGeo = new THREE.PlaneGeometry(0.24, 3.6);
      const dashMat = new THREE.MeshBasicMaterial({ color: 0xf8fafc });
      for (let i = 0; i < 24; i++) {
        const z = 12 - i * 8;
        const d1 = new THREE.Mesh(dashGeo, dashMat);
        d1.rotation.x = -Math.PI / 2;
        d1.position.set(-2.1, 0.02, z);
        const d2 = new THREE.Mesh(dashGeo, dashMat);
        d2.rotation.x = -Math.PI / 2;
        d2.position.set(2.1, 0.02, z);
        roadGroup.add(d1, d2);
        laneDashMeshes.push(d1, d2);
      }

      rebuildPlayerCar();
      applyLevelTheme(getSelectedLevel());
      populateInitialScenery();

      window.addEventListener('resize', onWindowResize);
    }

    function onWindowResize() {
      if (!renderer || !camera) return;
      const container = document.getElementById('canvas-container');
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }

    // High-Detail 3D Car Construction with Aero, Brakes, Calipers, Grilles & Exhausts
    function createCarMesh(carSpec, isTraffic = false) {
      const group = new THREE.Group();
      const wheels = [];
      const brakeLights = [];

      const bodyMat = new THREE.MeshPhongMaterial({ color: carSpec.bodyColor, shininess: 95 });
      const accentMat = new THREE.MeshPhongMaterial({ color: carSpec.accentColor, shininess: 70 });
      const carbonMat = new THREE.MeshPhongMaterial({ color: 0x111827, shininess: 60 });
      const glassMat = new THREE.MeshPhongMaterial({ color: 0x090d16, shininess: 130, transparent: true, opacity: 0.88 });
      const tireMat = new THREE.MeshLambertMaterial({ color: 0x141414 });
      const rimMat = new THREE.MeshPhongMaterial({ color: 0xe2e8f0, shininess: 120 });
      const rotorMat = new THREE.MeshPhongMaterial({ color: 0x94a3b8, shininess: 100 });
      const caliperMat = new THREE.MeshPhongMaterial({ color: carSpec.caliperColor || 0xef4444, shininess: 90 });
      const chromeMat = new THREE.MeshPhongMaterial({ color: 0xf8fafc, shininess: 140 });

      // Dimensions based on style
      let cWidth = 2.05, cLength = 4.25, cHeight = 0.52, cabW = 1.6, cabH = 0.48;
      if (carSpec.style === 'hatchback') {
        cWidth = 1.95; cLength = 3.85; cHeight = 0.62; cabW = 1.62; cabH = 0.52;
      } else if (carSpec.style === 'tuner_hatch') {
        cWidth = 2.05; cLength = 4.15; cHeight = 0.54; cabW = 1.60; cabH = 0.48;
      } else if (carSpec.style === 'muscle_v8') {
        cWidth = 2.15; cLength = 4.35; cHeight = 0.58; cabW = 1.68; cabH = 0.48;
      } else if (carSpec.style === 'bmw_coupe') {
        cWidth = 2.08; cLength = 4.28; cHeight = 0.52; cabW = 1.58; cabH = 0.46;
      } else if (carSpec.style === 'audi_super' || carSpec.style === 'gt3_rs') {
        cWidth = 2.12; cLength = 4.25; cHeight = 0.48; cabW = 1.50; cabH = 0.44;
      } else if (carSpec.style === 'lambo_wedge' || carSpec.style === 'ferrari_f1' || carSpec.style === 'mclaren_aero') {
        cWidth = 2.16; cLength = 4.35; cHeight = 0.45; cabW = 1.45; cabH = 0.42;
      } else if (carSpec.style === 'bugatti_longtail') {
        cWidth = 2.22; cLength = 4.55; cHeight = 0.48; cabW = 1.52; cabH = 0.44;
      }

      // 1. Lower Chassis & Aerodynamic Floor
      const chassisGeo = new THREE.BoxGeometry(cWidth, cHeight, cLength);
      const chassis = new THREE.Mesh(chassisGeo, bodyMat);
      chassis.position.y = cHeight / 2 + 0.32;
      group.add(chassis);

      // 2. Carbon Front Splitter
      const splitterGeo = new THREE.BoxGeometry(cWidth + 0.08, 0.08, 0.45);
      const splitter = new THREE.Mesh(splitterGeo, carbonMat);
      splitter.position.set(0, 0.22, -cLength / 2 - 0.1);
      group.add(splitter);

      // 3. Front Grille & Brand Signature
      if (carSpec.style === 'bmw_coupe') {
        // Dual Kidney Grille
        const kidneyGeo = new THREE.BoxGeometry(0.32, 0.28, 0.1);
        const kLeft = new THREE.Mesh(kidneyGeo, carbonMat);
        kLeft.position.set(-0.24, 0.55, -cLength / 2 - 0.01);
        const kRight = new THREE.Mesh(kidneyGeo, carbonMat);
        kRight.position.set(0.24, 0.55, -cLength / 2 - 0.01);
        group.add(kLeft, kRight);
      } else if (carSpec.style === 'bugatti_longtail') {
        // Horseshoe Grille
        const archGeo = new THREE.CylinderGeometry(0.32, 0.32, 0.1, 16);
        const arch = new THREE.Mesh(archGeo, chromeMat);
        arch.rotation.x = Math.PI / 2;
        arch.position.set(0, 0.55, -cLength / 2 - 0.01);
        group.add(arch);
      } else {
        // Air Intake Grille
        const grillGeo = new THREE.BoxGeometry(cWidth * 0.65, 0.22, 0.08);
        const grill = new THREE.Mesh(grillGeo, carbonMat);
        grill.position.set(0, 0.45, -cLength / 2 - 0.01);
        group.add(grill);
      }

      // 4. Hood Creases & Air Extractor Vents
      const ventGeo = new THREE.BoxGeometry(0.35, 0.04, 0.65);
      const ventL = new THREE.Mesh(ventGeo, carbonMat);
      ventL.position.set(-0.55, chassis.position.y + cHeight / 2 + 0.02, -cLength * 0.22);
      const ventR = new THREE.Mesh(ventGeo, carbonMat);
      ventR.position.set(0.55, chassis.position.y + cHeight / 2 + 0.02, -cLength * 0.22);
      group.add(ventL, ventR);

      // 5. Cabin Glasshouse & Windshield
      const cabinGeo = new THREE.BoxGeometry(cabW, cabH, cLength * 0.48);
      const cabin = new THREE.Mesh(cabinGeo, glassMat);
      cabin.position.set(0, chassis.position.y + cHeight / 2 + cabH / 2, -0.1);
      group.add(cabin);

      // Roof Panel
      const roofGeo = new THREE.BoxGeometry(cabW - 0.12, 0.06, cLength * 0.38);
      const roof = new THREE.Mesh(roofGeo, bodyMat);
      roof.position.set(0, cabin.position.y + cabH / 2 + 0.03, -0.1);
      group.add(roof);

      // 6. Side Mirrors
      const mirrorGeo = new THREE.BoxGeometry(0.24, 0.12, 0.16);
      const mirL = new THREE.Mesh(mirrorGeo, bodyMat);
      mirL.position.set(-cWidth / 2 - 0.12, cabin.position.y, -cLength * 0.18);
      const mirR = new THREE.Mesh(mirrorGeo, bodyMat);
      mirR.position.set(cWidth / 2 + 0.12, cabin.position.y, -cLength * 0.18);
      group.add(mirL, mirR);

      // 7. Signature Styling Elements per Car
      if (carSpec.style === 'audi_super') {
        // Audi R8 Carbon Sideblades
        const bladeGeo = new THREE.BoxGeometry(0.08, cHeight * 0.9, 0.95);
        const bL = new THREE.Mesh(bladeGeo, carbonMat);
        bL.position.set(-cWidth / 2 - 0.02, chassis.position.y, 0.4);
        const bR = new THREE.Mesh(bladeGeo, carbonMat);
        bR.position.set(cWidth / 2 + 0.02, chassis.position.y, 0.4);
        group.add(bL, bR);
      } else if (carSpec.style === 'bugatti_longtail') {
        // Bugatti C-line Chrome Curve
        const cRingGeo = new THREE.TorusGeometry(0.75, 0.05, 8, 16, Math.PI * 1.2);
        const cLeft = new THREE.Mesh(cRingGeo, chromeMat);
        cLeft.position.set(-cWidth / 2 - 0.02, chassis.position.y + 0.15, 0.1);
        cLeft.rotation.y = Math.PI / 2;
        const cRight = new THREE.Mesh(cRingGeo, chromeMat);
        cRight.position.set(cWidth / 2 + 0.02, chassis.position.y + 0.15, 0.1);
        cRight.rotation.y = -Math.PI / 2;
        group.add(cLeft, cRight);
      } else if (carSpec.style === 'muscle_v8') {
        // Mustang Center Racing Stripes
        const stripeGeo = new THREE.BoxGeometry(0.55, cHeight + 0.02, cLength + 0.02);
        const stripe = new THREE.Mesh(stripeGeo, accentMat);
        stripe.position.set(0, chassis.position.y, 0);
        group.add(stripe);
      }

      // 8. Rear Spoiler / Wing
      if (carSpec.style === 'gt3_rs') {
        // High swan-neck GT3 RS wing
        const uprightGeo = new THREE.BoxGeometry(0.08, 0.65, 0.25);
        const uL = new THREE.Mesh(uprightGeo, carbonMat);
        uL.position.set(-0.65, chassis.position.y + cHeight / 2 + 0.32, cLength / 2 - 0.3);
        const uR = new THREE.Mesh(uprightGeo, carbonMat);
        uR.position.set(0.65, chassis.position.y + cHeight / 2 + 0.32, cLength / 2 - 0.3);
        const mainWingGeo = new THREE.BoxGeometry(cWidth + 0.25, 0.08, 0.55);
        const mainWing = new THREE.Mesh(mainWingGeo, accentMat);
        mainWing.position.set(0, uL.position.y + 0.34, cLength / 2 - 0.3);
        group.add(uL, uR, mainWing);
      } else if (carSpec.style === 'hatchback') {
        // Roof Hatch Spoiler
        const hatchWingGeo = new THREE.BoxGeometry(cabW, 0.08, 0.35);
        const hatchWing = new THREE.Mesh(hatchWingGeo, accentMat);
        hatchWing.position.set(0, roof.position.y + 0.04, cLength * 0.15);
        group.add(hatchWing);
      } else {
        // Sport Lip or Hypercar Wing
        const wingW = cWidth * 0.95;
        const wingGeo = new THREE.BoxGeometry(wingW, 0.08, 0.42);
        const wing = new THREE.Mesh(wingGeo, accentMat);
        wing.position.set(0, chassis.position.y + cHeight / 2 + 0.15, cLength / 2 - 0.25);
        const standL = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.25, 0.15), carbonMat);
        standL.position.set(-wingW * 0.35, chassis.position.y + cHeight / 2 + 0.06, cLength / 2 - 0.25);
        const standR = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.25, 0.15), carbonMat);
        standR.position.set(wingW * 0.35, chassis.position.y + cHeight / 2 + 0.06, cLength / 2 - 0.25);
        group.add(wing, standL, standR);
      }

      // 9. Modern Headlights & Taillights
      const hlGeo = new THREE.BoxGeometry(0.42, 0.15, 0.08);
      const hlMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const hlLeft = new THREE.Mesh(hlGeo, hlMat);
      hlLeft.position.set(-cWidth * 0.35, chassis.position.y + 0.08, -cLength / 2 - 0.01);
      const hlRight = new THREE.Mesh(hlGeo, hlMat);
      hlRight.position.set(cWidth * 0.35, chassis.position.y + 0.08, -cLength / 2 - 0.01);
      group.add(hlLeft, hlRight);

      // Full LED Taillight Lightbar
      const tlGeo = new THREE.BoxGeometry(cWidth * 0.88, 0.12, 0.08);
      const tlMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
      const tlBar = new THREE.Mesh(tlGeo, tlMat);
      tlBar.position.set(0, chassis.position.y + 0.08, cLength / 2 + 0.01);
      group.add(tlBar);
      brakeLights.push(tlBar);

      // 10. Rear Exhaust Tips & Diffuser
      const diffGeo = new THREE.BoxGeometry(cWidth * 0.8, 0.15, 0.3);
      const diff = new THREE.Mesh(diffGeo, carbonMat);
      diff.position.set(0, 0.22, cLength / 2 - 0.05);
      group.add(diff);

      const exhaustGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.25, 12);
      exhaustGeo.rotateX(Math.PI / 2);
      const ex1 = new THREE.Mesh(exhaustGeo, chromeMat);
      ex1.position.set(-0.45, 0.26, cLength / 2 + 0.08);
      const ex2 = new THREE.Mesh(exhaustGeo, chromeMat);
      ex2.position.set(0.45, 0.26, cLength / 2 + 0.08);
      group.add(ex1, ex2);

      // 11. Wheels with Rubber Tires, Alloys, Rotor Discs & Brembo Brake Calipers
      const wheelRadius = 0.42;
      const wheelWidth = 0.34;
      const tireGeo = new THREE.CylinderGeometry(wheelRadius, wheelRadius, wheelWidth, 18);
      tireGeo.rotateZ(Math.PI / 2);
      const rimGeo = new THREE.CylinderGeometry(wheelRadius * 0.65, wheelRadius * 0.65, wheelWidth + 0.02, 10);
      rimGeo.rotateZ(Math.PI / 2);
      const rotorGeo = new THREE.CylinderGeometry(wheelRadius * 0.72, wheelRadius * 0.72, 0.1, 16);
      rotorGeo.rotateZ(Math.PI / 2);
      const caliperGeo = new THREE.BoxGeometry(0.12, 0.22, 0.14);

      const halfW = cWidth / 2 + 0.02;
      const wheelZOffset = cLength * 0.33;
      const wheelCoords = [
        [-halfW, wheelRadius, -wheelZOffset],
        [halfW, wheelRadius, -wheelZOffset],
        [-halfW, wheelRadius, wheelZOffset],
        [halfW, wheelRadius, wheelZOffset]
      ];

      wheelCoords.forEach(([wx, wy, wz], wIdx) => {
        const wheelAssembly = new THREE.Group();
        wheelAssembly.position.set(wx, wy, wz);

        // Tire
        const tireMesh = new THREE.Mesh(tireGeo, tireMat);
        wheelAssembly.add(tireMesh);

        // Rim
        const rimMesh = new THREE.Mesh(rimGeo, rimMat);
        wheelAssembly.add(rimMesh);

        // Brake Rotor Disc
        const rotorMesh = new THREE.Mesh(rotorGeo, rotorMat);
        rotorMesh.position.x = (wx < 0) ? 0.04 : -0.04;
        wheelAssembly.add(rotorMesh);

        // Sport Brake Caliper
        const caliperMesh = new THREE.Mesh(caliperGeo, caliperMat);
        caliperMesh.position.set((wx < 0) ? 0.04 : -0.04, 0.14, -0.06);
        wheelAssembly.add(caliperMesh);

        group.add(wheelAssembly);
        wheels.push(wheelAssembly);
      });

      // 12. Underglow & Nitro Thrusters
      if (!isTraffic) {
        const neonGeo = new THREE.PlaneGeometry(cWidth + 0.2, cLength + 0.1);
        const neonMat = new THREE.MeshBasicMaterial({
          color: carSpec.neonColor || 0x38bdf8,
          transparent: true,
          opacity: 0.45
        });
        const neon = new THREE.Mesh(neonGeo, neonMat);
        neon.rotation.x = -Math.PI / 2;
        neon.position.y = 0.08;
        group.add(neon);

        // Dual Nitro Thruster Jets
        const flameGeo = new THREE.ConeGeometry(0.35, 1.9, 8);
        flameGeo.rotateX(Math.PI / 2);
        const flameMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });

        nitroFlameMesh = new THREE.Mesh(flameGeo, flameMat);
        nitroFlameMesh.position.set(-0.45, 0.26, cLength / 2 + 1.1);
        nitroFlameMesh.visible = false;
        group.add(nitroFlameMesh);

        nitroFlameMesh2 = new THREE.Mesh(flameGeo, flameMat);
        nitroFlameMesh2.position.set(0.45, 0.26, cLength / 2 + 1.1);
        nitroFlameMesh2.visible = false;
        group.add(nitroFlameMesh2);

        // Shield Bubble
        const bubbleGeo = new THREE.SphereGeometry(2.6, 18, 14);
        const bubbleMat = new THREE.MeshBasicMaterial({
          color: 0x22d3ee,
          wireframe: true,
          transparent: true,
          opacity: 0.35
        });
        shieldBubbleMesh = new THREE.Mesh(bubbleGeo, bubbleMat);
        shieldBubbleMesh.position.set(0, 0.9, 0);
        shieldBubbleMesh.visible = false;
        group.add(shieldBubbleMesh);
      }

      return { group, wheels, brakeLights };
    }

    function rebuildPlayerCar() {
      if (playerCarGroup) {
        scene.remove(playerCarGroup);
      }
      playerWheels = [];
      playerBrakeLights = [];
      const spec = getSelectedCar();
      const built = createCarMesh(spec, false);
      playerCarGroup = built.group;
      playerWheels = built.wheels;
      playerBrakeLights = built.brakeLights;
      playerCarGroup.position.set(state.playerX, 0, 0);
      scene.add(playerCarGroup);
    }

    function applyLevelTheme(level) {
      if (!scene) return;
      scene.background = new THREE.Color(level.skyColor);
      scene.fog.color = new THREE.Color(level.fogColor);
      groundMesh.material.color.setHex(level.groundColor);
      roadMesh.material.color.setHex(level.roadColor);
      laneDashMeshes.forEach(d => d.material.color.setHex(level.stripeColor));
    }

    function createSceneryProp(type) {
      const group = new THREE.Group();
      if (type === 'palm') {
        const trunk = new THREE.Mesh(
          new THREE.CylinderGeometry(0.22, 0.36, 4.5, 7),
          new THREE.MeshLambertMaterial({ color: 0x78350f })
        );
        trunk.position.y = 2.25;
        const crown = new THREE.Mesh(
          new THREE.ConeGeometry(1.9, 2.2, 6),
          new THREE.MeshLambertMaterial({ color: 0x15803d })
        );
        crown.position.y = 4.6;
        group.add(trunk, crown);
      } else if (type === 'canyon') {
        const rock = new THREE.Mesh(
          new THREE.DodecahedronGeometry(2.2, 0),
          new THREE.MeshLambertMaterial({ color: 0xb45309 })
        );
        rock.position.y = 1.6;
        rock.scale.set(1.2, 1.8, 1.1);
        group.add(rock);
      } else if (type === 'city') {
        const h = 7 + Math.random() * 10;
        const tower = new THREE.Mesh(
          new THREE.BoxGeometry(3.2, h, 3.2),
          new THREE.MeshLambertMaterial({ color: 0x1e1b4b })
        );
        tower.position.y = h / 2;
        const neonStrip = new THREE.Mesh(
          new THREE.BoxGeometry(3.3, 0.35, 3.3),
          new THREE.MeshBasicMaterial({ color: Math.random() > 0.5 ? 0x22d3ee : 0xf43f5e })
        );
        neonStrip.position.y = h * 0.75;
        group.add(tower, neonStrip);
      } else if (type === 'snow') {
        const trunk = new THREE.Mesh(
          new THREE.CylinderGeometry(0.25, 0.35, 2.0, 6),
          new THREE.MeshLambertMaterial({ color: 0x451a03 })
        );
        trunk.position.y = 1.0;
        const pine = new THREE.Mesh(
          new THREE.ConeGeometry(2.0, 5.2, 7),
          new THREE.MeshLambertMaterial({ color: 0xe2e8f0 })
        );
        pine.position.y = 3.8;
        group.add(trunk, pine);
      } else if (type === 'jungle') {
        const trunk = new THREE.Mesh(
          new THREE.CylinderGeometry(0.3, 0.45, 5.2, 6),
          new THREE.MeshLambertMaterial({ color: 0x14532d })
        );
        trunk.position.y = 2.6;
        const leaves1 = new THREE.Mesh(
          new THREE.ConeGeometry(2.5, 3.0, 6),
          new THREE.MeshLambertMaterial({ color: 0x15803d })
        );
        leaves1.position.y = 4.8;
        const leaves2 = new THREE.Mesh(
          new THREE.ConeGeometry(1.8, 2.4, 6),
          new THREE.MeshLambertMaterial({ color: 0x22c55e })
        );
        leaves2.position.y = 6.2;
        group.add(trunk, leaves1, leaves2);
      } else if (type === 'sakura') {
        const trunk = new THREE.Mesh(
          new THREE.CylinderGeometry(0.24, 0.38, 4.0, 6),
          new THREE.MeshLambertMaterial({ color: 0x3f2d24 })
        );
        trunk.position.y = 2.0;
        const blossom = new THREE.Mesh(
          new THREE.DodecahedronGeometry(2.1, 1),
          new THREE.MeshLambertMaterial({ color: 0xf472b6 })
        );
        blossom.position.y = 4.4;
        group.add(trunk, blossom);
      } else if (type === 'storm') {
        const pylon = new THREE.Mesh(
          new THREE.CylinderGeometry(0.18, 0.5, 8.5, 4),
          new THREE.MeshLambertMaterial({ color: 0x334155 })
        );
        pylon.position.y = 4.25;
        const coil = new THREE.Mesh(
          new THREE.TorusGeometry(1.2, 0.15, 8, 16),
          new THREE.MeshBasicMaterial({ color: 0x38bdf8 })
        );
        coil.rotation.x = Math.PI / 2;
        coil.position.y = 7.0;
        group.add(pylon, coil);
      } else if (type === 'quantum') {
        const prism = new THREE.Mesh(
          new THREE.OctahedronGeometry(2.2, 0),
          new THREE.MeshPhongMaterial({ color: 0xa855f7, emissive: 0x6b21a8, shininess: 120 })
        );
        prism.position.y = 3.5;
        prism.scale.set(1.0, 2.2, 1.0);
        group.add(prism);
      } else if (type === 'apex') {
        const obelisk = new THREE.Mesh(
          new THREE.ConeGeometry(1.4, 9.0, 4),
          new THREE.MeshPhongMaterial({ color: 0xfacc15, emissive: 0x854d0e, shininess: 140 })
        );
        obelisk.position.y = 4.5;
        const ring = new THREE.Mesh(
          new THREE.TorusGeometry(1.8, 0.18, 8, 20),
          new THREE.MeshBasicMaterial({ color: 0xfef08a })
        );
        ring.rotation.x = Math.PI / 2;
        ring.position.y = 7.5;
        group.add(obelisk, ring);
      } else {
        const spire = new THREE.Mesh(
          new THREE.ConeGeometry(2.1, 6.5, 5),
          new THREE.MeshLambertMaterial({ color: 0x27272a })
        );
        spire.position.y = 3.2;
        const lavaRing = new THREE.Mesh(
          new THREE.CylinderGeometry(1.5, 1.8, 0.4, 6),
          new THREE.MeshBasicMaterial({ color: 0xf97316 })
        );
        lavaRing.position.y = 0.25;
        group.add(spire, lavaRing);
      }
      return group;
    }

    function populateInitialScenery() {
      sceneryItems.forEach(item => scene.remove(item));
      sceneryItems = [];
      const level = getSelectedLevel();
      for (let i = 0; i < 26; i++) {
        const z = 10 - i * 10;
        const side = i % 2 === 0 ? -1 : 1;
        const x = side * (ROAD_WIDTH / 2 + 4.5 + Math.random() * 9);
        const prop = createSceneryProp(level.sceneryType);
        prop.position.set(x, 0, z);
        scene.add(prop);
        sceneryItems.push(prop);
      }
    }

    function spawnCoinCluster(zBase) {
      const lane = LANES[Math.floor(Math.random() * LANES.length)];
      const count = 3 + Math.floor(Math.random() * 3);
      const coinGeo = new THREE.CylinderGeometry(0.65, 0.65, 0.18, 16);
      coinGeo.rotateX(Math.PI / 2);
      const coinMat = new THREE.MeshPhongMaterial({
        color: 0xfacc15,
        emissive: 0xca8a04,
        shininess: 100
      });

      for (let i = 0; i < count; i++) {
        const mesh = new THREE.Mesh(coinGeo, coinMat);
        mesh.position.set(lane, 0.95, zBase - i * 4.2);
        scene.add(mesh);
        coinsList.push(mesh);
      }
    }

    function spawnPowerup(zPos) {
      const lane = LANES[Math.floor(Math.random() * LANES.length)];
      const isNitro = Math.random() > 0.35;
      const geo = new THREE.OctahedronGeometry(0.75, 0);
      const mat = new THREE.MeshPhongMaterial({
        color: isNitro ? 0x38bdf8 : 0x2dd4bf,
        emissive: isNitro ? 0x0284c7 : 0x0d9488,
        shininess: 100
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(lane, 1.05, zPos);
      mesh.userData = { type: isNitro ? 'nitro' : 'shield' };
      scene.add(mesh);
      powerupsList.push(mesh);
    }

    function spawnTrafficCar(zPos) {
      const lane = LANES[Math.floor(Math.random() * LANES.length)];
      const tooClose = trafficList.some(t => Math.abs(t.mesh.position.z - zPos) < 15 && Math.abs(t.mesh.position.x - lane) < 1.0);
      if (tooClose) return;

      const randomSpec = CARS[Math.floor(Math.random() * CARS.length)];
      const trafficSpec = {
        ...randomSpec,
        bodyColor: Math.random() > 0.4 ? randomSpec.bodyColor : 0x475569,
        accentColor: 0x0f172a
      };
      const built = createCarMesh(trafficSpec, true);
      built.group.position.set(lane, 0, zPos);
      scene.add(built.group);
      trafficList.push({
        mesh: built.group,
        wheels: built.wheels,
        lane,
        passedNear: false
      });
    }

    function spawnFinishGate(zPos) {
      if (finishGateGroup) scene.remove(finishGateGroup);
      finishGateGroup = new THREE.Group();

      const pillarGeo = new THREE.BoxGeometry(0.9, 6.5, 0.9);
      const pillarMat = new THREE.MeshPhongMaterial({ color: 0x1e293b });
      const leftPillar = new THREE.Mesh(pillarGeo, pillarMat);
      leftPillar.position.set(-ROAD_WIDTH / 2, 3.25, 0);
      const rightPillar = new THREE.Mesh(pillarGeo, pillarMat);
      rightPillar.position.set(ROAD_WIDTH / 2, 3.25, 0);

      const bannerGeo = new THREE.BoxGeometry(ROAD_WIDTH + 1.2, 1.4, 0.6);
      const bannerMat = new THREE.MeshPhongMaterial({ color: 0xfacc15, emissive: 0x713f12 });
      const banner = new THREE.Mesh(bannerGeo, bannerMat);
      banner.position.set(0, 5.8, 0);

      finishGateGroup.add(leftPillar, rightPillar, banner);
      finishGateGroup.position.set(0, 0, zPos);
      scene.add(finishGateGroup);
    }

    function spawnParticleBurst(pos, colorHex) {
      const pCount = 14;
      const geo = new THREE.BoxGeometry(0.2, 0.2, 0.2);
      const mat = new THREE.MeshBasicMaterial({ color: colorHex });
      for (let i = 0; i < pCount; i++) {
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.copy(pos);
        const vel = new THREE.Vector3(
          (Math.random() - 0.5) * 12,
          Math.random() * 8 + 2,
          (Math.random() - 0.5) * 12
        );
        scene.add(mesh);
        particleBursts.push({ mesh, vel, life: 0.65 });
      }
    }

    function clearRaceEntities() {
      trafficList.forEach(t => scene.remove(t.mesh));
      trafficList = [];
      coinsList.forEach(c => scene.remove(c));
      coinsList = [];
      powerupsList.forEach(p => scene.remove(p));
      powerupsList = [];
      particleBursts.forEach(p => scene.remove(p.mesh));
      particleBursts = [];
      if (finishGateGroup) {
        scene.remove(finishGateGroup);
        finishGateGroup = null;
      }
    }

    const keys = {
      left: false,
      right: false,
      up: false,
      down: false,
      nitro: false
    };

    function setupInputs() {
      window.addEventListener('keydown', (e) => {
        if (state.mode !== 'RACING') return;
        const code = e.code;
        if (code === 'ArrowLeft' || code === 'KeyA') keys.left = true;
        if (code === 'ArrowRight' || code === 'KeyD') keys.right = true;
        if (code === 'ArrowUp' || code === 'KeyW') keys.up = true;
        if (code === 'ArrowDown' || code === 'KeyS') keys.down = true;
        if (code === 'Space') keys.nitro = true;
        if (code === 'KeyP') togglePauseRace();
      });

      window.addEventListener('keyup', (e) => {
        const code = e.code;
        if (code === 'ArrowLeft' || code === 'KeyA') keys.left = false;
        if (code === 'ArrowRight' || code === 'KeyD') keys.right = false;
        if (code === 'ArrowUp' || code === 'KeyW') keys.up = false;
        if (code === 'ArrowDown' || code === 'KeyS') keys.down = false;
        if (code === 'Space') keys.nitro = false;
      });

      function bindHoldButton(btnId, keyName) {
        const btn = document.getElementById(btnId);
        if (!btn) return;
        const startHold = (e) => {
          e.preventDefault();
          initAudio();
          keys[keyName] = true;
          btn.classList.add('active-press');
        };
        const endHold = (e) => {
          e.preventDefault();
          keys[keyName] = false;
          btn.classList.remove('active-press');
        };
        btn.addEventListener('mousedown', startHold);
        btn.addEventListener('mouseup', endHold);
        btn.addEventListener('mouseleave', endHold);
        btn.addEventListener('touchstart', startHold, { passive: false });
        btn.addEventListener('touchend', endHold, { passive: false });
        btn.addEventListener('touchcancel', endHold, { passive: false });
      }

      bindHoldButton('btn-steer-left', 'left');
      bindHoldButton('btn-steer-right', 'right');
      bindHoldButton('btn-brake', 'down');
      bindHoldButton('btn-nitro', 'nitro');
    }

    function resetKeys() {
      keys.left = false;
      keys.right = false;
      keys.up = false;
      keys.down = false;
      keys.nitro = false;
    }

    let lastFrameTime = performance.now();
    let spawnCoinTimer = 0;
    let spawnTrafficTimer = 0;
    let spawnPowerupTimer = 0;
    let menuOrbitAngle = 0;

    function getSelectedCar() {
      return CARS.find(c => c.id === state.selectedCarId) || CARS[0];
    }

    function getSelectedLevel() {
      return LEVELS.find(l => l.id === state.selectedLevelId) || LEVELS[0];
    }

    function showFloatingPopup(text, colorClass = 'text-amber-300') {
      const container = document.getElementById('popup-container');
      if (!container) return;
      const el = document.createElement('div');
      el.className = `floating-popup glass-pill px-3.5 py-1 rounded-full font-black text-xs sm:text-sm tracking-wide shadow-lg ${colorClass}`;
      el.textContent = text;
      container.appendChild(el);
      setTimeout(() => {
        if (el.parentNode) el.parentNode.removeChild(el);
      }, 950);
    }

    function startRace() {
      initAudio();
      playSound('click');
      resetKeys();
      clearRaceEntities();

      const level = getSelectedLevel();
      applyLevelTheme(level);
      rebuildPlayerCar();
      populateInitialScenery();

      state.mode = 'RACING';
      state.distance = 0;
      state.raceCoins = 0;
      state.speed = 35;
      state.nitro = 100;
      state.hearts = 3;
      state.invulnerableTimer = 0;
      state.shieldTimer = 0;
      state.playerX = 0;
      state.finishSpawned = false;

      spawnCoinTimer = 0.4;
      spawnTrafficTimer = 0.8;
      spawnPowerupTimer = 4.5;

      for (let z = -35; z >= -160; z -= 32) {
        spawnCoinCluster(z);
        if (z < -55) spawnTrafficCar(z - 12);
      }

      updateHUD();
      syncScreenVisibility();
    }

    function togglePauseRace() {
      if (state.mode === 'RACING') {
        state.mode = 'PAUSED';
        playSound('click');
        openResultModal('PAUSED');
      } else if (state.mode === 'PAUSED') {
        playSound('click');
        state.mode = 'RACING';
        syncScreenVisibility();
      }
    }

    function finishRace(won) {
      state.mode = 'RESULT';
      resetKeys();
      if (won) {
        playSound('win');
        // Progressive level unlocking: completing level N unlocks level N + 1
        if (state.selectedLevelId >= state.highestUnlockedLevel && state.selectedLevelId < LEVELS.length) {
          state.highestUnlockedLevel = state.selectedLevelId + 1;
        }
        // Generous stage clear coin bonus scaled with level number & multiplier
        const bonus = Math.round((250 + state.selectedLevelId * 180) * getSelectedLevel().coinMult);
        state.raceCoins += bonus;
        state.coins += bonus;
        saveGameData();
        openResultModal('WIN');
      } else {
        playSound('crash');
        saveGameData();
        openResultModal('CRASH');
      }
    }

    function updateRacePhysics(dt) {
      const car = getSelectedCar();
      const level = getSelectedLevel();

      if (state.invulnerableTimer > 0) state.invulnerableTimer = Math.max(0, state.invulnerableTimer - dt);
      if (state.shieldTimer > 0) state.shieldTimer = Math.max(0, state.shieldTimer - dt);

      const usingNitro = (keys.nitro || keys.up) && state.nitro > 1;
      const topSpeed = usingNitro ? car.maxSpeed * 1.34 : car.maxSpeed;

      // Real Breaking System: High-tier cars with carbon ceramic brakes stop faster
      const brakingPower = car.braking || 85;

      if (usingNitro) {
        state.speed = Math.min(topSpeed, state.speed + car.accel * 1.45 * dt);
        state.nitro = Math.max(0, state.nitro - 28 * dt);
      } else if (keys.down) {
        state.speed = Math.max(15, state.speed - brakingPower * dt);
        if (state.speed > 50 && Math.random() < 0.2) {
          playSound('brake');
          spawnParticleBurst(new THREE.Vector3(state.playerX, 0.25, 1.8), 0xf43f5e);
        }
      } else if (state.autoAccel) {
        if (state.speed < car.maxSpeed) {
          state.speed = Math.min(car.maxSpeed, state.speed + car.accel * 0.85 * dt);
        } else {
          state.speed = Math.max(car.maxSpeed, state.speed - 35 * dt);
        }
      } else {
        if (keys.up) {
          if (state.speed < car.maxSpeed) {
            state.speed = Math.min(car.maxSpeed, state.speed + car.accel * 0.85 * dt);
          } else {
            state.speed = Math.max(car.maxSpeed, state.speed - 40 * dt);
          }
        } else {
          state.speed = Math.max(0, state.speed - 22 * dt);
        }
      }

      // Brake light activation
      if (playerBrakeLights.length > 0) {
        playerBrakeLights.forEach(bl => {
          bl.material.color.setHex(keys.down ? 0xff0000 : 0xef4444);
        });
      }

      const targetFov = usingNitro ? 72 : 60;
      camera.fov += (targetFov - camera.fov) * 8 * dt;
      camera.updateProjectionMatrix();

      if (nitroFlameMesh && nitroFlameMesh2) {
        nitroFlameMesh.visible = usingNitro;
        nitroFlameMesh2.visible = usingNitro;
        if (usingNitro) {
          const flameScale = 0.85 + Math.random() * 0.45;
          nitroFlameMesh.scale.z = flameScale;
          nitroFlameMesh2.scale.z = flameScale;
        }
      }
      if (shieldBubbleMesh) {
        shieldBubbleMesh.visible = state.shieldTimer > 0;
        shieldBubbleMesh.rotation.y += 2.5 * dt;
      }

      // Steering
      const steerDir = (keys.right ? 1 : 0) - (keys.left ? 1 : 0);
      const lateralSpeed = (car.handling * 0.36);
      state.playerX += steerDir * lateralSpeed * dt;

      // Road Edge & Guardrail Detection
      const barrierContactLimit = (ROAD_WIDTH / 2) - 1.10; // ~5.90
      if (Math.abs(state.playerX) >= barrierContactLimit) {
        if (state.speed > 5) {
          if (state.shieldTimer > 0) {
            playSound('powerup');
            spawnParticleBurst(new THREE.Vector3(Math.sign(state.playerX) * (ROAD_WIDTH / 2 - 0.2), 0.6, 0), 0x22d3ee);
            showFloatingPopup('SHIELD DEFLECT!', 'text-cyan-300');
            state.playerX = Math.sign(state.playerX) * (barrierContactLimit - 0.35);
            cameraShake = 0.35;
          } else if (state.invulnerableTimer <= 0) {
            state.hearts -= 1;
            state.invulnerableTimer = 1.6;
            state.speed = Math.max(25, state.speed * 0.55);
            playSound('crash');
            spawnParticleBurst(new THREE.Vector3(Math.sign(state.playerX) * (ROAD_WIDTH / 2 - 0.2), 0.6, 0), 0xef4444);
            cameraShake = 0.7;
            showFloatingPopup('BARRIER CRASH! -1 ARMOR', 'text-rose-400');
            state.playerX = Math.sign(state.playerX) * (barrierContactLimit - 0.45);
            if (state.hearts <= 0) {
              updateHUD();
              finishRace(false);
              return;
            }
          }
        }
      }

      // Hard clamp so player never clips outside the highway
      state.playerX = Math.max(-barrierContactLimit, Math.min(barrierContactLimit, state.playerX));

      if (playerCarGroup) {
        playerCarGroup.position.x = state.playerX;
        const targetRotZ = -steerDir * 0.08;
        const targetRotY = -steerDir * 0.12;
        playerCarGroup.rotation.z += (targetRotZ - playerCarGroup.rotation.z) * 10 * dt;
        playerCarGroup.rotation.y += (targetRotY - playerCarGroup.rotation.y) * 10 * dt;

        if (state.invulnerableTimer > 0) {
          playerCarGroup.visible = Math.floor(state.invulnerableTimer * 14) % 2 === 0;
        } else {
          playerCarGroup.visible = true;
        }
      }

      const forwardStep = (state.speed * 0.42) * dt;
      playerWheels.forEach(w => { w.rotation.x -= forwardStep * 1.4; });

      state.distance += forwardStep;

      // Base camera positioning
      camera.position.x += (state.playerX * 0.55 - camera.position.x) * 7 * dt;
      camera.position.y = 4.15;
      camera.position.z = 9.2;

      // Camera Shake
      if (cameraShake > 0) {
        camera.position.x += (Math.random() - 0.5) * cameraShake;
        camera.position.y += (Math.random() - 0.5) * cameraShake;
        cameraShake = Math.max(0, cameraShake - dt * 2.6);
      }

      camera.lookAt(state.playerX * 0.35, 1.1, -14);

      laneDashMeshes.forEach(d => {
        d.position.z += forwardStep;
        if (d.position.z > 14) d.position.z -= 192;
      });

      sceneryItems.forEach(prop => {
        prop.position.z += forwardStep;
        if (prop.position.z > 16) {
          prop.position.z -= 260;
        }
      });

      const remainingDist = level.distance - state.distance;
      if (!state.finishSpawned && remainingDist <= 150) {
        state.finishSpawned = true;
        spawnFinishGate(-remainingDist);
      }

      if (finishGateGroup) {
        finishGateGroup.position.z += forwardStep;
        if (finishGateGroup.position.z >= 0) {
          finishRace(true);
          return;
        }
      }

      if (remainingDist > 90) {
        spawnCoinTimer -= dt;
        if (spawnCoinTimer <= 0) {
          spawnCoinCluster(-165);
          spawnCoinTimer = 1.05;
        }

        spawnTrafficTimer -= dt;
        if (spawnTrafficTimer <= 0) {
          spawnTrafficCar(-175);
          spawnTrafficTimer = level.trafficInterval;
        }

        spawnPowerupTimer -= dt;
        if (spawnPowerupTimer <= 0) {
          spawnPowerup(-170);
          spawnPowerupTimer = 5.5 + Math.random() * 3.0;
        }
      }

      // Coins
      for (let i = coinsList.length - 1; i >= 0; i--) {
        const coin = coinsList[i];
        coin.rotation.z += 3.4 * dt;
        coin.position.z += forwardStep;

        const dx = state.playerX - coin.position.x;
        const dz = 0 - coin.position.z;
        const distSq = dx * dx + dz * dz;

        if (distSq < car.magnetRadius * car.magnetRadius && coin.position.z < 3) {
          coin.position.x += dx * 9.5 * dt;
          coin.position.z += dz * 9.5 * dt;
        }

        if (Math.abs(state.playerX - coin.position.x) < 1.65 && Math.abs(coin.position.z) < 1.85) {
          const gained = Math.max(1, Math.round(1 * level.coinMult));
          state.raceCoins += gained;
          state.coins += gained;
          playSound('coin');
          spawnParticleBurst(coin.position, 0xfacc15);
          scene.remove(coin);
          coinsList.splice(i, 1);
          continue;
        }

        if (coin.position.z > 14) {
          scene.remove(coin);
          coinsList.splice(i, 1);
        }
      }

      // Powerups
      for (let i = powerupsList.length - 1; i >= 0; i--) {
        const p = powerupsList[i];
        p.rotation.y += 3.2 * dt;
        p.rotation.x += 1.8 * dt;
        p.position.z += forwardStep;

        if (Math.abs(state.playerX - p.position.x) < 1.8 && Math.abs(p.position.z) < 2.0) {
          playSound('powerup');
          if (p.userData.type === 'nitro') {
            state.nitro = 100;
            showFloatingPopup('FULL NITRO!', 'text-cyan-300');
            spawnParticleBurst(p.position, 0x38bdf8);
          } else {
            state.shieldTimer = 7.0;
            showFloatingPopup('SHIELD ACTIVE!', 'text-emerald-300');
            spawnParticleBurst(p.position, 0x2dd4bf);
          }
          scene.remove(p);
          powerupsList.splice(i, 1);
          continue;
        }

        if (p.position.z > 14) {
          scene.remove(p);
          powerupsList.splice(i, 1);
        }
      }

      // Traffic Cars Collision Detection (Full Edge Hitbox with Yaw Rotation)
      const trafficForwardSpeed = (car.maxSpeed * level.trafficSpeedRatio) * 0.42;
      const playerAngleY = playerCarGroup ? Math.abs(playerCarGroup.rotation.y) : 0;
      const effectiveCarWidth = 2.18 + playerAngleY * 1.5;
      const effectiveCarLength = 4.25;

      for (let i = trafficList.length - 1; i >= 0; i--) {
        const t = trafficList[i];
        const relStep = forwardStep - trafficForwardSpeed * dt;
        t.mesh.position.z += relStep;
        t.wheels.forEach(w => { w.rotation.x -= trafficForwardSpeed * dt; });

        const dx = Math.abs(state.playerX - t.mesh.position.x);
        const dz = Math.abs(t.mesh.position.z);

        // Edge-of-car collision check
        if (dx < effectiveCarWidth && dz < effectiveCarLength) {
          if (state.shieldTimer > 0) {
            playSound('powerup');
            spawnParticleBurst(t.mesh.position, 0x22d3ee);
            showFloatingPopup('SHIELD SMASH! +5', 'text-cyan-300');
            state.raceCoins += 5;
            state.coins += 5;
            cameraShake = 0.4;
            scene.remove(t.mesh);
            trafficList.splice(i, 1);
            continue;
          } else if (state.invulnerableTimer <= 0) {
            state.hearts -= 1;
            state.invulnerableTimer = 2.0;
            state.speed = Math.max(30, state.speed * 0.55);
            playSound('crash');
            cameraShake = 0.75;
            spawnParticleBurst(playerCarGroup.position, 0xef4444);
            showFloatingPopup('CAR CRASH! -1 ARMOR', 'text-rose-400');
            scene.remove(t.mesh);
            trafficList.splice(i, 1);
            if (state.hearts <= 0) {
              updateHUD();
              finishRace(false);
              return;
            }
            continue;
          }
        }

        // Near-Miss Reward
        if (!t.passedNear && t.mesh.position.z > 2.0 && dx >= effectiveCarWidth && dx < 3.25) {
          t.passedNear = true;
          state.raceCoins += 3;
          state.coins += 3;
          state.nitro = Math.min(100, state.nitro + 12);
          showFloatingPopup('CLOSE PASS! +3 & BOOST', 'text-emerald-300');
        }

        if (t.mesh.position.z > 16) {
          scene.remove(t.mesh);
          trafficList.splice(i, 1);
        }
      }

      // Particles
      for (let i = particleBursts.length - 1; i >= 0; i--) {
        const pb = particleBursts[i];
        pb.life -= dt;
        pb.mesh.position.addScaledVector(pb.vel, dt);
        pb.vel.y -= 14 * dt;
        if (pb.life <= 0) {
          scene.remove(pb.mesh);
          particleBursts.splice(i, 1);
        }
      }

      updateHUD();
    }

    function animateLoop(now) {
      requestAnimationFrame(animateLoop);
      const dt = Math.min(0.1, (now - lastFrameTime) / 1000);
      lastFrameTime = now;

      if (state.mode === 'RACING') {
        updateRacePhysics(dt);
      } else if (state.mode === 'MENU') {
        menuOrbitAngle += 0.5 * dt;
        if (playerCarGroup) {
          playerCarGroup.rotation.y = menuOrbitAngle;
          playerCarGroup.position.set(0, 0, 0);
        }
        camera.position.set(Math.sin(menuOrbitAngle * 0.4) * 6, 3.2, Math.cos(menuOrbitAngle * 0.4) * 6);
        camera.lookAt(0, 0.8, 0);
      }

      renderer.render(scene, camera);
    }

    function updateHUD() {
      document.getElementById('hud-total-coins').textContent = state.coins.toLocaleString();

      if (state.mode === 'RACING') {
        const level = getSelectedLevel();
        const pct = Math.min(100, Math.max(0, Math.floor((state.distance / level.distance) * 100)));
        document.getElementById('hud-progress-fill').style.width = `${pct}%`;
        document.getElementById('hud-progress-text').textContent = `${pct}%`;
        document.getElementById('hud-level-badge').textContent = `LVL ${level.id}`;

        const heartsContainer = document.getElementById('hud-hearts');
        let heartsHtml = '';
        for (let i = 0; i < 3; i++) {
          if (i < state.hearts) {
            heartsHtml += '<span>&#10084;</span>';
          } else {
            heartsHtml += '<span class="opacity-30">&#10084;</span>';
          }
        }
        heartsContainer.innerHTML = heartsHtml;

        const shieldTag = document.getElementById('hud-shield-tag');
        shieldTag.classList.toggle('hidden', state.shieldTimer <= 0);

        document.getElementById('hud-race-coins').textContent = `+${state.raceCoins}`;
        document.getElementById('hud-speed').textContent = Math.round(state.speed);
        document.getElementById('hud-nitro-fill').style.width = `${Math.round(state.nitro)}%`;
      }
    }

    function renderMainDashboard() {
      const car = getSelectedCar();
      const level = getSelectedLevel();

      document.getElementById('menu-car-name').textContent = car.name;
      document.getElementById('menu-car-desc').textContent = car.desc;

      const isOwned = state.unlockedCars.includes(car.id);
      const carBadge = document.getElementById('menu-car-badge');
      const carActionBtn = document.getElementById('btn-car-action');

      if (isOwned) {
        carBadge.textContent = 'OWNED';
        carBadge.className = 'px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30';
        carActionBtn.textContent = (state.selectedCarId === car.id) ? 'Equipped' : 'Equip Car';
        carActionBtn.className = 'px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs transition';
      } else {
        carBadge.textContent = `${car.cost.toLocaleString()} COINS`;
        carBadge.className = 'px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30';
        carActionBtn.textContent = `Unlock (${car.cost.toLocaleString()} Coins)`;
        carActionBtn.className = (state.coins >= car.cost)
          ? 'px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs transition'
          : 'px-3.5 py-1.5 rounded-lg bg-slate-800 text-slate-400 font-bold text-xs cursor-not-allowed';
      }

      document.getElementById('stat-speed-bar').style.width = `${Math.round((car.maxSpeed / 270) * 100)}%`;
      const brakingBar = document.getElementById('stat-braking-bar');
      if (brakingBar) {
        brakingBar.style.width = `${Math.round(((car.braking || 85) / 320) * 100)}%`;
      }
      document.getElementById('stat-handling-bar').style.width = `${Math.round((car.handling / 60) * 100)}%`;
      document.getElementById('stat-magnet-bar').style.width = `${Math.round((car.magnetRadius / 9.0) * 100)}%`;

      document.getElementById('menu-level-name').textContent = `${level.id}. ${level.name}`;
      document.getElementById('menu-level-desc').textContent = level.desc;
      document.getElementById('menu-level-distance').textContent = `${level.distance.toLocaleString()}m`;
      document.getElementById('menu-level-mult').textContent = `${level.coinMult}x Coins`;
      document.getElementById('menu-level-traffic').textContent = level.trafficLabel;

      const levelStatus = document.getElementById('menu-level-status');
      const isLevelUnlocked = level.id <= state.highestUnlockedLevel;
      if (isLevelUnlocked) {
        levelStatus.textContent = 'UNLOCKED';
        levelStatus.className = 'px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-400/30';
      } else {
        levelStatus.textContent = `LOCKED (LVL ${level.id - 1})`;
        levelStatus.className = 'px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-rose-500/20 text-rose-300 border border-rose-400/30';
      }

      // Quick Pills Carousel around selected level
      const pillsContainer = document.getElementById('menu-level-pills');
      pillsContainer.innerHTML = '';
      const startLvl = Math.max(1, state.selectedLevelId - 2);
      const endLvl = Math.min(LEVELS.length, startLvl + 4);
      for (let lid = startLvl; lid <= endLvl; lid++) {
        const lvl = LEVELS[lid - 1];
        const active = lvl.id === state.selectedLevelId;
        const unlocked = lvl.id <= state.highestUnlockedLevel;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = active
          ? 'px-3 py-1.5 rounded-xl font-extrabold text-xs bg-sky-400 text-slate-950 shadow-md transition flex items-center gap-1 shrink-0'
          : (unlocked
            ? 'px-3 py-1.5 rounded-xl font-bold text-xs bg-slate-800/90 hover:bg-slate-700 text-slate-300 border border-slate-700 transition flex items-center gap-1 shrink-0'
            : 'px-3 py-1.5 rounded-xl font-bold text-xs bg-slate-900/60 text-slate-500 border border-slate-800 transition flex items-center gap-1 shrink-0 opacity-60');
        btn.innerHTML = unlocked ? `Lvl ${lvl.id}` : `&#128274; ${lvl.id}`;
        btn.addEventListener('click', () => {
          if (!unlocked) {
            playSound('crash');
            showFloatingPopup(`Complete Stage ${lvl.id - 1} to unlock!`, 'text-rose-400');
            return;
          }
          playSound('click');
          state.selectedLevelId = lvl.id;
          saveGameData();
          applyLevelTheme(lvl);
          populateInitialScenery();
          renderMainDashboard();
        });
        pillsContainer.appendChild(btn);
      }
    }

    function renderGarageModal() {
      const grid = document.getElementById('garage-cars-grid');
      grid.innerHTML = '';
      CARS.forEach(car => {
        const unlocked = state.unlockedCars.includes(car.id);
        const selected = state.selectedCarId === car.id;
        const canAfford = state.coins >= car.cost;
        const colorHexStr = '#' + car.bodyColor.toString(16).padStart(6, '0');

        const card = document.createElement('div');
        card.className = `rounded-2xl p-4 border flex flex-col justify-between gap-3 transition ${
          selected ? 'bg-slate-800/95 border-amber-400 shadow-xl ring-2 ring-amber-400/40' : 'bg-slate-900/80 border-slate-700/80'
        }`;

        card.innerHTML = `
          <div>
            <div class="flex items-center justify-between gap-2">
              <div class="flex items-center gap-2">
                <span class="w-4 h-4 rounded-full border border-white/40 shrink-0" style="background:${colorHexStr}"></span>
                <h3 class="font-extrabold text-white text-base">${car.name}</h3>
              </div>
              <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider ${
                unlocked ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30' : 'bg-amber-500/20 text-amber-300 border border-amber-400/30'
              }">
                ${unlocked ? 'OWNED' : (car.cost === 0 ? 'FREE' : `${car.cost.toLocaleString()} COINS`)}
              </span>
            </div>
            <div class="mt-1 flex items-center gap-2">
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-sky-300 border border-slate-700">${car.brandTag || 'Supercar'}</span>
            </div>
            <p class="text-xs text-slate-400 mt-1">${car.desc}</p>
          </div>
          <div class="space-y-1.5 text-xs text-slate-300">
            <div class="flex justify-between"><span>Top Speed</span><span class="font-bold text-white">${car.maxSpeed} km/h</span></div>
            <div class="flex justify-between"><span>Acceleration</span><span class="font-bold text-amber-300">${car.accel}</span></div>
            <div class="flex justify-between"><span>Braking System</span><span class="font-bold text-rose-300">${car.braking} km/s</span></div>
            <div class="flex justify-between"><span>Handling</span><span class="font-bold text-sky-300">${car.handling}</span></div>
            <div class="flex justify-between"><span>Coin Magnet</span><span class="font-bold text-emerald-300">${car.magnetRadius}m</span></div>
          </div>
        `;

        const btn = document.createElement('button');
        btn.type = 'button';
        if (unlocked) {
          btn.textContent = selected ? 'Equipped & Ready' : 'Select Car';
          btn.className = selected
            ? 'w-full py-2.5 rounded-xl bg-slate-700 text-slate-300 font-bold text-xs cursor-default'
            : 'w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs transition shadow';
          btn.addEventListener('click', () => {
            playSound('click');
            state.selectedCarId = car.id;
            saveGameData();
            rebuildPlayerCar();
            renderGarageModal();
            renderMainDashboard();
          });
        } else {
          btn.textContent = canAfford ? `Unlock for ${car.cost.toLocaleString()} Coins` : `Need ${(car.cost - state.coins).toLocaleString()} More Coins`;
          btn.className = canAfford
            ? 'w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition shadow'
            : 'w-full py-2.5 rounded-xl bg-slate-800 text-slate-500 font-bold text-xs cursor-not-allowed border border-slate-700/60';
          btn.addEventListener('click', () => {
            if (state.coins >= car.cost) {
              state.coins -= car.cost;
              state.unlockedCars.push(car.id);
              state.selectedCarId = car.id;
              saveGameData();
              playSound('win');
              showFloatingPopup(`UNLOCKED ${car.name.toUpperCase()}!`, 'text-emerald-300');
              rebuildPlayerCar();
              renderGarageModal();
              renderMainDashboard();
            } else {
              playSound('crash');
              showFloatingPopup(`Need ${(car.cost - state.coins).toLocaleString()} more coins!`, 'text-rose-400');
            }
          });
        }

        card.appendChild(btn);
        grid.appendChild(card);
      });
    }

    function renderLevelsModal() {
      const grid = document.getElementById('levels-grid');
      const filterBar = document.getElementById('levels-filter-bar');
      const countEl = document.getElementById('levels-unlocked-count');
      if (countEl) countEl.textContent = state.highestUnlockedLevel;

      // Filter Tabs
      if (filterBar) {
        filterBar.innerHTML = '';
        LEVEL_ZONES.forEach((zone, zIdx) => {
          const tabBtn = document.createElement('button');
          tabBtn.type = 'button';
          const isActive = zIdx === activeZoneIndex;
          tabBtn.className = isActive
            ? 'px-3 py-1.5 rounded-xl font-black bg-sky-400 text-slate-950 whitespace-nowrap shadow transition'
            : 'px-3 py-1.5 rounded-xl font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 whitespace-nowrap transition';
          tabBtn.textContent = zone.name;
          tabBtn.addEventListener('click', () => {
            playSound('click');
            activeZoneIndex = zIdx;
            renderLevelsModal();
          });
          filterBar.appendChild(tabBtn);
        });
      }

      grid.innerHTML = '';
      const zone = LEVEL_ZONES[activeZoneIndex] || LEVEL_ZONES[0];
      const filteredLevels = LEVELS.filter(l => l.id >= zone.range[0] && l.id <= zone.range[1]);

      filteredLevels.forEach(lvl => {
        const selected = state.selectedLevelId === lvl.id;
        const unlocked = lvl.id <= state.highestUnlockedLevel;
        const skyHexStr = '#' + lvl.skyColor.toString(16).padStart(6, '0');

        const card = document.createElement('div');
        card.className = `rounded-2xl p-4 border flex flex-col justify-between gap-3 transition ${
          selected
            ? 'bg-slate-800/95 border-sky-400 shadow-xl ring-2 ring-sky-400/40'
            : (unlocked
              ? 'bg-slate-900/80 border-slate-700/80 hover:border-slate-600'
              : 'bg-slate-950/80 border-slate-850/60 opacity-60 level-locked')
        }`;

        card.innerHTML = `
          <div>
            <div class="flex items-center justify-between gap-2">
              <div class="flex items-center gap-2">
                <span class="w-3.5 h-3.5 rounded-full border border-white/40 shrink-0" style="background:${skyHexStr}"></span>
                <h3 class="font-extrabold text-white text-base">Stage ${lvl.id}: ${lvl.name}</h3>
              </div>
              <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider ${
                unlocked ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30' : 'bg-rose-500/20 text-rose-300 border border-rose-400/30'
              }">
                ${unlocked ? 'UNLOCKED' : 'LOCKED'}
              </span>
            </div>
            <p class="text-xs text-slate-400 mt-1">${lvl.desc}</p>
          </div>
          <div class="space-y-1 text-[11px] text-slate-300">
            <div class="flex justify-between"><span>Distance Goal</span><span class="font-bold text-white">${lvl.distance.toLocaleString()}m</span></div>
            <div class="flex justify-between"><span>Coin Multiplier</span><span class="font-bold text-amber-300">${lvl.coinMult}x</span></div>
            <div class="flex justify-between"><span>Traffic Density</span><span class="font-bold text-sky-300">${lvl.trafficLabel}</span></div>
          </div>
        `;

        const btn = document.createElement('button');
        btn.type = 'button';
        if (unlocked) {
          btn.textContent = selected ? 'Play Selected Stage' : 'Select & Play Stage';
          btn.className = selected
            ? 'w-full py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black text-xs transition shadow'
            : 'w-full py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-xs transition shadow';
          btn.addEventListener('click', () => {
            state.selectedLevelId = lvl.id;
            saveGameData();
            applyLevelTheme(lvl);
            populateInitialScenery();
            renderMainDashboard();
            startRace();
          });
        } else {
          btn.innerHTML = `&#128274; Complete Stage ${lvl.id - 1} to Unlock`;
          btn.className = 'w-full py-2.5 rounded-xl bg-slate-800/80 text-slate-500 font-bold text-xs cursor-not-allowed border border-slate-700/60';
          btn.addEventListener('click', () => {
            playSound('crash');
            showFloatingPopup(`Complete Stage ${lvl.id - 1} first!`, 'text-rose-400');
          });
        }

        card.appendChild(btn);
        grid.appendChild(card);
      });
    }

    function openResultModal(kind) {
      const level = getSelectedLevel();
      const badge = document.getElementById('result-badge');
      const title = document.getElementById('result-title');
      const sub = document.getElementById('result-subtitle');
      const btnResume = document.getElementById('btn-resume-race');
      const btnNext = document.getElementById('btn-next-level');

      document.getElementById('result-distance').textContent = `${Math.min(level.distance, Math.floor(state.distance)).toLocaleString()}m`;
      document.getElementById('result-coins').textContent = `+${state.raceCoins.toLocaleString()}`;
      document.getElementById('result-bank').textContent = state.coins.toLocaleString();

      btnResume.classList.add('hidden');
      btnNext.classList.add('hidden');

      if (kind === 'PAUSED') {
        badge.textContent = 'GAME PAUSED';
        badge.className = 'px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-sky-500/20 text-sky-300 border border-sky-400/30';
        title.textContent = `Stage ${level.id}: ${level.name}`;
        sub.textContent = 'Take a breather or jump back onto the highway.';
        btnResume.classList.remove('hidden');
      } else if (kind === 'WIN') {
        badge.textContent = `STAGE ${level.id} COMPLETE`;
        badge.className = 'px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-400/30';
        title.textContent = 'Finish Line Crossed!';
        sub.textContent = `Stage ${level.id} cleared! Stage ${Math.min(50, level.id + 1)} is now unlocked!`;
        if (level.id < LEVELS.length) {
          btnNext.classList.remove('hidden');
        }
      } else {
        badge.textContent = 'CRASHED OUT';
        badge.className = 'px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-400/30';
        title.textContent = 'Car Destroyed!';
        sub.textContent = 'Watch out for track edge barriers and traffic. You keep all collected coins!';
      }

      showOverlayPanel('panel-result');
    }

    function showOverlayPanel(panelId) {
      const overlay = document.getElementById('overlay-screen');
      overlay.classList.remove('hidden');
      ['panel-main', 'panel-garage', 'panel-levels', 'panel-result'].forEach(id => {
        const el = document.getElementById(id);
        if (id === panelId) {
          el.classList.remove('hidden');
          el.classList.add('flex');
        } else {
          el.classList.add('hidden');
          el.classList.remove('flex');
        }
      });
      syncScreenVisibility(true);
    }

    function syncScreenVisibility(forceOverlay = false) {
      const isRacing = (state.mode === 'RACING') && !forceOverlay;
      document.getElementById('hud-race-progress-wrap').classList.toggle('hidden', !isRacing);
      document.getElementById('hud-race-progress-wrap').classList.toggle('flex', isRacing);
      document.getElementById('hud-telemetry').classList.toggle('hidden', !isRacing);
      document.getElementById('hud-controls').classList.toggle('hidden', !isRacing);
      document.getElementById('btn-toggle-pause').classList.toggle('hidden', !isRacing);

      const overlay = document.getElementById('overlay-screen');
      overlay.classList.toggle('hidden', isRacing);
    }

    function bindUIEvents() {
      document.getElementById('btn-home-menu').addEventListener('click', () => {
        playSound('click');
        state.mode = 'MENU';
        clearRaceEntities();
        renderMainDashboard();
        showOverlayPanel('panel-main');
      });

      document.getElementById('btn-open-garage').addEventListener('click', () => {
        playSound('click');
        renderGarageModal();
        showOverlayPanel('panel-garage');
      });

      document.getElementById('btn-close-garage').addEventListener('click', () => {
        playSound('click');
        renderMainDashboard();
        showOverlayPanel('panel-main');
      });

      document.getElementById('btn-open-levels').addEventListener('click', () => {
        playSound('click');
        renderLevelsModal();
        showOverlayPanel('panel-levels');
      });

      const openHubBtn = document.getElementById('btn-open-levels-hub');
      if (openHubBtn) {
        openHubBtn.addEventListener('click', () => {
          playSound('click');
          renderLevelsModal();
          showOverlayPanel('panel-levels');
        });
      }

      document.getElementById('btn-close-levels').addEventListener('click', () => {
        playSound('click');
        renderMainDashboard();
        showOverlayPanel('panel-main');
      });

      document.getElementById('btn-toggle-pause').addEventListener('click', () => {
        togglePauseRace();
      });

      document.getElementById('btn-toggle-sound').addEventListener('click', () => {
        initAudio();
        state.soundEnabled = !state.soundEnabled;
        document.getElementById('sound-icon').textContent = state.soundEnabled ? '\u{1F50A}' : '\u{1F507}';
        showFloatingPopup(state.soundEnabled ? 'SOUND ON' : 'SOUND MUTED', 'text-slate-300');
      });

      document.getElementById('btn-claim-bonus').addEventListener('click', () => {
        state.coins += 10000;
        saveGameData();
        playSound('coin');
        showFloatingPopup('+10,000 BONUS COINS!', 'text-amber-300');
        renderMainDashboard();
      });

      document.getElementById('btn-prev-car').addEventListener('click', () => {
        playSound('click');
        const idx = CARS.findIndex(c => c.id === state.selectedCarId);
        const prevIdx = (idx - 1 + CARS.length) % CARS.length;
        state.selectedCarId = CARS[prevIdx].id;
        rebuildPlayerCar();
        renderMainDashboard();
      });

      document.getElementById('btn-next-car').addEventListener('click', () => {
        playSound('click');
        const idx = CARS.findIndex(c => c.id === state.selectedCarId);
        const nextIdx = (idx + 1) % CARS.length;
        state.selectedCarId = CARS[nextIdx].id;
        rebuildPlayerCar();
        renderMainDashboard();
      });

      // Level Prev/Next Steppers on Dashboard
      const btnPrevLvl = document.getElementById('btn-prev-level');
      if (btnPrevLvl) {
        btnPrevLvl.addEventListener('click', () => {
          if (state.selectedLevelId > 1) {
            playSound('click');
            state.selectedLevelId -= 1;
            saveGameData();
            applyLevelTheme(getSelectedLevel());
            populateInitialScenery();
            renderMainDashboard();
          }
        });
      }

      const btnNextLvlNav = document.getElementById('btn-next-level-nav');
      if (btnNextLvlNav) {
        btnNextLvlNav.addEventListener('click', () => {
          if (state.selectedLevelId < state.highestUnlockedLevel) {
            playSound('click');
            state.selectedLevelId += 1;
            saveGameData();
            applyLevelTheme(getSelectedLevel());
            populateInitialScenery();
            renderMainDashboard();
          } else if (state.selectedLevelId < LEVELS.length) {
            playSound('crash');
            showFloatingPopup(`Complete Stage ${state.selectedLevelId} to unlock next!`, 'text-rose-400');
          }
        });
      }

      document.getElementById('btn-car-action').addEventListener('click', () => {
        const car = getSelectedCar();
        if (state.unlockedCars.includes(car.id)) return;
        if (state.coins >= car.cost) {
          state.coins -= car.cost;
          state.unlockedCars.push(car.id);
          saveGameData();
          playSound('win');
          showFloatingPopup(`UNLOCKED ${car.name.toUpperCase()}!`, 'text-emerald-300');
          renderMainDashboard();
        } else {
          playSound('crash');
          showFloatingPopup(`Need ${(car.cost - state.coins).toLocaleString()} more coins!`, 'text-rose-400');
        }
      });

      document.getElementById('chk-auto-accel').addEventListener('change', (e) => {
        state.autoAccel = e.target.checked;
      });

      document.getElementById('btn-start-race').addEventListener('click', () => {
        const car = getSelectedCar();
        if (!state.unlockedCars.includes(car.id)) {
          if (state.coins >= car.cost) {
            state.coins -= car.cost;
            state.unlockedCars.push(car.id);
            saveGameData();
          } else {
            state.selectedCarId = state.unlockedCars[0] || 'swift';
            rebuildPlayerCar();
          }
        }
        startRace();
      });

      document.getElementById('btn-resume-race').addEventListener('click', () => {
        playSound('click');
        state.mode = 'RACING';
        syncScreenVisibility();
      });

      document.getElementById('btn-next-level').addEventListener('click', () => {
        playSound('click');
        if (state.selectedLevelId < LEVELS.length) {
          state.selectedLevelId += 1;
          saveGameData();
        }
        startRace();
      });

      document.getElementById('btn-retry-race').addEventListener('click', () => {
        startRace();
      });

      document.getElementById('btn-result-menu').addEventListener('click', () => {
        playSound('click');
        state.mode = 'MENU';
        clearRaceEntities();
        renderMainDashboard();
        showOverlayPanel('panel-main');
      });
    }

    window.onload = function () {
      loadSaveData();
      initThreeScene();
      setupInputs();
      bindUIEvents();
      renderMainDashboard();
      showOverlayPanel('panel-main');
      lastFrameTime = performance.now();
      requestAnimationFrame(animateLoop);
    };
