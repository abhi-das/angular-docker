# MyApp

Run angular app on docker container using nginx server

# Run dockerize container (nginx custom config enabled)
```
docker-compose build --no-cache
docker-compose up
```

# Stop container and remove image
```
docker-compose down
```

# To Just build docker image (Either use above option or below; One at a time only)
```
docker build -t some-app .
docker run -rm -it -p 0000:00 some-app
```

# Stop container and remove image (for above option only)
```
docker container stop <container-id>
docker image rm -f <image-id>
```