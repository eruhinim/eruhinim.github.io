function escapeHTML(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function include_description(element, description) {
    element.html(element.html() +
		"<p class=\"quotebash\"><code>" + description + "</code></p>");
}

setTimeout(function () {
$.ajax({
    url: 'https://raw.githubusercontent.com/marto1/my-ideas-list/master/hacks',
    dataType: 'text',
    success: function(data) 
    {
	var hacklist = $("#hacklist");
        var text = data.split('\n');
	var description = "";
	var v;
	text.forEach(function(line){
	    var lastel;
	    if (line.startsWith("* ")){
		if (description != "") {
		    include_description(hacklist.children().last(),
					escapeHTML(description))
		}
		v = "<li>" + escapeHTML(line.slice(2)) + "</li>"
		hacklist.append(v);
		description = "";
	    } else {
		description += line + "\n";
	    }
	});
	//last element
	if (description != "") {
	    include_description(hacklist.children().last(),
				description)
	}
    }});
}, 1000)

