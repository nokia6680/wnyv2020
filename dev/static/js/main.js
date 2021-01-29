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
var stepWinner = document.querySelector('.winner');

var returnMap = document.querySelector('.header__return');

var popupHowto = document.querySelector('.howto');
var popupClose = document.querySelector('.howto__close');
var popupOpen = document.querySelector('.footer__list-link.manual');

var formSend = document.querySelector('.form__submit');
var form = document.querySelector('.form');
var formSuccess = document.querySelector('.success');

if (formSend) {
    formSend.addEventListener('click', function () {
        form.classList.add('sent');

        setTimeout(() =>
            form.classList.add('hidden')
            , 1000);

        setTimeout(() =>
            formSuccess.classList.remove('hidden')
        , 1000);

        setTimeout(() =>
            formSuccess.classList.add('visible')
            , 1500);

        setTimeout(() =>
            formSuccess.classList.remove('visible')
            , 10000);
        setTimeout(() =>
            formSuccess.classList.add('hidden')
            , 11000);

        setTimeout(() => {
            stepPrize.classList.remove('visible');
            stepPrize.classList.add('invisible');
            stepTv.classList.remove('visible');
            stepTv.classList.add('invisible');
            stepFinal.classList.remove('visible');
            stepFinal.classList.add('invisible');
            stepPlayer.classList.remove('visible');
            stepPlayer.classList.add('invisible');
            stepChoose.classList.remove('visible');
            stepChoose.classList.add('invisible');
            stepWinner.classList.remove('visible');
            stepWinner.classList.add('invisible');
            header.classList.remove('step-2');
            header.classList.remove('step-3');
            header.classList.remove('step-4');
        }
        , 11000);

        setTimeout(() => {
            stepChoose.classList.add('hidden')
            stepPlayer.classList.add('hidden')
            stepFinal.classList.add('hidden')
            stepTv.classList.add('hidden')
            stepPrize.classList.add('hidden')
            stepWinner.classList.add('hidden')
        }
        , 12000);


        setTimeout(() => {
            stepMap.classList.remove('hidden')
            stepMap.classList.add('visible')
        }
        , 12000);

        setTimeout(() => {
            stepMap.classList.remove('invisible')
            header.classList.add('step-1')
        }
        , 13000);

        setTimeout(() => {
            form.classList.remove('hidden')
            form.classList.remove('sent')
            stepChoose.classList.remove('hidden')
            stepPlayer.classList.remove('hidden')
            stepFinal.classList.remove('hidden')
            stepTv.classList.remove('hidden')
            stepPrize.classList.remove('hidden')
            stepWinner.classList.remove('hidden')
        }
        , 13000);
    });
};

if (popupOpen) {
    popupOpen.addEventListener('click', function () {
        popupHowto.classList.add('active');
    });
};

if (popupClose) {
    popupClose.addEventListener('click', function () {
        popupHowto.classList.remove('active');
    });
};

if (startLink) {
    startLink.addEventListener('click', function () {
        stepIntro.classList.add('invisible');

        setTimeout(() =>
            stepIntro.classList.add('hidden')
            , 1000);
        setTimeout(() =>
            stepWinner.classList.add('visible')
            , 1000);
        setTimeout(() => {
            stepWinner.classList.remove('invisible')
            stepIntro.classList.add('invisible')
            header.classList.remove('hidden')
            stepIntro.classList.add('hidden')
            stepMap.classList.add('hidden')
            stepPrize.classList.add('hidden')
            stepFinal.classList.add('hidden')
            stepIntro.classList.add('hidden')
            stepTv.classList.add('hidden')
            stepChoose.classList.add('hidden')
            stepPlayer.classList.add('hidden')
            header.classList.remove('invisible')
            footer.classList.remove('hidden');
            footer.classList.remove('invisible')
            header.classList.add('step-1')
        }
            , 1500);
        //footer.classList.remove('invisible');
    });
};

if (linkChoose) {
    linkChoose.addEventListener('click', function () {
        stepMap.classList.remove('visible');
        stepMap.classList.add('invisible');

        setTimeout(() =>
            stepMap.classList.add('hidden')
            , 1000);

        setTimeout(() =>
            stepChoose.classList.add('visible')
            , 1000);

        setTimeout(() => {
            stepChoose.classList.remove('invisible')
            header.classList.add('step-2')
            header.classList.remove('step-1')
        }
            , 1500);
    });
};

if (linkPlayer) {
    linkPlayer.addEventListener('click', function () {
        stepMap.classList.remove('visible');
        stepMap.classList.add('invisible');

        setTimeout(() => {
                stepMap.classList.add('hidden')
                stepChoose.classList.add('hidden')
            }
            , 1000);

        setTimeout(() =>
            stepPlayer.classList.add('visible')
            , 1000);

        setTimeout(() => {
            stepPlayer.classList.remove('invisible')
            header.classList.remove('step-1')
        }
            , 1500);
    });
};

if (chooseSubmit) {
    chooseSubmit.addEventListener('click', function () {
        stepChoose.classList.remove('visible');
        stepChoose.classList.add('invisible');

        setTimeout(() => {
                stepChoose.classList.add('hidden')
            }
            , 1000);

        setTimeout(() => {
                stepPlayer.classList.remove('hidden')
                stepPlayer.classList.add('visible')
            }
            , 1000);

        setTimeout(() => {
            stepPlayer.classList.remove('invisible')
            header.classList.remove('step-1')
        }
            , 1500);
    });
};

if (chooseReturn) {
    chooseReturn.addEventListener('click', function () {
        stepPlayer.classList.remove('visible');
        stepPlayer.classList.add('invisible');

        setTimeout(() => {
            stepPlayer.classList.add('hidden')
        }
            , 1000);

        setTimeout(() => {
            stepChoose.classList.remove('hidden')
            stepChoose.classList.add('visible')
        }
            , 1000);

        setTimeout(() => {
            stepChoose.classList.remove('invisible')
            header.classList.remove('step-1')
        }
            , 1500);
    });
};

if (linkFinal) {
    linkFinal.addEventListener('click', function () {
        stepMap.classList.remove('visible');
        stepMap.classList.add('invisible');

        setTimeout(() => {
                stepMap.classList.add('hidden')
                stepChoose.classList.add('hidden')
                stepPlayer.classList.add('hidden')
            }
            , 1000);

        setTimeout(() =>
            stepFinal.classList.add('visible')
            , 1000);

        setTimeout(() => {
            stepFinal.classList.remove('invisible')
            header.classList.remove('step-1')
        }
            , 1500);
    });
};

if (linkTv) {
    linkTv.addEventListener('click', function () {
        stepMap.classList.remove('visible');
        stepMap.classList.add('invisible');

        setTimeout(() => {
                stepMap.classList.add('hidden')
                stepChoose.classList.add('hidden')
                stepPlayer.classList.add('hidden')
                stepFinal.classList.add('hidden')
            }
            , 1000);
        setTimeout(() =>
            stepTv.classList.add('visible')
            , 1000);
        setTimeout(() => {
            stepTv.classList.remove('invisible')
            header.classList.remove('step-1')
        }
            , 1500);
    });
};

if (linkPrize) {
    linkPrize.addEventListener('click', function () {
        stepMap.classList.remove('visible');
        stepMap.classList.add('invisible');

        setTimeout(() => {
                stepMap.classList.add('hidden')
                stepChoose.classList.add('hidden')
                stepPlayer.classList.add('hidden')
                stepFinal.classList.add('hidden')
                stepTv.classList.add('hidden')
            }
            , 1000);
        setTimeout(() =>
            stepPrize.classList.add('visible')
            , 1000);
        setTimeout(() => {
            stepPrize.classList.remove('invisible')
            header.classList.remove('step-1')
        }
            , 1500);
    });
};

if (linkWinner) {
    linkWinner.addEventListener('click', function () {
        stepMap.classList.remove('visible');
        stepMap.classList.add('invisible');

        setTimeout(() => {
                stepMap.classList.add('hidden')
                stepChoose.classList.add('hidden')
                stepPlayer.classList.add('hidden')
                stepFinal.classList.add('hidden')
                stepTv.classList.add('hidden')
                stepPrize.classList.add('hidden')
            }
            , 1000);
        setTimeout(() =>
            stepWinner.classList.add('visible')
            , 1000);
        setTimeout(() => {
            stepWinner.classList.remove('invisible')
            header.classList.remove('step-1')
        }
            , 1500);
    });
};


if (returnMap) {
    returnMap.addEventListener('click', function () {
        stepPrize.classList.remove('visible');
        stepPrize.classList.add('invisible');
        stepTv.classList.remove('visible');
        stepTv.classList.add('invisible');
        stepFinal.classList.remove('visible');
        stepFinal.classList.add('invisible');
        stepPlayer.classList.remove('visible');
        stepPlayer.classList.add('invisible');
        stepChoose.classList.remove('visible');
        stepChoose.classList.add('invisible');
        stepWinner.classList.remove('visible');
        stepWinner.classList.add('invisible');
        header.classList.remove('step-2');
        header.classList.remove('step-3');
        header.classList.remove('step-4');

        setTimeout(() => {
            stepChoose.classList.add('hidden')
            stepPlayer.classList.add('hidden')
            stepFinal.classList.add('hidden')
            stepTv.classList.add('hidden')
            stepPrize.classList.add('hidden')
            stepWinner.classList.add('hidden')
        }
            , 1000);

        setTimeout(() => {
                stepMap.classList.remove('hidden')
                stepMap.classList.add('visible')
            }
            , 1000);

        setTimeout(() => {
            stepMap.classList.remove('invisible')
            header.classList.add('step-1')
        }
            , 1500);

        setTimeout(() => {
                stepChoose.classList.remove('hidden')
                stepPlayer.classList.remove('hidden')
                stepFinal.classList.remove('hidden')
                stepTv.classList.remove('hidden')
                stepPrize.classList.remove('hidden')
                stepWinner.classList.remove('hidden')
            }
            , 1500);
    });
};
