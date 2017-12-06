//首页广告轮播
$(function(){
//1. banner轮播
//代码初始化
var size=$(".carousel_img li").size();
for (var i = 1; i <= size; i++) {
    var li="<li>"+i+"</li>";
    $(".num").append(li);
};

//手动控制轮播效果
$(".carousel_img li").eq(0).show();
$(".num li").eq(0).addClass("active");
$(".num li").mouseover(function() {
    $(this).addClass("active").siblings().removeClass("active");
    var index = $(this).index();
    i=index;
    $(".carousel_img li").eq(index).fadeIn(300).siblings().fadeOut(300);
})

//自动
var i = 0;
var t = setInterval(move, 3000);
//核心向左的函数
function moveLeft() {
    i--;
    if (i == -1) {
          i = size-1;
    }
    $(".num li").eq(i).addClass("active").siblings().removeClass("active");
    $(".carousel_img li").eq(i).fadeIn(300).siblings().fadeOut(300);

}
//核心向右的函数
function move() {
    i++;
    if (i == size) {
        i = 0;
    }
    $(".num li").eq(i).addClass("active").siblings().removeClass("active");
    $(".carousel_img li").eq(i).fadeIn(300).siblings().fadeOut(300);

}
//定时器的开始与结束
$(".carousel").hover(function() {
    clearInterval(t);
}, function() {
    t = setInterval(move, 3000)
})
//左边按钮的点击事件
$(".carousel .left").click(function() {
    moveLeft();
})
//右边按钮的点击事件
$(".carousel .right").click(function() {
    move();
})

// 产品内容信息btn_box标签的向上动画
$(".rcm_pro_item .rcm_pro_details").hover(
    function(){
        $(this ).find("a").css({"transform":"translateY(-40px)"});
        $(this ).find(".btn_box p").css({"fontSize":0});
    },function(){
        $(this).find("a").css({"transform":"translateY(0px)"});
        $(this ).find(".btn_box p").css({"fontSize":"16px"});
    });
});

//产品信息加载：推荐产品导入
$(function() {
//存取产品类别
    var recommended = localStorage['recommended'];
    if (!recommended) {
        recommended = 1;
    }
//加载数据
    $.ajax({
        url: 'data/index.php',
        data: {recommended: recommended},
        success: function (data) {
            console.log(data);
            var html = '';
            $.each(data, function (i, p) {
                html += `
                    <div class="rcm_pro_details sd">
                        <div class="title">${p.pro_title}</div>
                        <div class="tags_box">
                            <span class="tag tag_special">${p.pro_subtitle}</span>
                        </div>
                        <div class="rate_box">
                            <span class="rate">${p.interest_rate}</span>
                            <span class="unit">%</span>
                         </div>
                        <p class="rate_desc">${p.interest_name}</p>
                        <div class="btn_box">
                            <p>${p.min_amount}<span>元起头</span></p>
                            <a href="" target="_blank">立即抢购 </a>
                        </div>
                    </div>
            `;});
            $('.main_pro_recommend .rcm_pro_item').html(html);
        }
    });
});