$(function () {
    var x;
    var selected;
    var $articlesList = $('.articles-list');

    $('#sections').on('change', function () {
        event.preventDefault();
        $articlesList.empty();
        var articleItems;
        var articleData;
        var selected = $(this).val();
        console.log(selected);
        var x = "https://api.nytimes.com/svc/topstories/v2/" + selected + ".json?api-key=7182108e734c4734a54f275e42ddd650";
        
        $(".header-container").css({"margin-top" : "0px"});
        
        $(".logo").css({"width":"70px","height":"70px"});
        
        $(".copyright").css({"margin":"10px"});
        
        $.ajax({
                url: x,
                method: 'GET',
                dataType: 'json'
            })
            .done(function (data) {
                var articleData;
                var articleItems = "";
                articleData = data.results;
                console.log(articleData);
                for (i = 0; i < 12; i++) {
                    console.log(i);
                    var image = ""
                    var paragraph = ""
                    var paragraphurl = ""
                    if (data.results[i].multimedia.length > 0) {
                        image = data.results[i].multimedia[4].url;
                        paragraph = data.results[i].abstract;
                        paragraphurl = data.results[i].url;
                    }
                    articleItems += '<li><div style="width:400px; height:420px; background-size:cover; background-position:center; background-image:url(' + image + ')"><div style="padding-top:300px;"><a style="text-decoration:none; color:white; font-family: "OpenSans-Light"; box-shadow: 10px 10px 5px #888888; opacity:0.2" href=' + paragraphurl +'>' + paragraph + '</a></div></div></li>'
                }
                console.log(articleItems);
                $articlesList.append(articleItems);
            });
    });
});