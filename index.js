module.exports = function phpReq(input) {

  function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return str;
    }
    return JSON.parse(str);
}

  const config = isJson(input);

  // Check for filename. If it exist write to a file
  if (config.name !== undefined) {
    var fs = require('fs');
    var file = '<?php\n\n';
  }
  else {
    var file="";
  }

  if (config.get !== undefined && (config.get).length>0) {
    file+='//Get requests\n\tif (';
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
    file+="\t}\n\n";
  }
  if (config.post !== undefined && (config.post).length>0) {
    file+='//Post requests\n\tif (';
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
    file+="\t}\n\n";
  }

  if (file.includes("<?php")) {
    fs.writeFileSync(`${config.name}.php`, file);
    return `File ${config.name}.php created`;
  }
  else {
    return file;
  }
}
