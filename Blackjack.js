</pre>
// Your Card constructor
function Card(s, n){
 var suit = s;
 var number = n;
 this.getSuit = function(){
 return suit;
 };
 this.getNumber = function(){
 return number;
 };
 this.getValue = function(){
 if(number === 11 || number === 12 || number === 13){
 return 10;
 }
 else if(number === 1) return 11;
 else return number;
 };
}

// Deal function. It returns a new card with a suit
// that is a random number from 1 to 4, and a number that is a random
// number between 1 and 13
var deal = function(){
 var tempSuit = Math.floor(Math.random()* 4 +1);
 var tempNumber = Math.floor(Math.random()* 13 +1);
 return (new Card(tempSuit, tempNumber));
}

//constructor for new class Hand
function Hand(){
 this.card1 = deal();
 this.card2 = deal();
 this.score = function(){
 return this.card1.getValue() + this.card2.getValue();
 };
}

var myHand = new Hand();
var yourHand = new Hand();

console.log("I scored a "+myHand.score()+" and you scored a "+ yourHand.score());

if(yourHand.score() > myHand.score())
 console.log("you win!");
else if(yourHand.score() < myHand.score())
 console.log("I win!");
else console.log("We tied!");
<pre>