# RishiSachdevIndigo

# Airline Notification System

This project is an Airline Notification System built using Java, RabbitMQ, MySQL, HTML, CSS, and React JS. The system allows airline admins to update flight statuses and automatically sends notifications whenever a flight status is changed.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Database Setup](#database-setup)
- [RabbitMQ Setup](#rabbitmq-setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Testing the API](#testing-the-api)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites
- Java 8 or higher
- SpringBoot
- Maven
- MySQL
- HTML
- CSS
- React JS
- RabbitMQ

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/airline-notification-system.git
   cd airline-notification-system
   ```

2. **Build the project using Maven:**
   ```sh
   mvn clean install
   ```
## Images:
## Email Notification: 
![I](https://github.com/user-attachments/assets/5aab59bb-ad11-4224-bba9-f31a433d48fb)


## SMS Notification:
![N](https://github.com/user-attachments/assets/724f2552-896a-4c20-862e-7f27917cb6b6)


## Database Setup

1. **Create a MySQL database:**
   ```sql
   CREATE DATABASE flight_db;
   ```

2. **Create the `flight_status` table:**
   ```sql
   CREATE TABLE flight_status (
       flight_id VARCHAR(255) PRIMARY KEY,
       airline VARCHAR(255),
       status VARCHAR(255),
       departure_gate VARCHAR(255),
       arrival_gate VARCHAR(255),
       scheduled_departure DATETIME,
       scheduled_arrival DATETIME,
       actual_departure DATETIME,
       actual_arrival DATETIME,
       updated INT
   );
   ```

3. **Insert initial data:**
   ```sql
   INSERT INTO flight_status (flight_id, airline, status, departure_gate, arrival_gate, scheduled_departure, scheduled_arrival, actual_departure, actual_arrival, updated)
   VALUES
       ('6E2341', 'Indigo', 'On Time', 'A12', 'B7', '2024-07-26 14:00:00', '2024-07-26 18:00:00', NULL, NULL, 0),
       ('6E2342', 'Indigo', 'Delayed', 'C3', 'D4', '2024-07-26 16:00:00', '2024-07-26 20:00:00', NULL, NULL, 1),
       ('6E2343', 'Indigo', 'Cancelled', 'E2', 'F1', '2024-07-26 12:00:00', '2024-07-26 16:00:00', NULL, NULL, 1);
   ```

4.  **Create the `flight_notifications` table:**
    ```sql
    CREATE TABLE flight_notifications (
        id INT AUTO_INCREMENT PRIMARY KEY,
        flight_id VARCHAR(255) NOT NULL,
        old_status VARCHAR(255),
        new_status VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    ```


5. **Created trigger on the flight_status Table:**

   ```sql
   CREATE DEFINER=`admin`@`%` TRIGGER `after_flight_status_update` AFTER UPDATE ON `flight_status` FOR EACH ROW BEGIN
      -- Only insert if the status has changed
      IF NEW.status != OLD.status THEN
         INSERT INTO flight_notifications (flight_id, old_status, new_status)
         VALUES (NEW.flight_id, OLD.status, NEW.status);
      END IF;
   END
   ```

## RabbitMQ Setup

1. **Install RabbitMQ:** Follow the instructions on the [RabbitMQ website](https://www.rabbitmq.com/download.html) to install RabbitMQ.

2. **Start RabbitMQ server:**
   ```sh
   rabbitmq-server
   ```

3. **Open RabbitMQ Management UI:**
   Navigate to `http://localhost:15672/` in your browser. The default username and password are both `guest`.

## Running the Application

1. **Configure application properties:**
   Update the `src/main/resources/application.properties` file with your MySQL and RabbitMQ configurations.

2. **Run the Spring Boot application:**
   ```sh
   mvn spring-boot:run
   ```

## API Endpoints

- **Get all flights:**
  ```
  GET /api/flights
  ```

- **Get a single flight by ID:**
  ```
  GET /api/flights/{id}
  ```

- **Update flight status:**
  ```
  PUT /api/flights/{id}
  ```

## Testing the API

### Using Postman

1. **Get all flights:**
   - Method: GET
   - URL: `http://localhost:8080/api/flights`
   - Response:
      [{"flightId":"6E 2341","airline":"Indigo","status":"Cancelled","departureGate":"A12","arrivalGate":"B7","scheduledDeparture":"2024-07-26 14:00:00","scheduledArrival":"2024-07-26 18:00:00","actualDeparture":null,"actualArrival":null,"updated":0},{"flightId":"6E 2342","airline":"Indigo","status":"Cancelled","departureGate":"C3","arrivalGate":"D4","scheduledDeparture":"2024-07-26 16:00:00","scheduledArrival":"2024-07-26 20:00:00","actualDeparture":null,"actualArrival":null,"updated":0},{"flightId":"6E 2343","airline":"Indigo","status":"On Time","departureGate":"E2","arrivalGate":"F1","scheduledDeparture":"2024-07-26 12:00:00","scheduledArrival":"2024-07-26 16:00:00","actualDeparture":null,"actualArrival":null,"updated":0}]


2. **Get a single flight by ID:**
   - Method: GET
   - URL: `http://localhost:8080/api/flights/6E2341`
   - Response: {"flightId":"6E 2341","airline":"Indigo","status":"Cancelled","departureGate":"A12","arrivalGate":"B7","scheduledDeparture":"2024-07-26 14:00:00","scheduledArrival":"2024-07-26 18:00:00","actualDeparture":null,"actualArrival":null,"updated":0}


3. **Update flight status:**
   - Method: PUT
   - URL: `http://localhost:8080/api/flights/6E2341`
   - Body:
     ```json
     {
       "flightId": "6E2341",
       "airline": "Indigo",
       "status": "Delayed",
       "departureGate": "A12",
       "arrivalGate": "B7",
       "scheduledDeparture": "2024-07-26T14:00:00Z",
       "scheduledArrival": "2024-07-26T18:00:00Z",
       "actualDeparture": null,
       "actualArrival": null,
       "updated": 0
     }
     ```



```

This `README.md` provides a comprehensive guide to setting up and running your project, including installation steps, database setup, API endpoints, and instructions for testing the API. Make sure to replace placeholders like `yourusername` with actual values relevant to your project.




