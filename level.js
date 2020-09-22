class Level{
    constructor(){
        this.alphabet = createSprite(displayWidth/2,displayHeight/2,20,20);


    }
    displaylevel1(time){
        var t = time;
        if (time === t+10){
            this.alphabet.addImage(aimg);
            asound.play();
        

        }
        else if (time===t+20){
            asound.stop();
            this.alphabet.addImage(bimg);
            bsound.play();
        }
            drawSprites();
    }

}