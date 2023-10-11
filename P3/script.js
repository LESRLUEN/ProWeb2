// JavaScript source code

function calculateSalary() {
    const hoursWorked = parseFloat(document.getElementById('hours').value);
    let totalSalary = 0;

    if (hoursWorked <= 40) {
        totalSalary = hoursWorked * 10; // Puedes ajustar la tarifa por hora según tu necesidad
    } else if (hoursWorked <= 47) {
        totalSalary = 40 * 10 + (hoursWorked - 40) * 20;
    } else {
        totalSalary = 40 * 10 + 7 * 20 + (hoursWorked - 47) * 30;
    }

    document.getElementById('result').innerText = `Salario semanal: $${totalSalary.toFixed(2)}`;
}
