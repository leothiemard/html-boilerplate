echo "Creating network..."
docker network create testing-ploom-brandsite-template-network
echo "Network created!"

# start the container
echo "Restarting docker"
docker-compose stop
docker-compose up -d
echo "Docker restarted"
