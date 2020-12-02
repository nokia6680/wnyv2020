var upperItem = document.getElementsByClassName('aside__link');
var elNodes = document.querySelectorAll(".aside__link");
var listChange = document.querySelector('.category__content');

for (var i = 0; i < upperItem.length; i++) {
    var elem = upperItem[i];

    elem.addEventListener("click", function() {
        this.classList.toggle("active");
        listChange.classList.toggle('good-selected');
    });
};

var startLink = document.querySelector('.intro__info-link');
var stepIntro = document.querySelector('.intro');
var header = document.querySelector('.header');
var stepMap = document.querySelector('.map');
var footer = document.querySelector('.footer');

var chooseSubmit = document.querySelector('.choose__submit');
var chooseReturn = document.querySelector('.player__return');

var linkChoose = document.querySelector('.stage-1');
var linkPlayer = document.querySelector('.stage-2');
var linkFinal = document.querySelector('.stage-3');

var linkPrize = document.querySelector('.link-2');
var linkTv = document.querySelector('.link-1');
var linkWinner = document.querySelector('.link-3');

var stepChoose = document.querySelector('.choose');
var stepPlayer = document.querySelector('.player');
var stepFinal = document.querySelector('.final');
var stepTv = document.querySelector('.tv');
var stepPrize = document.querySelector('.prize');

var returnMap = document.querySelector('.header__return');

var popupHowto = document.querySelector('.howto');
var popupClose = document.querySelector('.howto__close');
var popupOpen = document.querySelector('.footer__list-link.manual');

if (popupOpen) {
    popupOpen.addEventListener('click', function () {
        popupHowto.classList.add('active');

        return false;
    });
};

if (popupClose) {
    popupClose.addEventListener('click', function () {
        popupHowto.classList.remove('active');

        return false;
    });
};

if (startLink) {
    startLink.addEventListener('click', function () {
        stepIntro.classList.add('invisible');
        stepMap.classList.add('visible');
        stepMap.classList.remove('invisible');
        header.classList.remove('invisible');
        header.classList.add('step-1');
        footer.classList.remove('invisible');

        return false;
    });
};

if (linkChoose) {
    linkChoose.addEventListener('click', function () {
        stepMap.classList.remove('visible');
        stepMap.classList.add('invisible');

        stepChoose.classList.remove('invisible');
        stepChoose.classList.add('visible');

        header.classList.add('step-2');
        header.classList.remove('step-1');

        return false;
    });
};

if (linkPlayer) {
    linkPlayer.addEventListener('click', function () {
        stepMap.classList.remove('visible');
        stepMap.classList.add('invisible');

        stepPlayer.classList.remove('invisible');
        stepPlayer.classList.add('visible');

        header.classList.remove('step-1');

        return false;
    });
};

if (chooseSubmit) {
    chooseSubmit.addEventListener('click', function () {
        stepChoose.classList.remove('visible');
        stepChoose.classList.add('invisible');

        stepPlayer.classList.remove('invisible');
        stepPlayer.classList.add('visible');

        header.classList.remove('step-1');

        return false;
    });
};

if (chooseReturn) {
    chooseReturn.addEventListener('click', function () {
        stepChoose.classList.add('visible');
        stepChoose.classList.remove('invisible');

        stepPlayer.classList.add('invisible');
        stepPlayer.classList.remove('visible');

        header.classList.remove('step-1');

        return false;
    });
};

if (linkFinal) {
    linkFinal.addEventListener('click', function () {
        stepMap.classList.remove('visible');
        stepMap.classList.add('invisible');

        stepFinal.classList.remove('invisible');
        stepFinal.classList.add('visible');

        header.classList.remove('step-1');

        return false;
    });
};

if (linkTv) {
    linkTv.addEventListener('click', function () {
        stepMap.classList.remove('visible');
        stepMap.classList.add('invisible');

        stepTv.classList.add('visible');
        stepTv.classList.remove('invisible');

        header.classList.remove('step-1');

        return false;
    });
};

if (linkPrize) {
    linkPrize.addEventListener('click', function () {
        stepMap.classList.remove('visible');
        stepMap.classList.add('invisible');

        stepPrize.classList.add('visible');
        stepPrize.classList.remove('invisible');

        header.classList.remove('step-1');

        return false;
    });
};

if (returnMap) {
    returnMap.addEventListener('click', function () {
        stepMap.classList.remove('invisible');
        stepMap.classList.add('visible');

        stepPrize.classList.remove('visible');
        stepPrize.classList.add('invisible');

        stepTv.classList.remove('visible');
        stepTv.classList.add('invisible');

        stepFinal.classList.add('invisible');
        stepFinal.classList.remove('visible');

        stepPlayer.classList.add('invisible');
        stepPlayer.classList.remove('visible');

        stepChoose.classList.add('invisible');
        stepChoose.classList.remove('visible');

        header.classList.add('step-1');
        header.classList.remove('step-2');
        header.classList.remove('step-3');
        header.classList.remove('step-4');

        return false;
    });
};
