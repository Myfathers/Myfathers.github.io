var contentDiv = document.getElementById('content');
var startDiv = document.getElementById('start');
var mainDiv = document.getElementById('main');
var scoreDiv = document.getElementById('score');
var suspendDiv = document.getElementById('suspend');
var continueDiv = document.getElementById('continue');
var settlementDIV = document.getElementById('settlement');
var score = 0;


// 获取游戏界面宽高度
var contentClass = contentDiv.currentStyle ? contentDiv.currentStyle : window.getComputedStyle(contentDiv, null);
var stageSizeX = parseInt(contentClass.width);
var stageSizeY = parseInt(contentClass.height);


// 创建不同飞机型号对象
//小飞机
var enemyPlaneS = {
        width: 34,
        height: 24,
        imgSrc: './img/enemy-plane-s.png',
        boomSrc: './img/enemy-plane-s-boom.gif',
        boomTime: 100,
        up: 1
    }
    //中飞机
var enemyPlaneM = {
        width: 46,
        height: 60,
        imgSrc: './img/enemy-plane-m.png',
        hitSrc: './img/enemy-plane-m-hit.png',
        boomSrc: './img/enemy-plane-m-boom.gif',
        boomTime: 100,
        up: 3

    }
    //打飞机
var enemyPlaneL = {
        width: 100,
        height: 164,
        imgSrc: './img/enemy-plane-l.png',
        hitSrc: './img/enemy-plane-l-hit.png',
        boomSrc: './img/enemy-plane-l-boom.gif',
        boomTime: 100,
        up: 7
    }
    //大大飞机
var ourPlaneX = {
        width: 66,
        height: 80,
        imgSrc: './img/our-plane.gif',
        boomSrc: './img/our-plane-boom.gif',
        boomTime: 100,
        up: 20
    }
    //子弹
var bulletX = {
    width: 6,
    height: 14,
    imgSrc: './img/our-bullet.png',
    speed: 20
};


////////////////
// 创建飞机的构造函数
var Plane = function(centerX, centerY, planeModel, speed) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.sizeX = planeModel.width;
        this.sizeY = planeModel.height;
        this.imgSrc = planeModel.imgSrc;
        this.boomSrc = planeModel.boomSrc;
        this.boomTime = planeModel.boomTime;
        this.up = planeModel.up;
        this.speed = speed;
        //定位点
        this.currentX = this.centerX - this.sizeX / 2;
        this.currentY = this.centerY - this.sizeY / 2;
    }
    // 画出一个飞机的方法
Plane.prototype.draw = function() {
        this.imgNode = new Image();
        this.imgNode.src = this.imgSrc;
        this.imgNode.style.top = this.centerY - this.sizeY / 2 + "px";
        this.imgNode.style.left = this.centerX - this.sizeX / 2 + 'px';
        mainDiv.appendChild(this.imgNode);
    }
    // 某个飞机的移动方法
Plane.prototype.move = function() {
        this.currentY += this.speed;
        this.centerY = this.currentY + this.sizeY / 2;
        this.imgNode.style.top = this.currentY + "px";
        this.checkOverRange();
    }
    // 检测飞机超出画布
Plane.prototype.checkOverRange = function() {
    // 如果飞机超出画布 就给当前飞机对象添加一个isBottomRange的属性
    this.isBottomRange = this.currentY > (stageSizeY - this.sizeY)
    this.isTopRange = this.currentY < 0;

}

// 敌机的构造函数

var Enemy = function() {
    this.segments = [];
    this.generatedCount = 0;
};

// 随机生成 min-max 之间的随机数
var randomNumber = function(min, max) {
        return Math.round(Math.random() * (max - min)) + min;
    }
    // 随机数当成   min+(max-min)  范围min 到 (min + (max-min))

// 生成画出所有新的飞机方法
Enemy.prototype.createNewEnemy = function() {
    this.generatedCount++;

    if (this.generatedCount % 17 === 0) {
        this.newEnemy = new Plane(randomNumber(enemyPlaneL.width / 2, stageSizeX - enemyPlaneL.width / 2), 12, enemyPlaneL, 1)
    } else if (this.generatedCount % 5 === 0) {
        this.newEnemy = new Plane(randomNumber(enemyPlaneM.width / 2, stageSizeX - enemyPlaneM.width / 2), 12, enemyPlaneM, randomNumber(2, 3))
    } else {
        this.newEnemy = new Plane(randomNumber(enemyPlaneS.width / 2, stageSizeX - enemyPlaneS.width / 2), 12, enemyPlaneS, randomNumber(3, 5))
    }

    // 把新生成的飞机写入数组
    this.segments.push(this.newEnemy);
    // 把新生成的飞机画出来
    this.newEnemy.draw();

}

// 移动敌机的飞机
Enemy.prototype.moveAllEnemy = function() {
    // 遍历敌机对象里面的保存敌机的数组 让每一个都移动
    for (var i = 0; i < this.segments.length; i++) {
        this.segments[i].move();
        // 如果超出画布怎么样
        if (this.segments[i].isBottomRange) {
            mainDiv.removeChild(this.segments[i].imgNode);
            this.segments.splice(i, 1);
        }

        // 检测子弹碰撞
        for (var j = 0; j < ourPlane.segement.length; j++) {
            // 如果飞机还未gth死亡就挡住子弹
            if (this.segments[i].up > 0) {
                var horizontalCollision = Math.abs(this.segments[i].centerX - ourPlane.segement[j].centerX) < (this.segments[i].sizeX / 2 + ourPlane.segement[j].sizeX / 2)
                var verticalCollision = Math.abs(this.segments[i].centerY - ourPlane.segement[j].centerY) < (this.segments[i].sizeY / 2 + ourPlane.segement[j].sizeY / 2)
                var checkBulletCollision = horizontalCollision && verticalCollision;

                if (checkBulletCollision) {
                    // 飞机挨打
                    score++;
                    scoreDiv.innerHTML = score;
                    this.segments[i].imgNode.src = this.segments[i].hitSrc ? this.segments[i].hitSrc : this.segments[i].boomSrc;
                    this.segments[i].up--;

                    // 把子弹干掉
                    mainDiv.removeChild(ourPlane.segement[j].imgNode);
                    ourPlane.segement.splice(j, 1);
                }
            }
        }

        // 检测与我方飞机的碰撞
        var ourHorizontalCollision = Math.abs(this.segments[i].centerX - ourPlane.centerX) < (this.segments[i].sizeX / 2 + ourPlane.sizeX / 2);
        var ourVerticalCollision = Math.abs(this.segments[i].centerY - ourPlane.centerY) < (this.segments[i].sizeY / 2 + ourPlane.sizeY / 2);
        var checkOurCollision = ourHorizontalCollision && ourVerticalCollision;

        if (checkOurCollision) {
            this.segments[i].up = 0;
            ourPlane.up -= 10;
        }

        //检测飞机是否死亡
        if (this.segments[i].up <= 0) {

            this.segments[i].imgNode.src = this.segments[i].boomSrc;
            this.segments[i].boomTime -= 10;
            // 把飞机干掉
            if (this.segments[i].boomTime <= 0) {
                mainDiv.removeChild(this.segments[i].imgNode);
                this.segments.splice(i, 1);
            }
        }

    }
}





// 实例化所有敌机
var enemies = new Enemy();

var ourPlane = new Plane(stageSizeX / 2, stageSizeY - ourPlaneX.height / 2, ourPlaneX, 0);
ourPlane.draw();
mainDiv.onmousemove = function(ev) {

        ourPlane.centerX = ev.clientX - contentDiv.offsetLeft;
        if (ourPlane.centerX < 0) {
            ourPlane.centerX = 0;
        }
        if (ourPlane.centerX > stageSizeX) {
            ourPlane.centerX = stageSizeX;
        }
        ourPlane.centerY = ev.clientY - contentDiv.offsetTop;
        if (ourPlane.centerY < 0) {
            ourPlane.centerY = 0;
        }
        if (ourPlane.centerY > (stageSizeY - ourPlane.sizeY / 2)) {
            ourPlane.centerY = (stageSizeY - ourPlane.sizeY / 2);
        }


        ourPlane.currentX = ourPlane.centerX - ourPlane.sizeX / 2;
        ourPlane.currentY = ourPlane.centerY - ourPlane.sizeY / 2;

        ourPlane.imgNode.style.left = ourPlane.currentX + 'px';
        ourPlane.imgNode.style.top = ourPlane.currentY + 'px';
    }
    // 在我方飞机A ourPlane 这个对象里面添加一个数组 用来保存他发射的子弹
ourPlane.segement = []
var Bullet = Plane;

function creatNewBullet() {
    ourPlane.newBullet = new Bullet(ourPlane.centerX, ourPlane.centerY - ourPlane.sizeY / 2, bulletX, -10);
    ourPlane.segement.push(ourPlane.newBullet);
    ourPlane.newBullet.draw();
}

function moveNewBullet() {
    for (var i = 0; i < ourPlane.segement.length; i++) {
        ourPlane.segement[i].move();

        if (ourPlane.segement[i].isTopRange) {
            mainDiv.removeChild(ourPlane.segement[i].imgNode);
            ourPlane.segement.splice(i, 1);
        }
    }
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
        }
    }
}
var maxscore;
var gameOver = function() {
    ourPlane.imgNode.src = ourPlane.boomSrc;
    clearInterval(timeID);
    settlementDIV.style.display = 'block';
    document.querySelector('p#final-score').innerText = score;
    maxscore = Number(getCookie('name'));
    if (score >= maxscore) {
        maxscore = score;
        // check = true;
        setCookie('name', maxscore, 10);
    }

    document.querySelector('p#final-score').innerText = score;


}
var time = 0;
var timeID;
var start = function() {
    //隐藏开始页面
    startDiv.style.display = 'none';
    //显示游戏页面
    mainDiv.style.display = 'block';
    suspendDiv.style.display = 'none';
    settlementDIV.style.display = 'none'

    timeID = setInterval(function() {
        time++;
        if (time % 50 === 0) {
            enemies.createNewEnemy();

        }
        enemies.moveAllEnemy();
        if (time % 5 === 0) {
            creatNewBullet();
        }
        moveNewBullet();
        if (ourPlane.up <= 0) {
            gameOver();
        }

    }, 30)
}
var restart = function() {
    window.location.reload();
}
continueDiv.onclick = function(ev) {
    ev.stopPropagation();
    start();
};

mainDiv.onclick = function() {
    clearTimeout(timeID);
    suspendDiv.style.display = 'block';
}