(function() {


Array.maxProp = function (array, prop) {
  var values = array.map(function (el) {
    return el[prop];
  });
  return Math.max.apply(Math, values);
};

Array.minProp = function (array, prop) {
  var values = array.map(function (el) {
    return el[prop];
  });
  return Math.min.apply(Math, values);
};

angular.module('heatmap.directives', [])
	.directive('heatmap', function($window) {
		return {
			restrict: 'E',
			replace: true,
			scope: {
				'links': '=links'
			},
			link: function(scope, element, attr) {
				
				//ADD LOADER
				var loader = $('<div id="ajaxloader"></div>');
				$('body').append(loader);

				$($window).load(function() {
					scope.$watch('links', function(newVal, oldVal) {
						
						//REMOVE LOADER AFTER RESOLVE
						if(typeof newVal === 'object') {
							$('#ajaxloader').remove();				
						
							//max value
							var max = Array.maxProp(scope.links, 'clicks');

							//min value
							var min = Array.minProp(scope.links, 'clicks');

							var win = $window.innerHeight, yAxePos, yAxeNumber, yAxeStr = '';
							for(var k = 0; k <= 19; k++) {
							  (function(k) {
							  	yAxePos = Math.floor( (win/20)*k );
									yAxeNumber = (max - (max / 20) * k).toFixed(0);

									yAxeStr += '<div style="position:absolute;top:'+yAxePos+'px;color:#fff;text-align:right;width:90%;">'+yAxeNumber+'&nbsp;&ndash;</div>'
									
							  })(k);
							}

							//SHOW 
							var colorstring;
							colorstring = '<div class="bar-right">'+
														'<div class="diagram">'+
														'<div class="diagram-left">'+
														'<div>'+yAxeStr+'</div>'+
														'</div>'+
														'<div class="diagram-right"></div>'+
														'</div>'+
														'<div class="linker"></div>'+
														'</div>';

							var $explain = $(colorstring);
									$explain.children().children().eq(0).text
									$explain.children().children().eq(1).css({
										background: 'linear-gradient(to bottom, #ff1600, #ff9900, #fffb08, #10b528, #02ebfa, #000652)'
									});

							$('body').append($explain);
							
							//lag container
							var $mailbody = $('#map');

							//hent linker
							var $anchors = $('#map a');

							//referanse til tabell vidde
							$tableWidth = '100%';
							$tableHeight = $(element).innerHeight();

							//lag overlay
							var $overlay = $('<div id="overlay"></div>');
									$overlay.css(
										{ 
											width: $tableWidth + 'px', 
											height: $mailbody.height() + 'px', 
											background: 'rgba(0,0,0,1)', 
											position: 'absolute',
											opacity: '.75',
											top: 0,
											left:0, 
											right:0, 
											marginLeft: 'auto', 
											marginRight: 'auto'
										});

							$(element).hide().append($overlay).fadeIn(1000);

							var x, y, w, h, id, click, clickValue, valToColor, h, s, l, hsl, browserHeight, percentOf, posY;
							$infoWindow = $('<div class="infoWindow"></div>');
							$(element).append($infoWindow);

							for(var i = 0;i<$anchors.length;i++) {
								
								(function(i) {

									$l = $($anchors[i]);

									x = +$l.offset().left.toFixed(0) + 'px';
									w = $l.width() + 'px';
									id = $l.data("id");

									for(var j = 0;j<scope.links.length;j++) {
										if(+scope.links[j].id === +id) {
											clickValue = scope.links[j].clicks;
										}
									}

									//HSL MAPPING
									valToColor = (clickValue / max).toFixed(1);
									h = ((1.0 - valToColor) * 240).toFixed(1);
									s = 100;
									l = 50;
									hsl = h + ',' + s + '%' + ',' + l + '%';
																
									//if image adjust height and top
									if( $l[0].getElementsByTagName('img')[0]) {
										image = $l[0].getElementsByTagName('img')[0];
										h = $(image).height();
										y = (+$l.offset().top.toFixed(0) - (h/2) ) + 'px';
									}else{
										h = $l.height() + 'px';
										y = +$l.offset().top.toFixed(0) + 'px';
									}

									if( $l.text() === '') {
										pointText = $l.attr('title');
									}else{
										pointText = $l.text();
									}
									
									$elem = $('<div class="point" data-text="'+pointText+'" data-value="'+clickValue+'"></div>');
									$elem.css(
										{ 
											top: y,
											left: x,
											width: w,
											height: h, 
											background: 'hsla('+hsl+',1)',
											opacity: '.75',
											boxShadow: '0 0 15px 11px hsla('+hsl+',1)',
											position: 'absolute',
											cursor: 'pointer',
											textDecoration: 'none'
										});

									$elem.on('mouseenter', function(e) {
										browserHeight = $window.innerHeight;
										percent = ((+$(this).data('value') / +max)*100).toFixed(1);

										percentOf = browserHeight * (percent/100);
										posY = (browserHeight - percentOf) + $window.scrollY;

										//hindre at info går ut av vinduet
										if( (+posY / (browserHeight+$window.scrollY) ) > 0.99) {
											posY = posY - 25;
										}else{
											 posY = posY;
										}
										
										$infoWindow.css({
											position: 'absolute',
											top: posY + 'px',
											right: '30px',
											padding: '5px 20px',
											background: 'rgba(0,0,0, .8)',
											borderRadius: '0',
											zIndex: '1000',
											color: '#fff'
										});
										
										if( $(this).data('text') ) {
											$infoWindow.html('<strong>'+$(this).data('text') + '</strong>&nbsp;' + $(this).data('value') + ' ('+percent + '%)').show();
										}else{
											$infoWindow.html(+$(this).data('value') + ' ('+percent + '%)').show();
										}
									});

									$elem.on('mouseout', function(e) {
										$infoWindow.hide();
									});

									$overlay.append($elem);

								})(i);
							}
						}
					});

				});
			}
		}
	})
})();



