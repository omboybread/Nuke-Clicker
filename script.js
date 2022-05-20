let nukes = 0
let workers = 0
let miners_price = 50
let time = 1
function Make_Nuke(){
  nukes = nukes + 1 + workers
  console.log(nukes)
}

function Say_nukes(){
  alert("Your nukes are: " + nukes)
}

function Buy_miners(){
  if(nukes >= miners_price){
    ++workers
    nukes = nukes - miners_price
    miners_price = miners_price + 25
    alert("Miners owned: " + workers)
    alert("Miners prise now: " + miners_price)
  }
  else{
    alert("To buy a miner you need at least " + miners_price + " nukes")
  }
}