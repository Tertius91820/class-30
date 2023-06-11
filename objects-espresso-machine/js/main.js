//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class EspressoMachine {
  constructor(color,make,model,price) {  //adding properties & methods = Encapsalation
    this.color = color                   //
    this.make = make                     //
    let model = model    // <============= making it private = abstraction
    this.price = price
  }
  turnOn(){
  console.log("im on")
  }
  steam(){
  console.log("its getting hot")
  }
  brew(){
  console.log("getting order ready")
  }
}

let gaggia = new EspressoMachine("red","gagia","classic pro",500)
