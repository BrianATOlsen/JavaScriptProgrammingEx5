let firstName = prompt('Please enter your first name');
let lastName = prompt('Please enter your last name');
let customerType = prompt('Please enter customer type');
let invoiceAmt = parseFloat(prompt('Please provide an invoice amount', 0.00));
let discountPercentage = 0.0;
let discountAmt = 0.0;
let invoiceTotal = 0.0;

try {
    
    if (firstName === '') throw new Error('Please first name is required');
    if (lastName === '') throw new Error('Please last name is required');
    if (customerType === '' || customerType.length !== 1) throw new Error('The customer type is not valid');    
    if (isNaN(invoiceAmt)) throw new Error('Invoice amount is not valid');

    switch (customerType.toUpperCase()){
        case 'R':
            switch (true) {
                case invoiceAmt >= 250.0:
                    discountPercentage = 0.2;
                    break;
                case invoiceAmt >= 100:
                    discountPercentage = 0.1;
                    break;
                default:
                    discountPercentage = 0;
                    break;
            }
            break;
        case 'C':
            switch (true) {
                case invoiceAmt >= 250.0:
                    discountPercentage = 0.3;
                    break;
                default:
                    discountPercentage = 0.2;
                    break;
            }
            break;

    }

    discountAmt = discountPercentage * invoiceAmt;
    invoiceTotal = invoiceAmt - discountAmt;
} catch (error) {
    alert(error);
    window.location = 'index.html';
}
