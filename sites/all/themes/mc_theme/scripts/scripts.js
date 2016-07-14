(function ($) {

	/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-csscalc-csstransforms-cssvhunit-cssvwunit-flexbox-hiddenscroll-inlinesvg-overflowscrolling-picture-search-svg-svgasimg-touchevents-video-setclasses !*/
	
	!function(e,t,n){function o(e,t){return typeof e===t}function r(){var e,t,n,r,i,s,a;for(var l in T)if(T.hasOwnProperty(l)){if(e=[],t=T[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=o(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),w.push((r?"":"no-")+a.join("-"))}}function i(e){var t=C.className,n=Modernizr._config.classPrefix||"";if(S&&(t=t.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(o,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),S?C.className.baseVal=t:C.className=t)}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):S?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(e,t){if("object"==typeof e)for(var n in e)P(e,n)&&a(n,e[n]);else{e=e.toLowerCase();var o=e.split("."),r=Modernizr[o[0]];if(2==o.length&&(r=r[o[1]]),"undefined"!=typeof r)return Modernizr;t="function"==typeof t?t():t,1==o.length?Modernizr[o[0]]=t:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=t),i([(t&&0!=t?"":"no-")+o.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function l(){var e=t.body;return e||(e=s(S?"svg":"body"),e.fake=!0),e}function u(e,n,o,r){var i,a,u,c,f="modernizr",d=s("div"),p=l();if(parseInt(o,10))for(;o--;)u=s("div"),u.id=r?r[o]:f+(o+1),d.appendChild(u);return i=s("style"),i.type="text/css",i.id="s"+f,(p.fake?p:d).appendChild(i),p.appendChild(d),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),d.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",c=C.style.overflow,C.style.overflow="hidden",C.appendChild(p)),a=n(d,e),p.fake?(p.parentNode.removeChild(p),C.style.overflow=c,C.offsetHeight):d.parentNode.removeChild(d),!!a}function c(e,t){return!!~(""+e).indexOf(t)}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function d(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var r;for(var i in e)if(e[i]in t)return n===!1?e[i]:(r=t[e[i]],o(r,"function")?d(r,n||t):r);return!1}function h(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function v(t,o){var r=t.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(h(t[r]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];r--;)i.push("("+h(t[r])+":"+o+")");return i=i.join(" or "),u("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function m(e,t,r,i){function a(){u&&(delete L.style,delete L.modElem)}if(i=o(i,"undefined")?!1:i,!o(r,"undefined")){var l=v(e,r);if(!o(l,"undefined"))return l}for(var u,d,p,h,m,g=["modernizr","tspan","samp"];!L.style&&g.length;)u=!0,L.modElem=s(g.shift()),L.style=L.modElem.style;for(p=e.length,d=0;p>d;d++)if(h=e[d],m=L.style[h],c(h,"-")&&(h=f(h)),L.style[h]!==n){if(i||o(r,"undefined"))return a(),"pfx"==t?h:!0;try{L.style[h]=r}catch(y){}if(L.style[h]!=m)return a(),"pfx"==t?h:!0}return a(),!1}function g(e,t,n,r,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+j.join(s+" ")+s).split(" ");return o(t,"string")||o(t,"undefined")?m(a,t,r,i):(a=(e+" "+N.join(s+" ")+s).split(" "),p(a,t,n))}function y(e,t,o){return g(e,n,n,t,o)}var w=[],T=[],_={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){T.push({name:e,fn:t,options:n})},addAsyncTest:function(e){T.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=_,Modernizr=new Modernizr,Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),Modernizr.addTest("picture","HTMLPictureElement"in e);var C=t.documentElement,S="svg"===C.nodeName.toLowerCase(),x=_._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];_._prefixes=x,Modernizr.addTest("video",function(){var e=s("video"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=s("a");return n.style.cssText=e+x.join(t+e),!!n.style.length}),Modernizr.addTest("inlinesvg",function(){var e=s("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var b=function(){function e(e,t){var r;return e?(t&&"string"!=typeof t||(t=s(t||"div")),e="on"+e,r=e in t,!r&&o&&(t.setAttribute||(t=s("div")),t.setAttribute(e,""),r="function"==typeof t[e],t[e]!==n&&(t[e]=n),t.removeAttribute(e)),r):!1}var o=!("onblur"in t.documentElement);return e}();_.hasEvent=b,Modernizr.addTest("inputsearchevent",b("search"));var P;!function(){var e={}.hasOwnProperty;P=o(e,"undefined")||o(e.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),_._l={},_.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},_._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,o;for(e=0;e<n.length;e++)(o=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){_.addTest=a}),Modernizr.addTest("svgasimg",t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"));var E=_.testStyles=u;Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var o=["@media (",x.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");E(o,function(e){n=9===e.offsetTop})}return n}),E("#modernizr { height: 50vh; }",function(t){var n=parseInt(e.innerHeight/2,10),o=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).height,10);Modernizr.addTest("cssvhunit",o==n)}),E("#modernizr { width: 50vw; }",function(t){var n=parseInt(e.innerWidth/2,10),o=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);Modernizr.addTest("cssvwunit",o==n)});var z="Moz O ms Webkit",j=_._config.usePrefixes?z.split(" "):[];_._cssomPrefixes=j;var N=_._config.usePrefixes?z.toLowerCase().split(" "):[];_._domPrefixes=N;var A={elem:s("modernizr")};Modernizr._q.push(function(){delete A.elem});var L={style:A.elem.style};Modernizr._q.unshift(function(){delete L.style}),_.testAllProps=g,_.testAllProps=y,Modernizr.addTest("cssanimations",y("animationName","a",!0)),Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),Modernizr.addTest("overflowscrolling",y("overflowScrolling","touch",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&y("transform","scale(1)",!0)}),Modernizr.addTest("hiddenscroll",function(){return E("#modernizr {width:100px;height:100px;overflow:scroll}",function(e){return e.offsetWidth===e.clientWidth})}),r(),i(w),delete _.addTest,delete _.addAsyncTest;for(var I=0;I<Modernizr._q.length;I++)Modernizr._q[I]();e.Modernizr=Modernizr}(window,document);

  // Hide image cover html container when background is not set
  Drupal.behaviors.hideCover = {
    attach: function (context, settings) {
      
      if ($('.cover-img').css('background-image') == 'none' && !$('.cover-img .field-type-media')) {
      
      	$('.cover-img').hide();
      }
    }
  };

// Open form segments

	// $('.form-segment h3').click(function() {
    
 //    	$('.form-segment').not([$(this).parent('.form-segment'), $(this)]).removeClass('is-open');
    
 //    	$(this).parent('.form-segment').toggleClass('is-open');
	// });

	// if ($('.form-segment input').is(':active')) {

	// 	$('.form-segment').not([$(this).parents('.form-segment'), $(this)]).removeClass('is-open');
	
	// 	$(this).parents('.form-segment').toggleClass('is-open');
	// }

// Open Icon List Item

	Drupal.behaviors.openList = {
		
		attach: function (context, settings) {
		
			$('.touchevents ul.icon-list li, ul.itinerary-list li').click(function() {

				$(this).toggleClass('is-open');
				
				$('.touchevents ul.icon-list li, ul.itinerary-list li').not(this).removeClass('is-open');
			});

			$(document).ready(function() {

				$('.itinerary-list li h4').append('<span class="fa fa-chevron-left"></span>');
			    
			    $(document).mouseup(function(e) {
			        
			        var subject = $(".touchevents ul.icon-list, ul.itinerary-list"); 

			        if(e.target.id != subject.attr('class') && !subject.has(e.target).length) {
			        	
			        	$('.touchevents ul.icon-list li, ul.itinerary-list li').removeClass('is-open');
			        }
			    });
			});
		}
	};

// Navigation Dropdowns

	Drupal.behaviors.openNav = {
		
		attach: function (context, settings) {

			// // media query event handler
			// 	if (matchMedia) {
			// 		var mq = window.matchMedia("(min-width: 53rem)");
					
			// 		mq.addListener(WidthChange);
					
			// 		WidthChange(mq);
			// 	}

			// // media query change
				
			// 	function WidthChange(mq) {
				
			// 		if (mq.matches) {
					
			// 			$('nav li.menu-item-394').click(function() {

			// 				return true;
			// 			}

				
			// 		} else {
			    	
			//     		// window width is less than 500px
			//   		}
			// 	}

		
			$('.touchevents nav li.expanded.menu-depth-1').click(function() {

				if ($(this).hasClass('is-open')) {

					return true;
				}

				else {
				
					event.preventDefault();
					
					$(this).toggleClass('is-open');

					$('nav li.expanded.menu-depth-1').not(this).removeClass('is-open');
					
					$('nav li.expanded.menu-depth-2').not(this).removeClass('is-open');
				}
			});

			$('.touchevents nav li.expanded.menu-depth-2').click(function() {

				if ($(this).hasClass('is-open')) {

					return true;
				}

				else {
					
					event.preventDefault();
					
					$(this).toggleClass('is-open');

					$('nav li.expanded.menu-depth-2').not(this).removeClass('is-open');
				}
			});

			$(document).ready(function() {
	    	
	    		$(document).mouseup(function(e) {
	        		var subject = $("nav#block-system-main-menu"); 

	        		if(e.target.id != subject.attr('id') && !subject.has(e.target).length) {
	        			
	        			$('nav li.is-open').removeClass('is-open');
	        		}
	    		});
			});

			$('.menu-item-531 > a').click(function(event) {
				event.preventDefault()
			});
		}
	};

// Set testimonial scrollers

	Drupal.behaviors.setScrollerWidth = {
		
		attach: function (context, settings) {
			
			$(window).load(function() {

				 var quotes = $( ".view-testimonials-view .view-content > div" ).length;

				 var prefix = "q";

				 var qClass = prefix + quotes;

				 $('.view-testimonials-view .view-content').addClass(qClass);
			});

			$('.view-testimonials-view').click(function() {

				$(this).toggleClass('is-open');
				$('ul.icon-list li').not(this).removeClass('is-open');
			});

			// $(document).ready(function($) {
				
			// 	var quotes = $( ".view-testimonials-view .view-content > div" ).length;

			// 	var prefix = "p";

			// 	var interval = null;
			
			// 	$(document).ready(function($) {
					
			// 		interval = setInterval(testRot, 4500);
			// 	});

			// 	function testRot() {

			// 		page = quotes + 1;

			// 		var pClass = prefix + page;

			// 		$('.testimonials-view.').removeClass('p1').addClass('testimonials-view' + pClass);
					// $('.card.multipage .fa-chevron-right').click();
				// }

				// $('.card.multipage').hover(function() {
					// clearInterval(interval);

				// }, function() {
					/* Stuff to do when the mouse leaves the element */
				// });
			// });
		}
	};

// Multipage cards

	Drupal.behaviors.scrollCard = {
		
		attach: function (context, settings) {

			$('.card.multipage .fa-chevron-right').click(function() {

				if ($('.card.multipage').hasClass('p1')) {

					$('.card.multipage').removeClass('p1 is-inactive').addClass('p2');
					clearInterval(int);
				}

				else if ($('.card.multipage').hasClass('p2')) {

					$('.card.multipage').removeClass('p2').addClass('p3');
					clearInterval(int);
				}				

				else if ($('.card.multipage').hasClass('p3')) {

					$('.card.multipage').removeClass('p3').addClass('p4');
					clearInterval(int);
				}


				// else if ( n == 4 ) {
					// var n = $('.card.multipage .img').length;
					// $('.card.multipage').addClass('is-inactive');					
					// $('.card.multipage').removeClass('p3').addClass('p4');
					// clearInterval(int);
				// }

				else {
					$('.card.multipage').removeClass('p3').addClass('p1');
					clearInterval(int);
				}
			});

			$('.card.multipage .fa-chevron-left').click(function() {

				if ($('.card.multipage').hasClass('p4')) {

					$('.card.multipage').removeClass('p4 is-inactive').addClass('p3');
					clearInterval(int);
				}

				else if ($('.card.multipage').hasClass('p3')) {

					$('.card.multipage').removeClass('p3').addClass('p2');
					clearInterval(int);
				}				

				else if ($('.card.multipage').hasClass('p2')) {

					$('.card.multipage').removeClass('p2').addClass('p1');
					clearInterval(int);
				}

				// var n = $('.card.multipage .img').length;

				// else if ( n == 4 ) {
					// $('.card.multipage').addClass('is-inactive');					
					// $('.card.multipage').removeClass('p1').addClass('p4');
					// clearInterval(int);
				// }

				else {
					$('.card.multipage').removeClass('p1').addClass('p3');
					clearInterval(int);
				}
			});			

			var interval = null;
			
			$(document).ready(function($) {
				
				interval = setInterval(cardRot, 4500);
			});

			function cardRot() {

				$('.card.multipage .fa-chevron-right').click();
			}

			$('.card.multipage').hover(function() {
				clearInterval(interval);

			}, function() {
				/* Stuff to do when the mouse leaves the element */
			});
		}
	};



	// Drupal.behaviors.formToggle = {

	// 	attach: function (context, settings) {

	// 		$('form .fieldset-legend a').click(function(event) {

	// 			$(this).removeClass('collapsed');
	// 			$('form .fieldset-legend a').not(this).parents('.webform-component-fieldset').addClass('collapsed');
	// 		});
	// 	}
	// }

// Card Touch Behaviour

	Drupal.behaviors.touchCards = {

		attach: function (context, settings) {
				
			$('.touchevents .card').not('.multipage').click(function() {
				
				if ($(this).hasClass('is-open')) {

					$(this).toggleClass('is-open');
				}

				else {
					$(this).toggleClass('is-open');

					$('.touchevents .card').not(this).not('.multipage').removeClass('is-open');
				}
			});

			$(document).ready(function() {
	    	
	    		$(document).mouseup(function(e) {
	        		var subject = $(".touchevents .card"); 

	        		if(e.target.id != subject.attr('class') && !subject.has(e.target).length) {
	        			
	        			$('.touchevents .card').not('.multipage').removeClass('is-open');
	        		}
	    		});
			});
		}
	};

// Multipage Card Touch Behaviour

	Drupal.behaviors.mTouchCards = {

		attach: function (context, settings) {
				
			$('.touchevents .card.multipage').click(function() {
				
				if ($(this).hasClass('is-open')) {

					// $(this).removeClass('is-open');
				}

				else {
					$(this).addClass('is-open');

					// $('.touchevents .card.multipage').removeClass('is-open');
				}
			});

			$(document).ready(function() {
	    	
	    		$(document).mouseup(function(e) {
	        		var subject = $(".touchevents .card.multipage"); 

	        		if(e.target.id != subject.attr('class') && !subject.has(e.target).length) {
	        			
	        			$('.touchevents .card.multipage').removeClass('is-open');
	        		}
	    		});
			});
		}
	};

// Custom Dropdown

	Drupal.behaviors.cDropD = {

		attach: function (context, settings) {
				
			$('.touchevents ul.drop-down').click(function() {
				
				if ($(this).hasClass('is-open')) {

					$(this).toggleClass('is-open');
				}

				else {
					
					$(this).toggleClass('is-open');
				}
			});

			$(document).ready(function() {
	    	
	    		$(document).mouseup(function(e) {
	        		
	        		var subject = $(".touchevents ul.drop-down"); 

	        		if(e.target.id != subject.attr('class') && !subject.has(e.target).length) {
	        			
	        			$('.touchevents ul.drop-down').removeClass('is-open');
	        		}
	    		});
			});
		}
	};

// Webform Segment Behaviour

	Drupal.behaviors.webformSegment = {

		attach: function (context, settings) {
				
			$('form fieldset input, form fieldset select, form fieldset textarea, form fieldset').focus(function() {

				$(this).parents('fieldset').removeClass('collapsed');

				$(this).parents('fieldset').prev('fieldset').addClass('collapsed');

				// $('form fieldset input').not(this).parents('fieldset').addClass('collapsed');
			});
		}
	};

}(jQuery));

