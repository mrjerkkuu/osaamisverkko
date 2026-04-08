FROM node:18

# Asetetaan työskentelykansio
WORKDIR /usr/src/app

# Kopioidaan pakettitiedostot ja asennetaan riippuvuudet
COPY package*.json ./
RUN npm install

# Kopioidaan loput koodit
COPY . .

# Sovellus pyörii portissa 3002
EXPOSE 3002

CMD ["node", "server.js"]