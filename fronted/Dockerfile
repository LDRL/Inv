FROM node:18-alpine

WORKDIR /fronted

COPY package.json /fronted

RUN npm install

COPY . /fronted

EXPOSE 5173

CMD ["npm","run", "dev"]