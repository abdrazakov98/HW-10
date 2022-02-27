//task-1 

class Restaurant {
    name;
    cusineType;
    served = 0;

    constructor(name, cusineType) {
      this.name = name,
      this.cusineType = cusineType;
    }
  
    showInfo() {
        document.write(`<br> <br>
         ${this.name} is a restaurant of ${this.cusineType} meal. <br>
        `);
    }

    isOpen(){
        let currentHour = new Date().getHours();
        let currentDay = 5;

        if (currentDay < 7) {
            document.write(` <br>${this.name} is open. <br>`);
        }
        else {
            if ( currentHour >= 9 && currentHour <= 23) {
                document.write(`<br> ${this.name} is open <br>`);
            } else {
                document.write(`<br> ${this.name} is closed <br>`);  
            }   
        }
    }


    serve() {
        return this.served++;
    }

    setServed(numberOfServed){
        this.served += numberOfServed;
    }

    showTotalServed(){
        document.write(` <br>Total served: ${this.served}<br>`);
    }
}
  
const tudor = new Restaurant('TUDOR', 'european');


tudor.showInfo();
tudor.isOpen();
tudor.serve();
tudor.showTotalServed();
tudor.serve();
tudor.showTotalServed();
tudor.setServed(5);
tudor.showTotalServed();




//task-2

class Cars {

    constructor(model, year, power, color) {
      this.model = model;
      this.year = year;
      this.power = power + "kW";
      this.color = color;
    }

    showInfo() {
        document.write(` <br>
            Model: ${this.model}<br>
            Year: ${this.year}<br>
            Power: ${this.power}<br>
            Color: ${this.color}<br>
        `)}  
}

class ElectroCars extends Cars {
    constructor(model, year, power, color, battery) {
      super(model, year, power, color);
      this.battery = battery;
    }

    showInfo() {
        super.showInfo();
        document.write(`
            Battery: ${this.battery}<br>     
        `);
    }

    promote() {
        document.write(`
           <b> <br> Buy ${this.model} on credit!<br>  <b>
        `)
    }

  }
  
const bmw = new Cars('BMW X5 M50d', 2020, 294, 'black');
bmw.showInfo();

const honda = new ElectroCars("Honda SUV E", 2020, 117, 'blue', 53.6);
honda.showInfo();
honda.promote();
