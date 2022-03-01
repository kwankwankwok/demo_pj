# Demo_CMS
This is a simple demo CMS built with MERN skills set.
Frontend: ReactJS
Backend: NodeJS, ExpressJS
Database: MongoDB

## Installation
```bash
npm install
cd client
npm install
```

## Development 
Run server:
```bash
node server/index.js
```
or
```bash
nodemon server/index.js
```

Run client:
```bash
cd client
npm run start
```
## Deploy to linux
Get files
```bash
git clone <this project>
```

Run server with pm2:
```bash
sudo pm2 start server/index.js
```

Deploy client
```bash
cd client
sudo npm run build
sudo cp -r build/* /var/www/demo_pj
```

### Nginx
```bash
sudo service nginx start/stop/restart
```
