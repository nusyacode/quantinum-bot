const Discord = require('discordv8');
var client = new Discord.Client();

client.loginWithToken('NjQ3ODAyMjkxOTk4NDI1MDk4.Xd6-1A.OBaBtSuwEn11lkoF0r2zAUNgbQo', output);

function output(error, token) {
        if (error) {
                console.log(`There was an error logging in: ${error}`);
                return;
        } else
                console.log(`Logged in. Token: ${token}`);
}