var express = require('express');
var router = express.Router();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var request = require('request').defaults({ encoding: null });


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

router.post('/', function(req, res, next) {
  var params = {
    screen_name: req.body.usuario,
  }
  Twitter.get('users/show', params ,  function (err, data, response) {
    
    request.get(data.profile_image_url_https.replace("_normal", ""), async (error, response, body) => {
        if (!error && response.statusCode == 200) {
            new Buffer(body)
            const image = await convert(new Buffer(body))
            const predictions = await req.app.get('_model').classify(image)

            if (predictions[0].probability>0.80) {
               analisis = "Si ("+predictions[0].probability.toFixed(5)+")";
            } else if (predictions[0].probability>0.40) {
              analisis = "Probablemente ("+predictions[0].probability.toFixed(5)+")";
            } else {
              analisis = "No ("+predictions[0].probability.toFixed(5)+")";
            }

            console.log("------------PORNO:"+predictions[0].probability);
            console.log("------------SEXY:"+predictions[1].probability);

            data.profile_banner_url = data.profile_banner_url+'/1500x500';
            data.profile_image_url_https = data.profile_image_url_https.replace("_normal", "")
            data.created_at = data.created_at.substr(data.created_at.length - 4)
            res.render('result', { data: data, resultado: analisis });
        }
    });
  })

});

module.exports = router;
