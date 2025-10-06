// Verified Agents Database
const agents = [
    {
        name: "Proton Real Estate",
        phone: "2348143960556",
        experience: "5 years experience",
        properties: "50+ properties",
        specialties: ["Self-contain", "1 Bedroom", "Mini-flats", "Shared Apartments"],
        areas: "Iworoko, Osekita, Ado, Ekiti",
        gradient: "card-gradient-1",
        icon: "🏠"
    },
    {
        name: "Transreal Real Estate",
        phone: "2348133979019",
        experience: "4 years experience",
        properties: "40+ properties",
        specialties: ["Self-contain", "1 Bedroom", "Mini-flats", "Shared Apartments"],
        areas: "Ilawe Road, Ikoro",
        gradient: "card-gradient-2",
        icon: "🌟"
    },
    {
        name: "M.Profact Real Estate",
        phone: "2349137649776",
        experience: "6 years experience",
        properties: "60+ properties",
        specialties: ["Self-contain", "1 Bedroom", "Mini-flats", "Shared Apartments"],
        areas: "No 1, Iworoko Shopping Complex",
        gradient: "card-gradient-3",
        icon: "💎"
    },
    {
        name: "Eze Accomodations Agency",
        phone: "2347031306165",
        experience: "3 years experience",
        properties: "35+ properties",
        specialties: ["Self-contain", "1 Bedroom", "Mini-flats", "Shared Apartments"],
        areas: "Iworoko, Ilawe Road",
        gradient: "card-gradient-4",
        icon: "✨"
    },
    {
        name: "Wykay Homes & Properties",
        phone: "2348032730497",
        experience: "7 years experience",
        properties: "70+ properties",
        specialties: ["Self-contain", "1 Bedroom", "Mini-flats", "Shared Apartments"],
        areas: "1, Folade plaza, Iworoko",
        gradient: "card-gradient-5",
        icon: "🔥"
    },
    {
        name: "Honey & Honey Transglobal",
        phone: "2348035282311",
        experience: "4 years experience",
        properties: "45+ properties",
        specialties: ["Self-contain", "1 Bedroom", "Mini-flats", "Shared Apartments"],
        areas: "School gate Area, Iworoko",
        gradient: "card-gradient-6",
        icon: "👑"
    },
    {
        name: "Pampy Real Estate",
        phone: "2348136616789",
        experience: "4 years experience",
        properties: "45+ properties",
        specialties: ["Self-contain", "1 Bedroom", "Mini-flats", "Shared Apartments"],
        areas: "Opp. Folyfem Junction, Iworoko",
        gradient: "card-gradient-1",
        icon: "👑"
    },
    {
        name: "Big Reignx Real Estate",
        phone: "2348166195549",
        experience: "4 years experience",
        properties: "45+ properties",
        specialties: ["Self-contain", "1 Bedroom", "Mini-flats", "Shared Apartments"],
        areas: "Iworoko",
        gradient: "card-gradient-2",
        icon: "👑"
    },
    {
        name: "Topade Real Estate",
        phone: "2348100958455",
        experience: "4 years experience",
        properties: "45+ properties",
        specialties: ["Self-contain", "1 Bedroom", "Mini-flats", "Shared Apartments"],
        areas: "Opp. Afochem Pharmacy, Iworoko",
        gradient: "card-gradient-3",
        icon: "👑"
    },
    {
        name: "Dekunle Homes & Properties",
        phone: "2348147239528",
        experience: "4 years experience",
        properties: "45+ properties",
        specialties: ["Self-contain", "1 Bedroom", "Mini-flats", "Shared Apartments"],
        areas: "Phase 2 Junction, Iworoko",
        gradient: "card-gradient-4",
        icon: "👑"
    },
    {
        name: "Fizzy Real Estate & Properties",
        phone: "2348104846708",
        experience: "4 years experience",
        properties: "45+ properties",
        specialties: ["Self-contain", "1 Bedroom", "Mini-flats", "Shared Apartments"],
        areas: "Road 5 Junction, Iworoko",
        gradient: "card-gradient-5",
        icon: "👑"
    },
    {
        name: "The Voice Real Estate",
        phone: "2349044619606",
        experience: "4 years experience",
        properties: "45+ properties",
        specialties: ["Self-contain", "1 Bedroom", "Mini-flats", "Shared Apartments"],
        areas: "Iworoko",
        gradient: "card-gradient-6",
        icon: "👑"
    },
    {
        name: "A-Day Concept",
        phone: "2348103085276",
        experience: "4 years experience",
        properties: "45+ properties",
        specialties: ["Self-contain", "1 Bedroom", "Mini-flats", "Shared Apartments"],
        areas: "Toad 4 Junction, Are Road, Iworoko",
        gradient: "card-gradient-1",
        icon: "👑"
    },
    {
        name: "Aulogy-Akin Ventures",
        phone: "2348142462106",
        experience: "4 years experience",
        properties: "45+ properties",
        specialties: ["Self-contain", "1 Bedroom", "Mini-flats", "Shared Apartments"],
        areas: "Behind Westwave gas station, Iworoko",
        gradient: "card-gradient-2",
        icon: "👑"
    },
    {
        name: "Glorious Empire Real Estate & Multibiz",
        phone: "2348069438612",
        experience: "4 years experience",
        properties: "45+ properties",
        specialties: ["Self-contain", "1 Bedroom", "Mini-flats", "Shared Apartments"],
        areas: "Opp. St' Micheal Hostel, Phase 2, Iworoko",
        gradient: "card-gradient-3",
        icon: "👑"
    }
];

// Function to get initials from name
function getInitials(name) {
    return name.split(' ')
        .map(word => word[0])

        .join('')
        .toUpperCase();
}

// Function to create agent card HTML with mobile responsiveness
function createAgentCard(agent, index) {
    const specialtiesHTML = agent.specialties
        .map(specialty => `<span class="bg-white bg-opacity-20 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">${specialty}</span>`)
        .join('');
    
    const whatsappLink = `https://wa.me/${agent.phone}?text=Hello%20${encodeURIComponent(agent.name)}%2C%20I%20found%20your%20contact%20on%20Eksu%20Bro%20website.%20I%27m%20looking%20for%20an%20apartment.`;
    
    return `
        <div class="scroll-reveal ${agent.gradient} rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl hover-scale hover-glow transform transition-all duration-300 neon-border" style="transition-delay: ${index * 0.1}s;">
            <div class="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                <div class="w-16 h-16 sm:w-18 md:w-20 sm:h-18 md:h-20 bg-white bg-opacity-20 backdrop-blur-lg rounded-full flex items-center justify-center text-3xl sm:text-4xl border-2 sm:border-4 border-white shadow-lg flex-shrink-0">
                    ${agent.icon}
                </div>
                <div class="min-w-0 flex-1">
                    <h3 class="text-lg sm:text-xl md:text-2xl font-black text-white mb-1 truncate">${agent.name}</h3>
                    <span class="inline-flex items-center space-x-1 bg-green-400 text-green-900 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-bold">
                        <span>✓</span>
                        <span>Verified</span>
                    </span>
                </div>
            </div>
            
            <div class="space-y-2 sm:space-y-3 mb-4 sm:mb-6 text-white">
                <p class="flex items-center space-x-2 text-sm sm:text-base md:text-lg font-semibold">
                    <span class="flex-shrink-0">📅</span>
                    <span class="truncate">${agent.experience}</span>
                </p>
                <p class="flex items-center space-x-2 text-sm sm:text-base md:text-lg font-semibold">
                    <span class="flex-shrink-0">🏘️</span>
                    <span class="truncate">${agent.properties}</span>
                </p>
                <p class="flex items-center space-x-2 text-sm sm:text-base md:text-lg font-semibold">
                    <span class="flex-shrink-0">📍</span>
                    <span class="truncate">${agent.areas}</span>
                </p>
            </div>
            
            <div class="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                ${specialtiesHTML}
            </div>
            
            <a href="${whatsappLink}" target="_blank" class="block w-full bg-green-500 hover:bg-green-400 text-white text-center py-3 sm:py-3.5 md:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base md:text-lg shadow-xl transform hover:scale-105 transition duration-300 shine">
                💬 Chat on WhatsApp
            </a>
        </div>
    `;
}

// Function to load agents
function loadAgents() {
    const agentsGrid = document.getElementById('agentsGrid');
    
    if (agentsGrid) {
        const agentsHTML = agents.map((agent, index) => createAgentCard(agent, index)).join('');
        agentsGrid.innerHTML = agentsHTML;
    }
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll reveal animation
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);
    
    // Observe all scroll-reveal elements
    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });
}

// Add parallax effect to hero section
function setupParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Add active state to navigation based on scroll position
function setupActiveNav() {
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const desktopLinks = document.querySelectorAll('#desktopMenu a');
        const mobileLinks = document.querySelectorAll('#mobileMenu a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        // Update desktop nav
        desktopLinks.forEach(link => {
            link.classList.remove('text-yellow-300');
            link.classList.add('text-white');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('text-yellow-300');
                link.classList.remove('text-white');
            }
        });
        
        // Update mobile nav
        mobileLinks.forEach(link => {
            link.classList.remove('text-yellow-300');
            link.classList.add('text-white');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('text-yellow-300');
                link.classList.remove('text-white');
            }
        });
    });
}

// Add typing effect to hero text (optional enhancement)
function addDynamicEffects() {
    // Add random floating animation delays to particles
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
        particle.style.animationDelay = `${index * 2}s`;
    });
}

// Mobile menu toggle with improved functionality
function setupMobileMenu() {
    const menuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];
    
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle('hidden');
            
            // Animate button
            if (mobileMenu.classList.contains('hidden')) {
                menuButton.textContent = '☰';
                menuButton.style.transform = 'rotate(0deg)';
            } else {
                menuButton.textContent = '✕';
                menuButton.style.transform = 'rotate(90deg)';
            }
        });
        
        // Close menu when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuButton.textContent = '☰';
                menuButton.style.transform = 'rotate(0deg)';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !menuButton.contains(e.target)) {
                mobileMenu.classList.add('hidden');
                menuButton.textContent = '☰';
                menuButton.style.transform = 'rotate(0deg)';
            }
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadAgents();
    setupSmoothScrolling();
    setupActiveNav();
    setupMobileMenu();
    addDynamicEffects();
    
    // Delay scroll animations slightly to ensure elements are rendered
    setTimeout(() => {
        setupScrollAnimations();
    }, 100);
    
    // Setup parallax after a short delay
    setTimeout(() => {
        setupParallax();
    }, 200);
});

// Add a fun cursor trail effect (optional)
document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) { // Only on desktop
        const trail = document.createElement('div');
        trail.className = 'fixed w-2 h-2 rounded-full pointer-events-none z-50';
        trail.style.background = `linear-gradient(135deg, #667eea, #764ba2)`;
        trail.style.left = e.pageX + 'px';
        trail.style.top = e.pageY + 'px';
        trail.style.opacity = '0.5';
        trail.style.animation = 'fadeOut 1s ease forwards';
        
        document.body.appendChild(trail);
        
        setTimeout(() => {
            trail.remove();
        }, 1000);
    }
});

// Add fadeOut animation for cursor trail
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: scale(0);
        }
    }
`;
document.head.appendChild(style);