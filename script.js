jQuery(document).ready(function ($) {

    // features dropdown
    $('a.features').click(
        function () {

            if ($('.company-dropdown').hasClass('drp-visible')) {
                $('.company-dropdown').removeClass('drp-visible');
                $('.company').find('.dropdown-anchor').css('rotate', '360deg');
            }

            if ($('.features-dropdown').hasClass('drp-visible')) {
                $('.features-dropdown').fadeOut();
                $('.features-dropdown').removeClass('drp-visible');
                $(this).find('.dropdown-anchor').css('rotate', '360deg');
            } else {
                $('.features-dropdown').fadeIn('slow');
                $('.features-dropdown').addClass('drp-visible');
                $(this).find('.dropdown-anchor').css('rotate', '180deg');
            }
        }
    )
    
    // company dropdown
    $('a.company').click(
        function () {

            if ($('.features-dropdown').hasClass('drp-visible')) {
                $('.features-dropdown').removeClass('drp-visible');
                $('.features').find('.dropdown-anchor').css('rotate', '360deg');
            }

            if ($('.company-dropdown').hasClass('drp-visible')) {
                $('.company-dropdown').fadeOut();
                $('.company-dropdown').removeClass('drp-visible');
                $(this).find('.dropdown-anchor').css('rotate', '360deg');
            } else {
                $('.company-dropdown').fadeIn('slow');
                $('.company-dropdown').addClass('drp-visible');
                $(this).find('.dropdown-anchor').css('rotate', '180deg');
            }
        }
    )


});