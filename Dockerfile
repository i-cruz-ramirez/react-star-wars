FROM node:8

# Create app directory
RUN mkdir -p /home/src/app
WORKDIR /home/src/app

# Install app dependencies
COPY package.json /home/src/app/

# Bundle app source
COPY . /home/src/app/

EXPOSE 8080
CMD [ "npm", "run", "serve" ]