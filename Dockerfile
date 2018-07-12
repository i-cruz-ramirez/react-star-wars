FROM node:8.9-alpine

# Create app directory
RUN mkdir -p /home/src/app
WORKDIR /home/src/app

# SET REGISTRY
RUN npm config set registry https://registry.npmjs.org

# Bundle app source
COPY package.json /home/src/app/
COPY . /home/src/app/

# Run npm cache clean
RUN npm cache clean --force

ENV PORT 8080
EXPOSE 8080

CMD [ "npm", "run", "serve" ]