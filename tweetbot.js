var fs = require('fs');
var config = require('./config')
    console.log(config)
    console.log('logged into twitter');
    

var Twit = require('twit');
var T = new Twit(config);

require('./save.js')

var schedule = require('node-schedule');

var russiarules = new schedule.RecurrenceRule();
russiarules.dayOfWeek = [0,1,2,3,4,5,6];
russiarules.hour = [0,3,6,9,12,15,19,21];
russiarules.minute = [0];

schedule.scheduleJob(russiarules, function(){
    tweetrussia()
});

var italyrules = new schedule.RecurrenceRule();
italyrules.dayOfWeek = [0,1,2,3,4,5,6];
italyrules.hour = [1,4,7,10,13,16,19,22];
italyrules.minute = [0];

schedule.scheduleJob(italyrules, function(){
    tweetitaly()
});

var italy2rules = new schedule.RecurrenceRule();
italy2rules.dayOfWeek = [0,1,2,3,4,5,6];
italy2rules.hour = [2,5,8,11,14,17,20,23];
italy2rules.minute = [0];

schedule.scheduleJob(italy2rules, function(){
    tweetitaly2()
});

function tweetrussia(){

amtOfEarths = 3; 

earthNum = Math.floor(Math.random() * amtOfEarths) + 1;  
if (earthNum === 1){
  earth = '🌎'
}else if (earthNum === 2){
  earth = '🌍'
}else if (earthNum === 3){
  earth = '🌏'
}

var b64content1 = fs.readFileSync('./media/shm.jpg', { encoding: 'base64' })
var b64content2 = fs.readFileSync('./media/sra.jpg', { encoding: 'base64' })
var b64content3 = fs.readFileSync('./media/srf.jpg', { encoding: 'base64' })
var b64content4 = fs.readFileSync('./media/srq.jpg', { encoding: 'base64' })

var moment = require('moment')
var time1 = moment.utc().format('MMMM Do YYYY, h:mmA');
var time2 = ' UTC'
var time = time1 + time2;

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
        var params = { status: earth + '⚡ #schumannresonance Tomsk, Russia\n' + time +'\nhttp://sosrff.tsu.ru/?page_id=7', media_ids: [mediaIdStr1, mediaIdStr2, mediaIdStr3, mediaIdStr4] }
   
        T.post('statuses/update', params, function (err, data, response) {
          console.log(time + '\ntweeted tomsk')
        })
      }
    })

})})})})
}

function tweetitaly(){

amtOfEarths = 3; 

earthNum = Math.floor(Math.random() * amtOfEarths) + 1;  
if (earthNum === 1){
  earth = '🌎'
}else if (earthNum === 2){
  earth = '🌍'
}else if (earthNum === 3){
  earth = '🌏'
}

var b64content1 = fs.readFileSync('./media/last_E-VLF.jpg', { encoding: 'base64' })
var b64content2 = fs.readFileSync('./media/last-geomar.jpg', { encoding: 'base64' })
var b64content3 = fs.readFileSync('./media/last-marconi-multistrip-slow.jpg', { encoding: 'base64' })

var moment = require('moment')
var time1 = moment.utc().format('MMMM Do YYYY, h:mmA');
var time2 = ' UTC'
var time = time1 + time2;

T.post('media/upload', {media_data: b64content1}, function (err, data, response) {
    var mediaIdStr1 = data.media_id_string    
    var meta_params = {media_id: mediaIdStr1}

T.post('media/upload', {media_data: b64content2}, function (err, data, response) {
    var mediaIdStr2 = data.media_id_string        
    var meta_params = {media_id: mediaIdStr2}

T.post('media/upload', {media_data: b64content3}, function (err, data, response) {
    var mediaIdStr3 = data.media_id_string            
    var meta_params = {media_id: mediaIdStr3}


   
  T.post('media/metadata/create', meta_params, function (err, data, response) {
      if (!err) {
        var params = { status: earth + '⚡ #schumannresonance Cumiana, Italy\n' + time + '\nhttp://www.vlf.it/cumiana/livedata.html', media_ids: [mediaIdStr1, mediaIdStr2, mediaIdStr3] }
   
        T.post('statuses/update', params, function (err, data, response) {

        console.log(time + '\ntweeted cumiana')
        
        })

      }

    })

})})})
}

function tweetitaly2(){


amtOfEarths = 3;

earthNum = Math.floor(Math.random() * amtOfEarths) + 1;  
if (earthNum === 1){
  earth = '🌎'
}else if (earthNum === 2){
  earth = '🌍'
}else if (earthNum === 3){
  earth = '🌏'
}

var b64content1 = fs.readFileSync('./media/last-ics101-sogliano-pan.jpg', { encoding: 'base64' })
var b64content2 = fs.readFileSync('./media/last-borehole-sogliano.jpg', { encoding: 'base64' })
var b64content3 = fs.readFileSync('./media/last_coil_24h_sogliano.jpg', { encoding: 'base64' })

var moment = require('moment')
var time1 = moment.utc().format('MMMM Do YYYY, h:mmA');
var time2 = ' UTC'
var time = time1 + time2;

T.post('media/upload', {media_data: b64content1}, function (err, data, response) {
    var mediaIdStr1 = data.media_id_string    
    var meta_params = {media_id: mediaIdStr1}

T.post('media/upload', {media_data: b64content2}, function (err, data, response) {
    var mediaIdStr2 = data.media_id_string        
    var meta_params = {media_id: mediaIdStr2}

T.post('media/upload', {media_data: b64content3}, function (err, data, response) {
    var mediaIdStr3 = data.media_id_string            
    var meta_params = {media_id: mediaIdStr3}


   
  T.post('media/metadata/create', meta_params, function (err, data, response) {
      if (!err) {
        var params = { status: earth + '⚡ #schumannresonance Romagna, Italy\n' + time + '\nhttp://www.uevlf.it/uevlf.HTML', media_ids: [mediaIdStr1, mediaIdStr2, mediaIdStr3] }
   
        T.post('statuses/update', params, function (err, data, response) {

        console.log(time + '\ntweeeted romagna')
        
        })

      }

    })

})})})
}
    

