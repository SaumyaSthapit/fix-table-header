(function($) {
    $.fn.fixHeader = function() {
        var target = $(this);

        var table = target.clone();

        var head = target.clone();
        head.find('tbody').remove();

        var body = target.clone();
        body.find('thead').remove();

        head.find('th').each(function(index){
            body.find('td').eq(index).css('width', $(this).attr('width'));
        });

        head.css({margin: "0px", padding: "0px"});
        body.css({margin: "0px", padding: "0px"});


        var headWrapper = $('<div class="fixed-header-table-head"></div>');
        var bodyWrapper = $('<div class="fixed-header-table-body"></div>');

        headWrapper.css({"padding-right": "15px"});
        bodyWrapper.css({"max-height": "400px","overflow-x": "hidden","overflow-y": "scroll"});

        target.parent().append(headWrapper.append(head));
        target.parent().append(bodyWrapper.append(body));

        target.addClass('hidden');
    }
})(jQuery);

$(document).ready(function(){
    $('table').fixHeader();
});