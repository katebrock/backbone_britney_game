
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
        $('.container').html('<span class="oops">Oops, you did it again...</span>');
        // <audio src="/assets/wibn.mp3" preload="auto" controls></audio>
        /////////tried 2 different ways to get bspears to play on the loading page:(
        // $(document).ready(function() {
        //   $("#my_audio").get(0).play();
        //     });
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
        $('.container').html('<input class="button" type="button" value="play"><input class="rightbutton" type="button" value="restart">');
      },

      leaderboard: function() {
        $('.container').html('<table class="button" style="width:100%"><tr><td>FIRST</td><td>SECOND</td><td>THIRD</td></tr><tr><td>KMB</td><td>HSJ</td><td>ASS</td></tr>')
      },

      settings: function() {
        $('.container').html('<a href="email" class="button" ><span>CONTACT US</span></a><a href="#" class="button"><span>MAIN MENU</span></a>')
      }
});






//============================//
//      bootstrap             //
//============================//

$('document').ready(function() {
  var router = new Router();
  Backbone.history.start();

});
