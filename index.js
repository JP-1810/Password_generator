const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
let ps1 = document.getElementById("ps-1")
let ps2 = document.getElementById("ps-2")
function GeneratePassword(){
    let p1 = randomc()
    let p2 = randomc()
   ps1.value = p1 
   ps2.value = p2
}
 
 function randomc(){
    let s=""
    for(let i = 0 ; i <15 ; i++){
    s+= characters[Math.floor(Math.random()*characters.length)]
    }
    return s
 }



