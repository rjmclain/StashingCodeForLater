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
finalProductFinish()


$(window).resize(function () {
    windowHeight = $(window).height();
    windowWidth = $(window).width();

    productHeightSet();

    finalProductFinish()
});