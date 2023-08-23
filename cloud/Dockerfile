ARG NODE_VERSION=20
ARG ALWATR_NGINX_VERSION=1.9.1-1.25-alpine

FROM docker.io/library/node:${NODE_VERSION}-alpine as builder

ARG siteUrl=/
ARG noIndex=0

WORKDIR /app

ENV NODE_ENV production
ENV MY_ENVIRONMENT production
ENV siteUrl $siteUrl
ENV noIndex $noIndex

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

FROM ghcr.io/alimd/nginx-ws:${ALWATR_NGINX_VERSION} as nginx

# Copy builded files from last stage
COPY --from=builder /app/dist/ ./
RUN pwd; ls -lAhF;
