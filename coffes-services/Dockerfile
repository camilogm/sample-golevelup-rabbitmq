FROM node:14.16-buster-slim

WORKDIR /app

ENV RABBITMQ_URI=amqp://guest:guest@rabbitmq-sample:5672
ENV PORT=3000

COPY . .
RUN yarn install

EXPOSE 3000
CMD [ "yarn", "start"]