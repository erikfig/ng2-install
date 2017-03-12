let clone = require('git-clone');
let rmdir = require('rimraf');

module.exports = function () {

    let destination = process.argv[2];

    if (destination == undefined) {
        destination = './ng2';
    }

    clone('git@github.com:erikfig/angular2-webpack-skeleton.git', destination, [], () => {
        rmdir(destination + '/.git', [], () => {
            console.log('# Processo terminado');
            console.log('Para começar:')
	    console.log(` - Acesse o diretório ${destination}: cd ${destination}`)
	    console.log(' - Instale as dependências do projeto: npm install')
	    console.log(' - Inicie o  servidor de desenvolvimento: npm start')
	    console.log('')
	    console.log('```')
	    console.log(`cd ${destination}`)
	    console.log('npm install')
	    console.log('npm start')
	    console.log('```')
        });
    })
}
