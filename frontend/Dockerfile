# Establecer la imagen base con Node.js
FROM node:18-alpine3.17 AS development

# Establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar los archivos de configuración y dependencias del proyecto
COPY package.json .
COPY yarn.lock .

# Instalar las dependencias
RUN yarn install

# Copiar el código fuente de la aplicación
COPY . .

# Compilar la aplicación para producción
RUN yarn build

# Establecer la imagen base para producción
FROM node:18-alpine3.17 AS production

# Establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar el directorio de salida de la compilación de Vite desde la etapa de desarrollo
COPY --from=development /usr/src/app/dist ./dist

# Instalar dependencias en producción (si es necesario)
# RUN yarn install --production

# Exponer el puerto en el que la aplicación se ejecuta (si es necesario)
EXPOSE 3000

# Definir el entrypoint
ENTRYPOINT ["./entrypoint.sh"]
