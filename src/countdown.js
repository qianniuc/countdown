/*
Countdown 0.1.0
*/
;(function (window) {

		function diffTime (lastTime) {
			var nowTime = new Date().getTime();
			if (typeof lastTime === 'object') {
				lastTime = lastTime.getTime();
			}
			if (typeof lastTime === 'string') {
				lastTime = (new Date(Date.parse(lastTime.replace(/-/g, "/")))).getTime();
			}			
			return lastTime > nowTime ? lastTime - nowTime : 0;
		}		
					    
	    function Countdown (container, options) {

	    	var defaults = {
    			format: "hh:mm:ss",
    			lastTime: "2016-04-20"
    		};
 		
    		for (var option in options) {
    			defaults[option] = options[option];
    		}

    		this.format = function (time) {
				return defaults.format.replace(/hh/ig, time.h).replace(/mm/ig, time.m).replace(/ss/ig, time.s);
			};

		    this.render = function (format) {
		    	container = container || document.getElementsByTagName('body')[0];
				container.innerHTML = format;
			};

		    this.init = function () {
		    	var that = this;
			    if(!defaults.lastTime) return;	    		    		
	    		this.interval = setInterval(function () {
		            var countTime = diffTime(defaults.lastTime)/1000,
		                h = Math.floor(countTime/3600),
		                m = Math.floor(((countTime-h*3600))/60),
		                s = Math.floor(countTime-h*3600-m*60),
		                h = (h > 9 ? h : "0" + h),
		                m = (m > 9 ? m : "0" + m),
		                s = (s > 9 ? s : "0" + s);
		                that.render(that.format({h: h, m: m, s: s}));		                
	    		}, 1000);
		    };

    		this.init();
	    }

	    window.Countdown = Countdown;

})(window);

//自定义输出格式
//自定义要渲染的dom
//自定义样式
//调用方式new Countdown(obj, {
//	format: "hh:mm:ss"
//  
//})
