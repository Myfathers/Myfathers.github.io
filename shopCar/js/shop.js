var promise = new Promise(function(resolve, reject) {
    $.get("./shop.json", function(data, textStatus, jqXHR) {

            resolve(data.products)
        },
        "json"
    );
})
promise.then(function(value) {
    var app1 = new Vue({
        el: "#shop",
        data: {
            // model: 'pc',
            products: value

        },
        computed: {
            update: function() {
                var data = 0;
                this.products.forEach(element => {

                    data += element.money * element.quantity
                });
                return data
            },
            // newchecked: function() {
            //     changebase()
            // }

        },
        methods: {
            pulsbase: function() {

                this.products.forEach(function(value) {
                    value.checked = true

                })



            },
            // changebase: function() {

            // },

            removebase: function() {
                this.products.forEach(element => {
                    element.checked = false
                });
            },


            quantityData: function(item) {
                if (item.quantity > 1) {
                    item.quantity--
                }
            },
            deleteData: function(item) {
                this.products.splice(this.products.indexOf(item), 1)
            }
        }





    })
})