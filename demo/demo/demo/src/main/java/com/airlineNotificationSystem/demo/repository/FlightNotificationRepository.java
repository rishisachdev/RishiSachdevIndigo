package com.airlineNotificationSystem.demo.repository;

import com.airlineNotificationSystem.demo.model.FlightNotification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlightNotificationRepository extends JpaRepository<FlightNotification, Long> {
}
