// to run this code use node integrate.js
var fs = require('fs');
var config = {};

config.Fusioncharts  = "\n<script type=\"text/javascript\" src=\"http://static.fusioncharts.com/code/latest/fusioncharts.js\"></script>\n";
config.Fusioncharts += "<script type=\"text/javascript\" src=\"http://static.fusioncharts.com/code/latest/fusioncharts.charts.js\"></script>\n";
//config.Fusioncharts += "<script type=\"text/javascript\" src=\"http://static.fusioncharts.com/code/latest/themes/fusioncharts.theme.fint.js\"></script>\n";


//getting the editor template html, css and scripts.
config.css = fs.readFileSync('css/editor-style.css', 'utf8');
config.template = fs.readFileSync('editor.html', 'utf8');
config.script = fs.readFileSync('scripts/editor-interactivity.js', 'utf8');
config.jquery = fs.readFileSync('scripts/jquery.js', 'utf8');

var generateScriptTag = (function(args){
return "<script type=\"text/javascript\" src="+ args.replace("\"", "/\"") +"></script>\n";
});

//getting all the folder names from 'fiddles' directory
config.files = fs.readdirSync('fiddles');

//try to create a directory if not exist and name it as 'final-fiddle'.
//inside the 'final-fiddle' creating a another directory name as 'css'.
try { 
	//creating root directory.
	fs.mkdirSync('final-fiddle');
	//creating directory for css files .
	fs.mkdirSync('final-fiddle/css');
	//placing the css files.
	fs.writeFileSync('final-fiddle/css/editor-style.css', config.css, 'utf8' );
	//creating the directory for script files.
	fs.mkdirSync('final-fiddle/scripts');
	//placing the script files. 
	fs.writeFileSync('final-fiddle/scripts/editor-interactivity.js', config.script, 'utf8' );
	fs.writeFileSync('final-fiddle/scripts/jquery.js', config.jquery, 'utf8' );
 }
catch (e) { console.log("folder already exist.");}



//combining the two files content in a single file.
for(var i=0; i<config.files.length; i++ ) //config.files.length
{
	var fiddleContent = fs.readFileSync('fiddles/' + config.files[i] + '/' + config.files[i] + '.html'); 
	fiddleContent = fiddleContent.toString().match(/<body[^>]*>[\s\S]*<\/body>/gi);
	fiddleContent = fiddleContent.toString().replace("<body>", config.Fusioncharts);
	fiddleContent = fiddleContent.toString().replace("</body>", "");
	
	var newText = config.template.replace("<textarea id=\"tryit\"></textarea>", "<textarea id=\"tryit\">" +  fiddleContent +"</textarea>");
	//to write final output in a single file.
	fs.writeFileSync('final-fiddle/' + config.files[i] + ".html", newText, 'utf8');	
}	

console.log("all files saved in final-fiddle.");
console.log("finish !!");

