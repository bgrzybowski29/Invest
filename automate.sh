git add .
git commit -m "$1"
git push origin master
read -p "Press [Enter] key to start build and deploy..."
npm run build
cd build
mv index.html 200.html
npx surge --domain https://investbg.surge.sh
cd ..