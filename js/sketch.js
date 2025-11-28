// let imgListe = [];
// let imgListe2 = [];
// let listeMains = [];
// let compteur = 0; 
// let gomme =0;
// let imgMasque = [];
// let newFeuille;

// let ecaille;
// let pinceau;
// let fond; 
// let x1
// let y1
// let x2
// let y2
// let size = 100;

// function preload(){
// //for (let i = 1; i <6; i++) {
// //	imgListe[i-1]=loadImage('js/phase ('+i+').png');   
// //	}  
    
// //for (let i = 1; i <12; i++) {
// //	imgListe2[i-1]=loadImage('js/tache ('+i+').png');   
// //	}
// //for (let i=1; i<4; i++) {
// //    listeMains[i-1]=loadImage('js/main ('+i+').png');
// //}
//     ecaille= loadImage('js/écaille.png')
//     brosse= loadImage('js/brosse.png')
//     fond= loadImage('js/fond.png')
//     brosse2= loadImage('js/brosse2.png')
//     main1= loadImage('js/main (1).png')
//     //main2= loadImage('js/main (2).png')
//     //main3= loadImage('js/main (3).png')
//     brosse3= loadImage('js/brosse3.png')
//     mouche= loadImage('js/mouche.png')
//     terre= loadImage('js/terre.png')

//     for (let i = 1; i <10; i++) {
// 	imgMasque[i-1]=loadImage('js/ombres/Fichier ('+i+').png');   
// 	} 
 
    
// }

// function setup() {
//         angleMode(DEGREES)
//         rectMode(CENTER)
// 		imageMode(CENTER)
// 		createCanvas(windowWidth,windowHeight);
// 		for (let i = 0; i <imgListe.length; i++) {//redimensionner
//        imgListe[i].resize(1000,0) //choisir la taille ici
// 	}
    
//     for (let i = 0; i <imgMasque.length; i++) {//redimensionner
//        imgMasque[i].resize(0,height/2) //choisir la taille ici
// 	}

    
//         }
    
    
    

// ////création d'un masque : 
//     //newFeuille.angleMode(DEGREES)
//     newFeuille = createGraphics(width,height)
//     newFeuille.background(255);
//     newFeuille.blendMode(REMOVE);
//     newFeuille.imageMode(CENTER);
//     newFeuille.translate(width/2,height/2)
//     newFeuille.rotate(360)
//     newFeuille.image(fond,0,0)
//     //newFeuille.resize(windowWidth,windowHeight)

// function mouseDragged(){
    

    
    
    

// }
// function draw(){
//     //background(255);
//     // let index2 = floor(frameCount / 10) % imgListe2.length;
//     // image(imgListe2[index2], mouseX,mouseY);
    
//     push()
//     translate(300,300)
//     rotate(frameCount*3)
//     image(ecaille,0,0)
//     x1= noise(frameCount*0.01)*1000
//     y1=noise(600+frameCount*0.01)*200

//     push()
//     translate(x1,y1)
//     rotate(frameCount*80)
//      image(brosse,0,0,size,size)
//      image(brosse2,120,120,size,size)
//      image(brosse3,300,300,size,size)
//      pop()
//     pop()


//     push()
//     translate(1000,400)
//     rotate(frameCount*0.5)
//     let x2= noise(5000+frameCount*0.03)*1000
//     let y2=noise(frameCount*0.03)*200
//     image(terre,x2,y2,size,size)
//     pop()


//     push()
//     translate(1900,1000)
//     rotate(frameCount*3)
//     image(ecaille,0,0)
//     x1= noise(frameCount*0.01)*1000
//     y1=noise(600+frameCount*0.01)*200

//     push()
//     translate(x1,y1)
//     rotate(frameCount*80)
//      image(brosse,0,0,size,size)
//      image(brosse2,120,120,size,size)
//      image(brosse3,300,300,size,size)
//      pop()
//     pop()
    
   
//     // push()
//     // let index = floor(frameCount / 20) % imgListe.length;
//     // translate(x1,y1)
//     // image(imgListe[index], width/5, height-170); // afficher l'image actuelle en bas à gauche
//     // noTint()
//     // pop()
    
    
//     //image(newFeuille,width/2,height/2)
// }

// function mousePressed(){
//     image(main1,mouseX,mouseY,400,400)
//     compteur++
// }

// function keyPressed(){ /// mode gomme ou dessin
//     console.log(key)
//     if(key=='Backspace'){
//           if(gomme == 1){
//                 gomme =0
//                 blendMode(BLEND)
//         }else{
//                 gomme = 1
//                 blendMode(REMOVE)
//         }

//     }

//     if (key=='ArrowUp'){
//         size = size +100
//     }
//     if (key=='ArrowDown'){
//         size = size -100
//     }
// }


