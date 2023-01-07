var myvar = require('fs')
var string = process.argv[2];
var files = [];
for (let i = 0; i < process.argv.length - 3; i++) {
     files[i] = process.argv[i + 3];
}

for (let i = 0; i < files.length; i++) {
     myvar.readFile('./' + files[i], function (err,data) {
          if (err) throw err;
          if (data.includes(string)) {
               console.log(files[i]);
          }
     });

}