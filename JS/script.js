const dataContainer = document.getElementById('dataContainer');
const productName = document.getElementById('productName');
const productPrice = document.getElementById('productPrice');
const productCategory = document.getElementById('productCategory');
const productDescription = document.getElementById('productDescription');
const addButton = document.getElementById('addButton');
const updateButton = document.getElementById('updateButton');

let arrayOfData;
if(localStorage.getItem('products') != null){
    arrayOfData = JSON.parse(localStorage.getItem('products'));
    showData();
}else arrayOfData = [];


// add prduct function
function addData(){
    let product = {
        name : productName.value,
        price : productPrice.value,
        category : productCategory.value,
        description : productDescription.value
    }
    arrayOfData.push(product);
    localStorage.setItem('products',JSON.stringify(arrayOfData));
    showData();
    clearInputs();
}

// function to show data from the array of data
function showData(){
    let cartona = "";
    for(let i = 0; i< arrayOfData.length; i++){
        cartona += `
            <tr>
            <td>${arrayOfData[i].name}</td>
            <td>${arrayOfData[i].price}</td>
            <td>${arrayOfData[i].category}</td>
            <td>${arrayOfData[i].description}</td>
            <td>
                <button class="btn btn-outline-warning" onclick="updateData(${i})">Update</button>
                <button class="btn btn-outline-danger" onclick="removeProduct(${i})">Delete</button>
            </td>
            </tr>
        `;
    }
    dataContainer.innerHTML = cartona;
}

// function to clear all inputs
function clearInputs(){
    productName.value = "";
    productPrice.value = "";
    productCategory.value = "";
    productDescription.value = "";
}

let indexOfUpdating ;

// function of update button
function updateData(index){
    productName.value = arrayOfData[index].name;
    productPrice.value = arrayOfData[index].price;
    productCategory.value = arrayOfData[index].category;
    productDescription.value = arrayOfData[index].description;

    addButton.classList.add('d-none');
    updateButton.classList.remove('d-none');

    indexOfUpdating = index;

}

// function to update product
function updataProduct(){
    arrayOfData[indexOfUpdating] = {
        name : productName.value,
        price : productPrice.value,
        category : productCategory.value,
        description : productDescription.value
    }
    localStorage.setItem('products',JSON.stringify(arrayOfData));
    showData();
    clearInputs();
    addButton.classList.remove('d-none');
    updateButton.classList.add('d-none');
}

// function to remove product
function removeProduct(index){
    arrayOfData.splice(index,1);
    localStorage.setItem('products',JSON.stringify(arrayOfData));
    showData();
}