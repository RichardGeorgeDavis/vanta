const heroConfigs = {
  HALO: {
    title: "Halo",
    note: "Diffused color rings for bold launches, AI products, and product storytelling.",
    options: {
      backgroundColor: 0x08111d,
      baseColor: 0x10203e,
      color2: 0xf5c25d,
      amplitudeFactor: 1.1,
      size: 1.05,
      speed: 0.9,
      mouseControls: true,
      touchControls: true,
      gyroControls: false
    }
  },
  TRUNK: {
    title: "Trunks",
    note: "Animated contour rings for landing pages that need an organic, generative center of gravity.",
    options: {
      color: 0xc86b8b,
      backgroundColor: 0x202326,
      spacing: 0,
      chaos: 1.05,
      mouseControls: true,
      touchControls: true,
      gyroControls: false
    }
  },
  GLOBE: {
    title: "Globe",
    note: "Reads well for infrastructure, network, AI, security, and worldwide platform messaging.",
    options: {
      backgroundColor: 0x0b1424,
      color: 0x79a8ff,
      color2: 0xffffff,
      size: 0.95,
      points: 10,
      maxDistance: 21,
      spacing: 15,
      showDots: true,
      mouseControls: true,
      touchControls: true,
      gyroControls: false
    }
  },
  NET: {
    title: "Net",
    note: "Dense linework for dashboards, devtools, and pages that need a more technical rhythm.",
    options: {
      backgroundColor: 0x07111d,
      color: 0x7ce2d8,
      points: 11,
      maxDistance: 21,
      spacing: 16,
      showDots: true,
      mouseControls: true,
      touchControls: true,
      gyroControls: false
    }
  }
}

function createNoiseTextureDataUri() {
  const size = 24
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">`

  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const seed = Math.sin(x * 127.1 + y * 311.7) * 43758.5453
      const shade = Math.floor((seed - Math.floor(seed)) * 255)
      svg += `<rect x="${x}" y="${y}" width="1" height="1" fill="rgb(${shade},${shade},${shade})"/>`
    }
  }

  svg += "</svg>"
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

const clouds2TexturePath = createNoiseTextureDataUri()

const previewConfigs = {
  waves: {
    effect: "WAVES",
    options: {
      color: 0x0f766e,
      shininess: 36,
      waveHeight: 16,
      waveSpeed: 0.75,
      zoom: 0.92,
      mouseControls: false,
      touchControls: false
    }
  },
  halo: {
    effect: "HALO",
    options: {
      backgroundColor: 0x08111d,
      baseColor: 0x10203e,
      color2: 0xf58cca,
      amplitudeFactor: 1.0,
      ringFactor: 1.1,
      size: 0.95,
      speed: 0.85,
      mouseControls: false,
      touchControls: false
    }
  },
  globe: {
    effect: "GLOBE",
    options: {
      backgroundColor: 0x111b2d,
      color: 0x79a8ff,
      color2: 0xffffff,
      size: 0.85,
      points: 9,
      maxDistance: 18,
      spacing: 15,
      showDots: true,
      mouseControls: false,
      touchControls: false
    }
  },
  net: {
    effect: "NET",
    options: {
      backgroundColor: 0x07111d,
      color: 0x7ce2d8,
      points: 10,
      maxDistance: 20,
      spacing: 16,
      showDots: true,
      mouseControls: false,
      touchControls: false
    }
  },
  fog: {
    effect: "FOG",
    options: {
      highlightColor: 0xffc300,
      midtoneColor: 0xff6a00,
      lowlightColor: 0x5038ff,
      baseColor: 0x160e2a,
      blurFactor: 0.5,
      speed: 1.4,
      zoom: 0.7,
      mouseControls: false,
      touchControls: false
    }
  },
  cells: {
    effect: "CELLS",
    options: {
      color1: 0x0c5a5a,
      color2: 0xf2e735,
      backgroundColor: 0xd7ff8f,
      amplitudeFactor: 1.0,
      ringFactor: 1.0,
      rotationFactor: 1.0,
      size: 1.4,
      speed: 1.0,
      mouseControls: false,
      touchControls: false
    }
  },
  dots: {
    effect: "DOTS",
    options: {
      color: 0xf5c25d,
      color2: 0xf5c25d,
      backgroundColor: 0x111319,
      size: 2.8,
      spacing: 34,
      showLines: true,
      mouseControls: false,
      touchControls: false
    }
  },
  clouds2: {
    effect: "CLOUDS2",
    options: {
      backgroundColor: 0x05070b,
      skyColor: 0x5ca6ca,
      cloudColor: 0x334d80,
      lightColor: 0xffffff,
      speed: 0.9,
      texturePath: clouds2TexturePath,
      mouseControls: false,
      touchControls: false
    }
  },
  ripple: {
    effect: "RIPPLE",
    options: {
      color1: 0x1f75ff,
      color2: 0xffffff,
      backgroundColor: 0xf2f5f9,
      amplitudeFactor: 0.9,
      ringFactor: 3.2,
      rotationFactor: 0.15,
      speed: 1.0,
      mouseControls: false,
      touchControls: false
    }
  },
  birds: {
    effect: "BIRDS",
    options: {
      backgroundColor: 0x07192f,
      color1: 0xff667d,
      color2: 0x00d1ff,
      colorMode: "varianceGradient",
      birdSize: 1,
      wingSpan: 18,
      speedLimit: 4,
      separation: 22,
      alignment: 18,
      cohesion: 20,
      quantity: 3,
      mouseControls: false,
      touchControls: false
    }
  },
  topology: {
    effect: "TOPOLOGY",
    options: {
      color: 0x90a965,
      backgroundColor: 0x04161e,
      mouseControls: false,
      touchControls: false
    }
  },
  trunk: {
    effect: "TRUNK",
    options: {
      color: 0xc86b8b,
      backgroundColor: 0x202326,
      spacing: 0,
      chaos: 1.1,
      mouseControls: false,
      touchControls: false
    }
  },
  rings: {
    effect: "RINGS",
    options: {
      backgroundColor: 0x101417,
      color: 0x88ff00,
      mouseControls: false,
      touchControls: false
    }
  },
  clouds: {
    effect: "CLOUDS",
    options: {
      backgroundColor: 0xcfddea,
      skyColor: 0x78b4df,
      cloudColor: 0xffffff,
      cloudShadowColor: 0x4d7f9a,
      sunColor: 0xffc86b,
      sunGlareColor: 0xff7f45,
      sunlightColor: 0xffa447,
      speed: 0.65,
      scale: 3,
      mouseControls: false,
      touchControls: false
    }
  }
}

const previewInstances = new Map()
let heroInstance = null
let previewObserver = null
let previewModeEnabled = false

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

function canRunEffects() {
  return Boolean(window.VANTA && window.THREE) && !prefersReducedMotion()
}

function previewEffectsEnabled() {
  return window.innerWidth > 960 && canRunEffects()
}

function buildEffect(effectName, element, options) {
  const factory = window.VANTA && window.VANTA[effectName]
  if (!factory || !element) return null
  if ((effectName === "TOPOLOGY" || effectName === "TRUNK") && typeof window.p5 === "undefined") return null

  try {
    return factory({
      el: element,
      THREE: window.THREE,
      p5: window.p5,
      minHeight: 200,
      minWidth: 200,
      scale: 1,
      scaleMobile: 1,
      ...options
    })
  } catch (error) {
    console.error(`[homepage] Failed to start ${effectName}`, error)
    return null
  }
}

function updateHeroCopy(name) {
  const config = heroConfigs[name]
  const title = document.getElementById("hero-effect-name")
  const note = document.getElementById("hero-effect-note")
  if (!config || !title || !note) return

  title.textContent = config.title
  note.textContent = config.note
}

function setHeroEffect(name) {
  const stage = document.getElementById("hero-stage")
  const config = heroConfigs[name]
  if (!stage || !config) return

  if (heroInstance) {
    heroInstance.destroy()
    heroInstance = null
  }

  stage.dataset.heroEffect = name
  updateHeroCopy(name)
  heroInstance = buildEffect(name, stage, config.options)

  document.querySelectorAll("[data-hero-effect]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.heroEffect === name)
  })
}

function destroyPreview(effectId) {
  const instance = previewInstances.get(effectId)
  if (!instance) return
  instance.destroy()
  previewInstances.delete(effectId)
}

function destroyAllPreviews() {
  Array.from(previewInstances.keys()).forEach(destroyPreview)
}

function ensurePreview(stage) {
  const previewKey = stage.dataset.previewEffect
  const config = previewConfigs[previewKey]
  if (!config || previewInstances.has(previewKey)) return

  const instance = buildEffect(config.effect, stage, config.options)
  if (instance) {
    previewInstances.set(previewKey, instance)
  }
}

function startPreviewObserver() {
  if (previewObserver || !previewModeEnabled) return

  previewObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const stage = entry.target
        const previewKey = stage.dataset.previewEffect
        if (!previewKey) return

        if (entry.isIntersecting) {
          ensurePreview(stage)
        } else {
          destroyPreview(previewKey)
        }
      })
    },
    {
      rootMargin: "220px 0px",
      threshold: 0.02
    }
  )

  document.querySelectorAll("[data-preview-effect]").forEach((stage) => {
    previewObserver.observe(stage)
  })
}

function stopPreviewObserver() {
  if (previewObserver) {
    previewObserver.disconnect()
    previewObserver = null
  }
  destroyAllPreviews()
}

function syncPreviewMode() {
  previewModeEnabled = previewEffectsEnabled()

  if (previewModeEnabled) {
    startPreviewObserver()
  } else {
    stopPreviewObserver()
  }
}

function setupRevealObserver() {
  if (prefersReducedMotion()) {
    document.querySelectorAll(".reveal").forEach((node) => node.classList.add("is-visible"))
    return
  }

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add("is-visible")
        observer.unobserve(entry.target)
      })
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -10% 0px"
    }
  )

  document.querySelectorAll(".reveal").forEach((node) => {
    revealObserver.observe(node)
  })
}

function setupHeroButtons() {
  document.querySelectorAll("[data-hero-effect]").forEach((button) => {
    button.addEventListener("click", () => {
      setHeroEffect(button.dataset.heroEffect)
    })
  })
}

function debounce(callback, delay) {
  let timeoutId = null
  return () => {
    window.clearTimeout(timeoutId)
    timeoutId = window.setTimeout(callback, delay)
  }
}

function initHomepage() {
  setupRevealObserver()
  setupHeroButtons()

  if (canRunEffects()) {
    setHeroEffect("HALO")
    document.documentElement.classList.remove("effects-disabled")
  } else {
    document.documentElement.classList.add("effects-disabled")
    updateHeroCopy("HALO")
  }

  syncPreviewMode()

  window.addEventListener(
    "resize",
    debounce(() => {
      syncPreviewMode()
    }, 180)
  )

  window.addEventListener("pagehide", () => {
    if (heroInstance) {
      heroInstance.destroy()
      heroInstance = null
    }
    stopPreviewObserver()
  })
}

window.addEventListener("DOMContentLoaded", initHomepage)
