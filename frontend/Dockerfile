FROM node:latest

WORKDIR /frontend

COPY . .

RUN npm i -y

EXPOSE 3000

RUN npx next build 

CMD ["npm", "run", "start"]
