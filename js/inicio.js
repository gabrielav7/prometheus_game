var inicio = {
   

    
    
    create:function(){ 
        game.add.image(0,0,'fondoTitle');
       
        //game.add.sprite(465,315, 'button');
            this.Intro = game.add.audio('music2');
            this.Intro.play();
            this.Intro.loopFull();
            

        
        //this.Intro.loopFull();
        

        
        
        
        this.ninja = game.add.sprite ( 100,200 ,'player');
        this.ninja.animations.add ('dash',[19,20,21,22,23,24,25],12,false);
        this.ninja.animations.play('dash');
        this.starttween = game.add.tween(this.ninja).to( { x: this.ninja.x +400 }, 200, Phaser.Easing.Linear.None, true) .start();
        this.starttween.onComplete.add(this.flash, this);
    var emitter = game.add.emitter(game.world.centerX, 0, 400);

	emitter.width = game.world.width;
	// emitter.angle = 30; // uncomment to set an angle for the rain.

	emitter.makeParticles('pixStar');
        

	emitter.minParticleScale = 0.1;
	emitter.maxParticleScale = 0.5;

	emitter.setYSpeed(500, 300);
	emitter.setXSpeed(-5, 5);

	emitter.minRotation = 0;
	emitter.maxRotation = 0;

	emitter.start(false, 1600, 5, 0);
     game.add.image(0, 0, 'titleText');
        
            this.botonPlay = game.add.button(game.world.centerX-85, game.world.centerY+40, 'button', function() {
                this.Intro.stop();
                 this.Intro.destroy();
            this.flash();    
            game.state.start('play', true, false, 1, true);
            //this.Boton.play();
          
        }, this, 1, 2, 0);
                    this.botonTutorial = game.add.button(game.world.centerX-105, game.world.centerY+80, 'tutobutton', function() {
                this.Intro.stop();
                         this.Intro.destroy();
            this.flash();

            game.state.start('tutorial', true, false, 1, true);
            //this.Boton.play();
            //this.Intro.stop();
        }, this, 1, 2, 0);
                            this.botonSurvival = game.add.button(game.world.centerX-120, game.world.centerY+120, 'survivalbutton', function() {
                this.Intro.stop();
                                 this.Intro.destroy();
            this.flash();                    
            game.state.start('survival', true, false, 1, true);
            //this.Boton.play();
            //this.Intro.stop();
        }, this, 1, 2, 0);
        
                    this.botonShop = game.add.button(game.world.centerX-85, game.world.centerY+160, 'shopbutton', function() {
                this.Intro.stop();
                         this.Intro.destroy();
 game.state.start('shop', true, false, 1, true);
            //this.Boton.play();
            //this.Intro.stop();
        }, this, 1, 2, 0);
                            this.botonTutorial = game.add.button(game.world.centerX-70, game.world.centerY+240, 'creditsbutton', function() {
               this.Intro.stop();
                                 this.Intro.destroy();
            game.state.start('credits', true, false, 1, true);
            //this.Boton.play();
            //this.Intro.stop();
        }, this, 1, 2, 0);
    
    },
    flash: function(){
         game.camera.flash(0xffffff, 200);
        
    },
    
    update: function(){
        
    }
    
    
    
    
    
    
};