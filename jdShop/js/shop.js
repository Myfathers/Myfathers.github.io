$.get("./base.json", function(data, textStatus, jqXHR) {
        var app1 = new Vue({
            el: "#app",
            data: {
                model: 'pc',
                products: data.products

            },

        })
    },
    "json"
);