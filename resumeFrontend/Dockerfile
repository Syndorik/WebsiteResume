# pull official base image
FROM node:latest

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
# install app dependencies
ARG PROJECT_PATH

RUN echo $PROJECT_PATH
COPY $PROJECT_PATH/package.json $PROJECT_PATH/package-lock.json ./

RUN CI=true 


RUN npm install
RUN npm rebuild node-sass
ENV PATH /app/node_modules/.bin:$PATH


# add app
COPY . ./

# start app
CMD ["npm","start"]
# CMD ["sleep","3600"]