jQuery(document).ready(function ($) {

    // hide features dropdown
    function hideFeatureDropdown() {
        $('.features').addClass('show');
        $('.features-dropdown .dropdown-menu').addClass('show');
        $('.features-dropdown .dropdown-menu').attr('data-bs-popper', 'static');
        $('.features-dropdown').fadeOut();
        $('a.features').find('.dropdown-anchor').css('rotate', '360deg');
        setTimeout(function () {
            $('.features').removeClass('show');
            $('.features-dropdown .dropdown-menu').removeClass('show');
            $('.features-dropdown .dropdown-menu').removeAttr('data-bs-popper');
            $('.features-dropdown').removeClass('drp-visible');
        }, 500);
    }

    // hide company dropdown
    function hideCompanyDropdown() {
        $('.company').addClass('show');
        $('.company-dropdown .dropdown-menu').addClass('show');
        $('.company-dropdown .dropdown-menu').attr('data-bs-popper', 'static');
        $('.company-dropdown').fadeOut();
        $('a.company').find('.dropdown-anchor').css('rotate', '360deg');
        setTimeout(function () {
            $('.company').removeClass('show');
            $('.company-dropdown .dropdown-menu').removeClass('show');
            $('.company-dropdown .dropdown-menu').removeAttr('data-bs-popper');
            $('.company-dropdown').removeClass('drp-visible');
        }, 500);
    }

    // display features dropdown
    $('a.features').click(
        function () {
            if ($('.features-dropdown').hasClass('drp-visible')) {
                hideFeatureDropdown();
            } else {
                $('.features-dropdown').hide();
                setTimeout(function () {
                    $('.features-dropdown').fadeIn();
                    $('.features-dropdown').addClass('drp-visible');
                    $('a.features').find('.dropdown-anchor').css('rotate', '180deg');
                }, 10)
            }
        }
    )

    $('a.features').blur(function () {
        hideFeatureDropdown();
    })

    // display company dropdown
    $('a.company').click(
        function () {
            if ($('.company-dropdown').hasClass('drp-visible')) {
                hideCompanyDropdown();
            } else {
                $('.company-dropdown').hide();
                setTimeout(function () {
                    $('.company-dropdown').fadeIn();
                    $('.company-dropdown').addClass('drp-visible');
                    $('a.company').find('.dropdown-anchor').css('rotate', '180deg');
                }, 1);
            }
        }
    )

    $('a.company').blur(function () {
        hideCompanyDropdown();
    }
    )


});