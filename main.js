const entryPoint = document.querySelector(".container");

function customerToHtml(customer) {
    let customerName = customer.name.first.charAt(0).toUpperCase() + customer.name.first.slice(1) + " " + customer.name.last.charAt(0).toUpperCase() + customer.name.last.slice(1)

    return `<div class = Card>
    <img src = ${customer.picture.large} class = "customerHeadshot">
    <h2 class="customer-name">${customerName}</h2>
    <div class = "customer-info">
              <div class="email">${customer.email}</div>
              <div class="address-line1">${customer.location.street.number} ${customer.location.street.name}</div>
              <div class="address-line2">${customer.location.city}, ${nameToAbbr(customer.location.state)} ${customer.location.postcode}</div>
              <div class="dob">DOB: ${moment(customer.dob.date).format("MMM D, YYYY")}</div>
              <div class="regSince">Customer Since: ${moment(customer.registered.date).format("MMM D, YYYY")}</div>
    </div>`
};
let allCustomers = customers.map((customer) => customerToHtml(customer)).join('\n');

entryPoint.innerHTML = allCustomers;