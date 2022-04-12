#!/bin/bash

docker-compose run --rm server yarn install
docker-compose run --rm client yarn install