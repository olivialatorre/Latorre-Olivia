let gomme = 0;
let compteur = 0;
let size = 150;

let ecaille, brosse, brosse2, brosse3, fond;
let main1, mouche, terre;
let imgMasque = [];
let newFeuille;

let x1, y1, x2, y2;


// Chargement des images

function preload() {

  ecaille = loadImage('js/écaille.png');
  brosse = loadImage('js/brosse.png');
  brosse2 = loadImage('js/brosse2.png');
  brosse3 = loadImage('js/brosse3.png');
  fond = loadImage('js/fond.png');
  main1 = loadImage('js/main (1).png');
  mouche = loadImage('js/mouche.png');
  terre = loadImage('js/terre.png');

  // Chargement des masques
  for (let i = 1; i < 4; i++) {
    let path = `js/ombres/Fichier (${i}).png`;
    imgMasque.push(loadImage(path));
  }

}


// Initialisation

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
  imageMode(CENTER);

  // Redimensionnement des masques
  for (let i = 0; i < imgMasque.length; i++) {
    imgMasque[i].resize(0, height / 2);
  }
  
  
  // Création de la feuille graphique
  //newFeuille.translate(width / 2, height / 2);
  //newFeuille.rotate();

  newFeuille = createGraphics(width, height);
  newFeuille.background(30,40,10);
  newFeuille.blendMode(REMOVE);
  newFeuille.imageMode(CENTER);
  newFeuille.translate(width / 2, height / 2);
  newFeuille.image(fond, windowWidth,windowHeight);
  
}


// Boucle principale

function draw() {
  
  
    
  // Exemple : pas de background pour garder la trace
  // background(255);

  // Premier ensemble de formes
  push();
  translate(300, 300);
  rotate(frameCount * 3);
  image(ecaille, 0, 0);

  x1 = noise(frameCount * 0.01) * 1000;
  y1 = noise(600 + frameCount * 0.01) * 200;

  push();
  translate(x1, y1);
  rotate(frameCount * 80);
  image(brosse, 0, 0, size, size);
  image(brosse2, 120, 120, size, size);
  image(brosse3, 300, 300, size, size);
  pop();
  pop();

  // TERRE
//   push();
//   translate(1000, 400);
//   rotate(frameCount * 0.1);
//   x2 = noise(5000 + frameCount * 0.012) * 1000;
//   y2 = noise(frameCount * 0.01) * 200;
//   image(terre, x2, y2, size, size);
//   pop();

  // Troisième ensemble de formes
  push();
  translate(1900, 1000);
  rotate(frameCount * 3);
  image(ecaille, 0, 0);

  x1 = noise(frameCount * 0.01) * 1000;
  y1 = noise(600 + frameCount * 0.01) * 200;

  push();
  translate(x1, y1);
  rotate(frameCount * 80);
  image(brosse, 0, 0, size, size);
  image(brosse2, 120, 120, size, size);
  image(brosse3, 300, 300, size, size);
  pop();
  pop();

  blendMode(DIFFERENCE); //SCREEN, DIFFERENCE, OVERLAY
  let indexMasque = floor(frameCount / 50) % imgMasque.length;
  tint(255,2); // transparence du masque (0 = invisible, 255 = opaque)
  image(imgMasque[indexMasque], width / 2, height / 2, width, height);
  noTint();
  blendMode(BLEND); // revenir au mode normal pour le reste

  
  image(fond,width / 2, height / 2, width, height);
push();
  translate(300, 300);
  rotate(frameCount * 1);
  tint(255,130)
  image(ecaille, 0,0);
  pop()
  push();
  translate(1900, 940);
  rotate(frameCount * 1);
  tint(255,130)
  image(ecaille, 0,0);
  pop()
}


// Interaction souris

function mousePressed() {
  image(main1, mouseX, mouseY, 400, 400);
  compteur++;
}


// Interaction clavier

function keyPressed() {
  console.log(key);

  // Gomme (mode REMOVE)
  // if (key === 'Backspace') {
  //   gomme = gomme === 1 ? 0 : 1;
  //   blendMode(gomme ? REMOVE : BLEND);
  // }

  // Taille du pinceau
  // if (key === 'ArrowUp') size += 100;
  // if (key === 'ArrowDown') size = max(10, size - 100); // éviter taille négative
}
