/**
 * Created by whistlel on 2017/6/26.
 */
$(function(){
    //选项卡
    var aA =$('#filter ul li a');
    var aLi1 = $('#filter ul li');
    var	aUl =$('.cases_list_div2 ul');
    var oUl= $('.cases_list_div1 ul');
    // console.log(aUl);
    aLi1.click(function(){
        // console.log(oUl);
        oUl.css("display","none");
        aA.removeClass('active');
        aUl.removeClass('active');
        $(this).children().addClass('active');
        // console.log($(this).index());
        aUl.eq($(this).index()).addClass('active');
    });
    //鼠标移入移出，遮罩层滑入滑出
    var aLi = $('.cases_list_li');
    aLi.mouseenter(function(){
        var oP =$(this).children('p.cases_list_p');
        oP.css("display","block");
        oP.addClass('animated');
        oP.removeClass('fadeOutDown');
        oP.addClass('fadeInUp')
    });
    aLi.mouseleave(function(){
        var oP =$(this).children('p.cases_list_p');
        oP.addClass('animated');
        oP.addClass('fadeOutDown');
        oP.removeClass('fadeInUp')
    })
})