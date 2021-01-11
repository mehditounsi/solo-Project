$(document).on('click','.first-boutton,.second-boutton'),function(){
	$(this).addClass('active-btn').siblings().removeClass("active-btn") }

	$(document).on('click','.first-boutton',function(){
	$('.text-container1').addClass('active-text-slide').siblings('text-container2').removeClass("active-text-slide") 
}
	$(document).on('click','.second-boutton'),function(){
	$('.text-container2').addClass('active-text-slide').siblings('.text-container').removeClass("active-text-slide") }