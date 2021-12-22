var credits= {


create:function(){
    
           game.physics.startSystem(Phaser.Physics.ARCADE);
        
        game.world.setBounds (0,0, 800,600);
    
        var emitter = game.add.emitter(game.world.centerX, 0, 400);

	emitter.width = game.world.width;
	// emitter.angle = 30; // uncomment to set an angle for the rain.

	emitter.makeParticles('pixStar');
        

	emitter.minParticleScale = 0.1;
	emitter.maxParticleScale = 0.5;

	emitter.setYSpeed(300, 100);
	emitter.setXSpeed(-5, 5);

	emitter.minRotation = 0;
	emitter.maxRotation = 0;

	emitter.start(false, 1600, 5, 0);
    
    this.back = game.add.image(game.world.centerX,game.world.centerY,'credits_back');
    this.back.alpha= 0.5;
    this.back.anchor.setTo(0.5, 0.5);
    this.back.scale.setTo(1.5,1.5);
    this.backTween = game.add.tween(this.back).to({width:100}, 800, Phaser.Easing.Sinusoidal.InOut).yoyo(true) .loop() .start();
     this.backTween2 = game.add.tween(this.back).to({height:100}, 400, Phaser.Easing.Sinusoidal.InOut).yoyo(true) .loop() .start();
    
    this.letters = game.add.image(0,0, 'credits');
    
    this.botonMenu = game.add.button(game.world.centerX-40, game.world.centerY+240, 'backbutton', function() {
    game.state.start('inicio', true, false, 1, true);

        }, this, 1, 2, 0);

},
update: function(){
    
    this.back.angle += 0.5;
   

}
};