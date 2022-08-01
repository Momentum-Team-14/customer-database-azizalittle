console.log("JS is here!");
const peopleDiv = document.querySelector('#container');

function showCustomerName (customerArray) {
    console.log(customers);
    for (let customer of customerArray){
        let customerDiv = document.createElement('div');
        customerDiv.classList.add('customer');
        let nameDiv = document.createElement ('div');
        nameDiv.classList.add('name');
        nameDiv.innerText = `${customer.name.first} ${customer.name.last}`;
        let imageDiv = document.createElement('img');
        imageDiv.classList.add('image')
        //^^ adds div for styling in css
        imageDiv.src = customer.picture.thumbnail;
        let locationDiv = document.createElement('div')
        customerDiv.appendChild(imageDiv);
        customerDiv.appendChild(nameDiv);
        peopleDiv.appendChild(customerDiv);
        //
    }
}
showCustomerName(customers);