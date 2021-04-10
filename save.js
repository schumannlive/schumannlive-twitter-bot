///image save

const download = require('image-downloader')

setInterval(saveimg1, 1000*60*10)

function saveimg1(){

const options = {
  url: 'http://sosrff.tsu.ru/new/shm.jpg',
  dest: './media/'                // will be saved to /path/to/dest/image.jpg
}

download.image(options)
  .then(({ filename }) => {
    console.log('Saved to', filename)  // saved to /path/to/dest/image.jpg
  })
  .catch((err) => console.error(err))
}

setInterval(saveimg2, 1000*60*10)

function saveimg2(){

const options = {
  url: 'http://sosrff.tsu.ru/new/sra.jpg',
  dest: './media/'                // will be saved to /path/to/dest/image.jpg
}

download.image(options)
  .then(({ filename }) => {
    console.log('Saved to', filename)  // saved to /path/to/dest/image.jpg
  })
  .catch((err) => console.error(err))
}

setInterval(saveimg3, 1000*60*10)

function saveimg3(){

const options = {
  url: 'http://sosrff.tsu.ru/new/srf.jpg',
  dest: './media/'                // will be saved to /path/to/dest/image.jpg
}

download.image(options)
  .then(({ filename }) => {
    console.log('Saved to', filename)  // saved to /path/to/dest/image.jpg
  })
  .catch((err) => console.error(err))
}

setInterval(saveimg4, 1000*60*10)

function saveimg4(){

const options = {
  url: 'http://sosrff.tsu.ru/new/srq.jpg',
  dest: './media/'                // will be saved to /path/to/dest/image.jpg
}

download.image(options)
  .then(({ filename }) => {
    console.log('Saved to', filename)  // saved to /path/to/dest/image.jpg
  })
  .catch((err) => console.error(err))
}