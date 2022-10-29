FROM maven:3.8-openjdk-11 as builder
WORKDIR /workspace
COPY src src
COPY pom.xml .
RUN mvn clean package -Dmaven.test.skip=true

FROM openjdk:11-jre-slim-buster
WORKDIR /app
COPY --from=builder /workspace/target/*.jar app.jar
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]

RUN groupadd -r appuser && useradd --no-log-init -r -g appuser appuser
USER appuser