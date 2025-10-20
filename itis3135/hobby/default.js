document.addEventListener('DOMContentLoaded', () => {
    const navItems = Array.from(document.querySelectorAll('header nav .nav-button'));
    const sections = Array.from(document.querySelectorAll('main section'));

    const normalize = (txt) =>
        txt.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

    // map cases where nav text doesn't exactly match section id
    const specialMap = { 'ai-disclaimer': 'ai' };

    // prepare sections for transitions
    sections.forEach((sec) => {
        sec.style.transition = 'opacity 300ms ease, transform 300ms ease';
        sec.style.transformOrigin = 'top center';
        if (sec.id === 'home') {
            sec.style.display = 'block';
            sec.style.opacity = '1';
            sec.style.transform = 'translateY(0)';
        } else {
            sec.style.display = 'none';
            sec.style.opacity = '0';
            sec.style.transform = 'translateY(10px)';
        }
    });

    function showSection(target) {
        sections.forEach((sec) => {
            if (sec === target) {
                if (sec.style.display === 'none') sec.style.display = 'block';
                // animate in on next frame
                requestAnimationFrame(() => {
                    sec.style.opacity = '1';
                    sec.style.transform = 'translateY(0)';
                });
            } else {
                if (sec.style.display !== 'none') {
                    // hide with animation, then set display:none after opacity transition
                    const onEnd = (e) => {
                        if (e.propertyName === 'opacity') {
                            sec.style.display = 'none';
                            sec.removeEventListener('transitionend', onEnd);
                        }
                    };
                    sec.addEventListener('transitionend', onEnd);
                    sec.style.opacity = '0';
                    sec.style.transform = 'translateY(10px)';
                }
            }
        });
    }

    navItems.forEach((item) => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', () => {
            const key = normalize(item.textContent || item.innerText);
            const id = specialMap[key] || key;
            const target = document.getElementById(id);
            if (target) showSection(target);
        });

        // allow keyboard activation
        item.setAttribute('tabindex', '0');
        item.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') item.click();
        });
    });
});