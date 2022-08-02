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
        // how do I change the first letters to be capitalized? can i enter and modify an object like i can an array?
        let imageDiv = document.createElement('img');
        imageDiv.classList.add('image');
        //^^ adds div for styling in css
        imageDiv.src = customer.picture.thumbnail;

        let emailDiv = document.createElement('div');
        emailDiv.classList.add('email');
        emailDiv.innerText = `${customer.email}`;
        // for location, should I split them up into two since there are two lines??
        let streetDiv = document.createElement('div')
        streetDiv.classList.add('street');
        streetDiv.innerText = `${customer.location.street.number} ${customer.location.street.name}`;

        let stateDiv = document.createElement('div');
        stateDiv.classList.add('div');
        stateDiv.innerText = `${customer.location.city} ${customer.location.state} ${customer.location.postcode}`;

        let birthdayDiv = document.createElement('div');
        birthdayDiv.classList.add('div');
        birthdayDiv.innerText = `DOB: ${customer.dob.date}`;

        let membershipDiv = document.createElement('div');
        membershipDiv.classList.add('div');
        membershipDiv.innerText = `Customer since ${customer.registered.date}`;

        customerDiv.appendChild(imageDiv);
        customerDiv.appendChild(nameDiv);
        customerDiv.appendChild(emailDiv);
        customerDiv.appendChild(streetDiv);
        customerDiv.appendChild(stateDiv);
        customerDiv.appendChild(birthdayDiv);
        customerDiv.appendChild(membershipDiv);
        peopleDiv.appendChild(customerDiv);
        //
    }
}
showCustomerName(customers);