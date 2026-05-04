 // Scroll progress bar
  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('scrollProgress').style.width = scrolled + '%';
  });

  // Particle system
  const particlesContainer = document.getElementById('particlesContainer');
  for (let i = 0; i < 75; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    const size = Math.random() * 4 + 1;
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = 12 + Math.random() * 20 + 's';
    p.style.animationDelay = Math.random() * 15 + 's';
    p.style.opacity = Math.random() * 0.5;
    particlesContainer.appendChild(p);
  }

  // ========== PROJECTS DATA ==========
const projectsData = [
  {
    icon: "./Logo.png",
    title: "Modern Portfolio",
    description: "A stunning animated portfolio website.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    link: "https://ajay-11012.github.io/Portfolio1/",
    feature: "Live Demo",
    category: "web"   // ✅ ADD THIS
  },
  {
    icon: "https://play-lh.googleusercontent.com/Riua22wVNUES6uFtQLygubL2fXJbcJj74gqJp-uN-G-_h1o9HRdduNrUtTij2iPuKSI",
    title: "Smart Calculator",
    description: "Feature-rich calculator.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    link: "https://simple-calculataor.netlify.app/",
    feature: "Live Demo",
    category: "tool"   // ✅ ADD THIS
  },
  {
    icon: "https://img.freepik.com/free-vector/overlapping-outline-hearts_78370-2913.jpg",
    title: "Flames Game",
    description: "Interactive game.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    link: "https://play-flames-game.netlify.app/",
    feature: "Fun Project",
    category: "fun"   // ✅ ADD THIS
  }
];

const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {

    document.querySelector('.filter-btn.active').classList.remove('active');
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');
    const cards = document.querySelectorAll('.project-card');

    cards.forEach((card, index) => {
      const project = projectsData[index];

      if (filter === 'all' || project.category === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });

  });
});


  const projectsGrid = document.getElementById('projectsGrid');
  projectsData.forEach((project, idx) => {
    const card = document.createElement('div');
    card.className = 'project-card reveal';
    card.style.transitionDelay = `${idx * 0.1}s`;
    card.innerHTML = `
      <div class="feature-badge">${project.feature}</div>
      <div class="project-icon">
        ${project.icon.startsWith('http') || project.icon.startsWith('./') || project.icon.startsWith('/') ? 
          `<img src="${project.icon}" alt="${project.title} icon" class="project-icon-img">` : 
          project.icon}
      </div>
      <div class="project-title">${project.title}</div>
      <div class="project-description">${project.description}</div>
      <div class="project-tech">
        ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
      <div class="project-links">
        <a href="${project.link}" target="_blank" class="project-link">🔗 Live Project →</a>
      </div>
    `;
    projectsGrid.appendChild(card);
  });

  // SKILLS DATA
  const skillsData = {
    "Frontend Alchemy": [
      { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26", sub: "Semantic web" },
      { name: "CSS3", icon: "https://cdn-icons-png.flaticon.com/512/16183/16183567.png", sub: "Flex/Grid/Animations" },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E", sub: "Modern JS" }
    ],
    "Backend & Databases": [
      { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB", sub: "Flask, scripting" },
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1", sub: "Relational DB" },
      // { name: "Flask", icon: "https://cdn.simpleicons.org/flask/ffffff", sub: "REST APIs" }
    ],
    "Dev Tools & Cloud": [
      { name: "Git & GitHub", icon: "https://cdn.simpleicons.org/git/F05032", sub: "Version Control" },
      { name: "VS Code", icon: "https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxj7kCzMIlSC20SNjaJf9GmESvWFqgy6FNrwzWSIu2lzePyWSz8zg09RAX43OFexidzEE3_7l3auaKk4w9ktJdqg-&format=source", sub: "Primary IDE" }
    ],
    "Soft Skills & Mindset": [
      { name: "Problem Solving", icon: "🧠", sub: "Creative & Analytical" },
      { name: "Team Collaboration", icon: "🤝", sub: "Agile Mindset" },
      { name: "Critical Thinking", icon: "🎯", sub: "Strategic Planning" },
      { name: "Time Management", icon: "⏳", sub: "Efficient Delivery" },
      { name: "Adaptability", icon: "🌀", sub: "Fast Learner" }
    ]
  };

  const container = document.getElementById('skillCategories');
  for (const [category, skills] of Object.entries(skillsData)) {
    const catDiv = document.createElement('div');
    catDiv.className = 'skill-category reveal';
    catDiv.innerHTML = `<div class="category-title">✦ ${category}</div><div class="skill-grid" id="grid-${category.replace(/\s/g,'')}"></div>`;
    container.appendChild(catDiv);
    const gridDiv = catDiv.querySelector('.skill-grid');
    skills.forEach(skill => {
      const card = document.createElement('div');
      card.className = 'skill-card';
      if (skill.icon && (skill.icon.startsWith('http') || skill.icon.includes('simpleicons'))) {
        card.innerHTML = `<img class="skill-icon" src="${skill.icon}" alt="${skill.name}z" loading="lazy" onerror="this.src='https://cdn.simpleicons.org/code/white'"><div><div class="skill-name">${skill.name}</div><div class="skill-sub">${skill.sub}</div></div>`;
      } else {
        card.innerHTML = `<div style="font-size: 28px;">${skill.icon}</div><div><div class="skill-name">${skill.name}</div><div class="skill-sub">${skill.sub}</div></div>`;
      }
      gridDiv.appendChild(card);
    });
  }

  // Interest cards
  const interestsList = [
    { icon: "🌐", title: "I like to create webpages", desc: "Designing responsive interfaces, polished layouts, and interactive web experiences that feel seamless on every device." },
    { icon: "💻", title: "Doing programming & solving problems", desc: "Building logical solutions, debugging issues, and refining code until it works beautifully." },
    { icon: "♟️", title: "Playing chess to improve thinking", desc: "Using chess to sharpen critical thinking, strategy, and logic — skills I apply to every coding challenge." },
    { icon: "�", title: "Tech Research", desc: "Exploring emerging stacks, reading engineering blogs, and staying ahead of the curve." },
  ];
  const interestsGrid = document.getElementById('interestsGrid');
  interestsList.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'interest-card reveal';
    card.style.transitionDelay = `${idx * 0.05}s`;
    card.innerHTML = `<div class="interest-icon">${item.icon}</div><div style="font-weight: 700; font-size:1.3rem; margin-bottom: 0.7rem;">${item.title}</div><p style="color: var(--text-muted); line-height: 1.6;">${item.desc}</p>`;
    interestsGrid.appendChild(card);
  });

  // Tech Marquee
  const techItems = [
    "HTML5", "CSS3", "JavaScript", "Python", "MySQL",
    "Git", "VS Code", "Flask",  "Responsive Design", "Problem Solving", "Team Collaboration", "Critical Thinking", "Time Management", "Adaptability"
  ];
  const marqueeDiv = document.getElementById('techMarquee');
  const marqueeDiv2 = document.getElementById('techMarquee2');
  let marqueeHTML = '';
  techItems.forEach(t => {
    marqueeHTML += `<span style="margin:0 1.5rem; display:inline-flex; align-items:center; gap:6px;"><span style="font-size: 1.1rem;">✦</span> ${t} <span style="color:var(--primary);">⚡</span></span>`;
  });
  marqueeDiv.innerHTML = marqueeHTML + marqueeHTML;
  marqueeDiv2.innerHTML = marqueeHTML + marqueeHTML;
  
  // Scroll reveal observer
  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -50px 0px" });
  revealElements.forEach(el => observer.observe(el));

  // Nav highlight
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 200;
      if (pageYOffset >= sectionTop) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
    });
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) nav.style.background = 'rgba(5,5,20,0.9)';
    else nav.style.background = 'rgba(10,10,26,0.75)';
  });

  // Parallax background
  document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX / window.innerWidth) * 10;
    const moveY = (e.clientY / window.innerHeight) * 10;
    const aurora = document.querySelector('.bg-aurora');
    if (aurora) {
      aurora.style.transform = `translate(${moveX * 0.05}px, ${moveY * 0.05}px)`;
    }
  });
  
  // Fix missing images
  document.querySelectorAll('.skill-icon').forEach(img => {
    img.onerror = () => { img.src = 'https://cdn.simpleicons.org/code/white'; };
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

function applyTilt() {

  // 🔥 NORMAL CARDS
  VanillaTilt.init(document.querySelectorAll(
    ".project-card, .skill-card, .interest-card, .education-item, .contact-email"
  ), {
    max: 8,
    speed: 400,
    scale: 1.02,
    glare: false
  });

  // 🐾 PAWS CARD (LOW TILT)
  VanillaTilt.init(document.querySelectorAll(".paws-card"), {
    max: 3,        // 🔥 reduced tilt
    speed: 300,
    scale: 1.01,
    glare: false
  });

}

window.addEventListener("load", () => {
  applyTilt();
});


// Track mouse position
const glow = document.querySelector(".global-cursor-glow");

// Direct attach (NO DELAY)
document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

// Hide when mouse leaves
document.addEventListener("mouseleave", () => {
  glow.style.opacity = "0";
});

document.addEventListener("mouseenter", () => {
  glow.style.opacity = "1";
});

glow.style.transition = "transform 0.03s linear";
//   const logoImage = document.getElementById('logoImage');
//   const logoOverlay = document.getElementById('logoOverlay');

//   const hideLogoOverlay = () => {
//     logoOverlay.classList.remove('show');
//   };

//   logoImage.addEventListener('click', (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     logoOverlay.classList.add('show');
//   });

//   document.addEventListener('click', (e) => {
//     if (logoOverlay.classList.contains('show') && !e.target.closest('.logo-overlay-card') && !e.target.closest('#logoImage')) {
//       hideLogoOverlay();
//     }
//   });

//   document.addEventListener('keydown', (e) => {
//     if (e.key === 'Escape') hideLogoOverlay();
//   });