window.onload=function () {
//滑块
    var slug = document.getElementsByName("slug");
    for (var i = 0;i<slug.length;i++){
        (function (x) {
            slug[x].onclick=function () {
                clear();
                slug[x].className = "slug";
            }
        })(i)
    }
    function clear() {
        for (var a = 0;a<slug.length;a++) {
            slug[a].className = ""
        }
    }

//轮播图
    var slide = document.querySelector(".slide");
    var next = document.querySelector(".arrow_right");
    var prev = document.querySelector(".arrow_left");
    next.onclick = function () {
        next_pic()
    }
    prev.onclick = function () {
        prev_pic();
    }
    //焦点变换
    var index=0;
    var dots = document.getElementsByName("dots");
    function showCurrentDot() {
        for (var i = 0,len = dots.length; i<len;i++ ){
            dots[i].className="";
        }
        dots[index].className = "on"
    }
    function next_pic() {
        var newLeft;
        if (slide.style.left === "-3000px"){
            newLeft = -1000;
        } else {
            newLeft = parseInt(slide.style.left)-500;
        }
        slide.style.left = newLeft + "px";
        index++;
        if(index > 4){
            index=0;
        }
        showCurrentDot();
    }

    function prev_pic() {
        var newLeft;
        if (slide.style.left === "0px"){
            newLeft = -2000;
        } else {
            newLeft = parseInt(slide.style.left)+500
        }
        slide.style.left = newLeft + "px";
        index--;
        if (index < 0){
            index = 4;
        }
        showCurrentDot();
    }
    //计时器
    var timer = null;
    function autoPlay() {
        timer = setInterval(function () {
            next_pic()
        },1000);
    }
    autoPlay();
    //鼠标暂停轮播图
    var container = document.querySelector(".center_left");
    container.onmouseenter=function () {
        clearInterval(timer);
    }
    container.onmouseleave=function () {
        autoPlay();
    }
   //遍历焦点
    for (var i = 0,len = dots.length;i<len;i++){
        (function (i) {
            dots[i].onclick = function () {
                var dis = index - i;
                if(index == 4&& parseInt(slide.style.left) !== -2500){
                    dis = dis-5;
                }
                if (index == 0 && parseInt(slide.style.left) !== -500) {
                    dis = 5 + dis;
                }
                slide.style.left = (parseInt(slide.style.left) + dis * 500)+ "px";
                index = i;
                showCurrentDot()
            }
        })(i);
    } 
}