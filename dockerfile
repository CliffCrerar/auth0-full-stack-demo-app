# "Build from node:12-slim image"
# Container pre installed with grunt angular cli and vuepress
FROM cliffenator/node-vuepress-angular:latest
# Environment variables
# Set working directory
WORKDIR /usr/src/si-demo
# Copy files
COPY . ./
# Run build
RUN npm install
RUN npm run build
# Expose port
EXPOSE 3000
EXPOSE 5984
EXPOSE 80
# Start application
CMD [ "npm", "start" ]