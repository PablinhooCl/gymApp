# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=20.11.1
FROM node:${NODE_VERSION}-slim as base

LABEL fly_launch_runtime="Node.js"

# Set the working directory to /app
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"

# Throw-away build stage to reduce size of final image
FROM base as build

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

# Copy package.json and package-lock.json
COPY --link package.json package-lock.json ./

# Install node modules in build stage
RUN npm ci

# Copy application code
COPY --link . .

# Final stage for app image
FROM base

# Set the working directory in the final stage as well
WORKDIR /app

# Copy the node_modules and the rest of the application
COPY --from=build /app .

# Expose the port
EXPOSE 3000

# Start the server by default
CMD [ "npm", "run", "start" ]