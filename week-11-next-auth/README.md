Use next-auth to build google and simple auth
- Google oath create credentials
- Google cloud console - credentials - creare project
- Create Credentials - Create Oauth client id
- After generating the client id and client secret, copy those to the .env.local file to NEXT_GOOGLE_CLIENT_ID and NEXT_GOOGLE_CLIENT_SECRET
- NEXTAUTH_SECRET has to be generated this cmd: openssl rand -base64 32
- All routes like /api/auth/*... will come to [...nextauth].ts
