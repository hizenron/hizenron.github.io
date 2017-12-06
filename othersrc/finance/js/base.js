//页头加载：
$(function(){
    var html="";
    html+=`
    <div class="top_bar">
        <div class="top_bar_content">
        <div class="top_bar_l"><a href="index.html" class="a">返回金融首页</a></div>
    <div class="top_bar_r">
        <ul class="login_infor">
            <li><a href="login.html" class="a">立即登录</a></li>
            <li><a href="" class="a">快速注册</a></li>
        </ul>
        <ul>
            <li><a href="" class="a" >积分商城</a></li>
            <li><a href="" class="a">帮助中心</a></li>
            <li><a href="" class="a">关于我们</a></li>
            <li><a href="" class="a">下载APP</a></li>
            <li><a href="" class="a">国际站</a></li>
            <li><a href="" class="a">微博/二维码</a></li>
        </ul>
    </div>
    </div>
    </div>
        <!--1.2 底部主导航条-->
    <div class="main_nav">
        <div class="main_nav_container">
            <!--左侧logo-->
            <div class="main_logo">
                <a href=""><img src="imgs/main_nav_logo.png" alt=""/></a>
            </div>
            <div class="main_nav_list">
                <ul>
                    <li><a href="index.html" style="color:#ff6825;" class="a">首页</a></li>
                    <li><a href="webloan.html" class="a">网贷</a></li>
                    <li><a href="fund.html" class="a">基金</a></li>
                    <li><a href="insurance.html" class="a">保险</a></li>
                    <li><a href="" class="a">海外</a></li>
                    <li><a href="" class="a">发现</a></li>
                </ul>
            </div>
            <div class="myAccount">
                <a href="">
                    <img src="imgs/head_user_icon.png" alt=""/>
                    <span> 我的账户</span>
                    <i></i>
                </a>
            </div>
        </div>
    </div>`;
    $(".header").html(html);
});
//用户登陆后显示用户
$(function(){
    var uname=sessionStorage.getItem("uname");
    if(uname!=null){
        $(".login_infor").html('<li>&nbsp;欢迎:'+uname+' <a href="login.html" title="退出登录">&nbsp;退出</a></li><li><a href="uc_basic.html" title="用户中心">用户中心</a></li>')
    }
});
//实现导航固定
$(function(){
    var nav=$(".main_nav"); //得到导航对象
    var win=$(window); //得到窗口对象
    var sc=$(document);//得到document文档对象。
    win.scroll(function(){
        if(sc.scrollTop()>=60){
            nav.addClass("fixed_nav");
        }
        else{
            nav.removeClass("fixed_nav");
        }
    })
})
//页脚加载：
$(function(){
    var html="";
    html+=`
    <div class="container">
        <div class="footer1">
            <dl>
                <dt>关于我们</dt>
                <dd>
                    <p><a href="" rel="nofollow" target="_blank">平台实力</a></p>
                    <p><a href="" rel="nofollow" target="_blank">社会荣誉</a></p>
                    <p><a href="" rel="nofollow" target="_blank">媒体报道</a></p>
                    <p><a href="" target="_blank">联系我们</a></p>
                </dd>
            </dl>
            <dl>
                <dt>产品服务</dt>
                <dd>
                    <p> <a href="" rel="nofollow" target="_blank">网贷</a> </p>
                    <p> <a href="" rel="nofollow" target="_blank">基金</a> </p>
                    <p> <a href="" rel="nofollow" target="_blank">保险</a> </p>
                    <p> <a href="" rel="nofollow" target="_blank">海外</a> </p>
                </dd>
            </dl>
            <dl>
                <dt>安全保障</dt>
                <dd>
                <p> <a href="" rel="nofollow" target="_blank">安全保障措施</a></p>
                <p> <a href="" rel="nofollow" target="_blank">保障机构介绍</a> </p>
                <p> <a href="" rel="nofollow" target="_blank">法律法规说明</a> </p>
                </dd>
            </dl>
            <dl>
                <dt>关注订阅号</dt>
                <dd> <img src="imgs/guanzhu_weixin.png" width="80" height="80"> </dd>
            </dl>
            <dl>
                <dt>关注服务号</dt>
                <dd> <img src="imgs/new_weibo.jpg" width="80" height="80"> </dd>
            </dl>
            <dl>
                <dt>下载APP</dt>
                <dd> <img src="imgs/app-bottom.jpg" alt="" width="80" height="80">
                </dd>
            </dl>
        <div class="footright">
            <h3 class="tel">400 000 1106</h3>
        <div class="time">客服工作时间：9:00-21:00</div>
        <div class="adviser"> <a onclick="" href="javascript:void(0)">意见反馈</a> </div>
        </div>
        </div>
        <div class="friend-link clearfix">
        <div class="f-l-l"> 友情链接 </div>
        <div class="f-l-r" style="height: 40px;padding-top: 16px;">
        <ul>
            <li class="fn-left"> <a class="gray" href="" target="_blank">外资银行理财产品</a> </li>
            <li class="fn-left"> <a class="gray" href="" target="_blank">保本型理财产品</a> </li>
            <li class="fn-left"> <a class="gray" href="" target="_blank">浦发银行理财产品</a> </li>
            <li class="fn-left"> <a class="gray" href="" target="_blank">银行最新理财产品</a> </li>
            <li class="fn-left last-child"> <a class="gray" href="" target="_blank">恒昌贷款</a> </li>
        </ul>
        </div>
        </div>
        <div class="footer2">
            <div class="footer2left">
            <p>© 2015-2017 北京凤理理它信息技术有限公司 fengr.com 版权所有 | 投资有风险，购买需谨慎</p>
            <p>
            <a href="" target="_blank"><img src="imgs/link-gongan.png" alt="公安" style="width:16px;height:17px;display: inline-block"></a>
            京公网安备 11010502030800号 京ICP备15041615号-1
            </p>
        </div>
        <div class="certif">
            <div class="ui-footer-verification">
                <a href="" title="" target="_blank" class="footer_kexin">
                <img src="imgs/link-knet.png" alt="诚信网站">
                </a>
                <a href="" title="" target="_blank" class="footer_credibility">
                <img src="imgs/link-credibility.png" alt="诚信网站">
                </a>
                <a href="" title="" target="_blank" class="footer_norton">
                <img src="imgs/link-norton.png" alt="诚信网站">
                </a>
                <a href="" target="_blank" class="footer_knet">
                <img src="imgs/link-kexin.png" alt="可信网站">
                </a>
                <a class="" target="_blank" href=""> <img src="imgs/link-zhibao.png" alt="质保备案">
                </a>
            </div>
        </div>
        </div>
    </div>
         `;
    $(".footer").html(html);
});