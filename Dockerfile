FROM node:8.9-alpine

# Override the base log level (info).
ENV NPM_CONFIG_LOGLEVEL warn

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Bundle app source
ADD package.json /app
ADD . /app

EXPOSE 8080

CMD [ "npm", "run", "serve" ]