FROM node:10 as builder

WORKDIR /build

COPY --chown=node . /build

RUN npm install
RUN npm run build

FROM node:10

WORKDIR /var/www

COPY --from=builder /build /var/www

CMD ["npm", "start"]
