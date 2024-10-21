# Use the official Node.js image for the build stage
FROM node:20 AS builder

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .
# COPY ./app/certs .

# Use a second stage for the production image
FROM node:20 AS dev

# Set the working directory
WORKDIR /usr/src/app

# Copy only the necessary files from the builder stage
COPY --from=builder /usr/src/app .

# Set environment variables for production
ENV NODE_ENV=dev

# Expose the application port
EXPOSE 5173

# Use a non-root user to run the application
RUN chown -R node:node /usr/src/app
USER node

# Command to run the application
CMD ["npm", "run", "dev"]