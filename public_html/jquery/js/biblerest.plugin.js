(function($){
    
    $.fn.biblerest = function(_options){
        
        var options,
            initComponent,
            callLookup4,
            params = {
                dataType:"jsonp",
                method:"GET"
            },
            box = $(this),
            container = $("<div />");
    
        options = $.extend({
            url: "http://localhost:8888/bible/?callback=?",
            lookupUrl: "http://localhost:8888/bible/index.php/search/lookup/?callback=?"
        }, _options);
        
        
        callLookup4 = $.ajax($.extend(params, {
            url: lookupUrl
        }));
        
        
        
        
    };
    
})(jQuery);


