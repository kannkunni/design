$(function(){
	var w = $(window).width()
	$('#js-ham').on('click', function(){
		$(this).toggleClass('is--click');
	})

	$('a[href^="#"]:not([href="#"])').click(function() {
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({
            scrollTop: position
        }, 1000, 'easeInOutCubic');

		if ($(window).width() <= 768) {
			setTimeout(function(){
				$('#js-ham').removeClass('is--click')
			},500)
		}
        return false;
		
    });
			
	function pintop(){
		var _scroll = $(window).scrollTop();
		if ( _scroll > 50) {
			$("#js-nav").addClass('is--pin');
		} else{
			$("#js-nav").removeClass('is--pin');
		}
	}
	$(window).on('scroll',function() {    
		pintop()
	})
	$(window).on('resize', function(){
		pintop()
	});


	//portfolio
	$('.portfolio-category_block').on('click',function(){
		$('html, body').css('overflow','hidden')
		$(this).addClass('is--active');
		$('.portfolio-showcase').addClass('is--active');
		var _title = $(this).find('h2').text()
		 _id = $(this).attr('id')
		$('.portfolio-showcase').find('h3').text(_title);
		$('.portfolio-content').hide();
		$('#js-'+_id).fadeIn(300);
		console.log('#js-'+_id)
	})
	$('#js-portfolioClose').on('click',function(){
		$('html, body').css('overflow','auto')
		$('.portfolio-category_block, .portfolio-showcase').removeClass('is--active')
	})
    //web
	for(i = 0 ; i < 18 ;i++) {
		var _count = i + 1;    
	    $('#js-cate-web').append(`
		<div class="portfolio-works" data-cate="web">
			<div class="portfolio-works_block web0`+ _count +`">
				<img src="img/works/works0`+ _count +`.jpg" alt="">
			</div>
		</div>
		`);
	}
	//visual
	for(i = 0 ; i < 15 ;i++) {
		var _count = i + 1;    
	    $('#js-cate-visual').append(`
		<div class="portfolio-works" data-cate="banner">
			<div class="portfolio-works_block banner0`+ _count +`">
				<img src="img/works/banner0`+ _count +`.jpg" alt="">
			</div>
		</div>
		`);
	}
	//ui
	for(i = 0 ; i < 1 ;i++) {
		var _count = i + 1;    
	    $('#js-cate-ui').append(`
		<div class="portfolio-ui"><img src="img/works/ui0`+ _count +`.jpg" alt=""></div>
		`);
	}
	$(".web01").wrapInner(`<a href="lolW/" target=_blank></a>`);
	$(".web05").wrapInner(`<a href="https://tro.gnjoy.com.tw/Content/Event/ACT_RO_Comics/" target=_blank></a>`);
	$(".web07").wrapInner(`<a href="https://tro.gnjoy.com.tw/Event/ACT_20180419_RTC/" target=_blank></a>`);
	$(".web08").wrapInner(`<a href="https://tro.gnjoy.com.tw/rom/ACT_20201209_Creation" target=_blank></a>`);
	$(".web09").wrapInner(`<a href="https://tro.gnjoy.com.tw/Event/ACT_20181106_Creation/" target=_blank></a>`);
	$(".web011").wrapInner(`<a href="https://tro.gnjoy.com.tw/event/ACT_20180612_Anniv" target=_blank></a>`);
	$(".web012").wrapInner(`<a href="https://tro.gnjoy.com.tw/ROM/ACT_20191212_PreSign" target=_blank></a>`);
	$(".web013").wrapInner(`<a href="https://tro.gnjoy.com.tw/Event/ACT_20190201_NewYear" target=_blank></a>`);
	$(".web014").wrapInner(`<a href="https://tro.gnjoy.com.tw/Event/ACT_20200121_NewYear/LuckyGasha" target=_blank></a>`);
	$(".web015").wrapInner(`<a href="https://tro.gnjoy.com.tw/Event/ACT_20190604_Wish/" target=_blank></a>`);
	$(".web016").wrapInner(`<a href="https://tro.gnjoy.com.tw/Event/ACT_20190626_NewServe" target=_blank></a>`);
	$(".web017").wrapInner(`<a href="https://tro.gnjoy.com.tw/event/ACT_20210104_NewServer" target=_blank></a>`);
	$(".web018").wrapInner(`<a href="rpq/" class="ps" target=_blank></a>`);
	$(".banner012").wrapInner(`<a href="https://rom.gnjoy.com.tw/Notice/Notice_View?id=4034" target=_blank></a>`);
	$(".banner013").wrapInner(`<a href="https://rom.gnjoy.com.tw/Notice/Notice_View?id=4400" target=_blank></a>`);
	$(".banner014").wrapInner(`<a href="https://rom.gnjoy.com.tw/Notice/Notice_View?id=4466" target=_blank></a>`);
	// $(".banner015").wrapInner(`<a href="https://www.facebook.com/RO.ForeverLove/photos/pb.100072118293398.-2207520000./2603803306372604/?type=3" target=_blank></a>`);

	//copy
	$('.email').on('click',function(){
		var $temp = $("<input>");
			$('.email').append($temp);
			$temp.val('seiyuuqueen@gmail.com').select();
			document.execCommand('copy');
			$temp.remove();
			alert('Email address has copied.')
	})

	
})
