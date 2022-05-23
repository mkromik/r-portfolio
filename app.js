// variables
var $header_top = $('.header-top');
var $nav = $('nav');



// toggle menu 
$header_top.find('a').on('click', function () {
    $(this).parent().toggleClass('open-menu');
});

var menu = $('#menu');
menu.find('li').find('a').on('click', function () {
    $header_top.toggleClass('open-menu');
});


// fullpage customization
$('#fullpage').fullpage({
    sectionsColor: ['black', 'black', 'black', 'white', 'black'],
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
    navigation: true,
    
    controlArrows: false,
    anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection'],
    menu: '#menu',

    afterLoad: function (anchorLink, index) {
        $header_top.css('background', 'rgba(0, 47, 77, .3)');
        $nav.css('background', 'rgba(0, 47, 77, .25)');
        if (index == 5) {
            $('#fp-nav').hide();
        }
    },

});