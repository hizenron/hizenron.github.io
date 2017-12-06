// 推荐产品内容信息btn_box标签的向上动画
$(function(){
$(".pro_item .rcm_pro_details").hover(
    function(){
        $(this ).find("a").css({"transform":"translateY(-40px)"});
        $(this ).find(".btn_box p").css({"fontSize":0});
    },function(){
        $(this).find("a").css({"transform":"translateY(0px)"});
        $(this ).find(".btn_box p").css({"fontSize":"16px"});
    });
});