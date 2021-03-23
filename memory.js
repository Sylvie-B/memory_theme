import {pictures, decorTheme} from "./arrayTheme.js";
import {Theme} from './modMem.js';

// create all theme
let allTheme = new Theme(pictures, decorTheme);

// setting first screen
let choice = document.getElementById('choice');
choice.style.height = innerHeight * 0.7 + 'px';

// get target for backcards
let theme = document.getElementById('theme');
allTheme.setScreen(theme, decorTheme);

// setting end game modal window
let modalWin = document.getElementById('modalWin');
modalWin.style.width = innerWidth + 'px';
modalWin.style.height = innerHeight + 'px';
modalWin.style.display = 'none';

let info = document.getElementById('info');
info.style.width = innerWidth/2 + 'px';
info.style.height = innerHeight/2 + 'px';

let end = document.getElementById('end');

// get window
let container = document.getElementById('container');
container.style.height = window.innerHeight + 'px';

let board = document.getElementById('board');
board.style.height = innerHeight * 0.9 + 'px';

// get start & restart buttton
let start = document.getElementById('start');
let restart = document.getElementById('restart');

/** listen theme choice **/
let userTheme = document.getElementsByClassName('choiceTheme');
for ( let t = 0 ; t < userTheme.length ; t++){
    userTheme[t].addEventListener('click', function (){

        /** listen start button **/
        start.addEventListener('click', function () {

            //check user choiceN value
            let choiceN = parseInt(document.getElementById('choiceN').value);

            if (choiceN > 1 && choiceN < 11) {

                // switch button
                start.style.display = 'none';
                restart.style.display = 'block';

                //  hidden choices screen
                choice.style.display = 'none';
                // no hidden game screen
                board.style.display = 'flex';

                /** game screen */
                allTheme.decor(decorTheme[t][2], 'container', decorTheme[t][1]);

                /** display cards */
                allTheme.setSelectCard(pictures[t], choiceN, board);

                /**  listen cards   */
                    // get cards
                let verso = document.getElementsByClassName('verso');
                let score = document.getElementById('score');
                let stock;
                let count = 0;
                let test = 0;
                for (let i = 0; i < verso.length; i++) {
                    verso[i].addEventListener('mouseup', function () {
                        // when click on verso
                        if (test < 2) {
                            switch (test) {
                                case 0 :
                                    verso[i].style.display = 'none';            // hidden verso
                                    stock = i;                            // stock item value
                                    test ++;
                                    break;
                                case 1 :
                                    verso[i].style.display = 'none';            // hidden verso
                                    test --;
                                    if(dblArr[i] !== dblArr[stock]){
                                        setTimeout(function (){
                                            verso[stock].style.display = 'unset';
                                            verso[i].style.display = 'unset';
                                        }, 500);
                                    }
                                    else {
                                        ++count;
                                        if(count === choiceN){
                                            // modal window
                                            modalWin.style.display = 'flex';
                                            info.style.backgroundImage = themeView[x][3];
                                            info.style.backgroundSize = 'cover';
                                            score.innerHTML = 'votre score est de ' + count * 2;
                                            end.addEventListener('click', function (){
                                                document.location.reload();
                                            })
                                        }
                                    }
                                    break;
                            }
                        }
                    });
                }
            }
            else {
                alert('entrez un choix valide');
            }
        })

    })



}




restart.addEventListener("click",()=> document.location.reload());
