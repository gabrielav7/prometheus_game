var survival ={    

    
    create: function (){
        
        
        
        game.world.setBounds(0, 0, 800, 600);
        
        var bullets;
        var bulletTime = 0;
        
        
        var total = 0;
        
        var weapon;
        var enemy;
        
        this.bulletTime = 0;
        var flipped = false;
        this.flipped = false;
        var canShoot = true;
        this.canShoot =true;
        var canFlip = true;
        this.canFlip = true;
        var canJump = true;
        this.canJump = true;
        
        var wavetext;
        var wavetimer;
        
        this.dashsfx = game.add.audio('dash');
        this.jumpsfx = game.add.audio('jump');
        this.shootsfx = game.add.audio('shoot');
        this.pickupsfx = game.add.audio('pickup');
        this.music = game.add.audio('music2');
        
        
        this.music.play();
        this.music.volume = 0.4;
        this.music.loopFull();
        
        
        this.flipButton = game.input.keyboard.addKey(Phaser.Keyboard.SHIFT)
        this.fireButton = game.input.keyboard.addKey(Phaser.Keyboard.CONTROL);
        game.input.onDown.add(this.jump, this);
        
        this.background = this.game.add.tileSprite (0, 0, 800,600, 'background_shoot');
        //this.background.tint = Math.random() * 0xffffff;
        this.cwaves = this.game.add.tileSprite (0, 0, 800,600, 'cwave');
        this.cwaves.tint = Math.random() * 0xffffff;
        this.waves = this.game.add.tileSprite (0, 0, 800,600, 'waves');
        this.waves.tint = Math.random() * 0xffffff;
        this.star = this.game.add.tileSprite (0, 0, 800,600, 'star_shoot');
        this.starB = this.game.add.tileSprite (0, 0, 800,600, 'starB');
        
        {var currentlvl;
        
        if(this.currentlvl == null) {
            this.currentlvl = 1;
        }else{
            this.currentlvl = localStorage.getItem("currentlvl");
        };
        
        localStorage.setItem("currentlvl", this.currentlvl);
         
        }  // update current lvl;
        {var speed;
        
        if(this.speed == null) {
            this.speed = 1;
        }else{
            this.speed = localStorage.getItem("speed");
        };
        
        localStorage.setItem("speed", this.speed);
         
        } // update current speed;
        {var score;
        
        this.score = localStorage.getItem("currentBananas");

        localStorage.setItem("currentBananas", this.score);
        }
        
                {var currentskin;
                 this.currentskin = localStorage.getItem("currentskin");
        
        if(this.currentskin == null) {
            this.currentskin = 1;
        }else{
            this.currentskin = localStorage.getItem("currentskin");
        };
        
        localStorage.setItem("currentskin", this.currentskin);
         
        }   //update skin
        
                        {var currentshot;
                 this.currentshot = localStorage.getItem("currentshot");
        
        if(this.currentshot == null) {
            this.currentshot = 1;
        }else{
            this.currentshot = localStorage.getItem("currentshot");
        };
        
        localStorage.setItem("currentshot", this.currentshot);
         
        }           // update shot
        
                                {var currentrate;
                 this.currentrate = localStorage.getItem("currentrate");
        
        if(this.currentrate == null) {
            this.currentrate = 1;
        }else{
            this.currentrate = localStorage.getItem("currentrate");
        };
                        }  //update rate
        

        
        
        if(this.currentskin == 1){
        this.ninja = game.add.sprite ( 200,200 ,'player');
            }
        if(this.currentskin == 2){
        this.ninja = game.add.sprite ( 200,200 ,'player2');
            }
        if(this.currentskin == 3){
        this.ninja = game.add.sprite ( 200,200 ,'player3');
            }                 
        game.physics.arcade.enable (this.ninja);        
        this.ninja.body.bounce.y = 0.0;
        this.ninja.anchor.setTo (0.5,0.5);
        this.ninja.body.gravity.y = 100;
        this.ninja.body.collideWorldBounds = true;
        this.ninja.body.setSize(30, 105, 45, 20);
        
        
        this.ninja.animations.add ('jump',[8,9,10,11,12],10,false);
        this.ninja.animations.add ('dash',[19,20,21,22,23,24,25],24,false);
        this.ninja.animations.add ('idle',[26,27,28],24,true);
        this.ninja.animations.add ('turn',[29,30,31],24,true);
        this.ninja.animations.add ('finish',[41,42,43,44,45,46,47,48,49,49,49,49,49,49,49,49],10,false);
        this.ninja.animations.add ('shoot',[34,35,36,37,38,39,40],(16*this.currentrate),false);
        this.ninja.animations.play('idle');
        

        
                if(this.currentshot == 1){
        this.weapon = game.add.weapon(10, 'bullet');
        }
             if(this.currentshot == 2){
        this.weapon = game.add.weapon(10, 'bullet2');
        }
             if(this.currentshot == 3){
        this.weapon = game.add.weapon(10, 'bullet3');
        }
        this.bullets = this.weapon.bullets ;


        this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;


        this.weapon.bulletAngleOffset = 0;
        this.weapon.fireAngle = 0;


        this.weapon.bulletSpeed = 1600*this.currentrate;        
        game.camera.follow(this.ninja);
        
        enemys = game.add.group();
        enemys.enableBody = true;
        enemys.physicsBodyType = Phaser.Physics.ARCADE;
        
        game.time.events.add(Phaser.Timer.SECOND * 60, this.endLvl, this);
        
            this.starEmitter = game.add.emitter(game.world.centerX, -600, 400);

	this.starEmitter.width = game.world.width;
   this.starEmitter.height = game.world.height;
	this.starEmitter.angle = 90; // uncomment to set an angle for the rain.
        

	this.starEmitter.makeParticles(['star1_shoot', 'star2_shoot','star3_shoot' ]);
        

this.starEmitter.minParticleScale = 0.2;
	this.starEmitter.maxParticleScale = 0.7;

	this.starEmitter.setYSpeed(1000, 1000);
	this.starEmitter.setXSpeed(-5, 5);

	this.starEmitter.minRotation = 0;
	this.starEmitter.maxRotation = 0;
    this.starEmitter.alpha = 0.8;
        
         this.starEmitter.forEach(function(singleParticle) {singleParticle.animations.add('particleAnim',[0,1,2,3],game.rnd.between(4,8),true);
                                                          
                                                           
                                                   singleParticle.animations.play('particleAnim', 4, true);  });
        
        

this.starEmitter.start(false, 1600, 5, 0);
        
        var timer = 0;
        this.timer = 0;
        this.enemyhit = 0;
        this.generateWave();
    },
    
    update: function (){
        
            if (this.fireButton.isDown ){
            this.shoot();
            };
        
            if (this.flipButton.isDown) {
                this.flip();
            }; 
       
        
        var hitPlayer = game.physics.arcade.overlap (this.ninja, enemys, this.die, null, this);      //checkea colision
        var hitBullet = game.physics.arcade.overlap (enemys, this.weapon.bullets, this.killEnemy, null, this);      //checkea colision
        
        this.timer++;

        if(this.timer> 1600) {
            this.generateWave();
            console.log('wave incoming!');
            this.timer=0;
            
        }
        
        this.background.tilePosition.x -= (20);
        this.cwaves.tilePosition.x -= (35);
        this.waves.tilePosition.x -= (10);
        this.star.tilePosition.x -= (15);
        this.starB.tilePosition.x -= (50);
        
       
        this.cwaves.tint = Math.random() * 0xffffff;
        
        this.cwaves.alpha = game.rnd.between(0.3,1);
        
        if(this.enemyCount ==0){
            this.generateWave();
             };       
    },
    killEnemy: function(enemy,bullet){
        
        
        console.log('enemyhit = ' +this.enemyhit);
        this.enemyhit++;
        
        if(this.currentshot ==1){
        bullet.kill();
        this.enemyhit =0;
      
            }
        
        if(this.currentshot ==2 && this.enemyhit >1){
            bullet.kill();
            this.enemyhit = 0;
        }
        enemy.tint = 0xffffff;
        //enemy.enableBody = false;
        enemy.body.destroy();
        this.animDie = enemy.animations.play('die');
        
        this.animDie.onComplete.add(this.killSprite, this);
    },
    killSprite: function(enemy,bullets){
        enemy.kill();
        this.enemyhit++;
        this.enemyCount--;
        
    },
    shoot: function(){
        
        if(this.flipped== false && game.time.now > this.bulletTime && this.canShoot == true){
        this.playinv = this.ninja.animations.play('shoot');
        this.bulletTime = game.time.now + 550;

        this.shootsfx.play();


        this.playinv.onComplete.add(this.restoreX, this);
            this.weapon.trackSprite(this.ninja, 24, -30);
            this.weapon.fireAngle = 0;
            this.weapon.fire();
            //game.add.tween(this.weapon.bullets).to({ width:100 }, 200, "Linear",true);
            
            } 
        else if (this.flipped == true && game.time.now > this.bulletTime && this.canShoot == true){
                this.ninja.scale.x = -1;
                this.playinv = this.ninja.animations.play('shoot');
                this.bulletTime = game.time.now + 550;

                    this.shootsfx.play();

                this.playinv.onComplete.add(this.restoreX, this);
            this.weapon.trackSprite(this.ninja, -24, -30);
            this.weapon.fireAngle = 180;
            this.weapon.fire();
            //game.add.tween(this.weapon.bullets).to({ width:100 }, 200, "Linear",true);
            
            };
        
    },
    jump: function (){
        if(this.flipped== false && this.canJump == true){
            this.ninja.scale.x = 1;
                this.ninja.body.velocity.y = 0;
                this.ninja.body.velocity.y -= 200;
                this.jumpanim = this.ninja.animations.play('jump');
                this.jumpsfx.play();
                //this.jumpanim.onComplete.add(this.restoreX, this);
            }else if (this.flipped== true && this.canJump == true){
                this.ninja.scale.x = -1;
                this.ninja.body.velocity.y = 0;
                this.ninja.body.velocity.y -= 200;
                this.jumpanim= this.ninja.animations.play('jump');
                this.jumpsfx.play();
                this.jumpanim.onComplete.add(this.restoreX, this);
            };
        
    },
    flip: function(){
        if (this.flipped == false && game.time.now > this.bulletTime && this.canFlip == true){                
                this.flipped = true;                
                game.add.tween(this.ninja.body).to( { x: this.ninja.body.x +400 }, 200, Phaser.Easing.Linear.None, true);
                this.dashsfx.play();
                this.ninja.animations.play('turn');
                this.bulletTime = game.time.now + 400;
            
        }else if (this.flipped == true && game.time.now > this.bulletTime && this.canFlip == true){                
             this.flipped = false;    
            this.dashsfx.play();
             this.ninja.animations.play('idle');
            game.add.tween(this.ninja.body).to( { x: this.ninja.body.x -400 }, 200, Phaser.Easing.Linear.None, true);
            this.bulletTime = game.time.now + 400;
         };
            },
    restoreX: function(){
        
        this.ninja.scale.x =1;
        
        if(this.flipped == true){
            this.ninja.animations.play('turn');
        };
                if(this.flipped == false){
            this.ninja.animations.play('idle');
        };
    },
    render: function () {
    
        game.debug.text("Time until wormhole ends: " + Math.floor(game.time.events.duration)/50, 32, 32);
        game.debug.text("Level " + this.currentlvl, game.world.centerX+300, 20);
        game.debug.text("Time until next wave: " +(1600-this.timer), 32, 64);

},
    die: function (){
               this.music.stop();
        this.music.destroy();
        game.state.start('end');
    
    },
    generateWave: function(){
        this.n = game.rnd.between(1,2);
        
        this.enemyCount = (game.rnd.between(6,12) *this.currentlvl);
        
        for(i = 0; i < this.enemyCount;i++){
            this.t = game.rnd.between(1,2);
            this.ve = game.rnd.between(1,4);
            if (this.n == 1){
                if (this.ve == 1){
                var enemy = enemys.create ( game.rnd.between(900,2000),game.rnd.between(50,472) ,'baddie');    
                }
                if (this.ve == 2){
                var enemy = enemys.create ( game.rnd.between(900,2000),game.rnd.between(50,472) ,'baddie2');    
                }
                if (this.ve == 3){
                var enemy = enemys.create ( game.rnd.between(900,2000),game.rnd.between(50,472) ,'baddie3');    
                }
                if (this.ve == 4){
                var enemy = enemys.create ( game.rnd.between(900,2000),game.rnd.between(50,472) ,'baddie4');    
                }
        
        enemy.animations.add ('hit',[0,1,2,3,4,5,6],game.rnd.between(10,14),true);
        enemy.animations.add ('die',[7,8,9,10,11,12,13,14],12,false);
        enemy.animations.play('hit');
                
                if (this.t == 1){
        enemy.tint = Math.random() * 0xffffff;
                }else{
        enemy.tint =  0xffffff;
                    };
        game.physics.arcade.enable (enemy); 
        enemy.body.bounce.y = 0.0;
        enemy.anchor.setTo (0.5,0.5);
        enemy.body.gravity.y = 0;
        enemy.body.collideWorldBounds = false;
        enemy.scale.x = -1;
        enemy.body.setSize(30, 105, 45, 20);
        enemy.body.velocity.x = game.rnd.between(-60,-120);
        
                        this.tweenran = game.rnd.between (1,6);
                
                if(this.tweenran==1){
        this.enemyTween = game.add.tween(enemy).to({y: enemy.y + 400}, 800, Phaser.Easing.Sinusoidal.InOut).yoyo(true) .loop() .start();
                    }
                               if(this.tweenran==2){
        this.enemyTween = game.add.tween(enemy).to({y: enemy.y + 250}, 400, Phaser.Easing.Sinusoidal.InOut).yoyo(true) .loop() .start();
                    }
                               if(this.tweenran==3){
        this.enemyTween = game.add.tween(enemy).to({y: enemy.y + 150}, 200, Phaser.Easing.Sinusoidal.InOut).yoyo(true) .loop() .start();
                   enemy.tint = enemy.tint = 0xFF0000;
                    }

            }else if (this.n ==2){
            this.ve = game.rnd.between(1,4);
       if(this.ve ==1){
            var enemy = enemys.create ( game.rnd.between(0,-1100),game.rnd.between(50,472) ,'baddie');
       }
                       if(this.ve ==2){
            var enemy = enemys.create ( game.rnd.between(0,-1100),game.rnd.between(50,472) ,'baddie2');
       }
                       if(this.ve ==3){
            var enemy = enemys.create ( game.rnd.between(0,-1100),game.rnd.between(50,472) ,'baddie3');
       }
                                       if(this.ve ==4){
            var enemy = enemys.create ( game.rnd.between(0,-1100),game.rnd.between(50,472) ,'baddie4');
       }
        enemy.animations.add ('hit',[0,1,2,3,4,5,6],game.rnd.between(10,14),true);
        enemy.animations.add ('die',[7,8,9,10,11,12,13,14],12,false);
        enemy.animations.play('hit');
                
                               if (this.t == 1){
        enemy.tint = Math.random() * 0xffffff;
                }else{
        enemy.tint =  0xffffff;
                    }
        game.physics.arcade.enable (enemy); 
        enemy.body.bounce.y = 0.0;
        enemy.anchor.setTo (0.5,0.5);
        enemy.body.gravity.y = 0;
        enemy.body.setSize(30, 105, 45, 20);
        enemy.body.collideWorldBounds = false;
        enemy.body.velocity.x = game.rnd.between(50,120);
                
                        this.tweenran = game.rnd.between (1,6);
                
                if(this.tweenran==1){
        this.enemyTween = game.add.tween(enemy).to({y: enemy.y + 400}, 800, Phaser.Easing.Sinusoidal.InOut).yoyo(true) .loop() .start();
                    }
                               if(this.tweenran==2){
        this.enemyTween = game.add.tween(enemy).to({y: enemy.y + 250}, 400, Phaser.Easing.Sinusoidal.InOut).yoyo(true) .loop() .start();
                    }
                               if(this.tweenran==3){
        this.enemyTween = game.add.tween(enemy).to({y: enemy.y + 150}, 200, Phaser.Easing.Sinusoidal.InOut).yoyo(true) .loop() .start();
                   enemy.tint = 0xFF0000;
                    }
        
                
            };
        };
        
    },
    finishAnim: function (){
        
        this.canShoot = false;
        this.canFlip = false;
        this.canJump = false;
        this.ninja.body.allowGravity = false;
        this.finalKill = enemys.callAll('animations.play', 'animations', 'die');
        this.ninja.tint = 0x00ffff;
        this.finishanim = this.ninja.animations.play('finish');
        this.finishanim.onComplete.add(this.endLvl,this);

        
    },
    endLvl:function() {
        this.currentlvl++;
        this.speed++;
        localStorage.setItem("currentlvl",this.currentlvl);
        localStorage.setItem("speed",this.speed);
        this.background.tint = Math.random() * 0xffffff;
        game.time.events.add(Phaser.Timer.SECOND * 60, this.endLvl, this);


}
    
    

};