    const CARS = [
      {
        id: 'cruiser',
        name: 'Street Cruiser',
        desc: 'Balanced crimson turbo coupe built for effortless handling.',
        cost: 0,
        bodyColor: 0xef4444,
        accentColor: 0xfef08a,
        neonColor: 0xf87171,
        maxSpeed: 115,
        accel: 58,
        handling: 32,
        magnetRadius: 3.0,
        style: 'coupe'
      },
      {
        id: 'viper',
        name: 'Drift Viper',
        desc: 'Agile cyan street tuner with rapid lane response and wide spoiler.',
        cost: 50,
        bodyColor: 0x06b6d4,
        accentColor: 0xf43f5e,
        neonColor: 0x22d3ee,
        maxSpeed: 132,
        accel: 68,
        handling: 40,
        magnetRadius: 3.6,
        style: 'tuner'
      },
      {
        id: 'titan',
        name: 'Desert Titan',
        desc: 'Armored gold-and-onyx rally beast with extra coin magnet pull.',
        cost: 120,
        bodyColor: 0xf59e0b,
        accentColor: 0x1e293b,
        neonColor: 0xfbbf24,
        maxSpeed: 145,
        accel: 74,
        handling: 35,
        magnetRadius: 4.5,
        style: 'muscle'
      },
      {
        id: 'cyber',
        name: 'Cyber Blade',
        desc: 'Futuristic synthwave wedge supercar with high-output nitro jets.',
        cost: 250,
        bodyColor: 0xa855f7,
        accentColor: 0x22d3ee,
        neonColor: 0xe879f9,
        maxSpeed: 162,
        accel: 85,
        handling: 44,
        magnetRadius: 5.2,
        style: 'super'
      },
      {
        id: 'hyperion',
        name: 'Apex Hyperion',
        desc: 'Ultimate emerald & gold hypercar with maximum velocity and magnet.',
        cost: 500,
        bodyColor: 0x10b981,
        accentColor: 0xfacc15,
        neonColor: 0x34d399,
        maxSpeed: 185,
        accel: 96,
        handling: 48,
        magnetRadius: 6.4,
        style: 'hyper'
      }
    ];

    const LEVELS = [
      {
        id: 1,
        name: 'Sunny Coastline',
        desc: 'Breezy ocean highway lined with tropical palms and golden sand.',
        distance: 1000,
        coinMult: 1.0,
        trafficLabel: 'Easy',
        trafficInterval: 1.15,
        trafficSpeedRatio: 0.42,
        skyColor: 0x38bdf8,
        fogColor: 0x7dd3fc,
        groundColor: 0xfde68a,
        roadColor: 0x334155,
        stripeColor: 0xf8fafc,
        sceneryType: 'palm'
      },
      {
        id: 2,
        name: 'Sunset Canyon',
        desc: 'Warm dusk sprint through towering red rock mesas and desert cacti.',
        distance: 1500,
        coinMult: 1.25,
        trafficLabel: 'Moderate',
        trafficInterval: 0.95,
        trafficSpeedRatio: 0.48,
        skyColor: 0xf97316,
        fogColor: 0xfb923c,
        groundColor: 0xd97706,
        roadColor: 0x292524,
        stripeColor: 0xfde047,
        sceneryType: 'canyon'
      },
      {
        id: 3,
        name: 'Neon Cyber City',
        desc: 'High-speed midnight expressway lit by glowing synthwave towers.',
        distance: 2000,
        coinMult: 1.5,
        trafficLabel: 'Fast',
        trafficInterval: 0.82,
        trafficSpeedRatio: 0.52,
        skyColor: 0x0f172a,
        fogColor: 0x1e1b4b,
        groundColor: 0x090d16,
        roadColor: 0x1e293b,
        stripeColor: 0x22d3ee,
        sceneryType: 'city'
      },
      {
        id: 4,
        name: 'Alpine Snow Pass',
        desc: 'Crisp mountain highway winding past frosted pines and icy peaks.',
        distance: 2500,
        coinMult: 1.75,
        trafficLabel: 'Dense',
        trafficInterval: 0.72,
        trafficSpeedRatio: 0.56,
        skyColor: 0x93c5fd,
        fogColor: 0xdbeafe,
        groundColor: 0xf1f5f9,
        roadColor: 0x475569,
        stripeColor: 0x38bdf8,
        sceneryType: 'snow'
      },
      {
        id: 5,
        name: 'Volcano Inferno',
        desc: 'Championship finale across obsidian roads and glowing magma vents.',
        distance: 3200,
        coinMult: 2.0,
        trafficLabel: 'Intense',
        trafficInterval: 0.64,
        trafficSpeedRatio: 0.60,
        skyColor: 0x450a0a,
        fogColor: 0x7f1d1d,
        groundColor: 0x1c1917,
        roadColor: 0x27272a,
        stripeColor: 0xf97316,
        sceneryType: 'volcano'
      }
    ];

    const state = {
      coins: 0,
      unlockedCars: ['cruiser'],
      selectedCarId: 'cruiser',
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
            state.unlockedCars = parsed.unlockedCars;
          }
          if (parsed.selectedCarId) state.selectedCarId = parsed.selectedCarId;
          if (parsed.selectedLevelId) state.selectedLevelId = parsed.selectedLevelId;
          if (parsed.highestUnlockedLevel) state.highestUnlockedLevel = parsed.highestUnlockedLevel;
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
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      if (type === 'coin') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, now);
        osc.frequency.exponentialRampToValueAtTime(1320, now + 0.09);
        gain.gain.setValueAtTime(0.16, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
        osc.start(now);
        osc.stop(now + 0.18);
      } else if (type === 'powerup') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(520, now);
        osc.frequency.exponentialRampToValueAtTime(1040, now + 0.22);
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      } else if (type === 'crash') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.exponentialRampToValueAtTime(42, now + 0.28);
        gain.gain.setValueAtTime(0.24, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
      } else if (type === 'win') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.1);
        osc.frequency.setValueAtTime(783.99, now + 0.2);
        osc.frequency.setValueAtTime(1046.5, now + 0.3);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.55);
        osc.start(now);
        osc.stop(now + 0.55);
      } else if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(620, now);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
      }
    }

    let scene, camera, renderer;
    let playerCarGroup = null;
    let playerWheels = [];
    let nitroFlameMesh = null;
    let shieldBubbleMesh = null;

    let roadGroup, groundMesh, roadMesh;
    let laneDashMeshes = [];
    let sceneryItems = [];
    let coinsList = [];
    let powerupsList = [];
    let trafficList = [];
    let particlesList = [];
    let finishGateGroup = null;

    const ROAD_WIDTH = 14;
    const LANES = [-4.2, 0, 4.2];

    function initThreeScene() {
      const container = document.getElementById('canvas-container');
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x38bdf8);
      scene.fog = new THREE.FogExp2(0x7dd3fc, 0.009);

      camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 260);
      camera.position.set(0, 4.2, 9.5);
      camera.lookAt(0, 1.0, -10);

      renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.shadowMap.enabled = true;
      container.innerHTML = '';
      container.appendChild(renderer.domElement);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.72);
      scene.add(ambientLight);

      const dirLight = new THREE.DirectionalLight(0xffffff, 0.85);
      dirLight.position.set(18, 36, 20);
      dirLight.castShadow = true;
      scene.add(dirLight);

      roadGroup = new THREE.Group();
      scene.add(roadGroup);

      const groundGeo = new THREE.PlaneGeometry(360, 400);
      const groundMat = new THREE.MeshLambertMaterial({ color: 0xfde68a });
      groundMesh = new THREE.Mesh(groundGeo, groundMat);
      groundMesh.rotation.x = -Math.PI / 2;
      groundMesh.position.set(0, -0.05, -120);
      roadGroup.add(groundMesh);

      const roadGeo = new THREE.PlaneGeometry(ROAD_WIDTH, 400);
      const roadMat = new THREE.MeshPhongMaterial({ color: 0x334155, shininess: 18 });
      roadMesh = new THREE.Mesh(roadGeo, roadMat);
      roadMesh.rotation.x = -Math.PI / 2;
      roadMesh.position.set(0, 0, -120);
      roadGroup.add(roadMesh);

      const curbGeo = new THREE.BoxGeometry(0.45, 0.16, 400);
      const curbMat = new THREE.MeshLambertMaterial({ color: 0xf43f5e });
      const leftCurb = new THREE.Mesh(curbGeo, curbMat);
      leftCurb.position.set(-ROAD_WIDTH / 2 - 0.2, 0.08, -120);
      const rightCurb = new THREE.Mesh(curbGeo, curbMat);
      rightCurb.position.set(ROAD_WIDTH / 2 + 0.2, 0.08, -120);
      roadGroup.add(leftCurb, rightCurb);

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

    function createCarMesh(carSpec, isTraffic = false) {
      const group = new THREE.Group();
      const wheels = [];

      const bodyMat = new THREE.MeshPhongMaterial({ color: carSpec.bodyColor, shininess: 85 });
      const accentMat = new THREE.MeshPhongMaterial({ color: carSpec.accentColor, shininess: 60 });
      const glassMat = new THREE.MeshPhongMaterial({ color: 0x0f172a, shininess: 120 });
      const wheelMat = new THREE.MeshLambertMaterial({ color: 0x111827 });
      const rimMat = new THREE.MeshBasicMaterial({ color: 0xe2e8f0 });

      const chassisHeight = carSpec.style === 'muscle' ? 0.68 : 0.52;
      const chassisGeo = new THREE.BoxGeometry(2.0, chassisHeight, 4.2);
      const chassis = new THREE.Mesh(chassisGeo, bodyMat);
      chassis.position.y = 0.58;
      group.add(chassis);

      const stripeGeo = new THREE.BoxGeometry(0.65, chassisHeight + 0.02, 4.22);
      const stripe = new THREE.Mesh(stripeGeo, accentMat);
      stripe.position.y = 0.58;
      group.add(stripe);

      const cabinWidth = carSpec.style === 'hyper' ? 1.45 : 1.68;
      const cabinGeo = new THREE.BoxGeometry(cabinWidth, 0.48, 2.0);
      const cabin = new THREE.Mesh(cabinGeo, glassMat);
      cabin.position.set(0, 1.02, -0.15);
      group.add(cabin);

      const roofGeo = new THREE.BoxGeometry(cabinWidth - 0.12, 0.08, 1.5);
      const roof = new THREE.Mesh(roofGeo, bodyMat);
      roof.position.set(0, 1.27, -0.15);
      group.add(roof);

      if (!isTraffic || Math.random() > 0.5) {
        const wingGeo = new THREE.BoxGeometry(1.95, 0.08, 0.38);
        const wing = new THREE.Mesh(wingGeo, accentMat);
        wing.position.set(0, 1.06, 1.85);
        group.add(wing);
      }

      const headMat = new THREE.MeshBasicMaterial({ color: 0xfef08a });
      const tailMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
      const lightGeo = new THREE.BoxGeometry(0.38, 0.16, 0.1);

      const hlLeft = new THREE.Mesh(lightGeo, headMat);
      hlLeft.position.set(-0.68, 0.6, -2.11);
      const hlRight = new THREE.Mesh(lightGeo, headMat);
      hlRight.position.set(0.68, 0.6, -2.11);

      const tlLeft = new THREE.Mesh(lightGeo, tailMat);
      tlLeft.position.set(-0.68, 0.62, 2.11);
      const tlRight = new THREE.Mesh(lightGeo, tailMat);
      tlRight.position.set(0.68, 0.62, 2.11);
      group.add(hlLeft, hlRight, tlLeft, tlRight);

      const wheelGeo = new THREE.CylinderGeometry(0.42, 0.42, 0.34, 16);
      wheelGeo.rotateZ(Math.PI / 2);
      const wheelCoords = [
        [-1.02, 0.42, -1.32],
        [1.02, 0.42, -1.32],
        [-1.02, 0.42, 1.32],
        [1.02, 0.42, 1.32]
      ];
      wheelCoords.forEach(([wx, wy, wz]) => {
        const wMesh = new THREE.Mesh(wheelGeo, wheelMat);
        wMesh.position.set(wx, wy, wz);
        const hubGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.36, 8);
        hubGeo.rotateZ(Math.PI / 2);
        const hub = new THREE.Mesh(hubGeo, rimMat);
        wMesh.add(hub);
        group.add(wMesh);
        wheels.push(wMesh);
      });

      if (!isTraffic) {
        const neonGeo = new THREE.PlaneGeometry(2.2, 4.3);
        const neonMat = new THREE.MeshBasicMaterial({
          color: carSpec.neonColor || 0x38bdf8,
          transparent: true,
          opacity: 0.42
        });
        const neon = new THREE.Mesh(neonGeo, neonMat);
        neon.rotation.x = -Math.PI / 2;
        neon.position.y = 0.04;
        group.add(neon);

        const flameGeo = new THREE.ConeGeometry(0.35, 1.5, 10);
        flameGeo.rotateX(Math.PI / 2);
        const flameMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.85 });
        nitroFlameMesh = new THREE.Mesh(flameGeo, flameMat);
        nitroFlameMesh.position.set(0, 0.45, 2.75);
        nitroFlameMesh.visible = false;
        group.add(nitroFlameMesh);

        const shieldGeo = new THREE.SphereGeometry(2.65, 20, 16);
        const shieldMat = new THREE.MeshBasicMaterial({
          color: 0x22d3ee,
          wireframe: true,
          transparent: true,
          opacity: 0.38
        });
        shieldBubbleMesh = new THREE.Mesh(shieldGeo, shieldMat);
        shieldBubbleMesh.position.set(0, 0.8, 0);
        shieldBubbleMesh.visible = false;
        group.add(shieldBubbleMesh);
      }

      return { group, wheels };
    }

    function rebuildPlayerCar() {
      if (!scene) return;
      if (playerCarGroup) {
        scene.remove(playerCarGroup);
      }
      const carSpec = getSelectedCar();
      const built = createCarMesh(carSpec, false);
      playerCarGroup = built.group;
      playerWheels = built.wheels;
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
      const tooClose = trafficList.some(t => Math.abs(t.mesh.position.z - zPos) < 15 && Math.abs(t.mesh.position.x - lane) < 2.2);
      if (tooClose) return;

      const palette = [0x3b82f6, 0xeab308, 0xec4899, 0x8b5cf6, 0x14b8a6, 0xf97316, 0x64748b];
      const randomColor = palette[Math.floor(Math.random() * palette.length)];
      const built = createCarMesh({
        bodyColor: randomColor,
        accentColor: 0xe2e8f0,
        style: 'coupe'
      }, true);

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

      const pillarGeo = new THREE.BoxGeometry(0.8, 6.5, 0.8);
      const pillarMat = new THREE.MeshLambertMaterial({ color: 0xf8fafc });
      const leftPillar = new THREE.Mesh(pillarGeo, pillarMat);
      leftPillar.position.set(-ROAD_WIDTH / 2, 3.25, 0);
      const rightPillar = new THREE.Mesh(pillarGeo, pillarMat);
      rightPillar.position.set(ROAD_WIDTH / 2, 3.25, 0);

      const bannerGeo = new THREE.BoxGeometry(ROAD_WIDTH + 1.2, 1.4, 0.6);
      const bannerMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
      const banner = new THREE.Mesh(bannerGeo, bannerMat);
      banner.position.set(0, 6.0, 0);

      finishGateGroup.add(leftPillar, rightPillar, banner);
      finishGateGroup.position.set(0, 0, zPos);
      scene.add(finishGateGroup);
    }

    function spawnParticleBurst(pos, colorHex) {
      const geo = new THREE.BoxGeometry(0.22, 0.22, 0.22);
      const mat = new THREE.MeshBasicMaterial({ color: colorHex });
      for (let i = 0; i < 10; i++) {
        const p = new THREE.Mesh(geo, mat);
        p.position.copy(pos);
        p.userData = {
          vx: (Math.random() - 0.5) * 8,
          vy: 2 + Math.random() * 5,
          vz: (Math.random() - 0.5) * 8,
          life: 0.45
        };
        scene.add(p);
        particlesList.push(p);
      }
    }

    function clearRaceEntities() {
      coinsList.forEach(c => scene.remove(c));
      coinsList = [];
      powerupsList.forEach(p => scene.remove(p));
      powerupsList = [];
      trafficList.forEach(t => scene.remove(t.mesh));
      trafficList = [];
      particlesList.forEach(p => scene.remove(p));
      particlesList = [];
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
        if (e.code === 'ArrowLeft' || e.code === 'KeyA') keys.left = true;
        if (e.code === 'ArrowRight' || e.code === 'KeyD') keys.right = true;
        if (e.code === 'ArrowUp' || e.code === 'KeyW') keys.up = true;
        if (e.code === 'ArrowDown' || e.code === 'KeyS') keys.down = true;
        if (e.code === 'Space' || e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
          keys.nitro = true;
          if (state.mode === 'RACING') e.preventDefault();
        }
        if (e.code === 'KeyP' || e.code === 'Escape') {
          if (state.mode === 'RACING' || state.mode === 'PAUSED') {
            togglePauseRace();
          }
        }
      });

      window.addEventListener('keyup', (e) => {
        if (e.code === 'ArrowLeft' || e.code === 'KeyA') keys.left = false;
        if (e.code === 'ArrowRight' || e.code === 'KeyD') keys.right = false;
        if (e.code === 'ArrowUp' || e.code === 'KeyW') keys.up = false;
        if (e.code === 'ArrowDown' || e.code === 'KeyS') keys.down = false;
        if (e.code === 'Space' || e.code === 'ShiftLeft' || e.code === 'ShiftRight') keys.nitro = false;
      });

      function bindHoldButton(btnId, keyName) {
        const btn = document.getElementById(btnId);
        if (!btn) return;
        const startHold = (ev) => {
          ev.preventDefault();
          keys[keyName] = true;
          btn.classList.add('active-press');
        };
        const endHold = (ev) => {
          ev.preventDefault();
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
        resetKeys();
        openResultModal('PAUSED');
      } else if (state.mode === 'PAUSED') {
        state.mode = 'RACING';
        syncScreenVisibility();
      }
    }

    function finishRace(won) {
      state.mode = 'RESULT';
      resetKeys();
      if (won) {
        playSound('win');
        if (state.selectedLevelId >= state.highestUnlockedLevel && state.selectedLevelId < LEVELS.length) {
          state.highestUnlockedLevel = state.selectedLevelId + 1;
        }
        const bonus = Math.round(20 * getSelectedLevel().coinMult);
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

      if (usingNitro) {
        state.nitro = Math.max(0, state.nitro - 28 * dt);
        state.speed = Math.min(topSpeed, state.speed + car.accel * 1.65 * dt);
      } else {
        state.nitro = Math.min(100, state.nitro + 9.5 * dt);
        if (keys.down) {
          state.speed = Math.max(25, state.speed - car.accel * 1.9 * dt);
        } else if (state.autoAccel) {
          if (state.speed < car.maxSpeed) {
            state.speed = Math.min(car.maxSpeed, state.speed + car.accel * dt);
          } else {
            state.speed = Math.max(car.maxSpeed, state.speed - 40 * dt);
          }
        } else {
          state.speed = Math.max(0, state.speed - 22 * dt);
        }
      }

      const targetFov = usingNitro ? 72 : 60;
      camera.fov += (targetFov - camera.fov) * 8 * dt;
      camera.updateProjectionMatrix();

      if (nitroFlameMesh) {
        nitroFlameMesh.visible = usingNitro;
        if (usingNitro) {
          nitroFlameMesh.scale.z = 0.85 + Math.random() * 0.45;
        }
      }
      if (shieldBubbleMesh) {
        shieldBubbleMesh.visible = state.shieldTimer > 0;
        shieldBubbleMesh.rotation.y += 2.5 * dt;
      }

      const steerDir = (keys.right ? 1 : 0) - (keys.left ? 1 : 0);
      const lateralSpeed = (car.handling * 0.34);
      state.playerX += steerDir * lateralSpeed * dt;
      const maxOffset = ROAD_WIDTH / 2 - 1.25;
      state.playerX = Math.max(-maxOffset, Math.min(maxOffset, state.playerX));

      if (playerCarGroup) {
        playerCarGroup.position.x = state.playerX;
        const targetRotZ = -steerDir * 0.08;
        const targetRotY = -steerDir * 0.11;
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

      camera.position.x += (state.playerX * 0.55 - camera.position.x) * 7 * dt;
      camera.position.y = 4.15;
      camera.position.z = 9.2;
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

      const trafficForwardSpeed = (car.maxSpeed * level.trafficSpeedRatio) * 0.42;
      for (let i = trafficList.length - 1; i >= 0; i--) {
        const t = trafficList[i];
        const relStep = forwardStep - trafficForwardSpeed * dt;
        t.mesh.position.z += relStep;
        t.wheels.forEach(w => { w.rotation.x -= trafficForwardSpeed * dt; });

        const dx = Math.abs(state.playerX - t.mesh.position.x);
        const dz = Math.abs(t.mesh.position.z);

        if (dx < 1.72 && dz < 3.65) {
          if (state.shieldTimer > 0) {
            playSound('powerup');
            spawnParticleBurst(t.mesh.position, 0x22d3ee);
            showFloatingPopup('SHIELD SMASH! +5', 'text-cyan-300');
            state.raceCoins += 5;
            state.coins += 5;
            scene.remove(t.mesh);
            trafficList.splice(i, 1);
            continue;
          } else if (state.invulnerableTimer <= 0) {
            state.hearts -= 1;
            state.invulnerableTimer = 2.0;
            state.speed = Math.max(30, state.speed * 0.55);
            playSound('crash');
            spawnParticleBurst(playerCarGroup.position, 0xef4444);
            showFloatingPopup('CRASH! -1 ARMOR', 'text-rose-400');
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

        if (!t.passedNear && t.mesh.position.z > 1.8 && dx >= 1.72 && dx < 2.85) {
          t.passedNear = true;
          state.raceCoins += 3;
          state.coins += 3;
          state.nitro = Math.min(100, state.nitro + 12);
          playSound('coin');
          showFloatingPopup('NEAR MISS! +3 COINS', 'text-amber-300');
        }

        if (t.mesh.position.z > 16) {
          scene.remove(t.mesh);
          trafficList.splice(i, 1);
        }
      }

      for (let i = particlesList.length - 1; i >= 0; i--) {
        const p = particlesList[i];
        p.userData.life -= dt;
        p.position.x += p.userData.vx * dt;
        p.position.y += p.userData.vy * dt;
        p.position.z += p.userData.vz * dt;
        p.userData.vy -= 9.8 * dt;
        if (p.userData.life <= 0) {
          scene.remove(p);
          particlesList.splice(i, 1);
        }
      }

      updateHUD();
    }

    function animateLoop(now) {
      requestAnimationFrame(animateLoop);
      const dt = Math.min((now - lastFrameTime) / 1000, 0.05);
      lastFrameTime = now;

      if (state.mode === 'RACING') {
        updateRacePhysics(dt);
      } else {
        menuOrbitAngle += 0.45 * dt;
        if (playerCarGroup) {
          playerCarGroup.position.set(0, 0, 0);
          playerCarGroup.rotation.set(0, 0, 0);
          playerCarGroup.visible = true;
          playerWheels.forEach(w => { w.rotation.x -= 2.2 * dt; });
        }
        if (camera) {
          camera.position.x = Math.sin(menuOrbitAngle) * 6.8;
          camera.position.z = Math.cos(menuOrbitAngle) * 6.8;
          camera.position.y = 2.85;
          camera.lookAt(0, 0.75, 0);
        }
      }

      if (renderer && scene && camera) {
        renderer.render(scene, camera);
      }
    }

    function updateHUD() {
      const level = getSelectedLevel();
      document.getElementById('hud-total-coins').textContent = state.coins.toLocaleString();
      document.getElementById('hud-race-coins').textContent = `+${state.raceCoins}`;
      document.getElementById('hud-speed').textContent = Math.round(state.speed);
      document.getElementById('hud-nitro-fill').style.width = `${Math.round(state.nitro)}%`;

      const pct = Math.min(100, Math.floor((state.distance / level.distance) * 100));
      document.getElementById('hud-level-badge').textContent = `LVL ${level.id}`;
      document.getElementById('hud-progress-fill').style.width = `${pct}%`;
      document.getElementById('hud-progress-text').textContent = `${pct}%`;

      const heartsEl = document.getElementById('hud-hearts');
      let heartsHtml = '';
      for (let i = 0; i < 3; i++) {
        heartsHtml += i < state.hearts
          ? '<span class="text-rose-400">&#10084;</span>'
          : '<span class="text-slate-600">&#10084;</span>';
      }
      heartsEl.innerHTML = heartsHtml;

      const shieldTag = document.getElementById('hud-shield-tag');
      if (state.shieldTimer > 0) {
        shieldTag.classList.remove('hidden');
      } else {
        shieldTag.classList.add('hidden');
      }
    }

    function renderMainDashboard() {
      const car = getSelectedCar();
      const level = getSelectedLevel();
      const isUnlocked = state.unlockedCars.includes(car.id);

      document.getElementById('hud-total-coins').textContent = state.coins.toLocaleString();
      document.getElementById('menu-car-name').textContent = car.name;
      document.getElementById('menu-car-desc').textContent = car.desc;

      const badgeEl = document.getElementById('menu-car-badge');
      const actionBtn = document.getElementById('btn-car-action');

      if (isUnlocked) {
        badgeEl.textContent = 'UNLOCKED';
        badgeEl.className = 'px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30';
        actionBtn.textContent = 'Ready to Race';
        actionBtn.className = 'px-3.5 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 font-bold text-xs cursor-default';
      } else {
        badgeEl.textContent = `${car.cost} COINS`;
        badgeEl.className = 'px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30';
        const canAfford = state.coins >= car.cost;
        actionBtn.textContent = `Unlock (${car.cost} Coins)`;
        actionBtn.className = canAfford
          ? 'px-3.5 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs transition cursor-pointer'
          : 'px-3.5 py-1.5 rounded-lg bg-slate-800 text-slate-400 font-bold text-xs border border-slate-700 cursor-pointer';
      }

      document.getElementById('stat-speed-bar').style.width = `${Math.round((car.maxSpeed / 190) * 100)}%`;
      document.getElementById('stat-handling-bar').style.width = `${Math.round((car.handling / 50) * 100)}%`;
      document.getElementById('stat-magnet-bar').style.width = `${Math.round((car.magnetRadius / 6.5) * 100)}%`;

      document.getElementById('menu-level-name').textContent = `${level.id}. ${level.name}`;
      document.getElementById('menu-level-desc').textContent = level.desc;
      document.getElementById('menu-level-distance').textContent = `${level.distance.toLocaleString()}m`;
      document.getElementById('menu-level-mult').textContent = `${level.coinMult}x Coins`;
      document.getElementById('menu-level-traffic').textContent = level.trafficLabel;

      const pillsContainer = document.getElementById('menu-level-pills');
      pillsContainer.innerHTML = '';
      LEVELS.forEach(lvl => {
        const active = lvl.id === state.selectedLevelId;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = active
          ? 'py-2 rounded-xl font-extrabold text-xs bg-sky-400 text-slate-950 shadow-md transition'
          : 'py-2 rounded-xl font-bold text-xs bg-slate-800/90 hover:bg-slate-700 text-slate-300 border border-slate-700 transition';
        btn.textContent = `Lvl ${lvl.id}`;
        btn.addEventListener('click', () => {
          playSound('click');
          state.selectedLevelId = lvl.id;
          saveGameData();
          applyLevelTheme(lvl);
          populateInitialScenery();
          renderMainDashboard();
        });
        pillsContainer.appendChild(btn);
      });
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
          selected ? 'bg-slate-800/95 border-amber-400 shadow-lg' : 'bg-slate-900/80 border-slate-700/80'
        }`;

        card.innerHTML = `
          <div>
            <div class="flex items-center justify-between gap-2">
              <div class="flex items-center gap-2">
                <span class="w-4 h-4 rounded-full border border-white/40" style="background:${colorHexStr}"></span>
                <h3 class="font-extrabold text-white text-base">${car.name}</h3>
              </div>
              <span class="text-[11px] font-bold px-2 py-0.5 rounded ${
                unlocked ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'
              }">${unlocked ? 'OWNED' : car.cost + ' COINS'}</span>
            </div>
            <p class="text-xs text-slate-400 mt-1">${car.desc}</p>
          </div>
          <div class="space-y-1.5 text-[11px] text-slate-300">
            <div class="flex justify-between"><span>Top Speed</span><span class="font-bold text-amber-300">${car.maxSpeed} km/h</span></div>
            <div class="flex justify-between"><span>Coin Magnet</span><span class="font-bold text-emerald-300">${car.magnetRadius}m radius</span></div>
          </div>
        `;

        const btn = document.createElement('button');
        btn.type = 'button';
        if (unlocked) {
          btn.textContent = selected ? 'Equipped' : 'Select Car';
          btn.className = selected
            ? 'w-full py-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 font-extrabold text-xs'
            : 'w-full py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold text-xs transition';
        } else {
          btn.textContent = canAfford ? `Buy for ${car.cost} Coins` : `Need ${car.cost} Coins`;
          btn.className = canAfford
            ? 'w-full py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs transition'
            : 'w-full py-2 rounded-xl bg-slate-800 text-slate-500 font-bold text-xs border border-slate-700';
        }

        btn.addEventListener('click', () => {
          if (unlocked) {
            playSound('click');
            state.selectedCarId = car.id;
            saveGameData();
            rebuildPlayerCar();
            renderGarageModal();
            renderMainDashboard();
          } else if (state.coins >= car.cost) {
            state.coins -= car.cost;
            state.unlockedCars.push(car.id);
            state.selectedCarId = car.id;
            playSound('win');
            saveGameData();
            rebuildPlayerCar();
            renderGarageModal();
            renderMainDashboard();
          } else {
            playSound('crash');
            showFloatingPopup(`Need ${car.cost - state.coins} more coins!`, 'text-rose-400');
          }
        });

        card.appendChild(btn);
        grid.appendChild(card);
      });
    }

    function renderLevelsModal() {
      const grid = document.getElementById('levels-grid');
      grid.innerHTML = '';
      LEVELS.forEach(lvl => {
        const selected = state.selectedLevelId === lvl.id;
        const skyHexStr = '#' + lvl.skyColor.toString(16).padStart(6, '0');

        const card = document.createElement('div');
        card.className = `rounded-2xl p-4 border flex flex-col justify-between gap-3 transition ${
          selected ? 'bg-slate-800/95 border-sky-400 shadow-lg' : 'bg-slate-900/80 border-slate-700/80'
        }`;

        card.innerHTML = `
          <div>
            <div class="flex items-center justify-between gap-2">
              <div class="flex items-center gap-2">
                <span class="w-3.5 h-3.5 rounded-full border border-white/40" style="background:${skyHexStr}"></span>
                <h3 class="font-extrabold text-white text-base">Stage ${lvl.id}: ${lvl.name}</h3>
              </div>
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
        btn.textContent = selected ? 'Play Selected Stage' : 'Select & Play Stage';
        btn.className = selected
          ? 'w-full py-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-extrabold text-xs transition'
          : 'w-full py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold text-xs transition';

        btn.addEventListener('click', () => {
          state.selectedLevelId = lvl.id;
          saveGameData();
          applyLevelTheme(lvl);
          populateInitialScenery();
          renderMainDashboard();
          startRace();
        });

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
      document.getElementById('result-coins').textContent = `+${state.raceCoins}`;
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
        sub.textContent = `Includes Stage ${level.id} victory coin bonus!`;
        if (level.id < LEVELS.length) {
          btnNext.classList.remove('hidden');
        }
      } else {
        badge.textContent = 'WRECKED OUT';
        badge.className = 'px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-400/30';
        title.textContent = 'Armor Depleted!';
        sub.textContent = 'You kept all coins collected during this run.';
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
      const isRacing = state.mode === 'RACING' && !forceOverlay;
      document.getElementById('overlay-screen').classList.toggle('hidden', isRacing);
      document.getElementById('hud-race-progress-wrap').classList.toggle('hidden', !isRacing);
      document.getElementById('hud-race-progress-wrap').classList.toggle('flex', isRacing);
      document.getElementById('hud-telemetry').classList.toggle('hidden', !isRacing);
      document.getElementById('hud-controls').classList.toggle('hidden', !isRacing);
      document.getElementById('btn-toggle-pause').classList.toggle('hidden', !isRacing);
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
        if (state.mode === 'RACING') state.mode = 'PAUSED';
        renderGarageModal();
        showOverlayPanel('panel-garage');
      });

      document.getElementById('btn-close-garage').addEventListener('click', () => {
        playSound('click');
        state.mode = 'MENU';
        renderMainDashboard();
        showOverlayPanel('panel-main');
      });

      document.getElementById('btn-open-levels').addEventListener('click', () => {
        playSound('click');
        if (state.mode === 'RACING') state.mode = 'PAUSED';
        renderLevelsModal();
        showOverlayPanel('panel-levels');
      });

      document.getElementById('btn-close-levels').addEventListener('click', () => {
        playSound('click');
        state.mode = 'MENU';
        renderMainDashboard();
        showOverlayPanel('panel-main');
      });

      document.getElementById('btn-toggle-pause').addEventListener('click', () => {
        playSound('click');
        togglePauseRace();
      });

      document.getElementById('btn-toggle-sound').addEventListener('click', () => {
        state.soundEnabled = !state.soundEnabled;
        document.getElementById('sound-icon').innerHTML = state.soundEnabled ? '&#128266;' : '&#128263;';
        if (state.soundEnabled) playSound('click');
      });

      document.getElementById('btn-claim-bonus').addEventListener('click', () => {
        state.coins += 100;
        saveGameData();
        playSound('coin');
        showFloatingPopup('+100 BONUS COINS ADDED!', 'text-amber-300');
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
          showFloatingPopup(`Need ${car.cost - state.coins} more coins!`, 'text-rose-400');
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
            state.selectedCarId = state.unlockedCars[0];
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
