var shop = {


create: function(){
    
            {var currentskin;
        
        if(this.currentskin == null) {
            this.currentskin = 1;
        }else{
            this.currentskin = localStorage.getItem("currentskin");
        };
        
        localStorage.setItem("currentskin", this.currentskin);
         
        }                   //check skin
            {var currentshot;
        
        if(this.currentshot== null) {
            this.currentshot = 1;
        }else{
            this.currentshot = localStorage.getItem("currentshot");
        };
        
        localStorage.setItem("currentshot", this.currentshot);
         
        }                   // check shot
    
            {var currentmoney; 
    
     this.currentmoney = localStorage.getItem("highscore");
             
     
     if(localStorage.getItem("highscore") == null){
         localStorage.setItem("highscore", 0);
     }else {
         this.currentmoney = localStorage.getItem("highscore");
     }
    }                   //check money
    
    
                {var currentdash;
        
        if(this.currentdash == null) {
            this.currentdash = 1;
        }else{
            this.currentdash = localStorage.getItem("currentdash");
        };
        
        localStorage.setItem("currentdash", this.currentdash);
         
        }   // check dash
    
                    {var currentrate;
        
        if(this.currentrate == null) {
            this.currentrate = 1;
        }else{
            this.currentrate = localStorage.getItem("currentrate");
        };
        
        localStorage.setItem("currentrate", this.currentrate);
         
        }   // check dash
    
    
    
    
    
    game.add.image(0,0,'background_shop');
    
     this.suit1Button = game.add.button(50, 110, 'suit1', this.buysuit1, this, 0, 0, 0);
    this.suit2Button = game.add.button(180, 110, 'suit2', this.buysuit2, this, 2, 0, 0);
    this.suit3Button = game.add.button(310, 110, 'suit3', this.buysuit3, this, 2, 0, 0);
    this.suit4Button = game.add.button(440, 110, 'praesuit', this.actionOnClick, this, 1, 0, 0);
    this.suit5Button = game.add.button(570, 110, 'engineer', this.actionOnClick, this, 1, 0, 0);
    
    this.shot1Button = game.add.button(50, 240, 'shot1_shop', this.buyshot1, this, 2, 0, 0);
    this.shot2Button = game.add.button(180, 240, 'shot2_shop', this.buyshot2, this, 2, 0, 0);
    this.shot3Button = game.add.button(310, 240, 'shot3_shop', this.buyshot3, this, 2, 0, 0);
    
    this.boost1Button = game.add.button(50, 370, 'boost', this.buydash1, this, 1,0, 0);
    this.boost2Button = game.add.button(180, 370, 'boost2', this.buydash2, this, 1,0, 0);
    this.rate1Button = game.add.button(310, 370, 'rate', this.buyrate1, this, 1, 0, 0);
     this.rate2Button = game.add.button(440, 370, 'rate2', this.buyrate2, this, 1, 0, 0);
    
    this.botonBack = game.add.button(game.world.centerX-40, game.world.centerY+240, 'backbutton', function() {
               
            game.state.start('inicio', true, false, 1, true);

        }, this, 1, 2, 0);
    
    this.money = game.add.text(game.world.centerX+200, game.world.centerY+240, 'B.POINTS :' +this.currentmoney, { font: '16px Arial', fill: '#fff' });
    

},
update:function(){
    
    this.money.text = 'B.POINTS: ' + localStorage.getItem("highscore");
    

},
    buysuit1:function(){

        this.currentskin = 1;
        localStorage.setItem("currentskin", this.currentskin);
        console.log('currentskin = ' +this.currentskin);
        this.suit1Button.setFrames(1);

        
    },
    buysuit2:function(){
        
        if(this.currentmoney >= 6000 ){
        this.currentskin = 2;
        localStorage.setItem("currentskin", this.currentskin);
        console.log('currentskin = ' +this.currentskin);
            
        this.currentmoney -= 6000;
        localStorage.setItem("highscore", this.currentmoney);
        this.suit2Button.setFrames(1);
            }

        
    },
    buysuit3:function(){
        if(this.currentmoney >= 12000){
 
        this.currentskin = 3;
        localStorage.setItem("currentskin", this.currentskin);
        console.log('currentskin = ' +this.currentskin);
        this.currentmoney -= 12000;
        localStorage.setItem("highscore", this.currentmoney);
            this.suit3Button.setFrames(1);
            
    };
        

        
    },
    buyshot1:function(){

        this.currentshot = 1;
        localStorage.setItem("currentshot", this.currentshot);
        console.log('currentshot = ' +this.currentshot);
        this.shot1Button.setFrames(1);
      
    },
    buyshot2:function(){
        if(this.currentmoney >= 8000){
        
        this.currentshot = 2;
        localStorage.setItem("currentshot", this.currentshot);
        console.log('currentshot = ' +this.currentshot);
        this.currentmoney -= 8000;
        localStorage.setItem("highscore", this.currentmoney);
        this.shot2Button.setFrames(1);
        

        };
    },
    buyshot3:function(){
        if(this.currentmoney >= 15000){
        
        this.currentshot = 3;
        localStorage.setItem("currentshot", this.currentshot);
        console.log('currentshot = ' +this.currentshot);
        this.currentmoney -= 15000;
        localStorage.setItem("highscore", this.currentmoney);
        this.shot3Button.setFrames(1);
  
        };
    },
        buydash1:function(){
        if(this.currentmoney >= 5000){
        
        this.currentdash = 2;
        localStorage.setItem("currentdash", this.currentdash);
        console.log('currentdash = ' +this.currentdash);
        this.currentmoney -= 5000;
        localStorage.setItem("highscore", this.currentmoney);
        this.boost1Button.setFrames(1);
        this.boost1Button.inputEnabled = false;
  
        };
    },
            buydash2:function(){
        if(this.currentmoney >= 10000){
        
        this.currentdash = 3;
        localStorage.setItem("currentdash", this.currentdash);
        console.log('currentdash = ' +this.currentdash);
        this.currentmoney -= 10000;
        localStorage.setItem("highscore", this.currentmoney);
        this.boost2Button.setFrames(1);
        this.boost2Button.inputEnabled = false;
  
        };
    },
            buyrate1:function(){
        if(this.currentmoney >= 5000){
        
        this.currentrate = 2;
        localStorage.setItem("currentrate", this.currentrate);
        console.log('currentrate = ' +this.currentrate);
        this.currentmoney -= 5000;
        localStorage.setItem("highscore", this.currentmoney);
        this.rate1Button.setFrames(1);
        this.rate1Button.inputEnabled = false;
  
        };
    },
            buyrate2:function(){
        if(this.currentmoney >= 10000){
        
        this.currentrate = 3;
        localStorage.setItem("currentrate", this.currentrate);
        console.log('currentrate = ' +this.currentrate);
        this.currentmoney -= 10000;
        localStorage.setItem("highscore", this.currentmoney);
        this.rate2Button.setFrames(1);
        this.rate2Button.inputEnabled = false;
  
        };
    },
    


};