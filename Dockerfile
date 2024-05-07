# syntax = docker/dockerfile:1

# Base image
ARG NODE_VERSION=20.11.1
FROM node:${NODE_VERSION}-slim as base
LABEL maintainer="contactanos a gymappcl@gmail.com"

# Set working directory
WORKDIR /

# Set production environment
ENV NODE_ENV="production"

# Throw-away build stage
FROM base as build

# Install build dependencies
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

# Install node modules for all workspaces
COPY package.json package-lock.json ./
RUN npm ci

# Copy all workspace code
COPY . .

# Build the frontend
WORKDIR /client
RUN npm run build

# Move build files to the server directory
WORKDIR /
RUN mv /client/build /server_noSQL/public

# Final stage
FROM base

# Copy built application
COPY client/package.json client/package-lock.json ./client/

# Expose ports for frontend and backend
EXPOSE 3000 5000

# Start the servers
CMD ["npm", "run", "start"]