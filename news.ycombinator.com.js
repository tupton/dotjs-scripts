/*global $:true */

$('a').each(function() {
    var a = $(this),
        href = a.attr('href');

    if (href && (href.indexOf('ycombinator.com') == -1) &&
            (startsWith(href, 'http://') || startsWith(href, '//') || startsWith(href, 'https://'))) {
        a.attr('target', '_blank');
    }
});
