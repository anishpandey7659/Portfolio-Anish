import Lenis from 'lenis';

// ==========================================================================
// 1. DOM Elements
// ==========================================================================
const heroSection = document.getElementById('hero');
const heroBgVideo = document.getElementById('hero-bg-video');
const siteHeader = document.querySelector('.site-header');
const loader = document.getElementById('loader');
const loaderProgress = document.getElementById('loader-progress');
const loaderBar = document.getElementById('loader-bar');

// Nav links & Action buttons
const navLinks = document.querySelectorAll('.nav-link');
const btnHeroProjects = document.getElementById('btn-hero-projects');
const heroScrollBtn = document.getElementById('hero-scroll-btn');
const mobileToggle = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');

const sectionIds = ['hero', 'about', 'projects', 'skills', 'contact'];
const sectionElements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

// ==========================================================================
// 2. Lenis Smooth Natural Scrolling
// ==========================================================================
const lenis = new Lenis({
  duration: 1.15,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  touchMultiplier: 2.0,
});

function rafLoop(time) {
  lenis.raf(time);
  requestAnimationFrame(rafLoop);
}
requestAnimationFrame(rafLoop);

// ==========================================================================
// 3. Hero Video Cinematic Playback & Viewport Observer
// ==========================================================================
let isHeroVisible = true;

function initHeroVideo() {
  if (!heroBgVideo) return;

  heroBgVideo.muted = true;
  heroBgVideo.defaultMuted = true;
  heroBgVideo.playsInline = true;

  // Calmer, slower cinematic playback pace
  heroBgVideo.playbackRate = 0.87;

  const playPromise = heroBgVideo.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // Fallback: trigger playback on first user touch/click if browser blocks autoplay
      const startPlayback = () => {
        heroBgVideo.play().catch(() => {});
        window.removeEventListener('click', startPlayback);
        window.removeEventListener('touchstart', startPlayback);
      };
      window.addEventListener('click', startPlayback, { once: true, passive: true });
      window.addEventListener('touchstart', startPlayback, { once: true, passive: true });
    });
  }
}

// Pause video when Hero scrolls out of the viewport, resume smoothly when returning
if (heroSection) {
  const heroObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        isHeroVisible = entry.isIntersecting;
        if (entry.isIntersecting) {
          if (heroBgVideo && heroBgVideo.paused) {
            heroBgVideo.play().catch(() => {});
          }
        } else {
          if (heroBgVideo && !heroBgVideo.paused) {
            heroBgVideo.pause();
          }
        }
      });
    },
    { threshold: 0.05 }
  );

  heroObserver.observe(heroSection);
}

// Pause video when browser tab is inactive to preserve battery and CPU
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    if (heroBgVideo && !heroBgVideo.paused) {
      heroBgVideo.pause();
    }
  } else if (isHeroVisible) {
    heroBgVideo?.play().catch(() => {});
  }
});

// ==========================================================================
// 4. Scroll-Spy (Header Blur & Active Nav Link Highlight)
// ==========================================================================
function updateActiveNavLink(activeId) {
  navLinks.forEach((link) => {
    if (link.dataset.target === activeId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

window.addEventListener(
  'scroll',
  () => {
    const scrollY = window.scrollY;

    // Header blur state
    if (scrollY > 50) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }

    // Determine current section in viewport
    const viewportMiddle = scrollY + window.innerHeight * 0.4;
    for (let i = sectionElements.length - 1; i >= 0; i--) {
      const el = sectionElements[i];
      if (el && el.offsetTop <= viewportMiddle) {
        updateActiveNavLink(el.id);
        break;
      }
    }
  },
  { passive: true }
);


// ==========================================================================
// Blurred background (fades in once the hero is mostly scrolled past)
// ==========================================================================
const blurBg = document.getElementById('blur-bg');

if (heroSection && blurBg) {
  const blurObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        blurBg.classList.toggle('visible', entry.intersectionRatio < 0.6);
      });
    },
    { threshold: [0, 0.6, 1] }
  );
  blurObserver.observe(heroSection);
}



// ==========================================================================
// 5. Navigation & Button Interactions
// ==========================================================================
function scrollToSection(targetId) {
  const targetEl = document.getElementById(targetId);
  if (targetEl) {
    lenis.scrollTo(targetEl, { offset: 0, duration: 1.2 });
  }
}

document.querySelectorAll('[data-scroll]').forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToSection(el.dataset.scroll);
  });
});


// Nav link clicks
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    navMenu?.classList.remove('open');
    const targetId = link.dataset.target;
    if (targetId) {
      scrollToSection(targetId);
    }
  });
});

// Logo click -> top of hero
document.querySelector('.nav-logo')?.addEventListener('click', (e) => {
  e.preventDefault();
  scrollToSection('hero');
});

// Hero action buttons
btnHeroProjects?.addEventListener('click', () => {
  scrollToSection('projects');
});

heroScrollBtn?.addEventListener('click', () => {
  scrollToSection('about');
});

// Mobile toggle
mobileToggle?.addEventListener('click', () => {
  navMenu?.classList.toggle('open');
});

// ==========================================================================
// 7. Fast Asset Preloader
// ==========================================================================
function initPreloader() {
  let progress = 0;
  const target = 100;

  const update = () => {
    if (loaderProgress) loaderProgress.textContent = `${Math.round(progress)}%`;
    if (loaderBar) loaderBar.style.width = `${progress}%`;
  };

  const timer = setInterval(() => {
    progress += (target - progress) * 0.3 + 3;
    if (progress >= 100) {
      progress = 100;
      update();
      clearInterval(timer);
      setTimeout(() => {
        loader?.classList.add('loaded');
      }, 180);
    } else {
      update();
    }
  }, 20);
}



// ==========================================================================
// Contact form (opens the visitor's email app with the message filled in)
// ==========================================================================
const contactForm = document.getElementById('contact-form');
const contactStatus = document.getElementById('contact-status');

contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = new FormData(contactForm);
  const name = data.get('name').trim();
  const email = data.get('email').trim();
  const subject = data.get('subject').trim() || `Message from ${name}`;
  const message = data.get('message').trim();

  // Basic validation
  let valid = true;
  contactForm.querySelectorAll('[required]').forEach((input) => {
    const ok = input.value.trim() && (input.type !== 'email' || /^\S+@\S+\.\S+$/.test(input.value));
    input.closest('.ct-field').classList.toggle('invalid', !ok);
    if (!ok) valid = false;
  });

  if (!valid) {
    contactStatus.textContent = 'Please fill in the required fields correctly.';
    return;
  }

  const body = `${message}\n\n— ${name} (${email})`;
  window.location.href =
    `mailto:anishpandey1232@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  contactStatus.textContent = 'Opening your email app…';
  contactForm.reset();
});





// ==========================================================================
// 8. Startup
// ==========================================================================
initHeroVideo();
initPreloader();
