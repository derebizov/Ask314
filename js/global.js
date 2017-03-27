$(function(){
    // switch navbar dropdown behaviour
    var setNavbarGroupBehaviour = function() {
        $('.navbar-nav .dropdown').addClass('open');
    }
    
    // init navbar dropdown
    $('.navbar-nav .dropdown-toggle').dropdown();

    // native navbar behaviour changed
    $('.navbar-nav .dropdown').on('shown.bs.dropdown', function (e) {
        //console.log('shown.bs.dropdown');
        //e.preventDefault();

        setNavbarGroupBehaviour();
    });
    $('.navbar-nav .dropdown').on('hide.bs.dropdown', function (e) {
        //console.log('hide.bs.dropdown');
        //e.preventDefault();
    });

    // ?
    $('.navbar-nav .dropdown-menu').on('click', function (e) {
        e.stopPropagation()
    })

    $('#navbarResponsive').on('show.bs.collapse', function () {
        //console.log('show.bs.collapse');
        setNavbarGroupBehaviour = function() {
            return false;
        }
        $('body').addClass('navbar-responsive-open');
    });

    // mobile scroll behaviour then navbar is open
    $('#navbarResponsive').on('hide.bs.collapse', function () {
        console.log('hide.bs.collapse');
        setNavbarGroupBehaviour = function() {
            $('.navbar-nav .dropdown').addClass('open');
        }
    });
    $('#navbarResponsive').on('hidden.bs.collapse', function () {
        console.log('hidden.bs.collapse');
        $('body').removeClass('navbar-responsive-open');
    });

    // datepicker for tools of center layout block
    $('.tools .datepicker').datepicker({
        language: "ru"
    });

    //bundle .active on hover
    $('.tree-leaves').on('mouseenter', '[data-toggle="tab"]', function (e) {
      e.preventDefault()
      $(this).tab('show')
    })
});