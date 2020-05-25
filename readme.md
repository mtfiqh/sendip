# SENDIP
is a bot to check your public ip every minutes, when your public ip changed, it'll send your new public ip to your email.

## How To Use
- You need to install nodejs first
- install all needed dependencies
```
$ npm install
```
- copy env-example to .env
```
$ cp env-example .env
```
- config the env file using your email

>env-example file:
>
> SENDER_EMAIL=sender@gmail.com
SENDER_PASSWORD=password123
TO_EMAIL=to@email.com

it use nodemailer to send email, if you have any problem when sending the email, please refer to their [docs.](https://nodemailer.com/)
