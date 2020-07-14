FROM openjdk:14

ENV ENVIRONMENT=prod

MAINTAINER Jan Riefling <mr.elchos@gmail.com>

ADD consilboard-backend/target/consilboard.jar app.jar

CMD ["sh", "-c", "java -Dserver.port=$PORT -Dspring.data.mongodb.uri=$MONGODB_URI -Dauth.jwt.secret=$JWT_SECRET -jar /app.jar"]