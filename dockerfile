# "Build from node:12-slim image"
# Container pre installed with grunt angular cli and vuepress
FROM cliffenator/node-vuepres-grunt-angular
# Environment variables
# Set working directory
WORKDIR /usr/src/app
# Copy files
COPY . ./
# Run build
RUN npm install
RUN npm run build
# Expose port
EXPOSE 3000
EXPOSE 3001
EXPOSE 5984
EXPOSE 80
# Start application
CMD [ "npm", "start" ]