/*返回顶部*/
$('#toTop').on('click',function(){
	console.log(1);
   $('html, body').animate({
    scrollTop:0
   },500); 
});

/**
	 * tab切换
	 * @param {Object} nav 点击的元素
	 * @param {Object} active 选中的样式
	 * @param {Object} tab tab内容的父层
 */
function tabUI(nav,active,tab){
	$(nav).on('click',function(){	
		var $index = $(this).index();
		$(this).addClass(active).
		siblings().removeClass(active);
		$(tab).children().eq($index).show()
		.siblings().hide();
	})
}


/*弹出遮罩层和弹出窗口*/
function showMask(div,mask){
	$(div).fadeIn();
	$(mask).fadeIn();
}


/*关闭遮罩层和关闭窗口*/
function closeMask(div,mask){
	$(div).fadeOut();
	$(mask).fadeOut();
}

