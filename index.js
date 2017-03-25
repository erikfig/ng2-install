let clone = require('git-clone');
let rmdir = require('rimraf');

module.exports = function () {

    let stdin = process.openStdin();
    let version = 4;
    let url = 'git@github.com:erikfig/angular2-webpack-skeleton.git';
    let options = {};

    let destination = process.argv[2];

    console.log('Qual versão do Angular você quer? (2 ou 4):');

    stdin.addListener("data", function(d) {
        version = d.toString().trim();
        if (version == 4 || version == 2) {
            console.log('Baixando esqueleto do Angular ' + version);
        } else if (version == 3) {
            console.log('Aparentemente a equipe do Angular sabe contar tão bem quanto a do PHP, isso não é minha culpa, use 2 ou 4!');
            process.exit(1);
        } else {
            console.log('Por favor, informe um valor válido (2 ou 4)!');
            process.exit(1);
        }

        console.log('');

        if (destination == undefined) {
            destination = './ng' + version;
        }

        if (version == 2) {
            options.checkout = 'v2.0.0';
        }

        clone(url, destination, options, () => {
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
                console.log('');
                console.log('O esqueleto do Angular ' + version + ' com WebPack foi baixado em ' + destination);
                process.exit();
            });
        });
    });
}
