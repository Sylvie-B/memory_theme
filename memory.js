import {pictures, decorTheme} from "./arrayTheme.js";
import {Theme} from './modMem.js';

// create all theme
let allTheme = new Theme(pictures, decorTheme);

// setting first screen
let choice = document.getElementById('choice');
choice.style.height = innerHeight * 0.7 + 'px';

// get target for backcards
let theme = document.getElementById('theme');

/** set first screen */
allTheme.setScreen(theme, decorTheme);

// setting end game modal window
let modalWin = document.getElementById('modalWin');
modalWin.style.width = innerWidth + 'px';
modalWin.style.height = innerHeight + 'px';

let info = document.getElementById('info');
info.style.width = innerWidth/2 + 'px';
info.style.height = innerHeight/1.5 + 'px';
/** adap modal window to the screen */
if(innerWidth < 600 ){
    info.style.width = innerWidth * 0.8 + 'px';
    info.style.height = innerHeight/2 + 'px';
}


// in game restart button
let restart = document.getElementById('restart');
// end restart button
let end = document.getElementById('end');

// get window
let container = document.getElementById('container');
container.style.height = window.innerHeight + 'px';

let board = document.getElementById('board');
board.style.height = innerHeight * 0.9 + 'px';



/** listen theme choice **/
let userTheme = document.getElementsByClassName('themes');

for ( let t = 0 ; t < userTheme.length ; t++){
     /** listen user theme choice **/
    userTheme[t].addEventListener('click', function () {

        //check user choiceN value
        let choiceN = parseInt(document.getElementById('choiceN').value);

        if (choiceN > 2 && choiceN < 11) {

            // switch button
            restart.style.display = 'block';

            //  hidden choices screen and show game screen
            choice.style.display = 'none';
            board.style.display = 'flex';

            /** game screen */
            allTheme.decor(decorTheme[t][2], 'container', decorTheme[t][1]);

            /** display cards */
            allTheme.setSelectCard(pictures[t], choiceN, board, t);

            /** adapt img width in function of choiceN **/
            let refSize;

            if(innerWidth < 351){
                refSize = choiceN < 5 ? 26 : choiceN < 7 ? 24 : 18;

            }
            else if(innerWidth < 601){
                refSize = choiceN < 4 ? 29 : choiceN < 5 ? 28 : choiceN < 7 ? 22 : choiceN < 9 ? 19 : 17;
            }
            else{
                refSize = choiceN < 7 ? 14 : choiceN < 8 ? 11 : choiceN < 9 ? 10 : 9;
            }

            let recto = document.getElementsByClassName('recto');
            let verso = document.getElementsByClassName('verso');
            for (let i = 0 ; i < recto.length ; i++){
                recto[i].style.width = refSize + 'vw';
                verso[i].style.width = refSize + 'vw';
            }

            let score = document.getElementById('score');
            let stock;
            let count = 0;
            let test = 0;

            /**  listen cards   */
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
                                if(recto[i].src !== recto[stock].src){
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
                                        info.style.backgroundImage = decorTheme[t][3];
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
}

restart.addEventListener("click",()=> document.location.reload());
