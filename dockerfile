# "Build from node:12-slim image"
FROM cliffenator/node-vuepress-angular:latest
# Environment variables

# Set working directory
WORKDIR /usr/src
# Copy package file
# COPY package*.json ./
# Install node modules
# Copy files
COPY . ./
# Run build
WORKDIR /usr/src/app
RUN npm install
RUN npm run build
COPY ./dist/products-app ../api/src/app

WORKDIR /usr/src
RUN npm install
RUN npm run docs:build
COPY ./dist/.vuepress/dist ./api/src/app

WORKDIR /usr/src
# Expose port
EXPOSE 3000
EXPOSE 5984
EXPOSE 80
# Start application
CMD [ "npm", "start" ]