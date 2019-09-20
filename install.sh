docker build -t xfs .
docker run \
--net xfs \
--name xfs \
-v $(pwd)/wwwroot/:/var/www/xfs/wwwroot \
-d xfs