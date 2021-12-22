var game = new Phaser.Game (800,600, Phaser.AUTO,'');

game.state.add('inicio', inicio);   //menu
game.state.add('boot',boot) //boot game
game.state.add('preloader', preloader); //preload
game.state.add('play', play);       //juego
game.state.add('tutorial',tutorial); //tutorial
game.state.add('tutshoot',tutshoot); //tutorial shoot
game.state.add('survival',survival); //survival mode
game.state.add('credits', credits); //credits
game.state.add('shop',shop);           //shop
game.state.add('shoot1',shoot1);     //shootmode 1
game.state.add('end', end);        //gameover
game.state.start('boot');