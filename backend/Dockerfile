# Establecer la imagen base para desarrollo
FROM node:18-alpine3.17 AS development

# Establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar los archivos de configuración y dependencias del proyecto
COPY package.json .
COPY package-lock.json .

# Instalar todas las dependencias
RUN npm install

# Copiar el código fuente de la aplicación
COPY . .

# Exponer el puerto en el que la aplicación se ejecuta
EXPOSE 3000

# Establecer el entrypoint para el modo de desarrollo
ENTRYPOINT ["npm", "run", "dev"]

# Establecer la imagen base para producción
FROM node:18-alpine3.17 AS production

# Establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar los archivos de configuración y dependencias del proyecto
COPY package.json .
COPY package-lock.json .

# Instalar solo las dependencias de producción
RUN npm ci --only=production

# Copiar el código fuente de la aplicación
COPY . .

# Exponer el puerto en el que la aplicación se ejecuta
EXPOSE 3000

# Establecer el entrypoint para el modo de producción
ENTRYPOINT ["npm", "start"]
