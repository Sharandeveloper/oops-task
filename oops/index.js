let basesalary = 30_000;
let overtime = 10;
let rate = 20;

function getwage(basesalary, overtime,rate) {
    return basesalary + (overtime*rate);
}

let employee = {
    basesalary: 30_000,
    overtime: 20,
    rate: 20,
    getwage: function() {
        return this.basesalary + (this.overtime * this.rate);
    }

    
};
employee.getwage();