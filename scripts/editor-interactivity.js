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
		dependant: [2],
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

fctie.usedLibraies = [];

fctie.attachLibraryToProgram = (function(libraryIndex) {
	window.fctie.libraryList[libraryIndex].isused = 1;
	fctie.usedLibraies.push(window.fctie.libraryList[libraryIndex].url);
});

fctie.configObject = ({
    inputContainer : $(".fctie_input textarea"),
    outputContainer : $("#fctie_output")
});

fctie.fiddle = (function() {
    	this.exportProgramAsHTML = (function(anchor){
    		anchor.attr('href', window.fctie.configObject.outputContainer.attr('data'));
    		return true;
    		//window.fctie.configObject.outputContainer.attr('data')
    	});
    	this.getInputContent = (function() {
            var htmlContent = editAreaLoader.getValue("tryit");;
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

        var prepareFullHTML = (function(htmlContent, selectedLibraries) {
            var finalHTMLContent = '<!DOCTYPE html><html><head>',
            	index;

            // adding the library
            for (index in selectedLibraries) {
                finalHTMLContent += '<script type="text/javascript" src="' + selectedLibraries[index] + '"></script>';
            }

            finalHTMLContent += "</head><body>";

            // adding html content
            finalHTMLContent += htmlContent;

            finalHTMLContent += "</body></html>";

            return finalHTMLContent;
        });

        this.getAttachedLibraryInfo = (function() {
        	var index,
        		librayLinksArray = [];
        	for(index in window.fctie.usedLibraies) {
        		librayLinksArray.push(window.fctie.usedLibraies[index]);
        	}
            return librayLinksArray;
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
		buttonTemplate=$(".fctie_header-rad span:first").html(),
		buttonElement;
		for(index in window.fctie.libraryList) {
			buttonElement = $(buttonTemplate.replace("__index__", window.fctie.libraryList[index].index).replace("__name__", window.fctie.libraryList[index].name+" v"+window.fctie.libraryList[index].version));
			if(index==0) {
				$(".fctie_header-rad span:first").html(buttonElement);
			} else {
				$(".fctie_header-rad span:first").append(buttonElement);
			}
		}
	})();

	// this function attach the click event to library buttons
	(function(){
		$(".fctie_lib_button").on('click', function() {
			if(!$(this).hasClass('active')) {
				$(this).addClass('active');
				$(this).attr('title', "Click to EXCLUDE this library");
				var index = (parseInt($(this).attr('data-index'))-1),
				depedenciesArray = window.fctie.libraryList[index].dependant;
				window.fctie.attachLibraryToProgram(index);
				for(index in depedenciesArray) {
					window.fctie.attachLibraryToProgram(depedenciesArray[index]);
					$(".fctie_lib_button[data-index='"+depedenciesArray[index]+"']").addClass('active');
					$(".fctie_lib_button[data-index='"+depedenciesArray[index]+"']").attr('title', 'Click to EXCLUDE this library');
				}	
			} else {
				$(this).removeClass('active');
				$(this).attr('title', "Click to INCLUDE this library");
				var index = (parseInt($(this).attr('data-index'))-1),
				depedenciesArray = window.fctie.libraryList[index].dependant;
				window.fctie.attachLibraryToProgram(index);
				for(index in depedenciesArray) {
					window.fctie.attachLibraryToProgram(depedenciesArray[index]);
					$(".fctie_lib_button[data-index='"+depedenciesArray[index]+"']").removeClass('active');
					$(".fctie_lib_button[data-index='"+depedenciesArray[index]+"']").attr('title', 'Click to INCLUDE this library');
				}					
			}
			
			
		});
	}());

	// click event of the execute button
	$(".fctie_input-execute").on('click', function(){
		var button = $(this);
		button.attr('disabled', 'disabled');
		button.val("executing--");
		window.setTimeout(function(){
			button.val("execute");
			button.removeAttr('disabled');
		},2000);
		var fiddleObject = new window.fctie.fiddle();
		fiddleObject.showOutput();		
	});

	// click event of export button
	$(".fctie_a-export").on('click', function(){
		var fiddleObject = new window.fctie.fiddle();
		return fiddleObject.exportProgramAsHTML($(this));
	});
});

