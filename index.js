$('select').selectpicker();

class pizza {
    constructor(name, quantity, crust, toppings, image, price) {
        this.name = name;
        this.quantity = quantity;
        this.crust = crust;
        this.toppings = toppings;
        this.image = image;
        this.price = price;

    }

    printPizza() {
        console.log(this.name, this.crust, this.toppings, this.image, this.price, this.quantity);
    }
    getActualPrice() {
        if(isNaN(parseInt(this.price))){
            this.price=0
        }
        if(isNaN(parseInt(this.crust))){
            this.crust=0
        }
        if(isNaN(parseInt(this.quantity))){
            this.quantity=1
        }
        if(isNaN(parseInt(this.toppings.length))){
            this.toppings=[]
        }
        var actualPrice = (parseInt(this.price) + parseInt(this.crust)) * parseInt(this.quantity) + (parseInt(this.toppings.length)*50);
        console.log((parseInt(this.price), parseInt(this.crust)), parseInt(this.quantity), parseInt(this.toppings))
        return actualPrice;
    }
    getName() {
        return this.name;
    }
}


class order {
    constructor() {
        this.pizzaOrders = []
    }

    checkOrder(pizza) {
        var temp = false;
        for (var i = 0; i < this.pizzaOrders.length; i++) {
            var pizzas = this.pizzaOrders[i]
            var pizzaName = pizzas.name
            if (pizza.name === pizzaName) {
                temp = i
                break
            }

        }
        if (temp != false) {
            this.pizzaOrders.pop(temp)

        }
        return true

    }
    addOrder(pizza) {
        this.checkOrder(pizza)
        this.pizzaOrders.push(pizza)
    }
    getOrders() {
        return this.pizzaOrders
    }
    itemsInCart() {

        var items = {

        }
        for (var i = 0; i < this.pizzaOrders.length; i++) {
            var pizza = this.pizzaOrders[i]
            var pizzaName = pizza.name
            var pizzaPrice = pizza.getActualPrice()
            items[pizzaName] = pizzaPrice
            console.log("pizzaprice", pizza.getActualPrice())
            console.log("pizzaname", pizza.getName())

        }
        return items
    }
    totalOrderCost() {
        var totalItemsInCart = this.itemsInCart()
        var totalCostOfOrder = 0
        for (let [key, value] of Object.entries(totalItemsInCart)) {
            totalCostOfOrder = totalCostOfOrder + value
            console.log(key, value)
        }
        return totalCostOfOrder
    }
}

// var p1=new pizza("new york", "1","large", "sause", "mushroom", "image1", "1000", "100");
// var p2=new pizza("zac", "3","small", "guage", "sausage", "image2", "800", "50");

// var cart=new order();
// cart.addOrder(p1);
// cart.addOrder(2);
// cart.itemsInCart()

// name, quantity, size, crust, toppings, image, price

var cart = new order()

$(document).ready(function () {
    $("#btn0").click(function () {
        var name = "Neapolitan Pizza"
        var image = "url"
        var pizzaPrice = parseInt($("#pizza-size0 option:selected").val());
        var crust = parseInt($("#pizza-crust0 option:selected").val());
        var topping = $('#SelectQButton0 option:selected').toArray().map(item => item.text);
        var pizzaNumber = parseInt($("#pizza-number0").val());


        var open = [];
        $.each(topping, function (value) {
            open.push($(this.toppind).val());
        })
        alert(open.join(","));

        var pizza1 = new pizza(name, pizzaNumber, crust, topping, image, pizzaPrice)
        cart.addOrder(pizza1);
        output()
    })

    $("#btn1").click(function () {
        var name = "Chicken Macon BBQ"
        var image = "url"
        var pizzaPrice = parseInt($("#pizza-size1 option:selected").val());
        var crust = parseInt($("#pizza-crust1 option:selected").val());
        var topping = $('#SelectQButton1 option:selected').toArray().map(item => item.text);
        var pizzaNumber = parseInt($("#pizza-number1").val());


        var pizza1 = new pizza(name, pizzaNumber, crust, topping, image, pizzaPrice)
        cart.addOrder(pizza1);
        output()
    })
    $("#btn2").click(function () {
        var name = "Greek Pizza"
        var image = "url"
        var pizzaPrice = parseInt($("#pizza-size2 option:selected").val());
        var crust = parseInt($("#pizza-crust2 option:selected").val());
        var topping = $('#SelectQButton2 option:selected').toArray().map(item => item.text);
        var pizzaNumber = parseInt($("#pizza-number2").val());


        var pizza1 = new pizza(name, pizzaNumber, crust, topping, image, pizzaPrice)
        cart.addOrder(pizza1);
        output()
    })
    $("#btn3").click(function () {
        var name = "Detroit Pizza"
        var image = "url"
        var pizzaPrice = parseInt($("#pizza-size3 option:selected").val());
        var crust = parseInt($("#pizza-crust3 option:selected").val());
        var topping = $('#SelectQButton3 option:selected').toArray().map(item => item.text);
        var pizzaNumber = parseInt($("#pizza-number3").val());

        var pizza1 = new pizza(name, pizzaNumber, crust, topping, image, pizzaPrice)
        cart.addOrder(pizza1);
        output()
    })
    $("#btn4").click(function () {
        var name = "New York-Style Pizza"
        var image = "url"
        var pizzaPrice = parseInt($("#pizza-size4 option:selected").val());
        var crust = parseInt($("#pizza-crust4 option:selected").val());
        var topping = $('#SelectQButton4 option:selected').toArray().map(item => item.text);
        var pizzaNumber = parseInt($("#pizza-number4").val());

        var pizza1 = new pizza(name, pizzaNumber, crust, topping, image, pizzaPrice)
        cart.addOrder(pizza1);
        output()
    })
    $("#btn5").click(function () {
        var name = "Chicken Hawaiian"
        var image = "url"
        var pizzaPrice = parseInt($("#pizza-size5 option:selected").val());
        var crust = parseInt($("#pizza-crust5 option:selected").val());
        var topping = $('#SelectQButton5 option:selected').toArray().map(item => item.text);
        var pizzaNumber = parseInt($("#pizza-number5").val());


        var pizza1 = new pizza(name, pizzaNumber, crust, topping, image, pizzaPrice)
        cart.addOrder(pizza1);
        output()
    })



})

function output() {
    var itemObject = cart.itemsInCart();
    $("#order-summary").empty();

    $.each(itemObject, function (key, value) {
        $("#order-summary").append(key + ": " + value + '<br>');
        $(".radio-form").append
    });
    finalOutput()
}

function finalOutput() {
    $("#total-order-cost").empty();
    var deliveryCost = 0
    var $radioForm = $("<br> do you want it delivered at home?</br><form id='myForm'><input type='radio' name='radioName' value='yes' /> Yes <br /><input type='radio' name='radioName' value='no' /> No <br /></form>")
    var $checkoutButton = $("<button id='checkout' type='submit'>Checkout</button>")
    $(".radio-form").empty();
    $(".radio-form").append($radioForm)
    $(".radio-form").append($checkoutButton)
    $('#myForm input').on('change', function () {
        var delivery = $('input[name=radioName]:checked', '#myForm').val();
        if (delivery === "yes") {
            deliveryCost = 200
        } else if (delivery === "no") {
            deliveryCost =0
        } else {
            return false;
        }
    });

    $("#checkout").click(function () {
        $("#total-order-cost").empty()
        $("#total-order-cost").append('<br>' + '<br>' + "------------" + '<br>' + "Your total order so far is: " + (cart.totalOrderCost() + deliveryCost) + '<br>');
        $(".radio-form").empty();
        alert("Thank you for shopping with us. You will pay a total of: Ksh" + (cart.totalOrderCost() + deliveryCost))
    })
}