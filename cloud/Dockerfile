ARG NODE_VERSION=20
ARG ALWATR_NGINX_VERSION=1

FROM docker.io/library/node:${NODE_VERSION}-alpine as builder

ARG siteUrl=/
ARG noIndex=0

WORKDIR /app

ENV NODE_ENV production
ENV MY_ENVIRONMENT production

COPY package.json *.lock ./
RUN if [ -f *.lock ]; then \
      yarn install --frozen-lockfile --non-interactive --production false; \
    else \
      yarn install --non-interactive --production false; \
    fi;

COPY . .

RUN siteUrl=$siteUrl noIndex=$noIndex yarn build

# ---

FROM ghcr.io/alimd/nginx-ws:${ALWATR_NGINX_VERSION} as nginx
# Copy builded files from last stage
ARG PACKAGE_SOURCE
COPY --from=builder /app/dist/ ./
RUN pwd; ls -lAhF;
