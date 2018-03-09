// Velocity animations to use these include the velocity library: <script src="assets/libraries/velocity/velocity.js"></script>


// $('.v-slide-down').waypoint({
//   handler: function(direction) {
//     var veloSlideDown = $('.v-slide-down');
//     veloSlideDown.velocity("slideDown", {
//       duration: 1500
//     });
//   }
// });


$(document).ready(function() {
  $('.v-slide-down').waypoint({
    handler: function(direction) {
      $('.v-slide-down').velocity("slideDown", {
        duration: 1500
      })
    },
    offset: '50%'
  });
});

// var veloSlideDown = $('.v-slide-down');
// veloSlideDown.velocity("slideDown", {
//   duration: 1500
// });
