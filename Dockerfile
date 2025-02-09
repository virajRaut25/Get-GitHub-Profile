# Use an official Node.js image as the base
FROM node:22.13.1 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) first for better caching
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Next.js application
RUN npm run build

# Install only production dependencies
RUN npm ci --only=production

# Use a minimal runtime image for the final container
FROM node:22.13.1-alpine AS runner

WORKDIR /app

# Copy files from the builder stage
COPY --from=builder /app ./

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "start"]
