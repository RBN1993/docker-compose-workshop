FROM maven:3.8-openjdk-11 as builder
COPY src /usr/src/app/src
COPY pom.xml /usr/src/app
RUN mvn -f /usr/src/app/pom.xml clean package -Dmaven.test.skip=true

FROM openjdk:11-jre-slim-buster
WORKDIR /app
COPY --from=builder /usr/src/app/target/*.jar /app/kairosds-app.jar
EXPOSE 8080
CMD ["java", "-jar", "kairosds-app.jar"]

RUN groupadd -r kairosds && useradd --no-log-init -r -g kairosds kairosds
USER kairosds