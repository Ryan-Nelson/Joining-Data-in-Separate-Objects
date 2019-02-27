import getEmployees from "./dataManager"
import createEmployee from "./createEmployees"
import printToDOM from "./printToDom"

getEmployees()
    .then(employees => {
        employees.forEach(employee => {
            const html = createEmployee(employee)
            printToDOM(html, "#employeeList")
        })
    })

    