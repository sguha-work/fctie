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

fctie.attachLibraryToProgram = (function(libraryIndex) {
	window.fctie.libraryList[libraryIndex].isused = 1;
});

fctie.configObject = ({
    inputContainer : $("#fctie_input textarea"),
    outputContainer : $("#fctie_output")
});

fctie.fiddle = (function() {
    	this.getInputContent = (function() {
            var htmlContent = window.fctie.configObject.inputContainer.val();
            return htmlContent
        });

        this.resetElements = (function() {
            resetInputContent();
            resetOutputContent();
        });

        var resetOutputContent = (function() {
            window.fctie.configObject.outputContainer.attr('src', 'balnk.html');
        });

        var resetInputContent = (function() {
            if(window.fctie.configObject.htmlEditor.length) {
                if(window.fctie.configObject.htmlEditor[0].tagName == "TEXTAREA") {
                    window.fctie.configObject.htmlEditor.val("");
                } else {
                    window.fctie.configObject.htmlEditor.empty();
                }
            }
        });

        var prepareFullHTML = (function(htmlContent, cssContent, jsContent, selectedLibrary) {
            var finalHTMLContent = '<!DOCTYPE html><html><head>';

            // adding the library
            if ($.trim(selectedLibrary)) {
                finalHTMLContent += '<script type="text/javascript" src="' + selectedLibrary + '"></script>';
            }

            finalHTMLContent += "</head><body>";

            // adding html content
            finalHTMLContent += htmlContent;

            finalHTMLContent += "</body></html>";

            return finalHTMLContent;
        });

        this.getAttachedLibraryInfo = (function() {
            return $("#sel_library").val();
        });

        this.showOutput = (function() {
            var inputContent = this.getInputContent(),
            	selectedLibraries = this.getAttachedLibraryInfo(),
            	finalHTMLContent = prepareFullHTML(inputContent, selectedLibraries);
            window.fctie.configObject.outputContainer.attr('data',"data:text/html;charset=utf-8,"+escape(finalHTMLContent));
        });
});

$(document).ready(function() {
	
	// this function populates the library list
	(function(){
		var index, 
		buttonTemplate=$(".fctie_header-rad span").html(),
		buttonElement;
		for(index in window.fctie.libraryList) {
			buttonElement = $(buttonTemplate.replace("__index__", window.fctie.libraryList[index].index).replace("__name__", window.fctie.libraryList[index].name+" v"+window.fctie.libraryList[index].version));
			if(index==0) {
				$(".fctie_header-rad span").html(buttonElement);
			} else {
				$(".fctie_header-rad span").append(buttonElement);
			}
		}
	})();

	// this function attach the click event to library buttons
	(function(){
		$(".fctie_lib_button").on('click', function() {
			var index = $(this).data('index'),
			depedenciesArray = window.fctie.libraryList[index].dependant;
			$(this).attr('disabled', 'disabled');
			window.fctie.attachLibraryToProgram(index);
			for(index in depedenciesArray) {
				window.fctie.attachLibraryToProgram(depedenciesArray[index]);
				$(".fctie_lib_button[data-index='"+depedenciesArray[index]+"']").attr('disabled', 'disabled');
			}
			
		});
	}());
});

