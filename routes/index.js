var express = require('express');
var router = express.Router();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var twit = require('twit');
var config = require('./config.js'); //nuestro token, esta priv
var Twitter = new twit(config);

const multer = require('multer')
const jpeg = require('jpeg-js')

const tf = require('@tensorflow/tfjs-node')
const nsfw = require('nsfwjs')

var upload = multer()

const convert = async (img) => {
  // Decoded image in UInt8 Byte array
  const image = await jpeg.decode(img, true)

  const numChannels = 3
  const numPixels = image.width * image.height
  const values = new Int32Array(numPixels * numChannels)

  for (let i = 0; i < numPixels; i++)
    for (let c = 0; c < numChannels; ++c)
      values[i * numChannels + c] = image.data[i * 4 + c]

  return tf.tensor3d(values, [image.height, image.width, numChannels], 'int32')
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'twNudity' });
});

router.post('/analizar', upload.single("image"), async (req, res) => {
  if (!req.file)
    res.status(400).send("Missing image multipart/form-data")
  else {
    const image = await convert(req.file.buffer)
    const predictions = await req.app.get('_model').classify(image)
    res.json(predictions)
  }
})

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

router.post('/', function(req, res, next) {
  var params = {
    screen_name: req.body.usuario,
  }
  Twitter.get('users/show', params ,  function (err, data, response) {
    data.profile_banner_url = data.profile_banner_url+'/1500x500';
     data.profile_image_url_https = data.profile_image_url_https.replace("_normal", "")
     data.created_at = data.created_at.substr(data.created_at.length - 4)
     res.render('result', { data: data });
  })

});

module.exports = router;
