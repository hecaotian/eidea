// js document

/*!
 * eidea 1.0 
 * Copyright 2016 eidea.net.cn
 * http://www.eidea.net.cn/
 * author:sky
 * by time 2016年7月
*/

$(function(){

    $(document).bind("contextmenu", function (e) {
        return false;
    });
    
    var $window = $(window);
    var $ww = $window.width();
    var $wh = $window.height();
    var i = false;

    var $banner = $('.header');
    $banner.height($wh-150);

    if($ww < 768){
    	$banner.height(400);
    	i = false;
    	$('.nav-top-l').hide();
	}
	else{
		$('.nav-top-l').show();
		$banner.height($wh-150);
	}

    $(window).resize(function () {
    	var $window = $(window);
        var $ww = $window.width();

    	if($ww < 768){
    		i = false;
    		$('.nav-top-l').hide();
    		$banner.height(400);
    	}
    	else{
    		$('.nav-top-l').show();
    		$banner.height($wh-150);
    	}
    })
    

    $('.menu_nav').click(function() {
    	if(i = !i){
    	    $('.nav-top-l').slideDown();
    	}else{
    		$('.nav-top-l').slideUp();
    	}

    })

    $("#QQ_s").hover(
        function(){
            $(".QQ_y").hide();
            $(".QQ_x").show();
        },
        function(){
            $(".QQ_y").show();
            $(".QQ_x").hide();
        }
    )

	scroll(function(x){
	    var scorolltop = $(document).scrollTop(); 
	    if(scorolltop == 0){
		   $('.navbar').removeClass('fixed');
           //$('.logo img').attr('src','images/logo.png');

	    }  
		  
	    if(x == "down"){
		  $('.navbar').addClass('fixed');
          //$('.logo img').attr('src','images/logo2.png');
		}
	})
		
	$('.to_top').click(function(){
		$('html, body').animate({scrollTop:0}, 400);
	})

    $(".case_list_body ul li").hover(function(){
        $(this).addClass("hover")
        $(this).find(".caselogo").stop(true,true).animate({"top": "0"}, 400);
        $(this).find(".bgs_01").stop(true,true).animate({"bottom": "0"}, 400);
        },function(){
        $(this).removeClass("hover")  
        $(this).find(".caselogo").stop(true,true).animate({"top": "-243"}, 400);
        $(this).find(".bgs_01").stop(true,true).animate({"bottom": "-60"}, 400);
    })

    $(".case_list2 ul li").hover(function(){
        $(this).find(".goto").stop(true,true).animate({"margin-top":"-35%","opacity":"1"},{duration:600,easing:"easeOutBounce"});
        },function(){
        $(this).find(".goto").stop(true,true).animate({"margin-top":"-200%","opacity":"0"},{duration:400});
    })

    $('.submit_btn').click(function(){
        // body...
        if($("input[name='name']").val()==""||$("input[name='name']").val()=="您的称呼")
        {
            alert("请输入您的称呼。");
            return;
        }
        if($("input[name='company']").val()=="您所代表的公司"||$("input[name='company']").val()=="")
        {
            alert("请输入您所代表的公司。");
            return;
        }
        if($("textarea[name='message']").val()=="请输入您的详细需求描述，我们将在24小时内给出答复"||$("textarea[name='message']").val()=="")
        {
            alert("请输入您的详细需求。");
            return;
        }
        
        $.ajax({url:"ajax.php",
            data:$('#form1').serialize(),
            type: "post",
            error: function() {
               alert("提交发生错误，请重新提交。");
               return false;
            },
            success: function(data) {
                if(data=="1")
                {
                    alert("已成功提交，我们将在24小时内给出答复。"); 
                }
                else
                {
                    alert("保存失败，请稍后再提交。"); 
                }
            }
        });
    })
  
  
});


function scroll( fn ) {
    var beforeScrollTop = document.body.scrollTop,
        fn = fn || function() {};
    window.addEventListener("scroll", function() {
        var afterScrollTop = document.body.scrollTop,
            delta = afterScrollTop - beforeScrollTop;
        if( delta === 0 ) return false;
        fn( delta > 0 ? "down" : "up" );
        beforeScrollTop = afterScrollTop;
    }, false);
}

