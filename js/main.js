//背景随机
$(function() {
    let size=$("ul.bg-img li").length;
    let i=0;
        setInterval(function () {
            i++;
            if (i === size) {
                i = 0;
            }
            $("ul.bg-img li").eq(i).addClass("show").siblings().removeClass("show");
        }, 5000);

});

$(function() {
    //编辑器控制
    $("h4").css("color","#fff");

    $(".fades").addClass("fadesin");
    $(" h1.fade").addClass("fadesin1");
    $(" h3.fade").addClass("fadesin2");
    $(" span.fade").addClass("fadesin3");

    let _top;
    let top1 = $("#section2").offset().top-100;
    let top2 = $("#section3").offset().top-100;
    let top3 = $("#section4").offset().top-100;
    let top4 = $("#section5").offset().top-100;
    let top5 = $("#section6").offset().top-100;
    let top6 = $("#section7").offset().top-100;

    //回到顶部
    $("#top").click(function () {
        $("html,body").stop().animate({
            scrollTop: 0
        }, 700);
    });
    showScroll();
    let min_height = document.documentElement.clientHeight/2;
    function showScroll() {
        $(window).scroll(function() {
            let s = $(window).scrollTop();
            s > min_height ? $("#top").fadeIn() : $("#top").fadeOut();
        });
    }
    //导航高亮
    $(".nav-ul li").bind("click", function () {
        let index = $(this).index();//获取序号
        $(".nav-ul li").eq(index).addClass("active").siblings().removeClass("active");
        $(".nav-xs-ul li").eq(index).addClass("active").siblings().removeClass("active");
    });
    // //关于我
    $("#abMe").bind("click", function () {
        $(".nav-ul li:nth-child(1)").click();
    });
    //我的作品
    $("#mypro").bind("click", function () {
        $(".nav-ul li:nth-child(3)").click();
    });
    //导航点击
    $(".nav-ul li").bind("click", function () {
        let index = $(this).index();//获取序号
        _top = $(".section").eq(index+1).offset().top; //获取对应div距顶高度
        moveTo();
    });
    //导航slideToggle
    $(".more-nav").bind("click", function () {
        $(".nav-ul.nav-xs-ul").stop().slideToggle(300);
    });
    function moveTo(){
        $('html,body').animate({
            scrollTop: _top
        }, 500);
    }
    $(".nav-xs-ul li").click(function () {
        $(".nav-xs-ul").slideUp(300)
    });

    //页面滚动
    $(window).scroll(function () {
        //导航fixed
        let s = $(window).scrollTop();
        s > top1 ? $("#nav-bar").addClass("fixed") : $('#nav-bar').removeClass("fixed");
        //导航跟随滚动响应
        if((s>top1)&&(s<top2)){
            $(".nav-ul li").eq(0).addClass("active").siblings().removeClass("active");
            $(".nav-xs-ul li").eq(0).addClass("active").siblings().removeClass("active");
            $("#section2").addClass("active");
        }else if((s>top2)&&(s<top3)){
            $(".nav-ul li").eq(1).addClass("active").siblings().removeClass("active");
            $(".nav-xs-ul li").eq(1).addClass("active").siblings().removeClass("active");
            $("#section3").addClass("active");
        }else if((s>top3)&&(s<top4)){
            $(".nav-ul li").eq(2).addClass("active").siblings().removeClass("active");
            $(".nav-xs-ul li").eq(2).addClass("active").siblings().removeClass("active");
            $("#section4").addClass("active");
        }else if((s>top4)&&(s<top5)){
            $(".nav-ul li").eq(3).addClass("active").siblings().removeClass("active");
            $(".nav-xs-ul li").eq(3).addClass("active").siblings().removeClass("active");
            $("#section5").addClass("active");
        }else if((s>top5)&&(s<top6)){
            $(".nav-ul li").eq(4).addClass("active").siblings().removeClass("active");
            $(".nav-xs-ul li").eq(4).addClass("active").siblings().removeClass("active");
            $("#section6").addClass("active");
        }else if(s>top6){
            $(".nav-ul li").eq(5).addClass("active").siblings().removeClass("active");
            $(".nav-xs-ul li").eq(5).addClass("active").siblings().removeClass("active");
            $("#section7").addClass("active");
        }
    });

});
