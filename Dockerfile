<<<<<<< Updated upstream
# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production && \
    npm cache clean --force

# Copy source code
COPY . .

# Build the project
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy built application from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Start the application
CMD ["npm", "run", "preview"]
=======
# GCC support can be specified at major, minor, or micro version
# (e.g. 8, 8.2 or 8.2.0).
# See https://hub.docker.com/r/library/gcc/ for all supported GCC
# tags from Docker Hub.
# See https://docs.docker.com/samples/library/gcc/ for more on how to use this image
FROM gcc:13

# These commands copy your files into the specified directory in the image
# and set that as the working location
WORKDIR /usr/src/myapp

# Copy only the source file(s) needed for compilation to improve build caching
COPY main.cpp .

# This command compiles your app using GCC, adjust for your source code
RUN g++ -o myapp main.cpp

# Copy the rest of the project files (if needed at runtime)
COPY . .
# This command runs your application, comment out this line to compile only
CMD ["./myapp"]

LABEL Name=jscoweb Version=0.0.1
>>>>>>> Stashed changes
