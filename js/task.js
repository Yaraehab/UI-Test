  $(document).ready(function(){

      //function to show if window > 768 and hide if less
      var displayNav = function(){
        var width= $(window).width();
        if(width<768){
          $(".filter").hide(500);
        }else{
          console.log($('.filter'));
          $(".filter").show(500);
        };
      }


      //Set initial state
      displayNav();
      //subscribe to resize event
      $(window).on('resize',function(evt){

        //set navigation state on every resize new
        displayNav();
      });
    });