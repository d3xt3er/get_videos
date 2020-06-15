$(document).ready(function(){
    $("#form-submit").submit(function(e){
        e.preventDefault();

        var test = document.getElementById("name_video").value;

        $.ajax({
            type:'GET',
            url: 'https://www.googleapis.com/youtube/v3/search',
            data: {
                key: 'AIzaSyDSx47F0fzoKA0cppJM1b_0ty_RF_6NHvw',
                q: test,
                part: 'snippet',
                maxResults: 1,
                type: 'video',
                videoEmbeddable: true,
            },
            success: function(data){
                embedVideo(data)
                console.log(data.items[0].id.videoId);
              console.log(data);
            },
            error: function(response){
                console.log("Request Failed");
            }
        });
    })
})

  function embedVideo(data) {
    $('iframe').attr('src', 'https://www.youtube.com/embed/' + data.items[0].id.videoId)
    $('h3').text(data.items[0].snippet.title)
    $('.description').text(data.items[0].snippet.description)
    $('.link_video').text("https://www.youtube.com/watch?v="+data.items[0].id.videoId)
}
