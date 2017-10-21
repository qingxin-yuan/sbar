(function ($) {


    /**
     * Toggles the sidebar
     */
    $('.sidebar__toggle-btn').click(function () {
        console.log('click');
        // $(this).toggleClass('sidebar-open');
        $(this).parent().toggleClass('sidebar--open');
        $('.content').toggleClass('content--open');

        return false;

    });

})(jQuery);