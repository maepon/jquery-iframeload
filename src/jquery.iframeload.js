/*! jQuery.iframeload - v0.1.0 - 2013-02-25
* https://github.com/maepon/jquery-iframeload
*/
/*@preserve Copyright (c) 2013 Masayuki Maekawa Licensed MIT*/
(function( $ ){
    "use strict";
    var d = {
        interval: 100,
        notLoadedClassName: 'iframe-not-loaded-flag-class'
    };
    $.fn.iframeload = function(p){
        var o = $.extend({},d,p);
        var n = o.notLoadedClassName;
        this.each(function(){
            if (/^iframe$/i.test(this.tagName)){
                $(this).addClass(n);
            }
        });

        function c(){
            var l = $('.' + n);
            if (l.length === 0){
                clearInterval(i);
            }
            l.each(function(){
                var $this = $(this);
                if ($this.contents().find('body').children().get(0)){
                    $this.removeClass(n).trigger('iframeLoad');
                }
            });
        }

        var i = setInterval(c, o.interval);

        return this;
    }
})(jQuery);
