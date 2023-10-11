// JavaScript source code
function convert() {
    const quantity = parseFloat(document.getElementById('quantity').value);
    const conversionType = document.getElementById('conversion').value;
    let result = 0;

    switch (conversionType) {
        case 'metersToCentimeters':
            result = quantity * 100;
            displayResult('Metros a Centímetros', result);
            break;
        case 'metersToFeet':
            result = quantity * 3.28084;
            displayResult('Metros a Pies', result);
            break;
        case 'metersToYards':
            result = quantity * 1.09361;
            displayResult('Metros a Yardas', result);
            break;
        case 'centimetersToMeters':
            result = quantity / 100;
            displayResult('Centímetros a Metros', result);
            break;
        case 'feetToMeters':
            result = quantity / 3.28084;
            displayResult('Pies a Metros', result);
            break;
        case 'yardsToMeters':
            result = quantity / 1.09361;
            displayResult('Yardas a Metros', result);
            break;
        default:
            alert('Selecciona una conversión válida.');
    }
}

function displayResult(conversionName, result) {
    document.getElementById('result').innerHTML = `${conversionName}: ${result.toFixed(2)}`;
}

function clearFields() {
    document.getElementById('quantity').value = '';
    document.getElementById('result').innerHTML = '';
}
