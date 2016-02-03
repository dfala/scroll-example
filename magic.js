$(document).ready(function() {

  $(window).scroll(function (event) {

    var integration = $('#customize');
    var top = $('#customize').offset().top - $(document).scrollTop();

    console.log(top, !integration.hasClass('.selected'))

    if (top < 200 && !integration.hasClass('.selected')){
      console.log("Adding class selected");
      $(integration).addClass('selected');
    }
    if (top > 200 && integration.hasClass('.selected')){
      console.log("Removing class selected");
      $(integration).removeClass('selected');
    }


  });

});
