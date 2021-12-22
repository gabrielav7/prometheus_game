var tutorial = {
    

    create: function (){
        
        
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.world.setBounds(0, 0, 800, 600);
        
        game.add.image (0,0,'moon');
        
        this.ninja = game.add.sprite ( 150,495 ,'player');                  
        game.physics.arcade.enable (this.ninja);        
        this.ninja.body.bounce.y = 0.2;
        this.ninja.anchor.setTo (0.5,0.5);
        this.ninja.body.gravity.y = 800;
        this.ninja.body.collideWorldBounds = true;
        this.ninja.body.setSize(30, 105, 45, 20);      
        
        this.ninja.animations.add ('jump',[8,9,10,11,12],10,false);
        this.ninja.animations.add ('dash',[19,20,21,22,23,24,25],24,false);
        this.ninja.animations.add ('idle',[0,1,2,3,4,5,6,7],10,true);
            
        this.ninja.animations.add ('finish',[41,42,43,44,45,46,47,48,49,49,49,49,49,49,49,49],10,false);
        this.ninja.animations.add ('start',[49,50,51,52,53,49,50,51,52,53,49,50,51,52,53],14,false);
        
        this.ninja.animations.add ('charge',[8],10,false);
        this.ninja.animations.add ('die',[0,1],10,true);
        
        this.dashsfx = game.add.audio('dash');
        this.jumpsfx = game.add.audio('jump');
        this.jump2sfx = game.add.audio('jump2');
        
           
        game.camera.follow(this.ninja);

        var canJump = true;
        var dashing = false;
        var canDash = true;
        var jumping = false;
        
        this.canJump = true;
        this.dashing = false;
        this.canDash = true;
        this.jumping = false;
        this.jumpTimes = 0;
        this.dashTimer = 0;
        this.overbutton = false;
        
                this.botonNext = game.add.button(game.world.centerX+205, game.world.centerY-120, 'nextbutton', function() {
                
            game.state.start('tutshoot', true, false, 1, true);
            //this.Boton.play();
            //this.Intro.stop();
        }, this, 1, 2, 0);
        
        this.botonNext.onInputOver.add(this.over, this);
        this.botonNext.onInputOut.add(this.out, this);
        
        
                this.botonBack = game.add.button(game.world.centerX+205, game.world.centerY-80, 'backbutton', function() {
               
            game.state.start('inicio', true, false, 1, true);
            //this.Boton.play();
            //this.Intro.stop();
        }, this, 1, 2, 0);
            
        this.botonBack.onInputOver.add(this.over, this);
        this.botonBack.onInputOut.add(this.out, this);
        
        game.input.onDown.add(this.prepareToJump, this);
        this.dashButton = game.input.keyboard.addKey(Phaser.Keyboard.CONTROL);
        

        
         },
    
    update: function (){
        
                if(this.smokey != null){
            this.smokey.x = this.ninja.x;
            this.smokey.y = this.ninja.y;
        };
        
        if (this.dashButton.isDown){
        this.dash();
    };
        
        if( this.dashing == false && this.jumping == false){
            this.ninja.x = 150;
            this.ninja.y = 540;
            this.canDash = true;
            //this.ninja.y = 500;
        };
        
        if(this.ninja.body.onFloor() && this.dashing ==false ){
            this.restorePos();
            this.jumping = false;
            this.jumpTimes = 0;
        }
    },
    prepareToJump: function (){
       
        if(this.jumpTimes <2 && this.overbutton == false){
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
               }
               
           
        //game.camera.shake(0.0005,);   
           
        this.ninja.animations.play('charge');
        this.smokey = game.add.sprite (this.ninja.x,this.ninja.y,'smokey');
        this.smokey.anchor.setTo (0.5,0.5,);
        this.smokey.animations.add ('smoke',[0,1,2,3],24,true);
        this.smokey.animations.play ('smoke');
        this.powerbar.fixedToCamera = true;
        this.powerbar.width = 0;


        this.powerTween = game.add.tween(this.powerbar).to({ width:100 }, 1000, "Linear",true);
        this.powerTween.onComplete.add(this.changeTween, this);
        
        
        //this.powerTween.onComplete.add(this.maxBar, this);
        game.input.onUp.add(this.jump, this);
            }
     
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
          this.ninjaJumpPower= -this.powerbar.width*3-100;
        this.smokey2 = game.add.sprite (this.ninja.x,this.ninja.y,'smokey');
        this.smokey2.anchor.setTo (0.5,0.5,);
        this.smokey2.animations.add ('smoke',[4,5,6,7,8,9],24,false);
        this.smokeAnim = this.smokey2.animations.play ('smoke');
        this.smokeAnim.onComplete.add (this.destroySprite, this);
        this.jumping = true;
          this.powerbar.destroy();
          this.powerbarBorder.destroy();
          this.powerIcon.destroy();
          this.smokey.destroy();
          this.jumpTimes++;
        
          this.ninja.body.velocity.y = this.ninjaJumpPower*2;
          //this.ninja.body.velocity.x = -this.ninjaJumpPower / 1.5;
        
        if(this.jumpTimes == 0){
        this.jumpsfx.play();
        }else{
            this.jump2sfx.play();
        };
 
        
          //this.nebula.tilePosition.x -= -this.ninja.body.velocity.y /50 ;
          //this.starsSmall.tilePosition.x -= -this.ninja.body.velocity.y /20;        
          //this.starsBig.tilePosition.x -= -this.ninja.body.velocity.y /100;
              
          
          this.powerTween.stop();
               
          game.input.onUp.remove(this.jump, this);
          this.ninja.animations.play('jump');
     },                                                 // genera el salto
    
    dash: function(){
        if(this.dashing== false && game.time.now > this.dashTimer){
        this.dashTimer = game.time.now + 750;
        this.dashanim = this.ninja.animations.play('dash');
        this.canJump = false;
        this.dashing = true;
        this.canDash = false;
        this.ninja.body.allowGravity = false;
        this.ninja.body.velocity.y =0;

        this.xdash = game.add.tween(this.ninja.body).to( { x: this.ninja.body.x +400 }, 200, Phaser.Easing.Linear.None, true);
        //this.xdash.onComplete.add(this.restorePos,this)
        this.dashsfx.volume = 0.2;  
        this.dashsfx.play();
          
 
        this.dashanim = this.ninja.animations.play('dash');
        this.dashanim.onComplete.add(this.cleanDash, this);
            }
            
    },
    cleanDash: function(){
        this.canJump = true;
        this.dashing = false;
        this.canDash = true;
         this.ninja.body.allowGravity = true;

    },
    restorePos: function(){
        this.ninja.animations.play('idle');
    },
    over:function(){
        this.overbutton = true;
        
    },
    out: function(){
        this.overbutton =false;
    },
        
    render: function(){
    
    game.debug.text("Hold click to charge Jump power, release to JUMP." , game.world.centerX-200, game.world.centerY);  
    game.debug.text("Spacemonkey can double jump before reaching the ground." , game.world.centerX-200, game.world.centerY+30);
        
    game.debug.text("Collecting 3 bananas, allows Spacemonkey to Dash 1 time." , game.world.centerX-200, game.world.centerY+100);
    game.debug.text("Press CONTROL to Dash." , game.world.centerX-200, game.world.centerY+80); 
    //game.debug.bodyInfo(this.ninja, 16, 24);    
    },
        destroySprite: function(obj){
        obj.destroy();
    }
    
};