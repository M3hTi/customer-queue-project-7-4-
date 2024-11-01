const names = [
    "Oliver Thompson",
    "Amelia Bennett",
    "Ethan Parker",
    "Mia Collins",
    "Lucas Rivera",
    "Sophia Turner",
    "Mason Brooks",
    "Ava Jenkins",
    "James Russell",
    "Ella Sullivan",
    "Liam Mitchell",
    "Lily Carter",
    "Benjamin Cooper",
    "Chloe Gray",
    "Alexander Reed",
    "Zoe Murphy",
    "Jackson Ward",
    "Emily Foster",
    "Daniel Morris",
    "Grace Hughes",
    "Gene Bearden",
    "Charles Sorensen",
    "John Hilton",
    "David Johnson",
    "Wesley Cho",
    "Alijah Jordan"
];

const ulElement = document.querySelector(".queue-list");
const addBtn = document.querySelector("#js-add");
const searchBtn = document.querySelector("#js-search");
const removeBtn = document.querySelector("#js-remove");
const removeTopBtn = document.querySelector(".remove-btn");
const inputElement = document.querySelector("#customer");
const statusMsg = document.querySelector(".status-message");
const errorMessage = document.querySelector(".error-Msg");

function render(){
    function showCustomers() {
        names.forEach((name,index) => {
            // console.log(name);
            const listElement = document.createElement("li");
            listElement.textContent = `${index + 1}. ${name}`;
            ulElement.appendChild(listElement);
        })  
    }
    showCustomers();


    function addCustomer(){
        const valueInput = inputElement.value;
        try {
            if(valueInput === '') throw 'Please enter a name';
            errorMessage.textContent = '';
            names.push(valueInput);
            inputElement.value = '';
            showCustomers();
            
        } catch (error) {
            errorMessage.textContent = error;
        }
    }

    function searchCustomer() {
        const valueInput = inputElement.value;
        try {
            if(valueInput === '') throw 'Please enter a name';
            statusMsg.textContent = '';
            errorMessage.textContent = '';
            const isFound = names.some((name) => name.toLowerCase() === valueInput.toLowerCase());
            // console.log(isFound);
            if(!isFound) throw 'Customer not found';
            const index = names.findIndex((name) => name.toLowerCase() === valueInput.toLowerCase());
            // console.log(index);
            statusMsg.textContent = `${valueInput} found in position ${index + 1} of the queue`;
            inputElement.value = '';           
            
        } catch (error) {
            errorMessage.textContent = error;
        }
    }

    function removeCustomer() {
        const valueInput = inputElement.value;
        try {
            if(valueInput === '') throw 'Please enter a name';
            errorMessage.textContent = '';
            const index = names.findIndex((name) => name.toLowerCase() === valueInput.toLowerCase());
            names.splice(index, 1);
            ulElement.innerHTML = '';
            showCustomers();
            inputElement.value = '';
        } catch (error) {
            errorMessage.textContent = error;
        }
    }


    function removeTopCustomer() {
        names.shift();
        ulElement.innerHTML = '';
        showCustomers();
    }


    addBtn.addEventListener("click", addCustomer);
    searchBtn.addEventListener("click", searchCustomer);
    removeBtn.addEventListener("click", removeCustomer);
    removeTopBtn.addEventListener("click", removeTopCustomer);
}
    











window.addEventListener("load", render);