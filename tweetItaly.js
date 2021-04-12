console.log('starting');

var config = require('./config')
    console.log(config);

var Twit = require('twit');
var T = new Twit(config);

var fs = require('fs');
var date = new Date();

var b64content1 = fs.readFileSync('./media/last_E-VLF.jpg', { encoding: 'base64' })
var b64content2 = fs.readFileSync('./media/last-geomar.jpg', { encoding: 'base64' })
var b64content3 = fs.readFileSync('./media/last-plotted.jpg', { encoding: 'base64' })
var b64content4 = fs.readFileSync('./media/last-marconi-multistrip-slow.jpg', { encoding: 'base64' })

T.post('media/upload', {media_data: b64content1}, function (err, data, response) {
    var mediaIdStr1 = data.media_id_string    
    var meta_params = {media_id: mediaIdStr1}

T.post('media/upload', {media_data: b64content2}, function (err, data, response) {
    var mediaIdStr2 = data.media_id_string        
    var meta_params = {media_id: mediaIdStr2}

T.post('media/upload', {media_data: b64content3}, function (err, data, response) {
    var mediaIdStr3 = data.media_id_string            
    var meta_params = {media_id: mediaIdStr3}

T.post('media/upload', {media_data: b64content4}, function (err, data, response) {
    var mediaIdStr4 = data.media_id_string                
    var meta_params = {media_id: mediaIdStr4}

   
    T.post('media/metadata/create', meta_params, function (err, data, response) {
      if (!err) {
        var params = { status: `#schumannresonance Italy, ` + (date.toUTCString()), media_ids: [mediaIdStr1, mediaIdStr2, mediaIdStr3, mediaIdStr4] }
   
        T.post('statuses/update', params, function (err, data, response) {
          console.log(data)
        })
      }
    })

  })})})})
