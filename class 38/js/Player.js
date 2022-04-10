class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }
getCount(){
  var playerCountRef = datebase.ref("playerCount")
  playerCountRef.on("value",(data)=>){
    playerCount=data.val()
  }
)
}
updatecount
 }