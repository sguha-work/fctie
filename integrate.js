// to run this code use node integrate.js
var fs = require('fs-extra');
var config = {};

config.Fusioncharts  = "\n<script type=\"text/javascript\" src=\"http://static.fusioncharts.com/code/latest/fusioncharts.js\"></script>\n";
config.Fusioncharts += "<script type=\"text/javascript\" src=\"http://static.fusioncharts.com/code/latest/fusioncharts.charts.js\"></script>\n";
//config.Fusioncharts += "<script type=\"text/javascript\" src=\"http://static.fusioncharts.com/code/latest/themes/fusioncharts.theme.fint.js\"></script>\n";

//getting the editor template html.
config.template = fs.readFileSync('index.html', 'utf8');


var generateScriptTag = (function(args){
return "<script type=\"text/javascript\" src="+ args.replace("\"", "/\"") +"></script>\n";
});

//getting all the folder names from 'fiddles' directory
config.files = fs.readdirSync('fiddles');

//try to create a directory if not exist and name it as 'tryItEditor'.
try { 
	//creating root directory.
	fs.mkdirSync('tryItEditor');
	//placing the css files.
	fs.copySync('css', 'tryItEditor/css');	
	//placing the script files. 
	fs.copySync('scripts', 'tryItEditor/scripts');
	//placing the edit-area files and folder in the tryItEditors
	fs.copySync('edit_area', 'tryItEditor/edit_area');

 }
catch (e) { console.log("folder already exist.");}



//combining the two files content in a single file.
for(var i=0; i<config.files.length; i++ ) //config.files.length
{
	var fiddleContent = fs.readFileSync('fiddles/' + config.files[i] + '/' + config.files[i] + '.html'); 
	fiddleContent = fiddleContent.toString().match(/<body[^>]*>[\s\S]*<\/body>/gi);
	//replacing and removing HTML body tag
	fiddleContent = fiddleContent.toString().replace("<body>", config.Fusioncharts);
	fiddleContent = fiddleContent.toString().replace("</body>", "");
	//combinig fiddle contents and Try-It-Editor content togather in a single file.
	var newText = config.template.replace("<textarea id=\"tryit\"></textarea>", "<textarea id=\"tryit\">" +  fiddleContent +"</textarea>");
		//newText = newText.replace("##jsfiddle##", "http://jsfiddle.net/"+config.files[i]);
	//to write final output in a single file.
	fs.writeFileSync('tryItEditor/' + config.files[i] + ".html", newText, 'utf8');	
}	

console.log("all files saved in tryItEditor.");
console.log("finish !!");

