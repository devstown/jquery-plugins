$(document).ready(function () {

    var pluginListJSON = "//raw.githubusercontent.com/devstown/json-hosting/master/jquery-plugins/plugin-list.json";

    //get data from json file
    $.getJSON(pluginListJSON, function (result) {

        for (var i = 0; i < result.length; i++) {
            var singlePlugin = '<div class="single-plugin">' +
                '<div class="card">' +
                '<div class="card-body">' +
                '<h5 class="card-title">' + result[i].pluginTitle + '</h5>' +
                '<h6 class="card-subtitle mb-2 text-muted">' + result[i].pluginSubtitle + '</h6>' +
                '<div class="source-btns">' +
                '<a href="' + result[i].pluginWebsiteURL + '" target="_blank" class="btn btn-primary d-inline-block mb-3"><i class="fas fa-globe"></i> Website</a>' +
                ' ' +
                '<a href="' + result[i].pluginGithubURL + '" target="_blank" class="btn btn-dark d-inline-block mb-3"><i class="fab fa-github"></i> Github</a>' +
                '</div>' +
                '<a href="' + result[i].pluginCSSDownloadURL + '" class="card-link">Download CSS</a>' +
                '<a href="' + result[i].pluginJSDownloadURL + '" class="card-link">Download JS</a>' +
                '</div>' +
                '</div>' +
                '</div>';

            $('#plugin-container').append(singlePlugin);

        }

        //pagination
        $('#plugin-container').paginate({
            'perPage': 8
        });
    });


    //search 
    // while keypress on search box
    $("#searchPlugin").on("keyup", function () {
        //take the search term and convert it to lower case
        var searchKey = $(this).val().toLowerCase();

        // search in the plugin container 
        $("#plugin-container .single-plugin").filter(function () {
            // show the matched plugin based on search key
            $(this).toggle($(this).text().toLowerCase().indexOf(searchKey) > -1);
        });
    });


});