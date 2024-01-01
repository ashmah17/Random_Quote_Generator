$(document).ready(function(){
    getRandomQuote();

    setInterval(function(){
        getRandomQuote();
    }, 6000);
});
function getRandomQuote(){
    $.ajax({
        url:'https://api.quotable.io/random',
        method:'GET',
        success: function(data){
            displayQuote(data);
        },
        error:function(){
            $('#quote-container').html('<p> Error fetching quote</p>');
        }
    });
}
function displayQuote(quoteData){
    var quote = quoteData.content;
    var author = quoteData.author;
    var html = '<blockquote><p>' + quote + '</P><footer>' + author +'</footer></blockquote>';
    $('#quote-container').html(html);

}

