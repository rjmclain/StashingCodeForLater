var windowHeight = $(window).height();
var windowWidth = $(window).width();


// sets height of product to be the same height as the screen
function productHeightSet() {
    $('.product-module').each(function () {
        $(this).find('.product-left').css('height', windowHeight);
        $(this).find('.product-right').css('min-height', windowHeight);

        vertCenter('.product-left .inner-wrapper');
    })
}

// changes the class of the currently shown element so the z-index brings it forward
function changingProductZ() {
    $('.product-module').each(function () {
        if ($(window).scrollTop() >= $(this).offset().top) {
            if ($(window).scrollTop() < ($(this).offset().top + $(this).height())) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        } else {
            $(this).removeClass('active');
        }
    })
}

// vertically aligns element to be centered within parent
function vertCenter(centeredItem) {
    $(centeredItem).each(function () {
        var itemHeight = $(this).height();
        var itemParentHeight = $(this).parent().height();
        var centeredPaddingTop = (itemParentHeight - itemHeight)/2
        $(this).css('padding-top', centeredPaddingTop);
    })
}

function clickOpen(clickableElem) {
    $(clickableElem).click(function () {
        $(this).parent().toggleClass('open');
    })
}

function clickOpenCloseOthers(clickableOpenClose) {
    $(clickableOpenClose).click(function () {
        if ($(this).parent().hasClass('open')) {
            $(clickableOpenClose).parent().removeClass('open');
        } else {
            $(clickableOpenClose).parent().removeClass('open');
            $(this).parent().addClass('open');
        }
    })
}

function finalProductFinish() {
    var finalItem = $('.product-module').last();
    var finalRightHeight = $(finalItem).height();
    var finalTriggerPoint = (finalRightHeight + $(finalItem).offset().top - windowHeight);

    if ($(window).scrollTop() >= finalTriggerPoint) {
        $('.product-module').addClass('final');
    } else {
        $('.product-module').removeClass('final');
    }


}

$(window).scroll(function () {
    changingProductZ();
    finalProductFinish()

});

clickOpen('.product-left');
clickOpen('.product-right .color-option-title');
clickOpenCloseOthers('.product-left .bottom-section .main-item-wrapper');
productHeightSet();
changingProductZ();
finalProductFinish();


$(window).resize(function () {
    windowHeight = $(window).height();
    windowWidth = $(window).width();

    productHeightSet();

    finalProductFinish();
});


// ADDITIONAL CODE STASH

// JavaScript source code
$(document).ready(function () {
    //$("#language-trigger").click(function () {
    //    $(this).html("")
    //});
});

function navOff(offElement) {
    $(offElement).on("mouseover", function () {
        $('.nav-item').removeClass('open');
    })
}
function navHover() {
    $('.nav-item-top').on("mouseover", function () {
        $('.nav-item').removeClass('open');
        $(this).closest('.nav-item').addClass('open');
    })
    navOff('.content-body');
    navOff('.main-rotator');
    navOff('.header-top');
    navOff('#header .logo-wrapper');
    navOff('.interior-page');
    navOff('.footer');
}

function toggleMobileNav(mobileMenuBtn) {
    $(mobileMenuBtn).click(function () {
        $('#header .navigation').toggleClass('mobile-open');
    })
}

function clientRotator() {
    var clientTimer;
    //counts the amount of items
    var imageRotatorItems = $('.client-rotator .client-rotator-item').length - 1;
    //Establish the counter
    var imageRotatorCount = 0;
    //Creates the element as a variable for easier use
    var imageRotatorElement = $('.client-rotator .client-rotator-item');


    //Create div markers

    var indicatorDiv = '<div class="client-rotator-indicator"></div>';
    var indicatorCounter = 0;

    do {
        $('.client-rotator-indicator-wrapper').append(indicatorDiv);
        indicatorCounter += 1;
    } while (indicatorCounter <= imageRotatorItems);


    var rotatorIndicatorElement = $('.client-rotator-indicator');

    $(rotatorIndicatorElement[0]).addClass('current-item');

    function clientTimerFunction() {
        var establishIndicatorElement = $('.client-rotator-indicator');
        //find current active indicator
        var currentActiveIndicator = $('.current-item').index('.client-rotator-indicator');
        //remove current item class from everything
        $('.client-rotator-indicator').removeClass('current-item');
        //find if it's not at the end
        //remove neg margin class from everything
        $('.client-rotator-item').removeClass('neg-margin');
        //Removes acive class from current active rotator item
        $('.client-rotator-item').removeClass('active');


        if (currentActiveIndicator < ($('.client-rotator-indicator').length - 1)) {
            //add current item class to next item
            currentActiveIndicator += 1;
            $(establishIndicatorElement[currentActiveIndicator]).addClass('current-item');
            $(imageRotatorElement[currentActiveIndicator]).addClass('active');

            var timedIndicatorNum = currentActiveIndicator;
            do {

                timedIndicatorNum -= 1;
                $(imageRotatorElement[timedIndicatorNum]).addClass('neg-margin');

            } while (timedIndicatorNum >= 0);

        } else {
            $(establishIndicatorElement[0]).addClass('current-item');
            $(imageRotatorElement[0]).addClass('active');
        }


    }


    $('.client-rotator-indicator').click(function () {
        clearInterval(clientTimer);
        clientTimer = setInterval(clientTimerFunction, 10000);

        //Removes acive class from current active rotator item
        $('.client-rotator-item').removeClass('active');
        var rotatorIndicatorClickedNum = $(this).index();

        //Adds active class to newly activated rotator item
        $(imageRotatorElement[rotatorIndicatorClickedNum]).addClass('active');

        if ($(this).hasClass('current-item')) {

        } else {


            //add neg margin class to all previous elements
            $('.client-rotator-item').removeClass('neg-margin');
            var decreasingIndicatorNum = rotatorIndicatorClickedNum;
            do {

                decreasingIndicatorNum -= 1;
                $(imageRotatorElement[decreasingIndicatorNum]).addClass('neg-margin');

            } while (decreasingIndicatorNum >= 0);


            //remove current item class
            $('.client-rotator-indicator').removeClass('current-item');
            //add current item class
            $(this).addClass('current-item');
        }
    });



    function rotatorRight() {
        clearInterval(clientTimer);
        clientTimer = setInterval(clientTimerFunction, 10000);
        var currentActiveSlide = $('.client-rotator-item.active').index();
        //Removes acive class from current active rotator item
        $('.client-rotator-item').removeClass('active');
        var updatedActiveNum = 0;
        if (imageRotatorItems == (currentActiveSlide)) {
            var updatedActiveNum = 0;
        } else {
            var updatedActiveNum = (currentActiveSlide + 1);
        }

        $('.client-rotator-item').removeClass('neg-margin');
        var decreasingIndicatorNum = updatedActiveNum;
        do {

            decreasingIndicatorNum -= 1;
            $(imageRotatorElement[decreasingIndicatorNum]).addClass('neg-margin');

        } while (decreasingIndicatorNum >= 0);


        //remove current item class
        $('.client-rotator-indicator').removeClass('current-item');
        //add current item class
        $(rotatorIndicatorElement[updatedActiveNum]).addClass('current-item');
        $(imageRotatorElement[updatedActiveNum]).addClass('active');
    }

    function rotatorLeft() {
        clearInterval(clientTimer);
        clientTimer = setInterval(clientTimerFunction, 10000);
        var currentActiveSlide = $('.client-rotator-item.active').index();
        //Removes acive class from current active rotator item
        $('.client-rotator-item').removeClass('active');
        var updatedActiveNum = 0;
        if (0 == (currentActiveSlide)) {
            var updatedActiveNum = imageRotatorItems;
        } else {
            var updatedActiveNum = (currentActiveSlide - 1);
        }

        $('.client-rotator-item').removeClass('neg-margin');
        var decreasingIndicatorNum = updatedActiveNum;
        do {

            decreasingIndicatorNum -= 1;
            $(imageRotatorElement[decreasingIndicatorNum]).addClass('neg-margin');

        } while (decreasingIndicatorNum >= 0);


        //remove current item class
        $('.client-rotator-indicator').removeClass('current-item');
        //add current item class
        $(rotatorIndicatorElement[updatedActiveNum]).addClass('current-item');
        $(imageRotatorElement[updatedActiveNum]).addClass('active');
    }

    $('.client-rotator-arrow.right').click(function () {
        rotatorRight();
    });

    $('.client-rotator-arrow.left').click(function () {
        rotatorLeft();
    });
    clientTimer = setInterval(
        clientTimerFunction, 10000);
}


function setToTallest(measuredElem, paddingTop, paddingBottom) {
    var heightTracker = 0;

    $(measuredElem).each(function () {
        if ($(this).height() > heightTracker) {
            heightTracker = $(this).height();
        }
    })
    heightTracker = heightTracker + paddingTop + paddingBottom;
    $(measuredElem).each(function () {
        $(this).css('min-height', heightTracker);
    })
}

function parentClassChanger(commonElemClass, clickedElem, parentElem, classRemovedParent, classAddedParent, classRemovedElem, classAddedElem) {
    $(clickedElem).click(function () {
        $(commonElemClass).removeClass(classRemovedElem);
        $(this).addClass(classAddedElem);
        $(parentElem).removeClass(classRemovedParent);
        $(parentElem).addClass(classAddedParent);
    })
}

function groupedPanels(panelClickElem, panelElem, activeClass) {
    $(panelClickElem).click(function () {

        if ($(this).closest(panelElem).hasClass(activeClass)) {
            $(panelElem).removeClass(activeClass);
        } else {
            $(panelElem).removeClass(activeClass);
            $(this).closest(panelElem).addClass(activeClass);
            if ($(window).width() < 781) {
                $('html, body').animate({
                    scrollTop: $(this).offset().top
                }, 500);
            }

        }
    })
}

function simpleToggle(clickedElem, toggledClass) {
    $(clickedElem).toggleClass(toggledClass);
}

function vertAlignImages(imageElem, parentMeasured) {
    $(imageElem).each(function () {
        //find image height
        var imageHeight = $(this).height();
        //find height of element
        var parentHeight = $(this).closest(parentMeasured).height();
        //subtract height of image from height of elem
        var marginTopHeight = parentHeight - imageHeight;
        //divide subtracted height of elem by 2
        marginTopHeight = marginTopHeight / 2;
        marginTopHeight = marginTopHeight + "px";
        //add margin top to image
        $(this).css('margin-top', marginTopHeight);
    })
}

function shareToggle() {
    $('.ssba-wrap .open-share').click(function () {
        $('.ssba-wrap').addClass('active');
    })
    $('.ssba-wrap .close-share').click(function () {
        $('.ssba-wrap').removeClass('active');
    })
}

$(document).ready(function () {
    navHover();
    shareToggle();
    clientRotator();
    toggleMobileNav('.mobile-menu-btn');
    setToTallest('.rollover-item .front-content .rollover-text', 20, 20);
    parentClassChanger('.product-type-selector .type-selection', '.product-type-selector .type-gas', '.product-types-wrapper', 'heartburn-selected', 'gas-selected', 'active', 'active');
    parentClassChanger('.product-type-selector .type-selection', '.product-type-selector .type-heartburn', '.product-types-wrapper', 'gas-selected', 'heartburn-selected', 'active', 'active');
    setToTallest('.product-types-wrapper .product-item', 0, 0);


    if ($(window).width() > 980) {
        setToTallest('.wtb-selector .wtb-item', 40, 40);
    } else {
        setToTallest('.wtb-selector .wtb-item', 10, 10);

    }
    vertAlignImages('.wtb-item img', '.wtb-item');


    groupedPanels('.product-detail-expandable .detail-label', '.product-detail-expandable', 'open');

    groupedPanels('.faq-expandable .detail-label', '.faq-expandable', 'open');
})

// Input select states
var statesSelect = function () {
    $retailerSelect = $("#retailer-state");
    $stateBox = $(".retailer-list");

    $retailerSelect.on('change', function (e) {
        //text change
        var stateKey = $(this).val();
        var callback = function (msg) {
            $stateBox.html(msg);
        };

        var dataToSend = { stateKey: stateKey };
        sendData(dataToSend, "/wp-content/themes/client/retailers.php", "POST", callback);
        $('strong.selected-state').text($('#retailer-state option')[$('#retailer-state')[0].selectedIndex].text);
    });
};

var sendData = function (data, url, method, callback) {
    var promise = $.ajax({
        method: method,
        url: url,
        data: data
    });
    //$('.preloader').show();
    promise.done(function (msg) {
        callback(msg);
    });
    promise.fail(function (msg) {
        callback(msg);
    });
    promise.always(function () {
        //$('.preloader').hide();
    });
    return promise;
};

statesSelect();
