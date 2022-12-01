FROM node:alpine
WORKDIR ./src
COPY src/* package.json yarn.lock ./
RUN yarn
EXPOSE 5000
cmd ["yarn","start"]
