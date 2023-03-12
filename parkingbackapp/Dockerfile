# syntax=docker/dockerfile:1
   
FROM node:18-alpine
WORKDIR /parkingbackapp/src/app
COPY package*.json ./
COPY . .
RUN npm install
CMD ["node", "dist/main"]
EXPOSE 8080