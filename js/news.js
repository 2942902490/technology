/**
 * Created by whistlel on 2017/6/26.
 */
$(function(){
    //实现选项卡
    var aLink=$('.newsTop a');
    var aOl=$('section ol');
    aLink.click(function(){
        aLink.removeClass('active');
        aOl.removeClass('active');
        $(this).addClass('active');
        aOl.eq($(this).index()).addClass('active');
    });

    //实现头部导航栏移入时图标滑动效果
    $('.navinfo li').hover(function(){
        $(this).stop().animate({'background-position-x':'6px','opacity':'0.7'},100);
    },function(){
        $(this).stop().animate({'background-position-x':'10px','opacity':'1'},100);
    });
});
