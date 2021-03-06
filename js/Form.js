class Form {

  constructor() {
    //this.input = createInput("Name");
    this.input = createInput("").attribute("placeholder", "Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
    this.reachedPos = createElement('h1');
    this.tooMany = createElement('h2')
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.tooMany.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);

   
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.rank=0;
      player.update();
      Player.updateCount(playerCount);
      
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    this.reset.position (displayWidth-80,30);
    this.reset.mousePressed(()=>{
        Player.updateCount(0);
        Game.update(0)
        Player.updateCarsReached(0);

    })

  }
  showResult(){
    this.reachedPos.position(displayWidth/2 - 40 , 80);
    this.reachedPos.html("Game Over! Your position : " + player.rank)
  }
  tooManyError(){
    this.tooMany.position(displayWidth/3 , displayHeight/2 - 80);
    this.tooMany.html('Sorry racing track is full. Please enter the next round. ');
    
    this.reset.position (displayWidth-80,30);
    this.reset.mousePressed(()=>{
        Player.updateCount(0);
        Game.update(0)
        Player.updateCarsReached(0);

    })

  }
}


