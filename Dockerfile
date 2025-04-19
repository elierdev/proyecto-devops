FROM node:18

WORKDIR /app

COPY app/backend/package*.json ./backend/

WORKDIR /app/backend
RUN npm install

WORKDIR /app
COPY . .

EXPOSE 3000

CMD ["node", "app/backend/server.js"]
