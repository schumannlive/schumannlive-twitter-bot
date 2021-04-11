### 🌍 Schumannlive Twitter bot 🌍

I made this little buddy because at the time there was no other twitter bot posting live schumanns.

### How to make it work:

1. Provide your Twitter API keys in config.js 

2. Run save.js to constantly overwrite graphs from Tomsk (http://sosrff.tsu.ru/) and Cumiana (http://www.vlf.it/cumiana/livedata.html) in /media/ folder (default is every 10 minutes)

3. Run tweet.js to tweet Tomsk, and tweetItaly.js to tweet Cumiana in time interval of your choice to post your tweet with fresh graphs

npm dependencies: image-downloader, twit, fs



