/**
 * Created by whistlel on 2017/6/26.
 */
$(function(){
    //ʵ��ѡ�
    var aLink=$('.newsTop a');
    var aOl=$('section ol');
    aLink.click(function(){
        aLink.removeClass('active');
        aOl.removeClass('active');
        $(this).addClass('active');
        aOl.eq($(this).index()).addClass('active');
    });

    //ʵ��ͷ������������ʱͼ�껬��Ч��
    $('.navinfo li').hover(function(){
        $(this).stop().animate({'background-position-x':'6px','opacity':'0.7'},100);
    },function(){
        $(this).stop().animate({'background-position-x':'10px','opacity':'1'},100);
    });
});
