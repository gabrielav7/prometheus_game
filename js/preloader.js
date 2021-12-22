var preloader = {
preload: function(progress){
    
    this.logo = this.add.sprite(this.game.world.centerX,250,'player');
    this.logo.animations.add ('run',[13,14,15,16,17,18],12,true);
    this.logo.anchor.setTo(0.5);
    this.logo.animations.play ('run');
    this.logo2 = this.add.sprite (this.game.world.centerX-50,this.game.world.centerY+90,'loadingbar');
    
    
    //this.preloadBar = this.add.sprite(this.game.world.centerX,this.game.world.centerY+120 ,'player');
    this.load.setPreloadSprite(this.logo2);
     this.text = game.add.text(this.game.world.centerX-50,this.game.world.centerY+50, 'Loading', { fill: '#ffffff' });
    this.text.setText("Loading ...");
    
        {
        game.load.image('fondoTitle', 'assets/img/menu/title.png' );
        game.load.image('titleText', 'assets/img/menu/titleText.png' );
        game.load.image('pixStar', 'assets/img/pixelStar.png');
        
        game.load.spritesheet ('button', 'assets/img/menu/button.png', 152,34);
        game.load.spritesheet ('tutobutton', 'assets/img/menu/tutobutton.png', 200,34);
        game.load.spritesheet ('survivalbutton', 'assets/img/menu/buttonsurvival.png', 225,34);
        game.load.spritesheet ('shopbutton', 'assets/img/menu/shopbutton.png', 150,34);
        game.load.spritesheet ('backbutton', 'assets/img/menu/backbutton.png', 80,32);
        game.load.spritesheet ('nextbutton', 'assets/img/menu/nextbutton.png', 80,32);
        
        game.load.spritesheet ('creditsbutton', 'assets/img/menu/creditsbutton.png', 120,34);
        game.load.spritesheet ('player','assets/img/juan_sheet.png',128,128);
        
                  } //menu
        
        {

        game.load.spritesheet ('button', 'assets/img/menu/button.png', 58,58);
        game.load.image ('background','assets/img/fondolv1.png');
        game.load.image ('background2','assets/img/fondolv3.png');
        game.load.image ('nebula','assets/img/fondolv2.png');
        game.load.image ('star1','assets/img/starfield1.png');


        game.load.image ('star2','assets/img/starfieldbig.png');
        game.load.image ('star3','assets/img/starfieldvac.png');
        game.load.image ('rock','assets/img/debris.png'); 
        game.load.image ('junk','assets/img/debris2.png');
        game.load.image ('junk2','assets/img/debris3.png'); 
        game.load.image ('powerbar','assets/img/powerbar.png');
        game.load.image ('powerbar2','assets/img/powerbar2.png');
        game.load.image ('powerIcon','assets/img/thunder.png');
        game.load.image ('powerIconF','assets/img/thunder2.png'); 
        game.load.image ('powerbarBorder','assets/img/powerbarBorder.png');
        game.load.image ('powerbarBorderFull','assets/img/powerbarBorderfull.png');
         game.load.image ('powerbarBorderFull2','assets/img/powerbarBorderfull2.png');
        game.load.image ('aste1','assets/img/asteroid1.png');
        game.load.image ('aste2','assets/img/asteroid2.png');
        game.load.image ('aste3','assets/img/asteroid3.png');
        game.load.image ('hole','assets/img/blackhole.png');
        game.load.image ('earth','assets/img/earth.png');
         game.load.image ('mars','assets/img/mars.png');
         game.load.image ('moon','assets/img/moon.png');
         game.load.image ('neptune','assets/img/neptune.png');
         game.load.image ('saturn','assets/img/saturn.png');
         game.load.image ('bjunk','assets/img/junk.png');
        game.load.image ('bjunk2','assets/img/junk2.png');
        game.load.image ('bjunk3','assets/img/junk3.png');
        game.load.image ('bjunk4','assets/img/junk4.png');
        game.load.image ('bjunk5','assets/img/junk5.png');
        game.load.image ('bjunk6','assets/img/junk6.png');
        game.load.image ('bjunk7','assets/img/junk7.png');
        game.load.image ('bjunk8','assets/img/junk8.png');
        game.load.image ('bjunk9','assets/img/junk9.png');
        game.load.image ('bjunk10','assets/img/junk10.png');
        //game.load.image ('bubb','assets/img/bbub.png');
        game.load.spritesheet ('player','assets/img/juan_sheet.png',128,128);
        game.load.spritesheet ('player2','assets/img/juan_sheet2.png',128,128);
        game.load.spritesheet ('player3','assets/img/juan_sheet3.png',128,128);
        game.load.spritesheet ('smokey','assets/img/smokey.png',128,128);
        game.load.spritesheet ('fallsmoke','assets/img/fall_sheet.png',256,266);
        //game.load.spritesheet ('holey','assets/img/blackhole_sheet.png',512,512);
        //game.load.image ('trail','assets/img/trail.png');
        game.load.audio('dash', 'assets/audio/sfx/dash.ogg');
        game.load.audio('jump', 'assets/audio/sfx/jump1.ogg');
        game.load.audio('jump2', 'assets/audio/sfx/jump2.ogg');
        game.load.audio('pickup', 'assets/audio/sfx/pickup.ogg');
        game.load.audio('fall', 'assets/audio/sfx/fall.ogg');
        game.load.audio('drain', 'assets/audio/sfx/drained.ogg');
        game.load.audio('music', 'assets/audio/space_coffee_new.ogg');
        game.load.audio('music2', 'assets/audio/monkey_shot_into_space.ogg');
        game.load.audio('music_end', 'assets/audio/end_game.ogg');
            
        
        
        game.load.spritesheet ('banana','assets/img/bananas.png', 25,32); 
            }// play
    
        {
        
        game.load.image ('background_shoot','assets/img/shoot1/fondo1.png');
        game.load.image ('waves','assets/img/shoot1/fondo2.png');
        game.load.image ('star_shoot','assets/img/shoot1/star.png');
        game.load.image ('starB','assets/img/shoot1/starB.png');
        game.load.image ('cwave','assets/img/shoot1/colorwave.png');
        
        game.load.image ('bullet','assets/img/bullet1.png');
        game.load.image ('bullet2','assets/img/bullet2.png');
        game.load.image ('bullet3','assets/img/bullet3.png');

        game.load.spritesheet ('baddie','assets/img/baddie_sheet.png',128,128);
        game.load.spritesheet ('baddie2','assets/img/baddie2_sheet.png',128,128);
        game.load.spritesheet ('baddie3','assets/img/baddie3_sheet.png',128,128);
        game.load.spritesheet ('baddie4','assets/img/baddie4_sheet.png',128,128);
        
        game.load.audio('dash', 'assets/audio/sfx/dash.ogg');
        game.load.audio('jump', 'assets/audio/sfx/jump1.ogg');
        game.load.audio('shoot', 'assets/audio/sfx/shoot.ogg');
        game.load.audio('pickup', 'assets/audio/sfx/weep.ogg');
        
        game.load.spritesheet ('star1_shoot','assets/img/star1_sheet.png',16,16);
        game.load.spritesheet ('star2_shoot','assets/img/star2_sheet.png',16,16);
        game.load.spritesheet ('star3_shoot','assets/img/star3_sheet.png',16,16);
    } // SHOOT
    
    {
      
    game.load.image ('background_shop','assets/img/menu/shop.png');
    
    game.load.spritesheet ('suit1','assets/img/menu/shop/evasuit.png', 100,100);
     game.load.spritesheet ('suit2','assets/img/menu/shop/meteor.png', 100,100);
     game.load.spritesheet ('suit3','assets/img/menu/shop/prometheus.png', 100,100);
    game.load.spritesheet ('praesuit','assets/img/menu/shop/preator.png', 100,100);
    game.load.spritesheet ('engineer','assets/img/menu/shop/engineer.png', 100,100);
    game.load.spritesheet ('shot1_shop','assets/img/menu/shop/blast1.png', 100,100);
  game.load.spritesheet ('shot2_shop','assets/img/menu/shop/blast2.png', 100,100);
    game.load.spritesheet ('shot3_shop','assets/img/menu/shop/blast3.png', 100,100);
    game.load.spritesheet ('boost','assets/img/menu/shop/dash1.png', 100,100);
    game.load.spritesheet ('boost2','assets/img/menu/shop/dash2.png', 100,100);
    game.load.spritesheet ('rate','assets/img/menu/shop/rate1.png',100,100);
         game.load.spritesheet ('rate2','assets/img/menu/shop/rate2.png',100,100);

    }//shoP
    
        
   {
        
       game.load.image ('background_end','assets/img/fondoend.png');
        game.load.image ('nebula_end','assets/img/fondolv2.png');
    
        game.load.image ('star1_end','assets/img/starfield1.png');
        game.load.image ('star2_end','assets/img/starfieldbig.png');
        game.load.image ('star3_end','assets/img/starfieldvac.png');
        
        
        
    }// end
    
    {

    
    game.load.image ('credits','assets/img/menu/credits.png');
    game.load.image ('credits_back','assets/img/menu/credits_back.png');
   

}// credits
    

},
create:function(){
    game.camera.flash(0xffffff, 200);
    game.state.start('inicio', true, false, 1, true);

},
    update:function(){
    
},
    render:function(){
 
    }
};