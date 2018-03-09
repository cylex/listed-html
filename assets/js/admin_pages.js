(function($) {
  $(document).ready(function() {

    /* Check URL of page and highlight the menu link */
    var url = window.location.href.substr(window.location.href.lastIndexOf("/")+1);

    function iterateAndCheck(selector) {
      $(selector).each(function(){
        if($(this).attr("href") == url || $(this).attr("href") == '' )
        $(this).addClass("active");
      });
    }

    iterateAndCheck.apply(this,[".user-menu ul li a"]);
    iterateAndCheck.apply(this,[".user-second-menu ul li a"]);
    /* End check page URL */

    /* Get height of div and apply to another */
    function getDivHeight(){
      var left_height = $('.left-column');
      var right_height = $('.right-column');
      var window_height = $('body').height();

      left_height.css('height', window_height);
      right_height.css('height', window_height);
    }
    getDivHeight();
    /* End get height of div */

    /* User second menu(hamburger menu) slide in */
    function slideSecondMenu(selector, selector2){
      $(this).on('click',selector,function(){
        $(selector2).toggleClass('slide');
        if(!$('.user-second-menu #overlay').length){
          $('.user-second-menu .menu.slide > ul').after('<div id="overlay"></div>');
        }
        $('body').addClass('overflow');
      });
    }
    slideSecondMenu.apply(this,['.user-second-menu .slide-menu-icon','.user-second-menu .menu']);

    $(document).on('click','#overlay',function(event){
      $('.user-second-menu .menu').removeClass('slide');
      $('body').removeClass('overflow');
    });
    /* End user second menu(hamburger menu) */

    /* 'My Listings' toggle collapse menu */
    function menuToggleCollapse(selector, isToggle, parent) {
      $(selector).collapse({"toggle": isToggle, 'parent': parent});
    }

    menuToggleCollapse.apply(this,['#collapseOne', false, '#accordionOne']);
    menuToggleCollapse.apply(this,['#collapseTwo', false, '#accordionTwo']);
    /* End 'My Listings' toggle collapse menu */

    /* Accordion menu add/remove class 'active' on menu links*/
    function onClickUpdateMenuLink(s1, s2, s3) {
      $(s1).click(function(){
        $(this).addClass('active');
        $(s2).removeClass('active');
        $(s3).removeClass('active');
      });
    }
    onClickUpdateMenuLink.apply(this,['a#my_listings_pending','a#my_listings_active','a#my_listings_expired']);
    onClickUpdateMenuLink.apply(this,['a#my_listings_expired','a#my_listings_active','a#my_listings_pending']);
    onClickUpdateMenuLink.apply(this,['a#my_listings_pending_two','a#my_listings_active_two','a#my_listings_expired_two']);
    onClickUpdateMenuLink.apply(this,['a#my_listings_expired_two','a#my_listings_active_two','a#my_listings_pending_two']);
      /* end user second menu */
    /* End accordion toggle class 'active' */

    /* Navbar in top content(toggle class to rotate icon on click) */
    $(".top-content .dropdown-toggle").click(function(event){
      var detectModal = $('.menu').hasClass('slide');
      if(detectModal){
        event.stopPropagation();
        $('.rotate-icon-top').toggleClass("down");
      }
    });
    /* End icon rotation in navbar section */

    /* User menu in the left content(toggle class to rotate icon on click) */
    function rotate(selector, iconSelector){
      $(selector).click(function(){
        $(iconSelector).toggleClass("down");
      });
    }
    rotate.apply(this,['.top-content .dropdown-toggle', '.rotate-icon-top']);
    rotate.apply(this,['.user-menu .rotate-icon', '.rotate-icon-left']);
    rotate.apply(this,['.user-second-menu .rotate-icon', '.rotate-icon-left']);

    $('.top-content .dropdown').on('hide.bs.dropdown', function () {
      $('.rotate-icon-top').removeClass('down');
    });
    /* End icon rotation in user menu section */

    /* Switcher */
    $('.switch span').click(function(){
      $(this).closest('#pricing').toggleClass('disabled');
    });
    /* End switcher */

    /* Add new item form in Pricing section */
    $('#pricing button').click(function(){
      $('#pricing #sortable').append('<li class="ui-state-default"><form>\
                    <div class="form-group col-lg-8 col-md-12 col-sm-12 col-xs-12">\
                      <i class="fa fa-arrows" aria-hidden="true"></i>\
                      <input type="text" placeholder="Title">\
                    </div>\
                    <div class="form-group input-placeholder col-lg-4 col-md-12 col-sm-12 col-xs-12">\
                      <input type="text" placeholder="Price">\
                      <span class="placeholder">USD</span>\
                      <i class="material-icons close">close</i>\
                    </div>\
                    <div class="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">\
                      <textarea rows="5" placeholder="Description"></textarea>\
                    </div>\
                  </form>\
                  </li>\
        ');
    });
    /* End Adding new item form in Pricing section */

    /* Remove item form in Pricing section */
    $('div').on('click','.close',function(){
      $(this).closest('.ui-state-default').remove();
    });
    /* End Remove item form in Pricing section */

    /* Sort items(drag and drop) */
      $('#sortable').sortable({
        revert: true,
        containment: $('.switcher-content'),
        helper: 'clone',
        cursor: 'pointer',
        opacity: 0.5,
      });
    /* End Sort items(drag and drop) */

  });

})(jQuery);


