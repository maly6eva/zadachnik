window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabscontent'),
        tabsParent = document.querySelector('.tabheader__items')

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active')
        })
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade')
        tabsContent[i].classList.remove('hide')
        tabs[i].classList.add('tabheader__item_active')
    }

    hideTabContent();
    showTabContent();


    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target === item) {
                    hideTabContent();
                    showTabContent(i);

                }
            });
        }
    })


    //Timer
    const deadlane = '2020-05-11';

    function getTimeRem(end) {
        let days, hours, mins, sec;
        const t = Date.parse(end) - Date.parse(new Date());
        if (t <= 0) {
            days = 0;
            hours = 0;
            mins = 0;
            sec = 0;
        } else {
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
                hours = Math.floor((t / 1000 * 60 * 60) % 24),
                mins = Math.floor((t / 1000 / 60) % 60),
                sec = Math.floor((t / 1000) % 60);

        }

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'mins': mins,
            'sec': sec,
        };

    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num};`
        } else {
            return num
        }
    }

    function setClock(selector, end) {
        const timer = document.querySelector(selector);
        const days = timer.querySelector('#days');
        const hours = timer.querySelector('#hours');
        const mins = timer.querySelector('#mins');
        const sec = timer.querySelector('#sec')
        const timeInterval = setInterval(updateClock, 1000);
        updateClock();

        function updateClock() {
            const t = getTimeRem(end);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            mins.innerHTML = getZero(t.mins);
            sec.innerHTML = getZero(t.sec);


            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadlane);


    //Modal

    const modalTrigger = document.querySelectorAll('[ data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        // modal.classList.toggle('show');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId)

    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => {

        });
    })


    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        // modal.classList.toggle('show');
        document.body.style.overflow = ''
    }

    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    })

    const modalTimerId = setTimeout(openModal, 3000);


    function showModallByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModallByScroll)
        }
    }

    window.addEventListener('scroll', showModallByScroll)


});