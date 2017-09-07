/**
 * Created by whistlel on 2017/6/24.
 */
$(function(){
    //实现头部导航栏移入时图标滑动效果
    $('header li').hover(function(){
        $(this).stop().animate({'background-position-x':'6px','opacity':'0.7'},100);
    },function(){
        $(this).stop().animate({'background-position-x':'10px','opacity':'1'},100);
    });
    //轮播图
    var count=0;
    function tab(n){
        $('.bjmask').stop().animate({'left':$('.bjmask').width()*n});
        $('.toplayer').stop().animate({'left':$('.toplayer').width()*n});
        var ul=$('.sUlLi').parents('.bannerList').siblings('.firstUl');
        var li=ul.children('li').hide().eq(n).show();
    }
    $('.sUlLi').click(function(){
        count=$(this).index()-1;
        tab(count);
    });
    var timer = setInterval(function(){
        count++;
        if(count>=$('.sUlLi').length){
            count=-1;
        }else{
            tab(count);
        }
    },2000);

    /*鼠标移入 翻转图片。通过改变类名*/
    $('.casesUl li').hover(function(){
        $(this).children('img').addClass('active');
        $(this).find('p').addClass('active');
        $(this).find('p').removeClass('active1');
        $(this).children('img').removeClass('active1');
    },function(){
        $(this).children('img').removeClass('active');
        $(this).find('p').removeClass('active');
        $(this).find('p').addClass('active1');
        $(this).children('img').addClass('active1');
    });
});//$(fn)
