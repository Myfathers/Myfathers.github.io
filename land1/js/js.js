function test1() {
    var addClass = function(ele, className) {
        var oldClass = ele.className;
        var classArray = oldClass.split(" ");
        classArray.push(className);
        ele.className = classArray.join(" ").trim(" ")
    };

    document.body.onscroll = function() {
        var boder = document.getElementsByClassName("boder")[0];
        var boderY = boder.offsetTop;
        if (window.pageYOffset > boderY - window.innerHeight + boder.clientHeight) {
            addClass(boder, "interposition")

        }
        var content1 = document.getElementsByClassName("content1")[0];
        var content1Y = content1.offsetTop;
        if (window.pageYOffset > content1Y - window.innerHeight + content1.clientHeight) {
            addClass(content1, "active")
        }
        var content2 = document.getElementsByClassName("content2")[0];
        var content2Y = content2.offsetTop;
        if (window.pageYOffset > content2Y - window.innerHeight + content2.clientHeight) {
            addClass(content2, "active");
        }
        var logo = document.getElementsByClassName("logo")[0];
        var logoY = logo.offsetTop;
        if (window.pageYOffset > logoY - window.innerHeight + logo.clientHeight) {
            addClass(logo, "active");

        }
        var contenting = document.getElementsByClassName("contenting")[0];
        var contentingY = contenting.offsetTop;
        if (window.pageYOffset > contentingY - window.innerHeight + contenting.clientHeight) {
            addClass(contenting, "active");

        }
        var content4 = document.getElementsByClassName("content4")[0];
        var content4Y = content4.offsetTop;
        if (window.pageYOffset > content4Y - window.innerHeight + content4.clientHeight) {
            addClass(content4, "active");


        }
        var content5 = document.getElementsByClassName("content5")[0];
        var content5Y = content5.offsetTop;
        if (window.pageYOffset > content5Y - window.innerHeight + content5.clientHeight) {
            addClass(content5, "active");

        }
        var Goolge = document.getElementsByClassName("Google")[0];
        var GoogleX = Goolge.offsetTop;
        if (window.pageYOffset > GoogleX - window.innerHeight + Goolge.clientHeight) {
            addClass(Goolge, "active");

        }
        var home = document.getElementsByClassName("home")[0];
        var homeX = home.offsetTop;
        if (window.pageYOffset > homeX - window.innerHeight + home.clientHeight) {
            addClass(home, "active");

        }
        var it = document.getElementsByClassName("it")[0];
        var itY = it.offsetTop;
        if (window.pageYOffset > itY - window.innerHeight + it.clientHeight) {
            addClass(it, "active");

        }
    }
}
test1()