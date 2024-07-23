# Default target
.DEFAULT_GOAL := build

# Help target
help:
    @echo "Available targets:"
    @echo "  build  Build Docker images for node and mysql services"
    @echo "  up     Start Docker containers (node and mysql)"
    @echo "  down   Stop and remove Docker containers"
    @echo "  clean  Remove build artifacts"
    @echo "  help   Display this help message"

# Build target
build:
    # Build both node and mysql services using docker-compose
    docker-compose build

# Up target (unchanged)
up:
    # Start the 'node' and 'mysql' containers
    docker-compose up -d

# Down target (unchanged)
down:
    # Stop and remove the 'node' and 'mysql' containers
    docker-compose down

# Clean target (unchanged)
clean:
    # Remove build artifacts
    docker-compose build --rm
