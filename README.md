### Schumannlive twitter bot

I made this little buddy because at the time there was no other twitter bot posting live schumanns. Keep in mind I am still learning :)

### How to make it work:

1. Provide your twitter API keys in config.js 

2. Run save.js to constantly overwrite graphs in /media/ folder (default is 10 minutes(for example use 'forever' npm package to run it in the background))

3. Run tweet.js in time interval of your choice to post your tweet with fresh graphs

npm dependencies: image-downloader, twit, fs



