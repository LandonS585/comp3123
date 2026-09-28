//TODO - Create Employee Module here and export to use in index.js

let employees = [
    {id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", Salary:5000},
    {id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", Salary:4000},
    {id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", Salary:5500},
    {id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", Salary:9000}
]

function getAll() {
    return employees
}

function getNames() {
    let names = []

    for (let i = 0; i < employees.length; i++) {
        names.push(employees[i].firstName + " " + employees[i].lastName)
    }

    names.sort()
    return names
}

function getTotalSalary() {
    let total = 0

    for (let i = 0; i < employees.length; i++) {
        total = total + employees[i].Salary
    }

    return total
}

module.exports = {
    getAll: getAll,
    getNames: getNames,
    getTotalSalary: getTotalSalary
}