const prompt = require('prompt');

const properties = [
    {
        name: 'username',
    },
    {
        name: 'password',
    }
];

prompt.start();

prompt.get(properties, function (err, result) {
    if (err) { return "ERROR"; }
    console.log('Command-line input received:');
    console.log('  Username: ' + result.username);
    console.log('  Password: ' + result.password);
});