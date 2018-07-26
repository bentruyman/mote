FROM node:10 as builder

WORKDIR /build

COPY --chown=node . /build

RUN npm install
RUN npm run build

FROM abiosoft/caddy

ENV ACME_AGREE true
WORKDIR /var/www

COPY Caddyfile /etc/Caddyfile
COPY --from=builder /build/dist /srv
