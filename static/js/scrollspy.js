$(window).bind('scroll', () => {
    let currentTop = $(window).scrollTop() + 100;
    let elems = $('.scrollspy');
    elems.each(function(index) {
        let elemTop = $(this).offset().top;
        let elemBottom = elemTop + $(this).height();
        if(currentTop >= elemTop && currentTop <= elemBottom){
            let id = $(this).attr('id');
            let navElem = $(`a[href='#${id}']`).parent();
            navElem.addClass('is-active').siblings().removeClass('is-active');
        }
    });
});
