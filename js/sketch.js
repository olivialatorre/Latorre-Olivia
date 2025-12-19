let grille = 15;
let sound;
let amp;
let img;
let mouetteT = 0; 
let poissonT =0       // progression 0 → 1
let mouetteSpeed = 0.01; 
let poissonSpeed = 0.01;// vitesse (augmente si trop lent)

let effet1Play = true ;

let effetActuel = 1;
let nbEffets = 3;

function preload(){
  sound = loadSound('sound/Look To The Sky.mp3')
  img = loadImage('js/sable.png')
  img2 = loadImage('js/mouette.png')
  img3 = loadImage('js/ombremouette.png')
  img4 = loadImage('js/poisson.png')
}


let marge = 1;
function setup() {
  angleMode(DEGREES)
    colorMode(HSL)
    //colorMode(RGB)
 createCanvas(windowWidth, windowHeight);
 img.resize(width,height)
 img2.resize(800,600)
 img3.resize(800,600)
 img4.resize(200,200)

 
frameRate(20  )

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

function effet3(){ //LA MER

  noStroke()
  blendMode(BLEND)
  //image(img,0,0)
  for (let x = marge; x <width-marge; x+=grille) { 
      for (let y = marge; y<height-marge; y+=grille) {
        // fill(random(frameCount*1.5))

         
         let seed = y*x
         //let s = noise(seed+frameCount*0.1)*grille*2
        
         
         let paramX=x*zoom;
         let paramY =y*zoom;

         //let temps= level;

         let noise3d = noise(paramX,paramY,temps/3)
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
            


          }else if(filtre>0.45){
            
            fill(255)
            textSize(16)
            text('o',x,y)
            
            fill(255)
            textSize(16)
            text('o',x+5,y+5)


          }else if(filtre>0.44){
            fill(192,79,74)
            square(x,y,grille)
            fill(192,72,70)
            square(x+5,y+5,grille/2)
            
          }else if(filtre>0.43){
            textSize(16)
            fill(255)
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
    //OMBRE MOUETTE
  mouetteT += mouetteSpeed;
  if (mouetteT > 1) {
    mouetteT = 0; // boucle
  }

  // positions hors champ
  let startX = width + img2.width;
  let startY = -img2.height;
  let endX = -img2.width;
  let endY = height + img2.height;

  // interpolation
  let posx = lerp(startX, endX, mouetteT);
  let posy = lerp(startY, endY, mouetteT);
  // dessin de la mouette
  push();
  translate(posx+200, posy-100);
  rotate(60);
  imageMode(CENTER);
  image(img3, 0, 0);
  pop();





      // MOUETTE
  mouetteT += mouetteSpeed;
  if (mouetteT > 1) {
    mouetteT = 0; // boucle
  }
  // dessin de la mouette
  push();
  translate(posx, posy);
  rotate(60);
  imageMode(CENTER);
  image(img2, 0, 0);
  pop();
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

         let noise3d = noise(paramX,paramY,temps/4)
         let filtre = noise(paramX,paramY,temps/4);
          if (filtre>0.57){
            fill(163, 29, 37)
            circle(x,y,grille*2)
            //blendMode(REMOVE)
          //fill(192,90,75)
           //square(x,y,grille)
            //blendMode(BLEND)
            let ecart = 250;
            noFill()
            beginShape();
    
            strokeWeight(4);
            noFill();
            stroke(77, 21, 46,0.1)

            for (let x = marge; x < width - marge; x += grille) {

              let paramX = x * zoom;
              let paramY = y * zoom;

              let s = noise(paramX+15, paramY+15, temps/2);
              let noiseMap = map(s, 0, 1, -ecart, ecart);

              vertex(x, y + noiseMap);
            }
            endShape();


                       
          }else if(filtre>0.55){
            fill(163, 24, 42)
            circle(x,y,grille*2)
            
            
          }else if (filtre>0.53){  //•••
            fill(154, 18, 41)
            circle(x,y,grille*2)
            
          }
          // if (filtre>0.5){
          //   noFill()
          //   square(x,y,grille*3)
          //   noStroke()
          // }
          else if(filtre>0.45){
            
            fill(163, 29, 37)
            circle(x,y,grille*2)
            
            
            


          }else if(filtre>0.44){  // CLAIR
            fill(65, 65, 85,0.8)
            circle(x,y,grille*2)
            textSize(30)
            fill(65, 65, 85, 0.4)
            text('*',x,y)
            
            
            
          }else if(filtre>0.43){ //BLANC
            //textSize(16)
            //fill(185,100,100)
            //text('o',x,y)
            //text('o',x+7,y+7)
            fill(60, 100, 96)
            circle(x,y,grille*2)

          }else if(filtre>0.4){  //•••
            fill(155, 22, 49)
            circle(x,y,grille*2)
         
          }else if(filtre>0.35){
            fill(163, 24, 42)
            circle(x,y,grille*2)
          }
            else{    //couleur foncé!!!
            fill(163, 29, 37)
            circle(x,y,grille*2)
            let ecart = 250;
            noFill()
            beginShape();
    
            strokeWeight(4);
            noFill();
            stroke(144, 19, 37, 0.1)

            for (let x = marge; x < width - marge; x += grille) {

              let paramX = x * zoom;
              let paramY = y * zoom;

              let s = noise(paramX+15, paramY+15, temps/2);
              let noiseMap = map(s, 0, 1, -ecart, ecart);

              vertex(x, y + noiseMap);
            }
            endShape();
            
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

  
  push()
  x1 = noise(800 + frameCount * 0.05) * 1000;
  y1 = noise(frameCount * 0.05) * 1000;
  imageMode(CENTER)
  translate(x1,y1);
  rotate(frameCount*2);
  image(img4, 0,0);
  pop();
  push()
  x1 = noise(frameCount * 0.05) * 1000;
  y1 = noise(800+ frameCount * 0.05) * 1000;
  imageMode(CENTER)
  translate(1000,y1 * 1.5);
  rotate(frameCount*5);
  image(img4, 0,0);
  pop();

  
  }
      } 
}

 function keyPressed(){
  if (key == 'a')
    effetActuel = 1;
  else if (key == 'z')
    effetActuel = 3;
  else if (key == 'e')
    effetActuel = 4;
 }