git fetch origin
git reset --hard origin/master
npm install
npm run build
npx prisma migrate deploy
sudo systemctl daemon-reload
sudo systemctl restart snackplease.service
sudo journalctl -f -u snackplease
