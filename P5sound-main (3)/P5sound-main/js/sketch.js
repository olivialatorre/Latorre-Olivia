let grille = 15;
let sound;
let amp;
let img;

let effet1Play = true ;

let effetActuel = 1;
let nbEffets = 3;

function preload(){
  sound = loadSound('sound/Look To The Sky.mp3')
  img = loadImage('js/sable.png')
}


let marge = 1;
function setup() {
  angleMode(DEGREES)
    colorMode(HSL)
    //colorMode(RGB)
 createCanvas(windowWidth, windowHeight);
 img.resize(width,height)

 
frameRate(10)

 amp = new p5.Amplitude();

}

let zoom =0.0020;
let temps =0;

function draw() {
   let level = amp.getLevel();
   console.log(level)
   temps = temps+level;
  background(10,10,200)
  fill(0)
   
noStroke()
switch(effetActuel){
  case 1:
    effet1()
    break;
  case 2:
    effet2()
    break;
  case 3:
    effet3()
    break;
  case 4:
    effet4()
    break;

}
}


function mousePressed(){
 let lecture = sound.isPlaying();
 if(lecture == false){
      sound.play()
 }

    
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function effet1(){
  
  stroke(0)
  background(img)
 let ecart = 250;
  let level = amp.getLevel();
  temps += level * 0.15;

  for (let y = marge-190; y < height - marge; y += grille*1.5) {
    
    //ECUME 1
    beginShape();
    
    strokeWeight(20);
    noFill();
    stroke(193, 100, 83, 0.8)

    for (let x = marge; x < width - marge; x += grille) {

       let paramX = x * zoom;
       let paramY = y * zoom;

       let s = noise(paramX+15, paramY+15, temps/2);
       let noiseMap = map(s, 0, 1, -ecart-1320, ecart-1320);

       vertex(x, y + noiseMap);
    }
    endShape();

    //VAGUE 1
    
    beginShape();
    
    strokeWeight(25);
    noFill();
    stroke(191, 100, 69, 0.8)

    for (let x = marge; x < width - marge; x += grille) {

       let paramX = x * zoom;
       let paramY = y * zoom;

       let s = noise(paramX, paramY, temps);
       let noiseMap = map(s, 0, 1, -ecart-1000, ecart-1000);

       vertex(x, y + noiseMap);
    }
    endShape();

    
    //VAGUE 2
    
    beginShape();
    
    strokeWeight(25);
    noFill();
    stroke(191, 61, 54, 0.7)

    for (let x = marge; x < width - marge; x += grille) {

       let paramX = x * zoom;
       let paramY = y * zoom;

       let s = noise(paramX+15, paramY+15, temps);
       let noiseMap = map(s, 0, 1, -ecart-1500, ecart-1500);

       vertex(x, y + noiseMap);
    }
    endShape();

    //ECUME 2

    beginShape();
    
    strokeWeight(20);
    noFill();
    stroke(191, 100, 92, 0.8)

    for (let x = marge; x < width - marge; x += grille) {

       let paramX = x * zoom;
       let paramY = y * zoom;

       let s = noise(paramX+10, paramY+10, temps/2);
       let noiseMap = map(s, 0, 1, -ecart-850, ecart-850);

       vertex(x, y + noiseMap);
    }
    endShape();

     //VAGUE 3
    
    beginShape();
    
    strokeWeight(30);
    noFill();
    stroke(187, 79, 75,0.8)

    for (let x = marge; x < width - marge; x += grille) {

       let paramX = x * zoom;
       let paramY = y * zoom;

       let s = noise(paramX+70, paramY+50, temps);
       let noiseMap = map(s, 0, 1, -ecart-620, ecart-620);

       vertex(x, y + noiseMap);
    }
    endShape();


     //ECUME 3

    beginShape();
    
    
    strokeWeight(20);
    noFill();
    stroke(191, 100, 92, 0.8)

    for (let x = marge; x < width - marge; x += grille) {

       let paramX = x * zoom*1.5;
       let paramY = y * zoom*1.5;

       let s = noise(paramX+70, paramY+70, temps/2);
       let noiseMap = map(s, 0, 1, -ecart-500, ecart-500);
      
       vertex(x, y + noiseMap);
    }
    endShape();
    
 beginShape(); //vague 4
    
    
    strokeWeight(30);
    noFill();
    stroke(201, 36, 58, 0.3)

    for (let x = marge; x < width - marge; x += grille) {

       let paramX = x * zoom*1.5;
       let paramY = y * zoom*1.5;

       let s = noise(paramX+50, paramY+50, temps/3);
       let noiseMap = map(s, 0, 1, -ecart-650, ecart-650);
      
       vertex(x, y + noiseMap/1.5);
    }
    endShape();


    beginShape(); //SABLEmouillé
    
    
    strokeWeight(30);
    noFill();
    stroke(53, 13, 60, 0.7)

    for (let x = marge; x < width - marge; x += grille) {

       let paramX = x * zoom*1.5;
       let paramY = y * zoom*1.5;

       let s = noise(paramX+50, paramY+50, temps/7);
       let noiseMap = map(s, 0, 1, -ecart-500, ecart-500);
      
       vertex(x, y + noiseMap/1.5);
    }
    endShape();


    beginShape(); //SABLE?
    
    
    strokeWeight(4);
    noFill();
    stroke(49, 34, 75)

    for (let x = marge; x < width - marge; x += grille) {

       let paramX = x * zoom*1.5;
       let paramY = y * zoom*1.5;

       let s = noise(paramX+50, paramY+50, temps/7);
       let noiseMap = map(s, 0, 1, -ecart, ecart);
      
       vertex(x, y + noiseMap/1.5);
    }
    endShape();
 }
   
 }

 function effet2(){
  stroke(53, 40, 92)
  for (let x = marge; x <width-marge; x+=grille) { 
      for (let y = marge; y<height-marge; y+=grille) {
        // fill(random(frameCount*1.5))

         
         let seed = y*x
         //let s = noise(seed+frameCount*0.1)*grille*2
        
         /// teinte finale entre 150 et 250
         let paramX=x*zoom;
         let paramY =y*zoom;

         //let temps= level;

         let noise3d = noise(paramX,paramY,temps)
         let filtre = noise(paramX,paramY,temps/3.5);
         

         
          if (filtre>0.6){
            fill(177, 26, 49)
          //fill(192,90,75)
           square(x,y,grille)
            
                       
          }else if (filtre>0.5){
            fill(177, 26, 49)
            square(x,y,grille)
            
          }

          strokeWeight(10)
         push()
         translate(x,y)
         rotate(noise3d)
         //line(0,0,0,grille*2)
         noStroke()
         fill(165, 26, 49)
         square(0,0,noise3d)
         pop()

      } 
      } 
      }

function effet3(){ //LA MER
  noStroke()
  blendMode(BLEND)
  //image(img,0,0)
  for (let x = marge; x <width-marge; x+=grille) { 
      for (let y = marge; y<height-marge; y+=grille) {
        // fill(random(frameCount*1.5))

         
         let seed = y*x
         //let s = noise(seed+frameCount*0.1)*grille*2
        
         /// teinte finale entre 150 et 250
         let paramX=x*zoom;
         let paramY =y*zoom;

         //let temps= level;

         let noise3d = noise(paramX,paramY,temps)*20
         let filtre = noise(paramX,paramY,temps);
          if (filtre>0.6){
            blendMode(REMOVE)
          //fill(192,90,75)
           square(x,y,grille)
            blendMode(BLEND)
                       
          }else if (filtre>0.5){
            fill(190,70,50)
            square(x,y,grille)
            
          }
          // if (filtre>0.5){
          //   noFill()
          //   square(x,y,grille*3)
          //   noStroke()
          // }
          else if(filtre>0.478){
            fill(184, 63, 54)
            square(x,y,grille)
            textSize(20)
            text('O',x-15,y-8)


          }else if(filtre>0.45){
            
            fill(200,78,73)
            textSize(16)
            text('o',x,y)
            
            fill(200,82,50)
            textSize(16)
            text('o',x+5,y+5)


          }else if(filtre>0.44){
            fill(192,79,74)
            square(x,y,grille)
            fill(192,72,70)
            square(x+5,y+5,grille/2)
            
          }else if(filtre>0.43){
            textSize(16)
            fill(185,100,100)
            text('o',x,y)
            text('o',x+7,y+7)
            fill(192,90,100)
            square(x,y,grille)

          }else if(filtre>0.3){
            fill(190,70,50)
            square(x,y,grille)
         
          }else{    //couleur foncé
            blendMode(REMOVE)
            //fill(192,90,75)
            square(x,y,grille)
            blendMode(BLEND)
          }

            
            //line(0,0,0,grille*2)
         strokeWeight(2)
         push()
         translate(x,y)
         rotate(noise3d)
         //line(0,0,0,grille*2)
         noStroke()
         //square(0,0,noise3d)
         pop()
  }
      } 
      }
      
function effet4(){  // SABLE SOUS L'EAU
  noStroke()
  blendMode(BLEND)
  background(95, 42, 88)
  //image(img,0,0)
  for (let x = marge; x <width-marge; x+=grille) { 
      for (let y = marge; y<height-marge; y+=grille) {
        // fill(random(frameCount*1.5))

         
         let seed = y*x
         //let s = noise(seed+frameCount*0.1)*grille*2
        
         /// teinte finale entre 150 et 250
         let paramX=x*zoom;
         let paramY =y*zoom;

         //let temps= level;

         let noise3d = noise(paramX,paramY,temps/3)*20
         let filtre = noise(paramX,paramY,temps/3);
          if (filtre>0.6){
            blendMode(REMOVE)
          //fill(192,90,75)
           square(x,y,grille)
            blendMode(BLEND)
                       
          }else if (filtre>0.5){
            fill(190,70,50)
            square(x,y,grille)
            
          }
          // if (filtre>0.5){
          //   noFill()
          //   square(x,y,grille*3)
          //   noStroke()
          // }
          else if(filtre>0.478){
            fill(184, 63, 54)
            square(x,y,grille)
            textSize(20)
            text('O',x-15,y-8)


          }else if(filtre>0.45){
            
            fill(200,78,73)
            textSize(16)
            text('o',x,y)
            
            fill(200,82,50)
            textSize(16)
            text('o',x+5,y+5)


          }else if(filtre>0.44){
            fill(192,79,74)
            square(x,y,grille)
            fill(192,72,70)
            square(x+5,y+5,grille/2)
            
          }else if(filtre>0.43){
            textSize(16)
            fill(185,100,100)
            text('o',x,y)
            text('o',x+7,y+7)
            fill(192,90,100)
            square(x,y,grille)

          }else if(filtre>0.3){
            fill(190,70,50)
            square(x,y,grille)
         
          }
            else{    //couleur foncé!!!
            fill(171, 27, 55)
            square(x,y,grille)
            
          }

            
            //line(0,0,0,grille*2)
         strokeWeight(2)
         push()
         translate(x,y)
         rotate(noise3d)
         //line(0,0,0,grille*2)
         noStroke()
         //square(0,0,noise3d)
         pop()
  }
      } 
}

 function keyPressed(){
  if (key == 'a')
    effetActuel = 1;
  else if (key == 'z')
    effetActuel = 2;
  else if (key == 'e')
    effetActuel = 3;
  else if(key == 'r')
    effetActuel = 4
  }