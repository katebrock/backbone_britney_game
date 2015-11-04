// var game= Backpone.view.extend({
//   tagName:
//   className:
// })



var Router= Backbone.Router.extend({
  routes: {
    ''            : 'main',
    'menu'        : 'menu',
    'screen'      : 'screen',
    'leaderboard' : 'leaderboard',
    'settings'     : 'settings'
    //url routes//  //function names//
  },
      main: function(){
        $('.container').html("Loading...");
        setTimeout(function(){
          window.location.href="#menu"
          $('.load').css({
            "display": "none"            //cannot figure out why it wont desplay none//
          })
          },4000);
      },
      menu: function(){
        // $('body').html('<a href="#"><p>you are so cool</p>');
        var menuPage = $('#menuPage').html();
        // console.log(menuPage);
        $('.container').html(menuPage);

      },
      screen: function(){
        $('.container').html('<a href="#screen"><p>wow what a day!</p>');
      },

      leaderboard: function() {
        $('.container').html('<a href="#leaderboard"><p>this is a leaderboard</p>')
      },

      settings: function() {
        $('.container').html('<a href="#setting"><p>this is settings</p>')
      }
});






//============================//
//      bootstrap             //
//============================//

$('document').ready(function() {
  var router = new Router();
  Backbone.history.start();

});
