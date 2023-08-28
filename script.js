// JavaScript para controlar o carrossel
        let currentSlide = 0;

        function showSlide(index) {
            const slides = document.querySelectorAll('.carousel-slide');
            const images = document.querySelectorAll('.carousel-img');

            slides[currentSlide].classList.remove('active');
            images[currentSlide].classList.remove('active');

            currentSlide = index;

            slides[currentSlide].classList.add('active');
            images[currentSlide].classList.add('active');
        }

        function moveCarousel(direction) {
            const wrapper = document.querySelector('.carousel-wrapper');
            const slideWidth = document.querySelector('.carousel-slide').clientWidth;
            const numSlides = document.querySelectorAll('.carousel-slide').length;
            
            if (direction === 'prev' && currentSlide > 0) {
                currentSlide--;
            } else if (direction === 'next' && currentSlide < numSlides - 1) {
                currentSlide++;
            }

            wrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
        }

        function openLightbox(index) {
            const lightbox = document.querySelector('.lightbox');
            const selectedImage = document.querySelectorAll('.carousel-img')[index];
            const lightboxImage = document.querySelector('.lightbox img');

            lightboxImage.src = selectedImage.src;
            lightbox.style.display = 'flex';
        }

        function closeLightbox() {
            const lightbox = document.querySelector('.lightbox');
            lightbox.style.display = 'none';
        }
