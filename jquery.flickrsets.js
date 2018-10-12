/* Flickr Gallery script
* powered by jQuery (http://www.jquery.com)

* written by Richard Shepherd (http://richardshepherd.com)

* for more info visit
* http://www.richardshepherd.com/how-to-use-jquery-with-a-json-flickr-feed-to-display-photos/ */
function getFlickrSets(userid, target, numberToDisplay) {

    var url = "https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=51d1d9fb120a5eb100291180adb3d5b9&user_id=" + userid + "&format=json&jsoncallback=?";

    $.getJSON(url, displayImages);




    function displayImages(data) {
        var htmlString = "";

        var ctr = 0;
	        $.each(data.photosets.photoset, function(i, theset) {

            if (ctr < numberToDisplay) {

            var sourceMed = "https://farm" + theset.farm + ".static.flickr.com/" + theset.server + "/" + theset.primary + "_" + theset.secret + "_m.jpg";
            var setUrl = "https://www.flickr.com/photos/emmott/sets/" + theset.id;

                htmlString += '<a href="' + setUrl +
                    '" title="' + theset.title._content +
                    '" target="_blank" style="opacity: 1;">';
                htmlString += '<img title="' + theset.title._content +
                    '" src="' + sourceMed + '" ';
                htmlString += 'alt="' + theset.title._content +
                    '" style="opacity: 1;" />';
                htmlString += '</a>';
                ctr = ctr + 1
            }
        });

        $('#' + target).append(htmlString);

        //update image preview so we get
        //the nice popup mouseovers on the images
        //Note: this uses the Image Preview Script,
        //if not using it remove the below line.



        //imagePreview();
    }
}
