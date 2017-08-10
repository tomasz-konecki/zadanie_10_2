$(function() {

    $("span:even").css('color', 'red');

    var paragraphs = $('p');
    paragraphs.each(function(index, element) {
        var button = `<button class="btn" data-tmp="${index}">Click me</button>`
        $(element).append(button);
    });

    $("button").click(function() {
        alert(`button: ${$(this).attr("data-tmp")}`);
    });
});