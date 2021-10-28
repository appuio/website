FROM klakegg/hugo:0.88.0-ext-alpine AS builder

RUN apk add go
WORKDIR /src
COPY . /src
RUN hugo --minify

FROM nginxinc/nginx-unprivileged:alpine
# Overwrite the existing default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder  /src/public /usr/share/nginx/html
