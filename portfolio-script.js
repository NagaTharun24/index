// ===== SMOOTH SCROLLING FOR NAV LINKS ===== 
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

// ===== MOBILE MENU TOGGLE ===== 
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

// ===== PROFILE IMAGE MODAL ===== 
const profileImage = document.getElementById('profileImage');
const modal = document.getElementById('profileModal');
const closeBtn = document.querySelector('.close');

profileImage.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// ===== CONTACT FORM SUBMISSION ===== 
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        if (name && email && message) {
            alert(`Thank you for your message, ${name}! I will get back to you soon at ${email}`);
            contactForm.reset();
        } else {
            alert('Please fill in all fields');
        }
    });
}

// ===== INTERSECTION OBSERVER FOR ANIMATIONS ===== 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = entry.target.dataset.animation || 'slideInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.timeline-content, .project-card, .cert-card, .achievement-card, .skill-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ===== NAVBAR SCROLL EFFECT ===== 
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(30, 58, 95, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(30, 58, 95, 0.1)';
    }
});

// ===== SKILL PROGRESS BARS ANIMATION ===== 
const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                    observer.unobserve(bar);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(bar);
    });
};

setTimeout(animateSkillBars, 500);

// ===== ACTIVE NAV LINK ON SCROLL ===== 
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

const activateLink = () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = 'var(--text-dark)';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--accent-color)';
            link.style.fontWeight = '700';
        }
    });
};

window.addEventListener('scroll', activateLink);

// ===== RIPPLE EFFECT ON BUTTONS ===== 
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.className = 'ripple';
        ripple.style.cssText += `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            transform: scale(0);
            pointer-events: none;
            animation: rippleAnimation 0.6s ease-out;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// ===== ADD RIPPLE ANIMATION TO STYLESHEET ===== 
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleAnimation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @media (max-width: 768px) {
        .nav-menu {
            position: absolute;
            top: 60px;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 1rem;
            gap: 0;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
    }
`;
document.head.appendChild(style);

// ===== CONSOLE MESSAGE ===== 
console.log('%c🚀 Welcome to Tharun Bandi\'s Portfolio!', 'color: #00A8E8; font-size: 20px; font-weight: bold;');
console.log('%cServiceNow Developer | Associate Technical Consultant', 'color: #1E3A5F; font-size: 14px;');
console.log('%c📧 Email: tharun252525@gmail.com | 📱 Mobile: 8367774006', 'color: #666; font-size: 12px;');