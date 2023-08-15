ARG NODE_VERSION=20
ARG ALWATR_NGINX_VERSION=1.7.0-1.24-alpine

FROM docker.io/library/node:${NODE_VERSION}-alpine as builder

WORKDIR /app

ENV NODE_ENV production
ENV MY_ENVIRONMENT production

RUN apk add --no-cache git

COPY package.json *.lock ./
RUN if [ -f *.lock ]; then \
      yarn install --frozen-lockfile --non-interactive --production false; \
    else \
      yarn install --non-interactive --production false; \
    fi;

COPY . .

RUN yarn build

# ---

FROM ghcr.io/alimd/nginx-pwa:${ALWATR_NGINX_VERSION} as nginx
# Copy builded files from last stage
ARG PACKAGE_SOURCE
COPY --from=builder /app/dist/ ./
RUN pwd; ls -lAhF;
