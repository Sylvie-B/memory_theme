export {Theme};

// theme object
let Theme = function (arrayPict, arrayDeco){

    // set first screen
    this.setScreen = function (target, arrayDeco){
        // add back card image
        for (let i = 0 ; i < arrayDeco.length ; i++){
            let frame = document.createElement('div');
            frame.className = 'themes';
            let backCard = document.createElement('img');
            backCard.src = arrayDeco[i][0];
            backCard.style.margin = "2px";
            frame.appendChild(backCard);
            target.appendChild(frame);
        }
    }

    // create array for mix and display cards
    this.setSelectCard = function (arrayPictures, choiceN, target, t){
        let arrayOfNbr = [];
        // for array length
        for(let i = 0 ; i < arrayPictures.length ; i++){
            // add 0 to length value
            let size = arrayOfNbr.push(i);
        }
        // shuffle the value
        for (let j = 0; j < arrayOfNbr.length; j++) {
            let r = Math.floor(Math.random() * j);
            let stock = arrayOfNbr[j];
            arrayOfNbr[j] = arrayOfNbr[r];
            arrayOfNbr[r] = stock;
        }
        // select choiceN value
        let selectPict = arrayOfNbr.splice(0, choiceN);
        // shuffle
        let dblSelect = selectPict.concat(selectPict);
        for (let k = 0; k < dblSelect.length; k++) {
            let r = Math.floor(Math.random() * k);
            let stock = dblSelect[k];
            dblSelect[k] = dblSelect[r];
            dblSelect[r] = stock;
        }
        // display selected cards
        for (let i = 0 ; i < dblSelect.length ; i++){
            let cards = document.createElement('div');
            cards.style.position = 'relative';

            let recto = document.createElement('img');
            recto.src = arrayPictures[dblSelect[i]];
            recto.className = 'recto';

            let verso = document.createElement('img');
            verso.src = arrayDeco[t][0];
            verso.className = 'verso';
            verso.style.position = 'absolute';
            verso.style.top = '0';
            verso.style.left = '0';

            // div card in board
            target.appendChild(cards);
            // img recto & verso in card
            cards.appendChild(recto);
            cards.appendChild(verso);
        }
    }

    this.decor = function (background, target, title){
        // change the title
        let newTitle = document.getElementById('newTitle');
        newTitle.innerHTML = title;
        // change the background img
        let back = document.getElementById(target);
        back.style.backgroundImage = background;
    }

}
