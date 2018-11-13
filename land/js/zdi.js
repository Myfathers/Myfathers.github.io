function test1() {
    var addClass = function(ele, className) {
        var oldClass = ele.className;
        var classArray = oldClass.split(" ");
        classArray.push(className);
        ele.className = classArray.join(" ").trim(" ")
    };
    var removeClass = function(ele, className) {
        var oldClass = ele.className;
        var classArray = oldClass.split(" ");
        if (classArray.indexOf(className) === -1) {
            return;

        } else {
            classArray.splice(classArray.indexOf(className), 1);


        }
        if (classArray.length === 0) {
            ele.removeAttribute('class');
        } else {
            ele.className = classArray.join(' ').trim();
        }

    };

    document.body.onscroll = function() {
        var logo = document.getElementsByClassName("logo")[0];
        var logoY = logo.offsetTop;
        if (window.pageYOffset > logoY - window.innerHeight + logo.clientHeight) {
            addClass(logo, "active")
        }
        if (window.pageYOffset < logoY - window.innerHeight + logo.clientHeight) {
            removeClass(logo, "active")

        }



        var headergridsrow = document.getElementsByClassName("header-grids-row")[0];
        var headergridsrowY = headergridsrow.offsetTop;
        if (window.pageYOffset > headergridsrowY - window.innerHeight + headergridsrow.clientHeight) {
            addClass(headergridsrow, "active")
        }
        var aboutUsrow = document.getElementsByClassName("aboutUs-row")[0];
        var aboutUsrowY = aboutUsrow.offsetTop;
        if (window.pageYOffset > aboutUsrowY - window.innerHeight + aboutUsrow.clientHeight) {
            addClass(aboutUsrow, "active")
        }
        var ourServicesrow = document.getElementsByClassName("ourServices-row")[0];
        var ourServicesrowY = ourServicesrow.offsetTop;
        if (window.pageYOffset > ourServicesrowY - window.innerHeight + ourServicesrow.clientHeight) {
            addClass(ourServicesrow, "active")
        }
        var last = document.getElementsByClassName("last")[0];
        var lastS = last.offsetTop;
        if (window.pageYOffset > lastS - window.innerHeight + last.clientHeight) {
            addClass(last, "active")
        }
        var latesNewsrow = document.getElementsByClassName("latesNews-row")[0];
        var latesNewsrowY = latesNewsrow.offsetTop;
        if (window.pageYOffset > latesNewsrowY - window.innerHeight + latesNewsrow.clientHeight) {
            addClass(latesNewsrow, "active")
        }
        var categoriesrow = document.getElementsByClassName("categories-row")[0];
        var categoriesrowY = categoriesrow.offsetTop;
        if (window.pageYOffset > categoriesrowY - window.innerHeight + categoriesrow.clientHeight) {
            addClass(categoriesrow, "active")
        }
        var google = document.getElementsByClassName("google")[0];
        var googleX = google.offsetTop;
        if (window.pageYOffset > googleX - window.innerHeight + google.clientHeight) {
            addClass(google, "active")
        }
        var home = document.getElementsByClassName("home")[0];
        var homeX = home.offsetTop;
        if (window.pageYOffset > homeX - window.innerHeight + home.clientHeight) {
            addClass(home, "active")
        }
        var It = document.getElementsByClassName("It")[0];
        var Itr = It.offsetTop;
        if (window.pageYOffset > Itr - window.innerHeight + It.clientHeight) {
            addClass(It, "active")
        }

    }
}
test1()