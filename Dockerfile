# Use a imagem Node.js
FROM node:18-alpine

# Configura o diretório de trabalho
WORKDIR /app

# Copia os arquivos do projeto
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o resto dos arquivos
COPY . .

# Gera o build
RUN npm run build

# Expõe a porta
EXPOSE 4173

# Comando para iniciar o servidor
CMD ["npm", "run", "preview", "--", "--host"]
