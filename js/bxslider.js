destroySlider333333333 = function(){
	// don't do anything if slider has already been destroyed
	if(!slider.initialized) return;
	slider.initialized = false;
	$('.bx-clone', this).remove();
	slider.children.each(function() {
		$(this).data("origStyle") != undefined ? $(this).attr("style", $(this).data("origStyle")) : $(this).removeAttr('style');
	});
	$(this).data("origStyle") != undefined ? this.attr("style", $(this).data("origStyle")) : $(this).removeAttr('style');
	$(this).unwrap().unwrap();
	if(slider.controls.el) slider.controls.el.remove();
	if(slider.controls.next) slider.controls.next.remove();
	if(slider.controls.prev) slider.controls.prev.remove();
	if(slider.pagerEl && slider.settings.controls) slider.pagerEl.remove();
	$('.bx-caption', this).remove();
	if(slider.controls.autoEl) slider.controls.autoEl.remove();
	clearInterval(slider.interval);
	if(slider.settings.responsive) $(window).unbind('resize', resizeWindow);
}
