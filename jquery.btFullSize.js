/**
 * Created by kimbyungsoo on 2015-03-13.
 */

(function($){
	$.fn.btFullSize = function(opt, callback){
		var _width = $(window).width();
		var _height = $(window).height();

		if($.isFunction(opt)){
			callback = opt;
			opt = null;
		}

		$.fn.btFullSize.setting = {
			coverImg:".bg"
		};

		opt = $.extend($.fn.btFullSize.setting, opt);
		return this.each(function(i){
			var _this = $(this);
			var _bg = _this.find(opt.coverImg);
			init();
			function init(){
				_this.css({"width":_width, "height":_height, "overflow":"hidden"});
				_bg.css({"width":"100%", "height":"auto"});
				if(_bg.width() <= _width){
					setPos(true);
				}else{
					setPos(false);
				}

				if(_bg.height() <= _height){
					setPos(false);
				}else{
					setPos(true);
				}
			}

			function setPos(isWidth){
				if(isWidth){
					_bg.css({"width":"100%", "height":"auto"});
				}else{
					_bg.css({"width":"auto", "height":"100%"});
				}
				_bg.css({
					"position":"absolute",
					"left":(_width - _bg.width())/2,
					"top":(_height - _bg.height())/2
				});
			}

			$(window).resize(function(){
				_width = $(window).width();
				_height = $(window).height();
				init();
			});
		});
	};
})(jQuery);
