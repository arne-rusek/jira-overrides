FROM alpine

RUN apk add npm && npm install --global web-ext
