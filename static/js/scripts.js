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
function Order(pizza, size, crust){
    this.pizza = pizza;
    this.size = size;
    this.crust = crust;
    this.toppingsAdded = [];
}
Order.prototype.fullOrder = function(){
    return this.pizza + ", " + this.size + ", " + this.crust
}



$(document).ready(function(){
    $("#collect").submit(function(event){

        event.preventDefault();

        var firstNameInput = document.getElementById("first_name").value;
        var lastNameInput = document.getElementById("last_name").value;
        var streetNameInput = document.getElementById("street_name").value;
        var cityNameInput = document.getElementById("city_name").value;
        var countyNameInput = document.getElementById("county_name").value;

        var pizzaSelected = $("input[name='pizza']:checked").val();
        var sizeSelected = $("input[name='size']:checked").val();
        var crustSelected = $("input[name='crust']:checked").val();

        var toppingsBought = [];
        $("input:checkbox[name=toppings]:checked").each(function () {
            toppingsBought.push($(this).val());
        });

        newOrder = new Order(pizzaSelected, sizeSelected, crustSelected);
        newAddress = new Addresses(streetNameInput, cityNameInput, countyNameInput);
        newContact = new Contact(firstNameInput, lastNameInput);
        newOrder.toppingsAdded.push(toppingsBought);
        newContact.addressMain.push(newAddress);
        newContact.orders.push(newOrder);

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

        var total = 0

        //CLASSIC PIZZAS
        // Pizza 1, 2 and 3 large
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

        alert("Your order is: " + newOrder.fullOrder() + " and your total is: " + total);

    })
})

$(document).ready(function(){
    $("#another_order").click(function(){
        $("#row4").append(
            "<span class='new_order'>" +
            '<h5>Another One</h5>' +
            '<div id="order1">' +
                '<div class="col" id="col3">' +
                    '<h5>Classic</h5>' +
                    '<div class="form-check">' +
                        '<input class="form-check-input" type="radio" name="pizza" id="pizza1" value="Beef Peperoni">' +
                        '<label class="form-check-label" for="pizza">Pizza 1</label>' +
                    '</div>' +
                    '<div class="form-check">' +
                        '<input class="form-check-input" type="radio" name="pizza" id="pizza2" value="Chicken and Mushroom">' +
                        '<label class="form-check-label" for="pizza">Pizza 2</label>' + 
                    '</div>' + 
                    '<div class="form-check">' +
                        '<input class="form-check-input" type="radio" name="pizza" id="pizza3" value="Vegeterian Blast">' +
                        '<label class="form-check-label" for="pizza">Pizza 3</label>' +
                    '</div>' +
                '</div>' +
                '<div class="col" id="col3">' +
                    '<h5>Deluxe</h5>' +
                    '<div class="form-check">' +
                        '<input class="form-check-input" type="radio" name="pizza" id="pizza4" value="Sweet and Sour Chicken">' +
                        '<label class="form-check-label" for="pizza">Pizza 1</label>' +
                    '</div>' +
                    '<div class="form-check">' +
                        '<input class="form-check-input" type="radio" name="pizza" id="pizza5" value="Cheese Pizza">' +
                        '<label class="form-check-label" for="pizza">Pizza 2</label>' +
                    '</div>' +
                    '<div class="form-check">' +
                        '<input class="form-check-input" type="radio" name="pizza" id="pizza6" value="Seafood Pizza">' +
                        '<label class="form-check-label" for="pizza">Pizza 3</label>' +
                    '</div>' +
                '</div>' +
                '<div class="col" id="col3">' +
                    '<h5>Size</h5>' + 
                    '<div class="form-check">' +
                        '<input class="form-check-input" type="radio" name="size" id="large" value="Large">' +
                        '<label class="form-check-label" for="size">Large</label>' +
                    '</div>' +
                    '<div class="form-check">' +
                        '<input class="form-check-input" type="radio" name="size" id="medium" value="Medium">' +
                        '<label class="form-check-label" for="size">Medium</label>' +
                    '</div>' +
                    '<div class="form-check">' +
                        '<input class="form-check-input" type="radio" name="size" id="small" value="Small">' +
                        '<label class="form-check-label" for="size">Small</label>' +
                    '</div>' +
                '</div>' +
                '<div class="col" id="col3">' +
                    '<h5>Crust</h5>' +
                    '<div class="form-check">' +
                        '<input class="form-check-input" type="radio" name="crust" id="crispy" value="Crispy">' +
                        '<label class="form-check-label" for="crust">Crispy</label>' +
                    '</div>' +
                '<div class="form-check">' +
                    '<input class="form-check-input" type="radio" name="crust" id="stuffed" value="Stuffed">' +
                    '<label class="form-check-label" for="crust">Stuffed</label>' +
                '</div>' +
                '<div class="form-check">' +
                    '<input class="form-check-input" type="radio" name="crust" id="glutten" value="Glutten Free">' +
                    '<label class="form-check-label" for="crust">Glutten Free</label>' +
                '</div>' +
            '</div>' +
            '<div class="col" id="col3">' + 
                '<h5>Toppings</h5>' +
                '<div class="form-check">' +
                    '<input class="form-check-input" type="checkbox" id="meat" name="toppingsMeat" value="Meat">' +
                    '<label class="form-check-label" for="meat">Meat</label>' +
                '</div>' +
                '<div class="form-check">' +
                    '<input class="form-check-input" type="checkbox" id="cheese" name="toppingsCheese" value="Cheese">' +
                    '<label class="form-check-label" for="cheese">Cheese</label>' +
                '</div>' +
            '</div>' +
        '</div>'
        )
    })
})