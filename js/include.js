/**
 * Created by abc on 2015/7/4.
 */

function setHeader(){

    $("#navbar-section").empty().append('<div class="container">'+
    '    <div class="navbar-header">'+
    '    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">'+
    '    <span class="sr-only">Toggle navigation</span>'+
    '<span class="icon-bar"></span>'+
    '    <span class="icon-bar"></span>'+
    '    <span class="icon-bar"></span>'+
    '    </button>'+
    '    <a class="navbar-brand wow fadeInDownBig" href="index.html"><img src="assets/img/logo.png" width="160" alt="Office"></a>'+
    '    <!--<span style="display:inline-block;float: left;padding-top: 10px;margin-left: 10px;"><i class="fa fa-search">����</i> </span>-->'+
    '</div>'+
    '<div id="navbar-spy" class="collapse navbar-collapse navbar-responsive-collapse">'+
    '    <ul class="nav navbar-nav pull-right" style="position: relative;top:16px;">'+
    '    <li class="active">'+
    '    <a href="index.html">关于时光秀</a>'+
    '    </li>'+
    '    <li>'+
    '    <a href="mcdh.html">卖场导航</a>'+
    '    </li>'+
    /*'    <li>'+
    '    <a href="blog.html">网上商城</a>'+
    '    </li>'+*/
    '    <li>'+
    '    <a href="rmsp.html">热卖新品</a>'+
    '    </li>'+
    '    <li>'+
    '    <a href="sgrj.html">时光日记</a>'+
    '    </li>'+
    /*'    <li>'+
    '    <a href="team.html">美丽分享</a>'+
    '    </li>'+*/
    '    <!--<li>'+
    '    <a href="contact.html"><span>Contact</span></a>'+
    '</li>-->'+
    '</ul>'+
    '</div>'+
    '</div>');

    $("#navbar-spy").on("click", "a", function(){
        $(this).closest("li").siblings().removeClass("active");
        $(this).closest("li").addClass("active");
    });

    $("#navbar-spy li").removeClass("active");
    var location = window.location.href.split("/");
    var current_page = location[location.length - 1];
    console.log(current_page);
    $("#navbar-spy li a[href='"+current_page+"']").closest("li").addClass("active");
}

function setFooter(){
    $("footer").empty().append('<div class="container">'+
    '    <div class="row text-center">'+
    '    <p >Eternity © 2014 Copyright</p>'+
    '</div>'+
    '</div>');
}

function initPublicSection(){
    setHeader();
    setFooter();
}
