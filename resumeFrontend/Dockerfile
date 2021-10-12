# pull official base image
FROM node:latest

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
# install app dependencies
ARG PROJECT_PATH

RUN echo $PROJECT_PATH
RUN chown -Rh node:node /app
USER node
RUN ls -l .
COPY $PROJECT_PATH/package.json  ./

RUN CI=true 

RUN mkdir ./node_modules
RUN chown node:node ./node_modules

RUN npm install
# RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache
RUN npm rebuild node-sass
ENV PATH /app/node_modules/.bin:$PATH


# add app
COPY $PROJECT_PATH/. ./


RUN ls -l .
# start app
CMD ["npm","start"]
# CMD ["sleep","3600"]