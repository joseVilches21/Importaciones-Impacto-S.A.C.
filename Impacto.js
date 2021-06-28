jQuery('Impacto').ready(function($){
    var menuBtn = $('.menu-icon');
    var menu = $('.nav-responsive ul');

    menuBtn.click(function(){
        if (menu.hasClass('show')) {
            menu.removeClass('show');
        } else {
            menu.addClass('show');
        }
    });
});

jQuery('Impacto').ready(function($){
    var menuResponsiveBtn = $('.menu-icon-responsive');
    var menuResponsive = $('.menu-categorias-responsive ul');
    
    menuResponsiveBtn.click(function(){
        if (menuResponsive.hasClass('show1')) {
            menuResponsive.removeClass('show1');
        } else {
            menuResponsive.addClass('show1');
        }
    });
});
