FROM node:14

RUN curl -fsSL https://get.docker.com -o get-docker.sh
RUN sh get-docker.sh
RUN rm get-docker.sh

EXPOSE 3000
CMD [ "echo", "\"This image is intended only for use inside of Visual Studio Code.\"" ]
