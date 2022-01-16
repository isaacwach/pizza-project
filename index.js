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
        var actualPrice = (parseInt(this.price) + parseInt(this.crust)) * parseInt(this.quantity) + parseInt(this.toppings);
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
        var topping = parseInt($(".toppings input:checked").val())
        var pizzaNumber = parseInt($("#pizza-number0").val());
        alert(pizzaNumber)

        var pizza1 = new pizza(name, pizzaNumber, crust, topping, image, pizzaPrice)
        cart.addOrder(pizza1);
        var itemObject = cart.itemsInCart();
        $.each(itemObject, function (key, value) {
            $("#order-summary").append(key + ": " + value + '<br>');
        });
    })

    $("#btn1").click(function () {
        var name = "Chicken Macon BBQ"
        var image = "url"
        var pizzaPrice = parseInt($("#pizza-size1 option:selected").val());
        var crust = parseInt($("#pizza-crust1 option:selected").val());
        var topping = parseInt($(".toppings input:checked").val())
        var pizzaNumber = parseInt($("#pizza-number1").val());


        var pizza1 = new pizza(name, pizzaNumber, crust, topping, image, pizzaPrice)
        cart.addOrder(pizza1);
        var itemObject = cart.itemsInCart();
        $.each(itemObject, function (key, value) {
            $("#order-summary").append(key + ": " + value + '<br>');
        });
    })
    $("#btn2").click(function () {
        var name = "Greek Pizza"
        var image = "url"
        var pizzaPrice = parseInt($("#pizza-size2 option:selected").val());
        var crust = parseInt($("#pizza-crust2 option:selected").val());
        var topping = parseInt($(".toppings input:checked").val())
        var pizzaNumber = parseInt($("#pizza-number2").val());


        var pizza1 = new pizza(name, pizzaNumber, crust, topping, image, pizzaPrice)
        cart.addOrder(pizza1);
        var itemObject = cart.itemsInCart();
        $.each(itemObject, function (key, value) {
            $("#order-summary").append(key + ": " + value + '<br>');
        });
    })
    $("#btn3").click(function () {
        var name = "Detroit Pizza"
        var image = "url"
        var pizzaPrice = parseInt($("#pizza-size3 option:selected").val());
        var crust = parseInt($("#pizza-crust3 option:selected").val());
        var topping = parseInt($(".toppings input:checked").val())
        var pizzaNumber = parseInt($("#pizza-number3").val());

        var pizza1 = new pizza(name, pizzaNumber, crust, topping, image, pizzaPrice)
        cart.addOrder(pizza1);
        var itemObject = cart.itemsInCart();
        $.each(itemObject, function (key, value) {
            $("#order-summary").append(key + ": " + value + '<br>');
        });
    })
    $("#btn4").click(function () {
        var name = "New York-Style Pizza"
        var image = "url"
        var pizzaPrice = parseInt($("#pizza-size4 option:selected").val());
        var crust = parseInt($("#pizza-crust4 option:selected").val());
        var topping = parseInt($(".toppings input:checked").val())
        var pizzaNumber = parseInt($("#pizza-number4").val());

        var pizza1 = new pizza(name, pizzaNumber, crust, topping, image, pizzaPrice)
        cart.addOrder(pizza1);
        var itemObject = cart.itemsInCart();
        $("#order-summary").empty()
        $.each(itemObject, function (key, value) {
            $("#order-summary").append(key + ": " + value + '<br>');
        });
    })
    $("#btn5").click(function () {
        var name = "Chicken Hawaiian"
        var image = "url"
        var pizzaPrice = parseInt($("#pizza-size5 option:selected").val());
        var crust = parseInt($("#pizza-crust5 option:selected").val());
        var topping = parseInt($(".toppings input:checked").val())
        var pizzaNumber = parseInt($("#pizza-number5").val());


        var pizza1 = new pizza(name, pizzaNumber, crust, topping, image, pizzaPrice)
        cart.addOrder(pizza1);
        console.log(cart.itemsInCart())
        var itemObject = cart.itemsInCart();
        $("#order-summary").empty();
        var $table = $('<table/>');
       
        $.each(itemObject, function (key, value) {
            $table.append('<tr><td>' + key + ": " + value + '</td></tr>' + '<br>');

        });
        $('#order-summary').append($table);
    })



})