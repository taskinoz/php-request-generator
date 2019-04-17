const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config.json','utf8'));
var file = '<?php\n\n';

if ((config.get).length>0) {
  file+='\t//Get requests\n\tif (';
  for (let i = 0; i < (config.get).length; i++) {
    file+=`isset($_GET['${config.get[i]}'])`;
    if (i<(config.get).length-1) {
      file+=" && ";
    }
  }
  file+="){\n";
  for (let i = 0; i < (config.get).length; i++) {
    file+=`\t\t$api${(config.get[i]).charAt(0).toUpperCase()+(config.get[i]).slice(1)} = isset($_GET['${config.get[i]}']);\n`;
  }
  file+="\t}\n\n"
}
if ((config.post).length>0) {
  file+='\t//Post requests\n\tif (';
  for (let i = 0; i < (config.post).length; i++) {
    file+=`isset($_POST['${config.post[i]}'])`;
    if (i<(config.post).length-1) {
      file+=" && ";
    }
  }
  file+="){\n";
  for (let i = 0; i < (config.post).length; i++) {
    file+=`\t\t$api${(config.post[i]).charAt(0).toUpperCase()+(config.post[i]).slice(1)} = isset($_GET['${config.post[i]}']);\n`;
  }
  file+="\t}\n\n"
}
fs.writeFileSync(`${config.name}.php`,file);
/*
if (isset($_GET['temp'])){
  $switch = $_GET['temp'];
}
else{
  $switch = rand(0,5);
}
*/
