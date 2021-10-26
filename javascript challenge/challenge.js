// 1

const pairs = (arr) => {
    let pairs = []
    for (const integer of arr) {
      if (!Number.isInteger(integer)) {
        console.error(`Invalid Array, ${integer} is not integer`)
        return
      }
      (integer % 2 === 0) && pairs.push(integer)
    }
    return pairs
}

// 2

const isPalindrome = (string) => {
    if (typeof string !== "string") return console.error(`${string} is not a string`)
    const str = string.toLowerCase()
    const len = string.length
    for (let i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }
    return true;
}

// 3

class Car {
  constructor(make, model, turnedOn, engineDisplacement, year) {
    this.make = make;
    this.model = model;
    this.turnedOn = turnedOn;
    this.engineDisplacement = engineDisplacement;
    this.year = year;
  }
  isON() {
    return this.turnedOn
  }
  turnOn() {
    this.turnedOn = true;
  }
  turnOff() {
    this.turnedOn = false;
  }
  toString(){
    return [this.year, this.make, this.model, this.engineDisplacement]
  }
  getMarketingData() {
    return [this.make, this.model, this.year]
  }
}

//4

class Bicycle extends Car {
  constructor(make, model, year) {
    super(make, model)
    this.year = year
  }
}

const ducatiMulti = new Bicycle ("Ducati", "Multistrada", 2003)
console.log(ducatiMulti.getMarketingData())