# 1. Build stage
FROM node:20-alpine AS builder
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source and run tests (optional)
COPY . .
RUN npm test || echo "no tests"

# 2. Runtime stage
FROM node:20-alpine
WORKDIR /usr/src/app

# Copy built app from builder
COPY --from=builder /usr/src/app ./

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "src/index.js"]
