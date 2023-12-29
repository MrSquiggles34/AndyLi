function goHome(){
    scrollToSection("home");
}

function goAbout(){
    scrollToSection("about");
}

function goPortfolio(){
    scrollToSection("portfolio");
}

function goSkills(){
    scrollToSection("skills");
}

function goExperience(){
    scrollToSection("experience");
}

function goContact(){
	scrollToSection("contact");
}
let lastScrollTop = 0;

function updateHeaderOnScroll() {
    const header = document.querySelector('header');
    const scrollY = window.scrollY;

    if (scrollY > lastScrollTop) {
        header.classList.add('navbar-retreat');
        
    } else if (scrollY == 0){
        header.classList.remove('navbar-retreat');
    }

    lastScrollTop = scrollY;
}

document.addEventListener('scroll', updateHeaderOnScroll);

document.addEventListener('DOMContentLoaded', function () {
    var slideLeftElements = document.querySelectorAll('.slide-left');

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        slideLeftElements.forEach(function (el) {
            if (isElementInViewport(el)) {
                el.classList.add('slide-in');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
});


document.addEventListener('DOMContentLoaded', function () {
    function closeModal(newModal) {
        var modal = document.querySelector(newModal);
        modal.classList.remove('visible');
    }

    function openModal(newModal) {
        var modal = document.querySelector(newModal);
        modal.classList.add('visible');
    }

    function setupModalForPane(paneNumber) {
        var paneImage = document.getElementById('pane-' + paneNumber);
        var modalPane = document.querySelector('.modal.pane-' + paneNumber);

        paneImage.addEventListener('click', function () {
            openModal('.modal.pane-' + paneNumber);
        });

        var closeButton = document.querySelector('.modal.pane-' + paneNumber + ' .close-button');
        closeButton.addEventListener('click', function () {
            closeModal('.modal.pane-' + paneNumber);
        });
    }

    setupModalForPane(1);
    setupModalForPane(2);
});
