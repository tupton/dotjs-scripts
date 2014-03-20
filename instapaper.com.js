/*global $:true */

$('a').each(function() {
    var a = $(this),
        href = a.attr('href');

    if (href && (href.indexOf('instapaper.com') == -1) &&
            (startsWith(href, 'http://') || startsWith(href, '//') || startsWith(href, 'https://'))) {
        a.attr('target', '_blank');
    }
});
