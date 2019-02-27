const createEmployee = (employeeData) => {
    return `
    <article class="employee">
        <header class="employee__name">
            <h1>${employeeData.first_name} ${employeeData.last_name}</h1>
        </header>
        <section class="employee__department">
            Works in the ${employeeData.department.dept_name} department
        </section>
        <section class="employee__computer">
            Currently using a ${employeeData.computer.make} ${employeeData.computer.model}
        </section>
    </article>
    `
}

export default createEmployee