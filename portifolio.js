        // Load profile image
        async function loadProfileImage() {
            try {
                const response = await fetch('https://brenocartaxo.github.io/CVWebsite/assets/1649778596124.jpg');
                const blob = await response.blob();
                const reader = new FileReader();
                reader.onloadend = function() {
                    document.getElementById('profileImage').src = reader.result;
                };
                reader.readAsDataURL(blob);
            } catch (error) {
                console.error('Failed to load image:', error);
                // Fallback: try direct URL
                document.getElementById('profileImage').src = 'https://brenocartaxo.github.io/CVWebsite/assets/1649778596124.jpg';
            }
        }
        loadProfileImage();

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });

        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Section fade-in on scroll
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => {
            observer.observe(section);
        });

        // Animate progress bars
        const progressBars = document.querySelectorAll('.progress-fill');
        const progressObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progress = entry.target.getAttribute('data-progress');
                    entry.target.style.width = progress + '%';
                }
            });
        }, { threshold: 0.5 });

        progressBars.forEach(bar => {
            progressObserver.observe(bar);
        });