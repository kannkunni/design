$(function(){

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

	
	$('#js-portfolioMenu').children('li').on('click', function(){
		$(this).addClass('is--active').siblings().removeClass('is--active')

		let _str = $(this).text().toLowerCase();
		$('#js-portfolioCont').find('.portfolio-works').not(`[data-cate=`+ _str +`]`).addClass('is--disappear');
		$('#js-portfolioCont').find(`[data-cate=`+ _str +`]`).removeClass('is--disappear ');
		
		if( _str == 'all') {
			$('#js-portfolioCont').find('.portfolio-works').removeClass('is--disappear');
		} 
	})

	for(i = 0 ; i < 18 ;i++) {
		var _count = i + 1;    
	    $('#js-portfolioCont').append(`
		<div class="portfolio-works" data-cate="web">
			<div class="portfolio-works_block web0`+ _count +`">
				<img src="img/works/works0`+ _count +`.jpg" alt="">
			</div>
		</div>
		`);
	}
	for(i = 0 ; i < 12 ;i++) {
		var _count = i + 1;    
	    $('#js-portfolioCont').append(`
		<div class="portfolio-works" data-cate="banner">
			<div class="portfolio-works_block banner0`+ _count +`">
				<img src="img/works/banner0`+ _count +`.jpg" alt="">
			</div>
		</div>
		`);
	}
	for(i = 0 ; i < 3 ;i++) {
		var _count = i + 1;    
	    $('#js-portfolioCont').append(`
		<div class="portfolio-works" data-cate="others">
			<div class="portfolio-works_block others0`+ _count +`">
				<img src="img/works/others0`+ _count +`.jpg" alt="">
			</div>
		</div>
		`);
	}
	$(".web01").wrapInner(`<a href="lolW/" target=_blank></a>`);
	$(".web05").wrapInner(`<a href="https://tro.gnjoy.com.tw/Content/Event/ACT_RO_Comics/" target=_blank></a>`);
	$(".web07").wrapInner(`<a href="https://tro.gnjoy.com.tw/Event/ACT_20180419_RTC/" target=_blank></a>`);
	$(".web08").wrapInner(`<a href="https://tro.gnjoy.com.tw/rom/ACT_20201209_Creation" target=_blank></a>`);
	$(".web09").wrapInner(`<a href="https://tro.gnjoy.com.tw/Event/ACT_20181106_Creation/" target=_blank></a>`);
	// $(".web010").wrapInner(`<a href="" target=_blank></a>`);
	$(".web011").wrapInner(`<a href="https://tro.gnjoy.com.tw/event/ACT_20180612_Anniv" target=_blank></a>`);
	$(".web012").wrapInner(`<a href="https://tro.gnjoy.com.tw/ROM/ACT_20191212_PreSign" target=_blank></a>`);
	$(".web013").wrapInner(`<a href="https://tro.gnjoy.com.tw/Event/ACT_20190201_NewYear" target=_blank></a>`);
	$(".web014").wrapInner(`<a href="https://tro.gnjoy.com.tw/Event/ACT_20200121_NewYear/LuckyGasha" target=_blank></a>`);
	$(".web015").wrapInner(`<a href="https://tro.gnjoy.com.tw/Event/ACT_20190604_Wish/" target=_blank></a>`);
	$(".web016").wrapInner(`<a href="https://tro.gnjoy.com.tw/Event/ACT_20190626_NewServe" target=_blank></a>`);
	$(".web017").wrapInner(`<a href="https://tro.gnjoy.com.tw/event/ACT_20210104_NewServer" target=_blank></a>`);
	$(".web018").wrapInner(`<a href="rpq/" class="ps" target=_blank></a>`);

	// $(".banner01").wrapInner(`<a href="" target=_blank></a>`);
	$(".banner011").wrapInner(`<a href="https://rom.gnjoy.com.tw/Notice/Notice_View?id=4400" target=_blank></a>`);
	$(".banner012").wrapInner(`<a href="https://rod.gnjoy.com.tw/Notice/Notice_View?id=4374" target=_blank></a>`);

	$(".others01").wrapInner(`<a href="ball/" target=_blank></a>`);

	//copy
	$('.email').on('click',function(){
		var $temp = $("<input>");
			$('.email').append($temp);
			$temp.val('seiyuuqueen@gmail.com').select();
			document.execCommand('copy');
			$temp.remove();
			alert('Email address has copied.')
	})

	//follow mouse
	$(window).scroll(function() {
		if($(window).scrollTop() > $(window).height()*0.75 && $(window).width() > 1279) {
			$(window).on('mousemove', function(e){
				$('#mouse').css({
					display:'block',
				   	left:  e.pageX,
				   	top:   e.pageY
				});
			});
		}else{
			$(window).on('mousemove', function(){
				$('#mouse').css({
					display:'none',
					left:0,
					top:0,
				})
			});
		}
	 });
	
})
