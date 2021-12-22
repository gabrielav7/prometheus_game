var boot = {
preload: function(){
    
    
       game.load.image('loadingbar', 'assets/img/loadingbar.png');

       game.load.spritesheet ('player','assets/img/juan_sheet.png',128,128);

},
create:function(){
    
    game.state.start('preloader', true, false, 1, true);

}
};