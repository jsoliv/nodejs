 function User() {
     this.name = "";
     this.life = 100;
     this.givelife = function giveLife(targetPlayer) {
         targetPlayer.life += 1;
         console.log(this.name + "gave 1 life to " + targetPlayer.name)

     }
 }

 var Jose = new User();
 var Wendy = new User();

 Jose.name = "José";
 Wendy.name = "Wendy";

 Jose.givelife(Wendy);
 console.log("Jose " + Jose.life);
 console.log("Wendy " +  Wendy.life);



 User.prototype.uppercut = function uppercut(targetPlayer) {
    targetPlayer.life -= 3;
    console.log(this.name + " Just uppercutted "  + targetPlayer.name)

 }

 Wendy.uppercut(Jose);

 console.log("\nJose " + Jose.life);
 console.log("Wendy " +  Wendy.life);




 User.prototype.magic = 60  


 console.log(Jose.magic);
 console.log(Wendy.magic);