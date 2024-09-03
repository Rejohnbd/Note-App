# Use the latest LTS version of Node.js
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the Next.js application
# RUN npm run dev

# Expose the port that the Next.js app will run on
EXPOSE 3000

# Start the Next.js development server
CMD ["npm", "start"]