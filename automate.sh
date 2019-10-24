git add .
echo "ran add"
git commit -m "$1"
echo "ran commit"
git push origin master
echo "ran push"
read -p "Press [Enter] key to start build and deploy..."
npm run build
cd build
mv index.html 200.html
npx surge --domain https://investbg.surge.sh
cd ..