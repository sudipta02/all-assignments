### Monorepo
The monorepo contains
 - An express backend
 - A React frontend
 - A Next frontend

Steps to deploy the monorepo:
Create ec2 server
Download cert file from ec2 dashboard
ssh into the server
Install node, npm, yarn
Install nginx
Install pm2
Install certbot
Copy over nginx file
Install certificates
Clone the repo
yarn install
Run 3 pm2 jobs
