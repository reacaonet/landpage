# Etapa 1: Build da aplicação
FROM node:18-alpine AS build

# Configura o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de configuração do projeto para o container
COPY package.json package-lock.json* ./

# Instala as dependências
RUN npm install

# Copia o restante do código-fonte para o container
COPY . .

# Executa o build da aplicação
RUN npm run build

# Etapa 2: Servir os arquivos com o Vite
FROM node:18-alpine

# Configura o diretório de trabalho
WORKDIR /app

# Copia os arquivos construídos da etapa anterior
COPY --from=build /app /app

# Expõe a porta padrão do Vite Preview (4173)
EXPOSE 4173

# Comando padrão para rodar o servidor Vite
CMD ["npm", "run", "preview"]
