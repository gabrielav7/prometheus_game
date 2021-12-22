var tutshoot ={
    
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
        this.shoot2sfx = game.add.audio('shoot2');
        this.pickupsfx = game.add.audio('pickup');  
        
        
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
        
        this.ninja = game.add.sprite ( 200,200 ,'player');                  
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
        this.ninja.animations.add ('shoot',[34,35,36,37,38,39,40],(16*this.currentlvl),false);
        this.ninja.animations.play('idle');
        

        
        this.weapon = game.add.weapon(10*this.currentlvl, 'bullet');
        this.bullets = this.weapon.bullets ;


        this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;


        this.weapon.bulletAngleOffset = 0;
        this.weapon.fireAngle = 0;


        this.weapon.bulletSpeed = 1600*this.currentlvl;        
        game.camera.follow(this.ninja);
        
        enemys = game.add.group();
        enemys.enableBody = true;
        enemys.physicsBodyType = Phaser.Physics.ARCADE;
        
            

        var timer = 0;
        this.timer = 0;
        this.generateWave();
                        this.botonBack = game.add.button(game.world.centerX-10, game.world.centerY+240, 'backbutton', function() {
                        
               
            game.state.start('inicio', true, false, 1, true);
            //this.Boton.play();
            //this.Intro.stop();
        }, this, 1, 2, 0);
    },
    
    update: function (){
        
            if (this.fireButton.isDown ){
            this.shoot();
            };
        
            if (this.flipButton.isDown) {
                this.flip();
            }; 
       
        
       
        var hitBullet = game.physics.arcade.overlap (enemys, this.weapon.bullets, this.killEnemy, null, this);      //checkea colision
        
        
        this.background.tilePosition.x -= (20);
        this.cwaves.tilePosition.x -= (35);
        this.waves.tilePosition.x -= (10);
        this.star.tilePosition.x -= (15);
        this.starB.tilePosition.x -= (50);
        
        this.cwaves.alpha = 0.7;
        
        if(this.enemyCount ==0){
            this.generateWave();
             };       
    },
    killEnemy: function(enemy,bullet){
        
        bullet.kill();
        enemy.tint = 0xffffff;
        enemy.enableBody = false;
        this.animDie = enemy.animations.play('die');
        
        this.animDie.onComplete.add(this.killSprite, this);
    },
    killSprite: function(enemy,bullets){
        enemy.animations.play('hit');
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
    
        game.debug.text("These spacemonkeys spent too much time", game.world.centerX, game.world.centerY+50);
        game.debug.text("in the wormhole,and lost their minds..." , game.world.centerX, game.world.centerY+70);
        game.debug.text("Press CONTROL to FIRE your blaster." , game.world.centerX, game.world.centerY+100);
         game.debug.text("Press SHIFT to FLIP." , game.world.centerX, game.world.centerY+140);
        game.debug.text("Tap CLICK to JUMP." , game.world.centerX, game.world.centerY+180);


},
    die: function (){

        game.state.start('end');
    
    },
    generateWave: function(){
        
                var enemya = enemys.create ( 50,100 ,'baddie');    
 
                var enemyb = enemys.create ( 50,400 ,'baddie2');    
 
                var enemyc = enemys.create ( 700,250 ,'baddie3');    

                var enemyd = enemys.create ( 700,520 ,'baddie4');    
                
        
        enemya.animations.add ('hit',[0,1,2,3,4,5,6],game.rnd.between(10,14),true);
        enemya.animations.add ('die',[7,8,9,10,11,12,13,14],12,false);
        enemya.animations.play('hit');
                

        game.physics.arcade.enable (enemya); 
        enemya.body.bounce.y = 0.0;
        enemya.anchor.setTo (0.5,0.5);
        enemya.body.gravity.y = 0;
        enemya.body.collideWorldBounds = false;        
        enemya.body.setSize(30, 105, 45, 20);
        game.add.tween(enemya).to({x: enemya.x + 16}, 800, Phaser.Easing.Sinusoidal.InOut).yoyo(true) .loop() .start();
        
        enemyb.animations.add ('hit',[0,1,2,3,4,5,6],game.rnd.between(10,14),true);
        enemyb.animations.add ('die',[7,8,9,10,11,12,13,14],12,false);
        enemyb.animations.play('hit');
                

        game.physics.arcade.enable (enemyb); 
        enemyb.body.bounce.y = 0.0;
        enemyb.anchor.setTo (0.5,0.5);
        enemyb.body.gravity.y = 0;
        enemyb.body.collideWorldBounds = false;        
        enemyb.body.setSize(30, 105, 45, 20);
         game.add.tween(enemyb).to({x: enemyb.x + 12}, 800, Phaser.Easing.Sinusoidal.InOut).yoyo(true) .loop() .start();
        
        enemyc.animations.add ('hit',[0,1,2,3,4,5,6],game.rnd.between(10,14),true);
        enemyc.animations.add ('die',[7,8,9,10,11,12,13,14],12,false);
        enemyc.animations.play('hit');
                

        game.physics.arcade.enable (enemyc); 
        enemyc.body.bounce.y = 0.0;
        enemyc.anchor.setTo (0.5,0.5);
        enemyc.body.gravity.y = 0;
        enemyc.body.collideWorldBounds = false;        
        enemyc.body.setSize(30, 105, 45, 20);
        enemyc.scale.x =-1;
        game.add.tween(enemyc).to({x: enemyc.x - 18}, 800, Phaser.Easing.Sinusoidal.InOut).yoyo(true) .loop() .start();
        
        enemyd.animations.add ('hit',[0,1,2,3,4,5,6],game.rnd.between(10,14),true);
        enemyd.animations.add ('die',[7,8,9,10,11,12,13,14],12,false);
        enemyd.animations.play('hit');
                

        game.physics.arcade.enable (enemyd); 
        enemyd.body.bounce.y = 0.0;
        enemyd.anchor.setTo (0.5,0.5);
        enemyd.body.gravity.y = 0;
        enemyd.body.collideWorldBounds = false;        
        enemyd.body.setSize(30, 105, 45, 20);
        enemyd.scale.x =-1;
        game.add.tween(enemyd).to({x: enemyd.x - 20}, 800, Phaser.Easing.Sinusoidal.InOut).yoyo(true) .loop() .start();

        
                

        
    },
    finishAnim: function (){


        
    },
    endLvl:function() {


}
    
    

};