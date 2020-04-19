//Twitter api controller

//Imports
var twit = require('twit');
var config = require('./config.js'); //nuestro token, esta priv
var Twitter = new twit(config);

//Funciones

//Cojer info del user
var getUserData = function(arroba){
	var params = {
		screen_name: arroba,
	}
	Twitter.get('users/show', params ,  function (err, data, response) {
		console.log('***************************');
 		console.log('Nombre: '+data.name);
 		console.log('Arroba: '+data.screen_name);
 		console.log('ID: '+data.id_str);
 		console.log('Seguidos: '+data.friends_count);
 		console.log('Seguidores: '+data.followers_count);
 		console.log('Twits: '+data.statuses_count);
 		console.log('Favs: '+data.favourites_count);
 		console.log('***************************');

 		return data;

	})
}

//Cojemos fotos (las ultimas 20)
var getUserPics = function(arroba){
	var params = {
		screen_name: arroba,
	}
	//TODO: Mirar como hacer la request
}
