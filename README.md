# spawner
spawner game

## npm global dependencies
```
sudo npm install -g parcel-bundler
sudo npm install -g firebase-tools
```

## build
```sh
npm run build
```

## deploy
```
firebase login # only once!
npm run deploy
```
whatever is in the dist folder, at the moment you run this command, is going to be published. make sure you build before deploying.

## url
some seconds after deployment, the changes should be visible at http://goodengineer.github.io/spawner
