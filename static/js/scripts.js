function Contact(first, last){
    this.firstName = first;
    this.lastName = last;
    this.addressMain = [];
    this.orders = [];
}
function Addresses(street, city, county){
    this.streetName = street;
    this.cityName = city;
    this.countyName = county;
}
Addresses.prototype.fullAddress = function (){
    return this.streetName + ", " + this.cityName + ", " + this.countyName;
}
function Order(pizza, size, crust, totalAmount){
    this.pizza = pizza;
    this.size = size;
    this.crust = crust;
    this.totalAmount = totalAmount;
    this.toppingsAdded = [];
}
Order.prototype.fullOrder = function(){
    return "Flavor: " + this.pizza + ", size:  " + this.size + ", crust type: " + this.crust + ", toppings: " + this.toppingsAdded + " and it costs: " + this.totalAmount; 
}

function resetFields(){
    document.getElementById("pizza1").checked = false;
    document.getElementById("pizza2").checked = false;
    document.getElementById("pizza3").checked = false;
    document.getElementById("pizza4").checked = false;
    document.getElementById("pizza5").checked = false;
    document.getElementById("pizza6").checked = false;
    document.getElementById("large").checked = false;
    document.getElementById("medium").checked = false;
    document.getElementById("small").checked = false;

    document.getElementById("crispy").checked = false;
    document.getElementById("stuffed").checked = false;
    document.getElementById("glutten").checked = false;

    document.getElementById("meat").checked = false;
    document.getElementById("cheese").checked = false;
}


$(document).ready(function(){
    $("form#collect").submit(function(event){

        event.preventDefault();

        var firstNameInput = document.getElementById("first_name").value;
        var lastNameInput = document.getElementById("last_name").value;
        var streetNameInput = document.getElementById("street_name").value;
        var cityNameInput = document.getElementById("city_name").value;
        var countyNameInput = document.getElementById("county_name").value;

        newAddress = new Addresses(streetNameInput, cityNameInput, countyNameInput);
        newContact = new Contact(firstNameInput, lastNameInput);
        newContact.addressMain.push(newAddress);

        console.log(newContact);

        var pizza1 = document.getElementById("pizza1");
        var pizza2 = document.getElementById("pizza2");
        var pizza3 = document.getElementById("pizza3");
        var pizza4 = document.getElementById("pizza4");
        var pizza5 = document.getElementById("pizza5");
        var pizza6 = document.getElementById("pizza6");

        var large = document.getElementById("large");
        var medium = document.getElementById("medium")
        var small = document.getElementById("small");

        var crispy = document.getElementById("crispy");
        var stuffed = document.getElementById("stuffed");
        var glutten = document.getElementById("glutten");

        var meat = document.getElementById("meat");
        var cheese = document.getElementById("cheese");

        var delivery = document.getElementById("del");
        var pickUp = document.getElementById("pick");
        var total = 0;

        //CLASSIC PIZZAS
        // Pizza 1, 2 and 3 large
        $("#row4").each(function () {

            if (pizza1.checked == true || pizza2.checked == true || pizza3.checked == true && large.checked == true && crispy.checked == true){
                total = 1000;
            }
            if (pizza1.checked == true || pizza2.checked == true || pizza3.checked == true && large.checked == true && stuffed.checked == true) {
                total = 1200;
            }
            if (pizza1.checked == true || pizza2.checked == true || pizza3.checked == true && large.checked == true && glutten.checked == true) {
                total = 1400;
            }
            // Pizza 1, 2 and 3 medium
            if (pizza1.checked == true || pizza2.checked == true || pizza3.checked == true && medium.checked == true && crispy.checked == true) {
                total = 800;
            }
            if (pizza1.checked == true || pizza2.checked == true || pizza3.checked == true && medium.checked == true && stuffed.checked == true) {
                total = 1000;
            }
            if (pizza1.checked == true || pizza2.checked == true || pizza3.checked == true && medium.checked == true && glutten.checked == true) {
                total = 1200;
            }
            // Pizza 1, 2 and 3 small
            if (pizza1.checked == true || pizza2.checked == true || pizza3.checked == true && small.checked == true && crispy.checked == true) {
                total = 600;
            }
            if (pizza1.checked == true || pizza2.checked == true || pizza3.checked == true && small.checked == true && stuffed.checked == true) {
                total = 800;
            }
            if (pizza1.checked == true || pizza2.checked == true || pizza3.checked == true && small.checked == true && glutten.checked == true) {
                total = 1000;
            }

            //DELUXE PIZZAS
            // Pizza 4, 5 and 6 large
            if (pizza4.checked == true || pizza5.checked == true || pizza6.checked == true && large.checked == true && crispy.checked == true) {
                total = 1400;
            }
            if (pizza4.checked == true || pizza5.checked == true || pizza6.checked == true && large.checked == true && stuffed.checked == true) {
                total = 1600;
            }
            if (pizza4.checked == true || pizza5.checked == true || pizza6.checked == true && large.checked == true && glutten.checked == true) {
                total = 1800;
            }
            // Pizza 4, 5 and 6 medium
            if (pizza4.checked == true || pizza5.checked == true || pizza6.checked == true && medium.checked == true && crispy.checked == true) {
                total = 1200;
            }
            if (pizza4.checked == true || pizza5.checked == true || pizza6.checked == true && medium.checked == true && stuffed.checked == true) {
                total = 1400;
            }
            if (pizza4.checked == true || pizza5.checked == true || pizza6.checked == true && medium.checked == true && glutten.checked == true) {
                total = 1600;
            }
            // Pizza 4, 5 and 6 small
            if (pizza4.checked == true || pizza5.checked == true || pizza6.checked == true && small.checked == true && crispy.checked == true) {
                total = 1000;
            }
            if (pizza4.checked == true || pizza5.checked == true || pizza6.checked == true && small.checked == true && stuffed.checked == true) {
                total = 1200;
            }
            if (pizza4.checked == true || pizza5.checked == true || pizza6.checked == true && small.checked == true && glutten.checked == true) {
                total = 1400;
            }

            //Toppings for large when you have both
            if (meat.checked == true && cheese.checked == true && large.checked == true){
                total = total + 700;
            }else if (meat.checked == true && cheese.checked == true && medium.checked == true) {
                total = total + 550;
            }else if (meat.checked == true && cheese.checked == true && small.checked == true) {
                total = total + 400;
            }

            //Toppings for when only meat is checked
            if (meat.checked == true && large.checked == true) {
                total = total + 400;
            } else if (meat.checked == true && medium.checked == true) {
                total = total + 350;
            } else if (meat.checked == true && small.checked == true) {
                total = total + 200;
            }

            //Toppings for when only cheese is checked
            if (cheese.checked == true && large.checked == true) {
                total = total + 400;
            } else if (cheese.checked == true && medium.checked == true) {
                total = total + 350;
            } else if (cheese.checked == true && small.checked == true) {
                total = total + 200;
            }

            if (delivery.checked == true) {
                alert("Your order will be delivered to " + newAddress.fullAddress() + " and you have a delivery charge of KES 300.");
                total = total + 300;
            } else if (pickUp.checked == true) {
                alert("Your order will be ready for pick up in 30 minutes. Have a good day!");
            }

            var pizzaSelected = $(this).find("input[name='pizza']:checked").val();
            var sizeSelected = $(this).find("input[name='size']:checked").val();
            var crustSelected = $(this).find("input[name='crust']:checked").val();
            var toppingsBought = [];
            $("input:checkbox[name=toppings]:checked").each(function () {
                toppingsBought.push($(this).val());
            });
            newOrder = new Order(pizzaSelected, sizeSelected, crustSelected, total);
            newOrder.toppingsAdded.push(toppingsBought);
            newContact.orders.push(newOrder);

            

        });
        
        //This creates an order Summary
        $(".first-name").text(newContact.firstName);
        $(".last-name").text(newContact.lastName);
        $(".delivery-details").text(newAddress.fullAddress());
        
        if (document.getElementById("completeTotal").innerHTML == '') {
            var standingTotal = 0;
        } else {
            var standingTotal = document.getElementById("completeTotal").innerHTML;
        }

        newContact.orders.forEach(function (order) {
            $("ul#pizzaBought").append("<ol>" + newOrder.fullOrder() + "</ol>");
            var kavtotal = (parseInt(standingTotal) + parseInt(newOrder.totalAmount)).toString()
            $("#completeTotal").text((parseInt(standingTotal) + parseInt(newOrder.totalAmount)).toString());
        });
        
    });

    $("#another_order").click(function () {
        resetFields();
    });

});

