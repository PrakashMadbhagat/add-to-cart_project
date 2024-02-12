
var row2 = document.getElementById("row2");
let our = () => {

    let my = JSON.parse(localStorage.getItem("Mycard"))

    if(my != null){


        my.forEach(cart => {
            console.log(cart);
            row2.innerHTML += ` <div class="col-12">
                                <div class="card mb-3 d-block">
                                    <div class="row g-0">
                                        <div class="imges d-flex align-items-center col-md-4">
                                            <img src="${cart.thumbnail}" alt="..">
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                            <h5 class="card-title">${cart.title}</h5>
                                            <p class="card-text my-0">${cart.description}</p>
                                            <p class="card-text my-0 p-0"><small class="text-body-secondary">Brand : ${cart.brand}</small></p>
                                            <p class="card-text my-0 p-0"><small class="text-body-secondary">Discount : ${cart.discountPercentage}%</small></p>
                                            <p class="card-text my-0 p-0"><small class="text-body-secondary">Price : $${Math.floor((cart.price) - (cart.price * cart.discountPercentage) / 100)} <del>${cart.price}</del> </small></p>
                                            <div class="rate">
                                                <i class="bi bi-star-fill"></i>
                                                ${cart.rating}
                                            </div>
                                            <a type="button" onclick="return deletes(${cart.id})" class="text-dark hover bg-white">
                                                <i class="bi bi-trash3"></i>
                                            </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>`
    
        });
    }
    else{

        row2.innerHTML = '';
    }
}
our();
var table = document.getElementById("table");
let price = document.querySelector("#price")
let price2 = document.querySelector("#price2")
let price3 = document.querySelector("#price3")
let tables = () => {
    let t = 0

    let bill = JSON.parse(localStorage.getItem("Mycard"));

    if(bill != null){
        console.log("hhhh");
        bill.forEach(cart => {
            console.log(cart);
            table.innerHTML += `<tr>
                                    <th scope="row">${cart.title}</th>
                                    <td>1</td>
                                    <td>${Math.floor((cart.price) - (cart.price * cart.discountPercentage) / 100)}</td>
                                    <td>$${Math.floor((cart.price) - (cart.price * cart.discountPercentage) / 100)}</td>
                                </tr> 
                                `
            t = t + Math.floor((cart.price) - (cart.price * cart.discountPercentage) / 100);
            tt = 2.8;
            ttt = t + tt;
            price.innerHTML = "Sub Total : $" +t;
            price2.innerHTML = "tax : $" + tt;
            price3.innerHTML = "Total : $" +ttt;
        });
        if(bill.length == 0){
            table.innerHTML = '';
            price.innerHTML = "Price : $" +'0';
            
        }
    }else{
        table.innerHTML = '';
        
        price.innerHTML = "Price : $" +'0';
    }
}
tables();



const deletes = (id) => {

    let deleteCart = JSON.parse(localStorage.getItem("Mycard"))
    let deleteArr = [];
    deleteCart.filter((cartItem) => {

        if (cartItem.id != id) {

            deleteArr.push(cartItem);
        }
        // t = t + cartItem.price

    });
    // price.innerHTML = t
    // document.getElementById("price").innerHTML = "Price :" ,t;
    localStorage.setItem('Mycard', JSON.stringify(deleteArr));
    row2.innerHTML = ``;
    table.innerHTML = '';


    our();
    tables();

};
// deletes()

const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1;
let dd = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const formateToday = dd + '/' + mm + '/' + yyyy;
document.getElementById("dt").innerHTML = "Date :" + dd + '/' + mm + '/' + yyyy;

