
"use strict";


document.addEventListener('DOMContentLoaded', () => {


    // Slider

    function sliderSwiper() {
        const sliderSrvicesIndex = document.querySelector('.services-index__slider');
        const sliderClientIndex = document.querySelector('.client-index__slider');
        const portfolioSingle = document.querySelector('.portfolio-single-slider__slider');

        if (sliderSrvicesIndex) {
            const swiper = new Swiper(sliderSrvicesIndex, {
                slidesPerView: 3,
                spaceBetween: 10,
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    1014: {
                        slidesPerView: 3,
                        spaceBetween: 43
                    }
                }
            });
        }
        if (sliderClientIndex) {
            const swiper = new Swiper(sliderClientIndex, {
                slidesPerView: 5,
                spaceBetween: 20,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                },
                breakpoints: {
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    580: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    788: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    },
                    1014: {
                        slidesPerView: 5,
                        spaceBetween: 40
                    }
                }
            });
        }
        if (portfolioSingle) {
            const swiper = new Swiper(portfolioSingle, {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                },
            });
        }
    }
    sliderSwiper();
    //=====================================================================

    // Language

    function languageClick() {
        const language = document.querySelector('.language-header');
        const languageHead = document.querySelector('.language-header__header');
        const languageHeadText = document.querySelector('.language-header__text');
        const languageBody = document.querySelector('.language-header__body');
        const languageItems = document.querySelectorAll('.language-header__body a');
        const body = document.body;

        const div = document.createElement('div');
        div.classList.add('div-click');

        if (languageHead) {
            languageHead.addEventListener('click', () => {
                languageBody.classList.toggle('_active');
                language.classList.toggle('_active');

                if (languageBody.classList.contains('_active')) {
                    body.appendChild(div);
                } else {
                    div.remove();
                }
            });

            div.addEventListener('click', () => {
                languageBody.classList.remove('_active');
                language.classList.remove('_active');

                div.remove();
            });

            for (let index = 0; index < languageItems.length; index++) {
                const element = languageItems[index];
                if (element.closest('.current-lang')) {
                    languageHeadText.textContent = element.textContent;
                }
                // element.addEventListener('click', () => {
                //     languageBody.classList.remove('_active');
                //     languageHeadText.textContent = element.textContent;
                //     div.remove();
                // });
            }
        }
    }

    languageClick();

    //=========================================================================

    //Burger

    function burgerClick() {
        const burger = document.querySelector('.burger-header');
        const poppup = document.querySelector('.poppup-header');
        const btnClose = document.querySelector('.poppup-header__close');
        const menuItem = document.querySelectorAll('.poppup-header__nav a');
        const body = document.body;
        let number = 0.2;

        if (burger) {
            burger.addEventListener('click', () => {
                poppup.classList.add('_active');
                body.classList.add('_active');
                if (poppup.classList.contains('_active')) {
                    for (let index = 0; index < menuItem.length; index++) {
                        const element = menuItem[index];
                        number = number + 0.1;
                        menuItem[index].style = `
                            transition: all 0.3s ease ${number}s;
                        `;
                    }
                }
            });

            btnClose.addEventListener('click', () => {
                poppup.classList.remove('_active');
                body.classList.remove('_active');

                if (!poppup.classList.contains('_active')) {
                    for (let index = 0; index < menuItem.length; index++) {
                        const element = menuItem[index];
                        number = 0;
                        menuItem[index].style = ``;
                    }
                }
            });
        }
    }
    burgerClick();

    //=============================================================================

    // Parallax Footer

    function parallaxFooterOne() {
        const footerBg = document.querySelector('.footer__bg-1');
        const footer = document.querySelector('.footer');

        if (footer) {
            const img = 40;
            const speed = 0.1;

            let coordX = 0;
            let coordY = 0;
            let coordXProcent = 0;
            let coordYProcent = 0;

            const distX = coordXProcent - coordX;
            const distY = coordYProcent - coordY;

            coordX = coordX + (distX * speed);
            coordY = coordY + (distY * speed);

            window.addEventListener('mousemove', (e) => {
                const pageX = footer.offsetWidth;
                const pageY = footer.offsetHeight;

                const positionX = e.screenX - pageX / 2;
                const positionY = e.screenY - pageY / 2;

                coordXProcent = positionX / pageX * 100;
                coordYProcent = positionY / pageY * 100;

                footerBg.style.transform = `translate(${0 - coordXProcent / img}%, ${0 - coordYProcent / img}%)`;
            });
        }
    }
    parallaxFooterOne();

    function parallaxFooterTwo() {
        const footerBg = document.querySelector('.footer__bg-2');
        const footer = document.querySelector('.footer');

        if (footer) {
            const img = 10;
            const speed = 0.2;

            let coordX = 0;
            let coordY = 0;
            let coordXProcent = 0;
            let coordYProcent = 0;

            const distX = coordXProcent - coordX;
            const distY = coordYProcent - coordY;

            coordX = coordX + (distX * speed);
            coordY = coordY + (distY * speed);

            window.addEventListener('mousemove', (e) => {
                const pageX = footer.offsetWidth;
                const pageY = footer.offsetHeight;

                const positionX = e.screenX - pageX / 2;
                const positionY = e.screenY - pageY / 2;

                coordXProcent = positionX / pageX * 100;
                coordYProcent = positionY / pageY * 100;

                footerBg.style.transform = `translate(${0 - coordXProcent / img}%, ${0 - coordYProcent / img}%)`;
            });
        }
    }
    parallaxFooterTwo();

    function parallaxFooterThree() {
        const footerBg = document.querySelector('.footer__bg-3');
        const footer = document.querySelector('.footer');

        if (footer) {
            const img = 15;
            const speed = 0.2;

            let coordX = 0;
            let coordY = 0;
            let coordXProcent = 0;
            let coordYProcent = 0;

            const distX = coordXProcent - coordX;
            const distY = coordYProcent - coordY;

            coordX = coordX + (distX * speed);
            coordY = coordY + (distY * speed);

            window.addEventListener('mousemove', (e) => {
                const pageX = footer.offsetWidth;
                const pageY = footer.offsetHeight;

                const positionX = e.screenX - pageX / 2;
                const positionY = e.screenY - pageY / 2;

                coordXProcent = positionX / pageX * 100;
                coordYProcent = positionY / pageY * 100;

                footerBg.style.transform = `translate(${0 - coordXProcent / img}%, ${0 - coordYProcent / img}%)`;
            });
        }
    }
    parallaxFooterThree();


    //=======================================================================================================================


    // Tab Case

    function removeActiveTab(tabs) {
        for (let index = 0; index < tabs.length; index++) {
            const element = tabs[index];
            element.classList.remove('_active');
        }
    }

    function itemsDataset(items, tabs) {
        for (let index = 0; index < items.length; index++) {
            const el = items[index];
            if (el.dataset.content === tabs.dataset.tab) {
                el.classList.add('_none');
                el.classList.remove('_active');
            } else {
                el.classList.remove('_none');
                el.classList.add('_active');
            }

            if (tabs.dataset.tab === 'Все') {
                el.classList.remove('_active');
                el.classList.add('_none');
            }
        }
    }

    function tabCase() {
        const tabs = document.querySelectorAll('.portfolio-page__tab');
        const items = document.querySelectorAll('.content-portfolio-page__column');

        if (tabs.length > 0) {

            tabs[0].classList.add('_active');

            for (let index = 0; index < items.length; index++) {
                const element = items[index];
                // element.classList.add('_active');
                // element.classList.add('_none');
            }
            for (let index = 0; index < tabs.length; index++) {
                const element = tabs[index];
                element.addEventListener('click', () => {
                    removeActiveTab(tabs);

                    element.classList.add('_active');

                    itemsDataset(items, element);
                });
            }
        }
    }
    tabCase();

    //======================================================================================================

    // Input

    function inputValidateDelivery(selectorInput, selectorTextarea) {
        const input = document.querySelectorAll(selectorInput);
        const textarea = document.querySelectorAll(selectorTextarea);

        if (input.length > 0) {
            for (let index = 0; index < input.length; index++) {
                const element = input[index];
                element.addEventListener('blur', () => {
                    if (element.value != '') {
                        if (element.closest('label')) {
                            element.closest('label').classList.add('_active');
                        }
                    } else {
                        if (element.closest('label')) {
                            element.closest('label').classList.remove('_active');
                        }
                    }
                });
            }
            for (let index = 0; index < textarea.length; index++) {
                const element = textarea[index];
                element.addEventListener('blur', () => {
                    if (element.value != '') {
                        if (element.closest('label')) {
                            element.closest('label').classList.add('_active');
                        }
                    } else {
                        if (element.closest('label')) {
                            element.closest('label').classList.remove('_active');
                        }
                    }
                });
            }
        }
    }

    inputValidateDelivery('.form-contact__form input', '.form-contact__form textarea');
    inputValidateDelivery('.modal__form input', '.modal__form textarea');

    //=========================================================================================================

    //Header Fixed

    function headerFixed() {
        let lastScroll = 0;
        const defaulScroll = 200;

        const header = document.querySelector('.header');

        window.addEventListener('scroll', (e) => {
            if (document.documentElement.clientWidth >= 768) {
                if (window.pageYOffset > lastScroll && window.pageYOffset >= defaulScroll) {
                    header.classList.add('_fixed');
                    header.classList.add('_doorAnimateDowm');
                    header.classList.remove('_doorAnimate');
                } else {
                    if (window.pageYOffset >= defaulScroll) {
                        header.classList.remove('_doorAnimateDowm');
                        header.classList.add('_fixed');
                        header.classList.add('_doorAnimate');
                    } else {
                        header.classList.remove('_doorAnimate');
                        header.classList.remove('_fixed');
                    }
                }
                lastScroll = window.pageYOffset;
            }
        });

        window.addEventListener('resize', () => {
            if (document.documentElement.clientWidth <= 854) {
                header.classList.remove('_fixed');
            }
        });
    }
    headerFixed();

    //====================================================================


    // Go Top

    function goTop() {
        const goTop = document.querySelector('.footer__goTop');
        const body = document.documentElement;

        if (goTop) {
            goTop.addEventListener('click', () => {
                const bodyPosition = body.getBoundingClientRect().top;
                window.scrollTo({
                    top: bodyPosition,
                    behavior: "smooth"
                });
            });
        }
    }
    goTop();

    //=====================================================================

    function random(low, high) {
        return Math.random() * (high - low) + low;
    }

    class Visual {
        constructor() {
            this.canvas = document.querySelector('#canvas');
            this.context = this.canvas.getContext('2d');
            this.canvasWidth = 0;
            this.canvasHeight = 0;
            this.particleLength = 50;
            this.particles = [];
            this.particleMaxRadius = 80;

            this.handleMouseMoveBind = this.handleMouseMove.bind(this);
            this.handleClickBind = this.handleClick.bind(this);
            this.handleResizeBind = this.handleResize.bind(this);

            this.initialize();
            this.render();
        }

        initialize() {
            this.resizeCanvas();
            for (let i = 0; i < this.particleLength; i++) {
                this.particles.push(this.createParticle(i));
            }
            this.bind();
        }

        bind() {
            document.body.addEventListener('mousemove', this.handleMouseMoveBind, false);
            document.body.addEventListener('click', this.handleClickBind, false);
            window.addEventListener('resize', this.handleResizeBind, false);
        }

        unbind() {
            document.body.removeEventListener('mousemove', this.handleMouseMoveBind, false);
            document.body.removeEventListener('click', this.handleClickBind, false);
            window.removeEventListener('resize', this.handleResizeBind, false);
        }

        handleMouseMove(e) {
            this.enlargeParticle(e.clientX, e.clientY);
        }

        handleClick(e) {
            this.burstParticle(e.clientX, e.clientY);
        }

        handleResize() {
            this.resizeCanvas();
        }

        resizeCanvas() {
            this.canvasWidth = document.body.offsetWidth;
            this.canvasHeight = document.body.offsetHeight;
            this.canvas.width = this.canvasWidth * window.devicePixelRatio;
            this.canvas.height = this.canvasHeight * window.devicePixelRatio;
            this.context = this.canvas.getContext('2d');
            this.context.scale(window.devicePixelRatio, window.devicePixelRatio);
        }

        createParticle(id, isRecreate) {
            const radius = random(1, this.particleMaxRadius);
            const y = isRecreate ? -radius - random(0, this.canvasWidth) : random(0, this.canvasWidth);
            let x = random(this.canvasHeight / 2 - 150, this.canvasHeight / 2 + 150);
            x += random(-200, 3000);
            const alpha = random(0.05, 1);

            return {
                id: id,
                x: x,
                y: y,
                startX: x,
                radius: radius,
                defaultRadius: radius,
                startAngle: 0,
                endAngle: Math.PI * 2,
                alpha: alpha,
                color: { r: 0, g: 255, b: 179, a: 1 },
                speed: alpha + 1.5,
                amplitude: random(50, 200),
                isBurst: false
            };
        }

        drawParticles() {
            this.particles.forEach(particle => {
                this.moveParticle(particle);

                this.context.beginPath();
                this.context.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${particle.alpha})`;
                this.context.arc(particle.x, particle.y, particle.radius, particle.startAngle, particle.endAngle);
                this.context.fill();
            });
        }

        moveParticle(particle) {
            particle.x = particle.startX + particle.amplitude * Math.sin(((particle.x / 5) * Math.PI) / 180);
            particle.y += particle.speed;
        }

        enlargeParticle(clientX, clientY) {
            this.particles.forEach(particle => {
                if (particle.isBurst) return;

                const distance = Math.hypot(particle.x - clientX, particle.y - clientY);

                // if (distance <= 100) {
                //     const scaling = (100 - distance) / 1.5;
                //     TweenMax.to(particle, 0.5, {
                //         radius: particle.defaultRadius + scaling,
                //         ease: Power2.easeOut
                //     });
                // } else {
                //     TweenMax.to(particle, 0.5, {
                //         radius: particle.defaultRadius,
                //         ease: Power2.easeOut
                //     });
                // }
            });
        }

        burstParticle(clientX, clientY) {
            this.particles.forEach(particle => {
                const distance = Math.hypot(particle.x - clientX, particle.y - clientY);

                if (distance <= 100) {
                    particle.isBurst = true;
                    // TweenMax.to(particle, 0.5, {
                    //     radius: particle.defaultRadius + 900,
                    //     alpha: 0,
                    //     ease: Power2.easeOut,
                    //     onComplete: () => {
                    //         this.particles[particle.id] = this.createParticle(particle.id, true);
                    //     }
                    // });
                }
            });
        }

        render() {
            this.context.clearRect(0, 0, this.canvasWidth + this.particleMaxRadius * 2, this.canvasHeight);

            this.drawParticles();

            this.particles.forEach(particle => {
                if (particle.y - particle.radius >= this.canvasWidth) {
                    this.particles[particle.id] = this.createParticle(particle.id, true);
                }
            });

            requestAnimationFrame(this.render.bind(this));
        }
    }

    new Visual();

});