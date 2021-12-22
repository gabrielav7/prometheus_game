var end = {

    
    create: function() {
        
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        game.world.setBounds (0,0, 800,600);
        
        
        this.music = game.add.audio('music_end');
        this.music.play();
        this.music.volume = 1;
        this.music.loopFull();
        
        game.camera.flash(0x000000, 1500);
        
        var speed;  
        this.speed = 1;
        localStorage.setItem("speed", this.speed);

        var score;        
        this.score = null;
        localStorage.setItem("currentBananas", this.score);
        localStorage.removeItem("currentBananas");
        
         
     
        
        var currentlvl;
        this.currentlvl = 1;
        localStorage.setItem("currentlvl", this.currentlvl);     
        
        this.back = game.add.image(game.world.centerX,game.world.centerY,'background_end');
        this.back.anchor.setTo(0.5, 0.5);
        this.back.scale.setTo(1.7,1.7);
        
                            this.hemitter = game.add.emitter(game.world.centerX, game.world.centerY, 250);
            this.hemitter.makeParticles('pixStar'); 
        this.hemitter.alpha = 0;
        var holetween = game.add.tween(this.hemitter).to( { alpha: 100 }, 1200, Phaser.Easing.Linear.None, true, 0, 4000, true);
            this.hemitter.minParticleSpeed.setTo(-400, -400);
            this.hemitter.maxParticleSpeed.setTo(400, 400);
            this.hemitter.minParticleScale = 0.2;
            this.hemitter.maxParticleScale = 0.4;
            this.hemitter.gravity = 0;
            this.hemitter.start(false, 4000, 15);

        this.nebu = game.add.image(game.world.centerX,game.world.centerY,'nebula_end');
        this.nebu.anchor.setTo(0.5, 0.5);
        this.nebu.scale.setTo(2,2);
        
        this.starB = game.add.image(game.world.centerX,game.world.centerY, 'star1_end');
        this.starB.anchor.setTo(0.5, 0.5);
        this.starB.scale.setTo(2,2);
        
        this.starF = game.add.image(game.world.centerX,game.world.centerY, 'star2_end');
        this.starF.anchor.setTo(0.5, 0.5);
        this.starF.scale.setTo(0.5,0.5);
        
        this.starV = game.add.image(game.world.centerX,game.world.centerY, 'star3_end');
        this.starV.anchor.setTo(0.5, 0.5);
        this.starV.scale.setTo(1.2,1.2);
        

        

        
    this.emitter = game.add.emitter(game.world.centerX, game.world.centerY, 250);

    this.emitter.makeParticles('banana', [0], 20, false, false);      

    this.emitter.start(false, 5000, 1);
        this.emitter.gravity.y = game.rnd.between( -4,4) ;
        this.emitter.gravity.x = game.rnd.between( -4,4) ;
        
        
        
        this.ninja = game.add.sprite ( 400,300,'player');        //define player
        this.ninja.anchor.setTo(0.5,0.5);
        game.physics.arcade.enable (this.ninja); 
        //this.ninja.body.immovable =true;
        this.ninja.body.bounce.y = 1;
        this.ninja.body.bounce.x = 1;
        this.ninja.body.gravity.y = 0;
        this.ninja.body.collideWorldBounds = true;
        this.ninja.animations.add ('die',[8,9,9,8],15,true);
        this.ninja.animations.play('die');
        
        
        
        
        
            this.botonMenu = game.add.button(game.world.centerX-40, game.world.centerY+240, 'backbutton', function() {
            this.music.stop();
            this.music.destroy();
            game.state.start('inicio', true, false, 1, true);
            //this.Boton.play();
            //this.Intro.stop();
        }, this, 1, 2, 0);
        

    },
    
    update: function(){
        
        this.ninja.tint = Math.random() * 0xffffff;
        this.ninja.angle += 6;
        this.ninja.body.velocity.x += game.rnd.between (-4,4);
        this.ninja.body.velocity.y += game.rnd.between (-4,4);
        this.back.angle += 0.5;
        this.nebu.angle += 0.8;
        this.starF.angle += 1;
        this.starB.angle += 2;
        this.starV.angle += 0.8;
        this.emitter.x = this.ninja.x;
        this.emitter.y = this.ninja.y;
        this.hemitter.x = this.ninja.x;
        this.hemitter.y = this.ninja.y;
        this.hemitter.tint = Math.random() * 0xffffff;
        this.emitter.tint = Math.random() * 0xffffff;
        //var hitBounds = game.physics.arcade.collide (this.emitter);
        
    }
    
    
};