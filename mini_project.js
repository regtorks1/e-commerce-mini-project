let totalAmount = 0;

let myCartPage = () => {
    document.getElementById("side_panel").style.width = 'auto';

}

let myCloseNav = () => {
    document.getElementById("side_panel").style.width = '0';
}

let checkout = () => {
    window.location = 'checkout.html';
}

let back_product = () => {
    window.location = 'index.html';
}

let update = () => {
    let update_Q = document.getElementById("update").value;
    document.getElementById("insertNewQuantity").innerHTML = update_Q

}

let delete_btn = () => {
    let firstRemove = document.getElementById("remove1");
    firstRemove.remove();

    let sec_remove = document.getElementById("remove2");
    sec_remove.remove();

    let third_remove = document.getElementById("remove3");
    third_remove.remove()

    let fourth_remove = document.getElementById("insertNewQuantity");
    fourth_remove.remove()

    let fifth_remove = document.getElementById("sub_total");
    fifth_remove.remove()
}

let add_cost = () => {
    let newQuant = document.getElementById("update").value;
    totalAmount = newQuant * 98.50;
    document.getElementById("sub_total").innerHTML = totalAmount;
    

}

let add_coup = (input) => {
    let coupon = document.getElementById("insert_coupon").value;
    console.log(coupon)
    if(coupon.length < 10){
        alert("invalid coupon: Try again")
    }
    else {
        let newCoup = parseInt(document.getElementById("sub_total").innerHTML);
        let disCoup = newCoup * 0.5
        document.getElementById("sub_total").innerHTML = disCoup;
    }
}


