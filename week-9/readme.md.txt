ssh -i <name_of_cer_file> ubuntu@<public_ipv4_dns>
ssh -i todo-app.pem ubuntu@ec2-16-171-43-15.eu-north-1.compute.amazonaws.com

chmod 600 ./todo-app.cer

install node on ubuntu (nvm)
1. curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
2. 
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
3. nvm install node
4. vi index.js, press "dd" for deleting the mongodb line
5. To keep running the node server forever => npm i -g pm2 => pm2 start index.js
6. To see logs => pm2 list, pm2 logs 0


How to update code in remote server ?
1. ssh into server
2. pull latest code (git pull origin main)
3. stop existing process (pm2 kill)
4. re-build the code (npm install)
5. re run the code (pm2)

Ci/CD
1. vi deploy.sh
#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v20.5.0/bin

cd week-9
 git pull origin master
 cd server
 pm2 kill
 pm2 start index.js
2. rm deploy.sh - to delete the file
3. source ./deploy - Runs all commands in the file

Automating deployment:
ssh -t -i "cert-file.cer" ubuntu@ec2-url  "sudo bash ~/deploy.sh"

Github Actions setup for continuous integration:
1. Create new repo
2. git remote add origin2 <github_https_ssh_link>
3. git push origin2 <repo_name>

nginx setup
1. sudo apt-get install nginx - Install nginx
2. sudo vi /etc/nginx/nginx.conf - open nginx.conf file
3. sudo rm /etc/nginx/nginx.conf - Delete the existing nginx.conf file
4. sudo nginx -s reload

make http port secure with certbot(free):
1. sudo snap install --classic certbot
2. sudo certbot --nginx