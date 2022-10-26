// Mario Kart Simulator
// Author: Dhairya Prajapati
// Date-Created: October 26, 2022

// Global Variables
let currentPlace = 12;
let banana = 0;
let green = 0;
let mushroom = 0;
let red = 0;
let bullet = 0;
let star = 0;
let firstClick = true;

let currentPlaceEl = document.getElementById('place');
let itemHistoryEl = document.getElementById('inventory');
let bananaEl = document.getElementById('banana-total');
let greenEl = document.getElementById('green-total');
let mushroomEl = document.getElementById('mushroom-total');
let redEl = document.getElementById('red-total');
let bulletEl = document.getElementById('bullet-total');
let starEl = document.getElementById('star-total');
let useItemEl = document.getElementById('use-item');
let useMsgEl = document.getElementById('use-msg');
let statItemEl = document.getElementById('stat-item');
let statMsgEl = document.getElementById('stat-msg');
let resetBtnEl = document.getElementById('reset-btn');


// Event Listeners
document.getElementById('item-box').addEventListener('click', getItem);
useItemEl.addEventListener('change',useItem);
statItemEl.addEventListener('change', itemStats);
resetBtnEl.addEventListener('click', reset);



// Event Functions
function getItem(){
  let random = Math.random();
  
  // Gets rid of the text in the inventory
  if (firstClick) {
    document.getElementById('inventory').innerHTML = '';
    firstClick = false;
}

  // what you get if current place is between 1 and 6
  if (currentPlace <= 6){
    if (random < 0.35){
      banana++;
      itemHistoryEl.innerHTML += "<img src='img/banana.png'>"
      bananaEl.innerHTML = banana;
    } else if (random <= 0.60){
      green++;
      itemHistoryEl.innerHTML += "<img src='img/greenshell.png'>"
      greenEl.innerHTML = green;
    } else if (random <= 0.85){
      mushroom++;
      itemHistoryEl.innerHTML += "<img src='img/mushroom.png'>"
      mushroomEl.innerHTML = mushroom;
    } else if (random <= 0.90){
      red++;
      itemHistoryEl.innerHTML += "<img src='img/redshell.png'>"
      redEl.innerHTML = red;
    } else if (random <= 0.95){
      bullet++;
      itemHistoryEl.innerHTML += "<img src='img/bulletbill.png'>"
      bulletEl.innerHTML = bullet;
    } else {
      star++;
      itemHistoryEl.innerHTML += "<img src='img/starman.png'>"
      starEl.innerHTML = star;
    }

  // what you get if current place is between 7 and 12
  } else {
    if (random < 0.05){
      banana++;
      itemHistoryEl.innerHTML += "<img src='img/banana.png'>"
      bananaEl.innerHTML = banana;
    } else if (random <= 0.15){
      green++;
      itemHistoryEl.innerHTML += "<img src='img/greenshell.png'>"
      greenEl.innerHTML = green;
    } else if (random <= 0.25){
      mushroom++;
      itemHistoryEl.innerHTML += "<img src='img/mushroom.png'>"
      mushroomEl.innerHTML = mushroom;
    } else if (random <= 0.45){
      red++;
      itemHistoryEl.innerHTML += "<img src='img/redshell.png'>"
      redEl.innerHTML = red;
    } else if (random <= 0.70){
      bullet++;
      itemHistoryEl.innerHTML += "<img src='img/bulletbill.png'>"
      bulletEl.innerHTML = bullet;
    } else {
      star++;
      itemHistoryEl.innerHTML += "<img src='img/starman.png'>"
      starEl.innerHTML = star;
    }
  }
} // end of getItem

function useItem(){

  // user types banana
  if (useItemEl.value.toLowerCase() == 'banana'){

    // check if they have a banana before using item
    if(banana >= 1){
      banana--;
      currentPlace--;
      useMsgEl.innerHTML = "Your competition slipped on your banana. You moved up a spot!";
      currentPlaceEl.innerHTML = currentPlace;
      useItemEl.value = '';
      bananaEl.innerHTML = banana;
    } else {
      useMsgEl.innerHTML = "You don't have any bananas.";
      useItemEl.value = '';
    }
  } // end use banana if statement

  // user types mushroom
  if (useItemEl.value.toLowerCase() == 'mushroom'){

    // check if they have a mushroom before using item
    if(mushroom >= 1){
      mushroom--;
      currentPlace--;
      useMsgEl.innerHTML = "You boosted ahead and moved up a spot!";
      currentPlaceEl.innerHTML = currentPlace;
      useItemEl.value = '';
      mushroomEl.innerHTML = mushroom;
    } else {
      useMsgEl.innerHTML = "You don't have any mushrooms.";
      useItemEl.value = '';
    }
  } // end use mushroom if statement

  // user types green or green shell
  if (useItemEl.value.toLowerCase() == 'green' || useItemEl.value.toLowerCase() == 'green shell'){

    // check if they have a green shell before using item
    if(green >= 1){
      green--;
      currentPlace--;
      useMsgEl.innerHTML = "Nice aim! The green shell hit your target!!";
      currentPlaceEl.innerHTML = currentPlace;
      useItemEl.value = '';
      greenEl.innerHTML = green;
    } else {
      useMsgEl.innerHTML = "You don't have any green shells.";
      useItemEl.value = '';
    }
  } // end use green shell if statement

  // user types red or red shell
  if (useItemEl.value.toLowerCase() == 'red' || useItemEl.value.toLowerCase() == 'red shell'){

    // check if they have a green shell before using item
    if(red >= 1){
      red--;
      currentPlace--;
      useMsgEl.innerHTML = "The red shell homed in on your target!!";
      currentPlaceEl.innerHTML = currentPlace;
      useItemEl.value = '';
      redEl.innerHTML = red;
    } else {
      useMsgEl.innerHTML = "You don't have any red shells.";
      useItemEl.value = '';
    }
  } // end use red shell if statement

  // user types bullet or bill or bullet bill
  if (useItemEl.value.toLowerCase() == 'bullet' || useItemEl.value.toLowerCase() == 'bill' || useItemEl.value.toLowerCase() == 'bullet bill'){

    // check if they have a bullet bill before using item
    if(bullet >= 1){
      bullet--;
      currentPlace -= 2;
      useMsgEl.innerHTML = "The bullet bill rammed through 2 drivers!";
      currentPlaceEl.innerHTML = currentPlace;
      useItemEl.value = '';
      bulletEl.innerHTML = bullet;
    } else {
      useMsgEl.innerHTML = "You don't have any bullet bills.";
      useItemEl.value = '';
    }
  } 

  // user types star or starman
  if (useItemEl.value.toLowerCase() == 'star' || useItemEl.value.toLowerCase() == 'starman'){

    // check if they have a star before using item
    if(star >= 1){
      star--;
      currentPlace -= 3;
      useMsgEl.innerHTML = "You're invincible for a few moments and moved ahead!";
      currentPlaceEl.innerHTML = currentPlace;
      useItemEl.value = '';
      starEl.innerHTML = star;
    } else {
      useMsgEl.innerHTML = "You don't have any starmen.";
      useItemEl.value = '';
    }
  } 

  // check if current place got to 1 or less
  if (currentPlace <= 1){
    currentPlaceEl.innerHTML = '1<br>You win!'
  }

  
}  

// Item stats start
function itemStats(){
  let itemTotal = banana + mushroom + green + red + bullet + star;

  if (statItemEl.value.toLowerCase() == 'banana' || statItemEl.value.toLowerCase() == 'bananas'){
    statMsgEl.innerHTML = "Out of " + itemTotal + " items, " + banana/itemTotal * 100 + "% are bananas.";
  }

  if (statItemEl.value.toLowerCase() == 'mushroom' || statItemEl.value.toLowerCase() == 'mushrooms'){
    statMsgEl.innerHTML = "Out of " + itemTotal + " items, " + mushroom/itemTotal * 100 + "% are mushrooms.";
  }

  if (statItemEl.value.toLowerCase() == 'green' || statItemEl.value.toLowerCase() == 'green shell' || statItemEl.value.toLowerCase() == 'green shells'){
    statMsgEl.innerHTML = "Out of " + itemTotal + " items, " + green/itemTotal * 100 + "% are green shells.";
  }

  if (statItemEl.value.toLowerCase() == 'red' || statItemEl.value.toLowerCase() == 'red shell' || statItemEl.value.toLowerCase() == 'red shells'){
    statMsgEl.innerHTML = "Out of " + itemTotal + " items, " + red/itemTotal * 100 + "% are red shells."; 
  }

  if (statItemEl.value.toLowerCase() == 'bill' ||statItemEl.value.toLowerCase() == 'bullet' || statItemEl.value.toLowerCase() == 'bullets' || statItemEl.value.toLowerCase() == 'bullet bill' || statItemEl.value.toLowerCase() == 'bullet bills'){
    statMsgEl.innerHTML = "Out of " + itemTotal + " items, " + bullet/itemTotal * 100 + "% are bullet bills."; 
  }

  if (statItemEl.value.toLowerCase() == 'star' || statItemEl.value.toLowerCase() == 'stars' || statItemEl.value.toLowerCase() == 'starman' || statItemEl.value.toLowerCase() == 'starmans'){
    statMsgEl.innerHTML = "Out of " + itemTotal + " items, " + star/itemTotal * 100 + "% are starmans."; 
  }

}

function reset() {
  // Gets rid of the text in the inventory
  if(firstClick) {
    document.getElementById('inventory').innerHTML = '';
    firstClick= false;
}
  currentPlace = 12;
  banana = 0;
  green = 0;
  mushroom = 0;
  red = 0;
  bullet = 0;
  star = 0;
  currentPlaceEl.innerHTML = 12;
  itemHistoryEl.innerHTML = " ";
  bananaEl.innerHTML = 0;
  greenEl.innerHTML = 0;
  mushroomEl.innerHTML = 0;
  redEl.innerHTML = 0;
  bulletEl.innerHTML = 0;
  starEl.innerHTML = 0;
  useItemEl.innerHTML = 0;
  useMsgEl.innerHTML = "Enter an item to advance in the game and win!";
  statItemEl.innerHTML = 0;
  statMsgEl.innerHTML = "Enter an item to receive your stats!"; 
 
}
