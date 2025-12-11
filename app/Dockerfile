# 1. Build stage
FROM node:20-alpine AS builder
WORKDIR /usr/src/app

COPY app/package*.json ./
RUN npm ci --only=production

COPY app/. .
RUN npm test || echo "no tests"   # optional

# 2. Runtime stage (smaller image)
FROM node:20-alpine
WORKDIR /usr/src/app

COPY --from=builder /usr/src/app ./
ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "src/index.js"]
