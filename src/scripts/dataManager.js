const getEmployees = () => {
    return fetch("http://localhost:8088/employees?_expand=computer&_expand=department")
        .then(r => r.json())
}

export default getEmployees