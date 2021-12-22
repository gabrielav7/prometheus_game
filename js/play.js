var play = {
    

    
    create: function(){
        
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        
        
        var platforms;
        var stars;
        var ninja;
               
        var ninjaJumpPower;
        var ninjaJumpPowerText;
        
        var powerbar;
        var powerTween;
        
        var banana;

        var minGap = 300;
        var maxGap = 500;
        var nextPos;

        var topscore = 0;
        var placed;
        var toPlace;
        var lastAsteroid = null;
        var started = false;
        var landed= false;
        var distanceleft;
        var dashButton;
        var bananaCount;
  
        
        this.jumpTimes = 0;
        this.placed = 0;
        
        this.dashsfx = game.add.audio('dash');
        this.jumpsfx = game.add.audio('jump');
        this.jump2sfx = game.add.audio('jump2');
        this.pickupsfx = game.add.audio('pickup');
         this.fallsfx = game.add.audio('fall');
         this.endsfx = game.add.audio('drain');
        this.music = game.add.audio('music');
        
        
        if(this.music != null){
            this.music.stop();
        };
        this.music.play();
        this.music.volume = 0.4;
        this.music.loopFull();

        
        this.backnum = game.rnd.between (1,10);
        
                {var currentlvl;
        
        if(this.currentlvl == null) {
            this.currentlvl = 1;
        }else{
            this.currentlvl = localStorage.getItem("currentlvl");
        };
        
        localStorage.setItem("currentlvl", this.currentlvl);
         
        }                                                                       // actualiza nivel, si es null = 1

        
                this.toPlace= game.rnd.between (15,20) *this.currentlvl;
        console.log ('to place amount'+ this.toPlace);
        
       
               
        {
            
            if (this.backnum >= 5){
        this.background = this.game.add.tileSprite (0, 0, 800*this.toPlace,600, 'background');     //define tiles para nivel
        this.background.tint = Math.random() * 0xffffff;
                };
            if (this.backnum < 6){
        this.background = this.game.add.tileSprite (0, 0, 800*this.toPlace,600, 'background2');     //define tiles para nivel
        this.background.tint = Math.random() * 0xffffff;
                
            };


                    if (this.backnum >= 5){
        this.back2= this.game.add.tileSprite (0, 0, 800*this.toPlace,1200, 'rock'  );     //define tiles para nivel
        
                };
            if (this.backnum < 6){
        this.back2= this.game.add.tileSprite (0, 0, 800*this.toPlace,1200, 'nebula'  );    //define tiles nebula para nivel
        this.back2.tint = Math.random() * 0xffffff;
                
            };

          

        
            if (this.backnum >= 5){
            this.junk= this.game.add.tileSprite (0, 0, 800*this.toPlace,1200, 'junk'  );
            };
            if (this.backnum < 6){
            this.junk= this.game.add.tileSprite (0, 0, 800*this.toPlace,1200, 'junk2'  );
            };
            
           { 
            
                        if (this.backnum == 1){
            this.planet= this.game.add.tileSprite (0, 0, 800*this.toPlace,1200, 'earth'  );
                          
            };
                                  if (this.backnum == 2){
            this.planet= this.game.add.tileSprite (0, 0, 800*this.toPlace,1200, 'mars'  );
                                    
            };
                                  if (this.backnum == 3){
            this.planet= this.game.add.tileSprite (0, 0, 800*this.toPlace,1200, 'moon'  );
                                      
            };
                                  if (this.backnum == 4){
            this.planet= this.game.add.tileSprite (0, 0, 800*this.toPlace,1200, 'saturn'  );
                                     
            };
                                              if (this.backnum == 5){
            this.planet= this.game.add.tileSprite (0, 0, 800*this.toPlace,1200, 'neptune'  );
                                                
            };
            if (this.backnum > 5){
            this.planet = null;
            };
            }                                                             //crea planeta al azar  
            
            

            

                

            {  
            this.backnum = game.rnd.between (1,10);
            this.kx = game.rnd.between(2000,5000)*this.currentlvl;
            this.ky = game.rnd.between (100,300);
        if (this.backnum == 1){
            this.backjunk= game.add.sprite (this.kx,this.ky,  'bjunk'  );
                    };
        if (this.backnum == 2){
            this.backjunk= game.add.sprite (this.kx,this.ky,  'bjunk2'  );
            this.backjunk.tint = Math.random() * 0xffffff;
                    };
        if (this.backnum == 3){
            this.backjunk= game.add.sprite (this.kx,this.ky,  'bjunk3'  );
                    };
        if (this.backnum == 4){
            this.backjunk= game.add.sprite (this.kx,this.ky,  'bjunk4'  );
                    };
        if (this.backnum == 5){
            this.backjunk= game.add.sprite (this.kx,this.ky,  'bjunk5'  );
                    };
        if (this.backnum == 6){
            this.backjunk= game.add.sprite (this.kx,this.ky,  'bjunk6'  );
                    };
        if (this.backnum == 7){
            this.backjunk= game.add.sprite (this.kx,this.ky,  'bjunk7'  );
                    };
        if (this.backnum == 8){
            this.backjunk= game.add.sprite (this.kx,this.ky,  'bjunk8'  );
                    };
         if (this.backnum == 9){
            this.backjunk= game.add.sprite (this.kx,this.ky,  'bjunk9'  );
                    };
        if (this.backnum == 10){
            this.backjunk= game.add.sprite (this.kx,this.ky,  'bjunk10'  );
            
                    };
            
            this.backjunk.rotation = game.rnd.between (0,359);
    }                                                           //crea objeto flotante al azar


    
        
        this.nebula = this.game.add.tileSprite (0, 0, 800*this.toPlace,1200, 'nebula'  );
        this.nebula.tint = Math.random() * 0xffffff;
        this.starsBig = this.game.add.tileSprite (0, 0, 800*this.toPlace,1200, 'star2' );
            this.starsBig.tint =  Math.random() * 0xffffff;
        this.starsSmall = this.game.add.tileSprite (0, 0, 800*this.toPlace,1200, 'star1' );
        this.starsP = this.game.add.tileSprite (0, 0, 800*this.toPlace,1200, 'star3' );
        }  // tiles
       
    
        
        this.platforms = game.add.group();
        this.platforms.enableBody = true;
         //define grupo plataformas
                
        this.lastAsteroid = this.platforms.create( 50 ,330 , 'aste1');         //crea plataforma1
        this.lastAsteroid.body.setCircle(90);
        this.lastAsteroid.body.immovable = true;
        
        var nextPosX;
        var nextPosY;

        this.nextPosX= this.lastAsteroid.x + game.rnd.between(300,400);
        this.nextPosY= 330; 

              
        var banana = game.add.sprite ( 0, 0, 'banana');                    //define pickup
        this.bananas = game.add.group();
        this.bananas.enableBody = true;
        this.bananas.scale.set (1.2,1.2);
        
        banana.fixedToCamera = true;      
        
        
        game.input.onDown.add(this.prepareToJump, this);
        this.dashButton = game.input.keyboard.addKey(Phaser.Keyboard.CONTROL);
        //this.fullButton = game.input.keyboard.addKey(Phaser.Keyboard.F);

        

        
                        

                
        
        this.generatePlatform();
        this.generateEnd();
        this.generateBanana();
        
        {var currentskin;
         this.currentskin = localStorage.getItem("currentskin");
        
        if(this.currentskin == null) {
            this.currentskin = 1;
        }else{
            this.currentskin = localStorage.getItem("currentskin");
        };
        
        localStorage.setItem("currentskin", this.currentskin);
         
        }       //check skin
        
                {var currentdash;
         this.currentdash = localStorage.getItem("currentdash");
        
        if(this.currentdash == null) {
            this.currentdash = 1;
        }else{
            this.currentdash = localStorage.getItem("currentdash");
        };
        
        localStorage.setItem("currentdash", this.currentdash);
         
        }  //chedk dash
        

        {
        
        if(this.currentskin == 1){
        this.ninja = game.add.sprite ( 100,200 ,'player');
            }
        if(this.currentskin == 2){
        this.ninja = game.add.sprite ( 100,200 ,'player2');
            }
        if(this.currentskin == 3){
        this.ninja = game.add.sprite ( 100,200 ,'player3');
            }
            
        game.physics.arcade.enable (this.ninja);        
        this.ninja.body.bounce.y = 0.2;
        this.ninja.anchor.setTo (0.5,0.5);
        this.ninja.body.gravity.y = 800;
        this.ninja.body.collideWorldBounds = false;
        this.ninja.body.setSize(30, 105, 45, 20);      
        
        this.ninja.animations.add ('jump',[8,9,10,11,12],10,false);
        this.ninja.animations.add ('dash',[19,20,21,22,23,24,25],24,false);
        this.ninja.animations.add ('idle',[0,1,2,3,4,5,6,7],10,true);
            
        this.ninja.animations.add ('finish',[41,42,43,44,45,46,47,48,49,49,49,49,49,49,49,49],10,false);
        this.ninja.animations.add ('start',[49,50,51,52,53,49,50,51,52,53,49,50,51,52,53],14,false);
        
        this.ninja.animations.add ('charge',[8],10,false);
        this.ninja.animations.add ('die',[0,1],10,true);
        
           
        game.camera.follow(this.ninja);
        this.ninja.xOrig = this.ninja.x;
        this.ninja.xChange = 0;

        var canJump = true;
        var dashing = false;
        var canDash = true;
        this.started = false;    
        this.canJump = false;
        this.dashing = false;
        this.canDash = false;
            
            {var score;
        //this.score = localStorage.getItem("currentBananas");
            
            if(this.score == null || this.currentlvl == 1){            
        this.score = 0;
                }else{
        //this.score = localStorage.getItem("currentBananas");
                }
            //localStorage.setItem("currentBananas", this.score);
                }
                                                                                                                   //define player
        

            
        var scoreText;        
        this.scoreText = game.add.text(28, 5, 'x ' + this.score, { font: '20px Arial', fill: '#fff' });
        
        this.scoreSpeed = game.add.text(5, 30, 'Speed: '+ this.speed, { font: '14px Arial', fill: '#fff' });
        
        this.topscoreText = game.add.text(300, 20, 'highscore :' +this.topscore, { font: '16px Arial', fill: '#fff' });
        this.distanceText = game.add.text(645, 20, 'Distance: ' +this.distanceleft, { font: '16px Arial', fill: '#fff' });
        }                                                                                                  // define hud
        
        
        {var currentlvl;
        
        if(this.currentlvl == null) {
            this.currentlvl = 1;
        }else{
            this.currentlvl = localStorage.getItem("currentlvl");
        };
        
        localStorage.setItem("currentlvl", this.currentlvl);
         
        }                                                                                               // si lvl = null, es 1
        
        {var speed;
        
        if(this.speed == null) {
            this.speed = 1;
        }else{
            this.speed = localStorage.getItem("speed");
        };
        
        localStorage.setItem("speed", this.speed);
         
        }                                                                                               // si speed = null, es 1
                
        this.ninja.animations.add ('run',[13,14,15,16,17,18],(8*this.speed),true);
                
        this.lvlText = game.add.text(345, 60, 'Level ' + localStorage.getItem("currentlvl"), { font: '14px Arial', fill: '#fff' });
        
        this.topscoreText.fixedToCamera= true;
        this.scoreText.fixedToCamera= true;
        this.scoreSpeed.fixedToCamera= true;
        this.distanceText.fixedToCamera= true;
        this.lvlText.fixedToCamera= true;
        
        this.bananaCount = 0;

        game.world.setBounds (0,0,  Math.floor(game.physics.arcade.distanceBetween(this.ninja, this.hole)),600);
        
                    /*this.starEmitter = game.add.emitter(game.world.centerX, -600, 400);

	this.starEmitter.width = game.world.width;
   this.starEmitter.height = game.world.height;
	this.starEmitter.angle = 90; // uncomment to set an angle for the rain.
        

	this.starEmitter.makeParticles(['star1_shoot', 'star2_shoot','star3_shoot' ]);
        

this.starEmitter.minParticleScale = 0.2;
	this.starEmitter.maxParticleScale = 0.7;

	this.starEmitter.setYSpeed(900, 500);
	this.starEmitter.setXSpeed(-5, 5);

	this.starEmitter.minRotation = 0;
	this.starEmitter.maxRotation = 0;
    this.starEmitter.alpha = 0.8;
        
         this.starEmitter.forEach(function(singleParticle) {singleParticle.animations.add('particleAnim',[0,1,2,3],game.rnd.between(4,8),true);
                                                          
                                                           
                                                   singleParticle.animations.play('particleAnim', 4, true);  });
        this.starEmitter.start(false, 1600, 5, 0);
        this.starEmitter.fixedToCamera = true;*/
        
        


        
        this.startIntro();
        
    },
    
    
    update: function(){

       
        
        this.backjunk.x -= (0.4 * this.speed/2);
    
            
        this.nebula.tilePosition.x -= (1* this.speed/2);
        this.starsSmall.tilePosition.x -= (0.8* this.speed/2);                                                      //desplaza X del tile.
        this.starsBig.tilePosition.x -= (0.5* this.speed/2);
        this.starsP.tilePosition.x -=(0.3* this.speed/2);
        
        this.junk.x -= (0.2* this.speed/2);
        
        this.platforms.setAll('body.velocity.x', -10 * this.speed*3);
        //this.hole.body.velocity.x -= (-10 * this.speed*3);
        this.bananas.setAll('body.velocity.x', -15 * this.speed);
        this.hole.angle += 0.5;
        
        if(this.planet != null){
            this.planet.x -= (0.2* this.speed/2);
            
           
           
            
        };
        if(this.dashing ==null){
            this.dashing = false;
            this.canDash = true;
        };
        if( this.dashing == false){
            this.canDash = true;
        }else{
            
            this.canDash = false;
            this.canJump = false;
        };
        
        //if(this.started == true){
        //this.ninja.body.velocity.x += 1;
        //};
        this.hole.x = this.lastAsteroid.x +600;         
                
        var hitPlatform = game.physics.arcade.collide (this.ninja, this.platforms, this.checkLanding, null, this);      //checkea colision
        var hitEnd = game.physics.arcade.overlap (this.ninja, this.hole, this.finishAnim, null, this);
        var hitBananas = game.physics.arcade.overlap(this.ninja, this.bananas, this.killBananas,null,this);
        
       this.topscoreText.text = 'HIGHSCORE: ' + localStorage.getItem("highscore");
        this.scoreSpeed.text = 'Speed: ' + localStorage.getItem("speed");
        this.scoreText.text = "x "+ this.score;
        
        this.distanceR = Math.floor (game.physics.arcade.distanceBetween(this.ninja, this.hole)/50); 
        
        this.distanceText.text = 'Distance: ' +this.distanceR; 
        
   
        {
        if(localStorage.getItem("highscore") == null) {
            localStorage.setItem("highscore", 0);
        };
     if (this.score > localStorage.getItem("highscore")) 
        { 
            localStorage.setItem("highscore", this.score);
        }
    }                                                               // updatea highscore .
        
        localStorage.setItem("currentlvl", this.currentlvl);
        
        
                {var speed;
        
        if(this.speed == null) {
            this.speed = 1;
        }else{
            this.speed = localStorage.getItem("speed");
        };
        
        localStorage.setItem("speed", this.speed);
         
        }                                                       // updatea speed.
        
        
        
        
      
        
        
        
      if (this.ninja.y > game.height || this.ninja.x < 0 || this.ninja.x > this.hole.x+1200){            
            this.die();
           
        };              // si jugador cae..
        if (this.started== true &&  this.landed == true){
                this.ninja.animations.play('run');
            this.ninja.body.velocity.x = 150;
           
            
            }else if(this.landed == true && this.ninja.body.velocity.x == 0){
                this.ninja.animations.play('idle');
                //this.ninja.velocity.x = 0;
            };
        if (this.dashButton.isDown){
        this.dash();
    };
        
        if (game.input.keyboard.isDown(Phaser.Keyboard.ONE)){
            this.gofull();
        };
        if(this.smokey != null){
            this.smokey.x = this.ninja.x;
            this.smokey.y = this.ninja.y;
        };
        



        
    },
    updateScore: function (score,scoreText){
        //localStorage.setItem("currentBananas", this.score);
       
    },
    
    
    prepareToJump: function (){
       if(this.jumpTimes< 2 && this.dashing == false && this.canJump == true){
           if(this.jumpTimes != 1){
               this.powerbar = game.add.sprite(340,475,'powerbar');
                       this.powerbarBorder = game.add.sprite (340,475, 'powerbarBorder');
                    this.powerbarBorder.fixedToCamera = true;
                       this.powerIcon = game.add.sprite (320,475, 'powerIcon');
                    this.powerIcon.fixedToCamera = true;
               
           }else{
               this.powerbar = game.add.sprite(340,475,'powerbar2');
                this.powerbarBorder = game.add.sprite (340,475, 'powerbarBorder');
               this.powerbarBorder.fixedToCamera = true;
                this.powerIcon = game.add.sprite (320,475, 'powerIconF');
                this.powerIcon.fixedToCamera = true;
               
           };
        //game.camera.shake(0.0005,);   
           
        this.ninja.animations.play('charge');
        this.smokey = game.add.sprite (this.ninja.x,this.ninja.y,'smokey');
        this.smokey.anchor.setTo (0.5,0.5,);
        this.smokey.animations.add ('smoke',[0,1,2,3],24,true);
        this.smokey.animations.play ('smoke');

        this.powerbar.fixedToCamera = true;
        this.powerbar.width = 0;

        if(this.currentskin == 1){   
        this.powerTween = game.add.tween(this.powerbar).to({ width:100 }, 1000, "Linear",true);
            }
           
           if(this.currentskin ==2){
        this.powerTween = game.add.tween(this.powerbar).to({ width:100 }, 800, "Linear",true);
           }
           
        if(this.currentskin ==3){
        this.powerTween = game.add.tween(this.powerbar).to({ width:100 }, 600, "Linear",true);
           }
           
           
        this.powerTween.onComplete.add(this.changeTween, this);
        
        
        //this.powerTween.onComplete.add(this.maxBar, this);
        game.input.onUp.add(this.jump, this);            
       };
    },                                       // crea barra de impulso
    
    changeTween: function(){
        if(this.jumpTimes == 0) {
            this.powerbarBorder.destroy();
            this.powerIcon.destroy();
            
            this.powerbarBorder = game.add.sprite (340,475, 'powerbarBorderFull');
            this.powerIcon = game.add.sprite (320,475, 'powerIcon');
            this.powerIcon.fixedToCamera = true;
            this.powerbarBorder.fixedToCamera = true;
        //this.emitter2 = game.add.emitter(this.powerbarBorder.x+100, 475, 250);

        //this.emitter2.makeParticles('pickstar', [0], 5, false, false);      

        //this.emitter2.start(true, 2000, null, 30);
        
        }else{
            if(this.jumpTimes == 1){
            this.powerbarBorder.destroy();
                this.powerIcon.destroy();
                this.powerbarBorder = game.add.sprite (340,475, 'powerbarBorderFull2');
                this.powerIcon = game.add.sprite (320,475, 'powerIconF');
                this.powerIcon.fixedToCamera = true;
                this.powerbarBorder.fixedToCamera = true;
        //this.emitter2 = game.add.emitter(this.powerbarBorder.x+100, 475, 250);

        //this.emitter2.makeParticles('pickstar', [0], 5, false, false);      

        //this.emitter2.start(true, 2000, null, 60);
        
                
            };
            
        };
        
        
    },
    
    jump: function(){
        this.started = true;
          this.ninjaJumpPower= -this.powerbar.width*3-100;
        this.smokey2 = game.add.sprite (this.ninja.x,this.ninja.y,'smokey');
        this.smokey2.anchor.setTo (0.5,0.5,);
        this.smokey2.animations.add ('smoke',[4,5,6,7,8,9],24,false);
        this.smokeAnim = this.smokey2.animations.play ('smoke');
        this.smokeAnim.onComplete.add (this.destroySprite, this);
          this.powerbar.destroy();
          this.powerbarBorder.destroy();
          this.powerIcon.destroy();
          this.smokey.destroy();
          //this.emitter2.destroy();
         
        
          this.ninja.body.velocity.y = this.ninjaJumpPower*2;
          this.ninja.body.velocity.x = -this.ninjaJumpPower / 1.5;
        
        if(this.jumpTimes == 0){
        this.jumpsfx.play();
        }else{
            this.jump2sfx.play();
        };
 
        
          //this.nebula.tilePosition.x -= -this.ninja.body.velocity.y /50 ;
          //this.starsSmall.tilePosition.x -= -this.ninja.body.velocity.y /20;        
          //this.starsBig.tilePosition.x -= -this.ninja.body.velocity.y /100;
              
          this.jumpTimes++;
          
          this.powerTween.stop();
          this.landed =false;
                   
          game.input.onUp.remove(this.jump, this);
          this.ninja.animations.play('jump');
     },                                                 // genera el salto
    
    dash: function(dashing,canJump){
        if(this.dashing == false && this.landed == false && this.canDash == true && this.bananaCount >= 3){
        this.canJump = false;
        this.dashing = true;
        this.canDash = false;
        this.ninja.body.allowGravity = false;
        this.ninja.body.velocity.y =0;

        
        //this.ninja.body.immovable = true;
        this.demitter = game.add.emitter(this.ninja.x, this.ninja.y, 250);

        this.demitter.makeParticles('pixStar', [0], 8, false, false);
        this.demitter.minParticleScale = 0.2;
        this.demitter.maxParticleScale = 0.5;
        

        this.demitter.start(true, 1000, null, 12);
            
        if(this.currentdash ==1){
        game.add.tween(this.ninja.body).to( { x: this.ninja.body.x +400 }, 200, Phaser.Easing.Linear.None, true);
        }
        
        if(this.currentdash == 2){
        game.add.tween(this.ninja.body).to( { x: this.ninja.body.x +600 }, 200, Phaser.Easing.Linear.None, true);
        }
        if(this.currentdash == 3){
        game.add.tween(this.ninja.body).to( { x: this.ninja.body.x +800 }, 150, Phaser.Easing.Linear.None, true);
        }
          
        this.dashsfx.volume = 0.5;  
        this.dashsfx.play();
        this.jumpTimes--;  
 
        this.dashanim = this.ninja.animations.play('dash');
        this.dashanim.onComplete.add(this.cleanDash, this);
             };
    },
    cleanDash: function(dashing,canJump){
        this.bananaCount -= 3;
        this.ninja.body.allowGravity = true;
        
        //this.ninja.body.immovable = false;
        this.dashing = false;
        this.canJump = true;
        this.canDash = true;
    },
    
    generatePlatform: function(nextPosX,nextPosY){
        
        for(this.placed = 0;this.placed <this.toPlace;this.placed++){
        
        this.n= game.rnd.between(0,3);
               
        if (this.n <1){
        this.lastAsteroid = this.platforms.create( this.nextPosX, this.nextPosY, 'aste2');
        this.lastAsteroid.body.immovable = true;
        this.lastAsteroid.body.setCircle(90);    
        
        
             
        }else{
            if (this.n <2){
        this.lastAsteroid = this.platforms.create( this.nextPosX,this.nextPosY, 'aste3');
        this.lastAsteroid.body.immovable = true;
        this.lastAsteroid.body.setCircle(90);          
        
        
        }else{
            if(this.n <3){
        this.lastAsteroid = this.platforms.create( this.nextPosX, this.nextPosY, 'aste1');        
       this.lastAsteroid.body.immovable = true;
       this.lastAsteroid.body.setCircle(90);  
        
                 
                };
            };

        };
                
        
        //this.lastAsteroid = this.platforms.create( this.nextPosX, this.nextPosY, 'aste2');
        //this.lastAsteroid.body.immovable = true;

        this.nextPosX = this.lastAsteroid.x + game.rnd.between(300,600);
        this.nextPosY = game.rnd.between(250,450);
        //console.log ('next posY is' + this.nextPosY);
        //this.placed++;
        // console.log('nextpos:'+ this.nextPosX);
        
            };
        
    },                   //genera plataformas
    
   
    generateEnd: function(){
        if(this.placed == this.toPlace){
            

            this.hole = game.add.sprite ( this.lastAsteroid.x, 350 ,'hole');


            this.hole.alpha = 0.96;
            game.physics.arcade.enable (this.hole); 
             
            this.hole.anchor.setTo (0.5,0.5);
            this.hole.body.setSize(400, 400, 60, 80);
            this.hole.body.setCircle(180);
            
            this.hole.x = this.lastAsteroid.x +600;
        };
        
    },
    
    gofull: function() {

    if (game.scale.isFullScreen)
    {
        game.scale.stopFullScreen();
        console.log('nofull');
    }
    else
    {
        game.scale.startFullScreen(false);
        console.log('full');
    }

},
    
    generateBanana: function () {
        this.nextBPosX = 400;
        this.nextBPosY = 200;
        this.bananas.enableBody = true;
        
         while(this.nextBPosY < game.height  && this.nextBPosX < this.lastAsteroid.x ){
             var lastBanana = this.bananas.create( this.nextBPosX, this.nextBPosY, 'banana');
             var banantween;
             this.bananTween = game.add.tween(lastBanana).to({y: lastBanana.y + 12}, 800, Phaser.Easing.Sinusoidal.InOut).yoyo(true) .loop() .start();
             //this.Tween2 = game.add.tween(lastBanana).to( { y: lastBanana.y +12 },0, "Linear", true, 0, 0, true) .start();
             //var bubb = game.add.sprite (this.nextBPosX, this.nextBPosY, 'bubb');
            
             
             this.anim = lastBanana.animations.add ('pickup', [0,1,2,3,4],10,false);
             this.anim.onComplete.add(this.destroyPickup, this);
             
             
             

             
             this.nextBPosX += game.rnd.between (200,500);
             this.nextBPosY = game.rnd.between (50,300);
         
             
         }
        
    },                                   //genera bananas
    startIntro: function(){

        this.ninja.body.allowGravity = false;
        this.startAnim = this.ninja.animations.play('start');
        this.startAnim.onComplete.add(this.startGame,this); 
    },
    startGame: function(){
        this.canJump = true;
        this.dashing = false;
        this.canDash = false;
      this.ninja.body.allowGravity = true;
      this.ninja.animations.play('idle');
    },
    
    killBananas: function(ninja,lastBanana){
        
        this.pickupsfx.volume = 0.2;  
        this.pickupsfx.play();
        lastBanana.play('pickup',10,false);        


        
    },                          //animacion banana,al terminar llama destroy 
    
    destroyPickup: function (lastBanana){
        lastBanana.destroy();
        this.bananaCount ++;
        this.emitter = game.add.emitter(this.ninja.x, this.ninja.y, 250);

        this.emitter.makeParticles('pixStar', [0], 8, false, false);
        this.emitter.minParticleScale = 0.1;
        this.emitter.maxParticleScale = 0.3;
        

        this.emitter.start(true, 2000, null, 10);
        this.score += 100;
        this.updateScore();
        
    },
    
    checkLanding: function (ninja,lastAsteroid) {
        
        
        if (this.landed == null){
            this.landed =false;
        };
        
        if (this.landed ==false){
        
        this.jumpTimes = 0;
        this.canJump = true;
        this.dashing = false;
        this.canDash = false;
        this.ninja.body.allowGravity = true;
        //this.ninja.animations.play('run');
        this.n = game.rnd.between (1,10); 
        
        if (this.n >=3){
            
            game.camera.shake(0.005, 200);
            lastAsteroid.body.gravity.y = 100;
            this.fallsfx.volume = 0.2;  
            this.fallsfx.play();
            this.fallsmoke = game.add.sprite(lastAsteroid.x-60, lastAsteroid.y-20 , 'fallsmoke');
            this.fallsmoke.animations.add ('fall',[0,1,2,3,4,5,6],10,false);
            this.fallanim = this.fallsmoke.animations.play ('fall');
            this.fallanim.onComplete.add(this.destroySprite, this);
      
        };


        this.landed = true;
        
        
            };
        
    },                     //resetea salto
    finishAnim: function(){
        this.music.stop();
        this.endsfx.volume = 0.5;  
        this.endsfx.play();
        this.ninja.body.allowGravity = false;
        this.candash = false;
        this.canJump = false;
        this.ninja.body.velocity.y =0;
        this.finishanim = this.ninja.animations.play('finish');
        this.finishanim.onComplete.add(this.lvlClear,this);

    },
    
    lvlClear: function(currentlvl,speed){
        
        this.music.stop();
        //localStorage.setItem("currentBananas", this.score);
        game.state.start('shoot1', true, false, this.score);
        
    },
    
    render: function(hole,lastAsteroid) {

    //game.debug.body(this.hole);
    //game.debug.body(this.lastAsteroid);
    //game.debug.body(this.ninja);

},
    
    destroySprite: function(obj){
        obj.destroy();
    },
    
    die: function (){
        this.music.stop();
        this.currentlvl = null;
        localStorage.setItem("currentlvl", this.currentlvl);
        this.score = null;
        this.speed = null;
        localStorage.setItem("speed", this.speed);
        this.landed = null;
        //game.cache = new Phaser.Cache(game);
        //game.load.reset();
        //game.load.removeAll();
        
        game.state.start('end');
    
    }


};