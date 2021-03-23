export {Theme};


// theme object
let Theme = function (arrayPict, arrayDeco){

    // set first screen
    this.setScreen = function (target, arrayDeco){
        // add back card image
        for (let i = 0 ; i < arrayDeco.length ; i++){
            let frame = document.createElement('div');
            frame.className = 'choiceTheme';
            let backCard = document.createElement('img');
            backCard.src = arrayDeco[i][0];
            frame.appendChild(backCard);
            target.appendChild(frame);
        }
    }

    // set theme
    this.setCards = function (verso, target){
        // create a card
        let card = document.createElement('div');
        card.className = 'screen1';
        card.style.display = "flex";

        // affect a back image
        let pict = document.createElement('img');
        pict.src = verso;

        // place in the screen
        target.appendChild(card);
        card.appendChild(pict);
    }

    // create arrMax
    this.arrMax = function (){
        let array = [];
        for(let i = 0 ; i < this.array.length ; i++){
            let count = array.push(i);
        }
        return array;
    }

    // add picture in themeView
    this.setThemeArr = function (themeArr, choiceArr){
        let global = themeArr.push(choiceArr);
    }
    // add picture in arrayPict
    this.setPicture = function (arrayTheme, choiceTheme){
        let global = arrayTheme.push(choiceTheme);
    }

    this.decor = function (background, target, id){
        // change the title
        let newTitle = document.getElementById(id);
        newTitle.innerHTML = this.name;
        // change the background img
        let back = document.getElementById(target);
        back.style.backgroundImage = background;
    }
}
