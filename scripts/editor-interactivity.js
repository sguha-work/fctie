window.fctie = {};
fctie.libraryList = [
	{
		index: 1,
		name: "jQuery",
		version: "1.x",
		url: "http://code.jquery.com/jquery-1.11.0.js",
		dependant: [],
		isused: 0
	},
	{
		index: 2,
		name: "jQuery",
		version: "2.x",
		url: "http://code.jquery.com/jquery-2.1.3.js",
		dependant: [],
		isused: 0
	},
	{
		index: 3,
		name: "jQuery UI",
		version: "1.11.4",
		url: "",
		dependant: [1],
		isused: 0
	},
	{
		index: 4,
		name: "jQuery UI",
		version: "1.10.4",
		url: "",
		dependant: [1],
		isused: 0
	},
];

$(document).ready(function() {
	// this function populates the library list
	(function(){
		var index, 
		buttonTemplate=$(".fctie_header-rad span").html(),
		buttonElement;
		for(index in window.fctie.libraryList) {
			buttonElement = $(buttonTemplate.replace("__index__", window.fctie.libraryList[index].index).replace("__name__", window.fctie.libraryList[index].name));
			if(index==0) {
				$(".fctie_header-rad span").html(buttonElement);
			} else {
				$(".fctie_header-rad span").append(buttonElement);
			}
		}
	})();
});

