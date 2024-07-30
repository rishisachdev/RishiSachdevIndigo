package com.airlineNotificationSystem.demo.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "flight_status")
public class Flight {

	@Id
    private String flightId;
    private String airline;
    private String status;
    private String departureGate;
    private String arrivalGate;
    private String scheduledDeparture;
    private String scheduledArrival;
    private String actualDeparture;
    private String actualArrival;
    private int updated;

    // No-argument constructor required by JPA
    public Flight() {}

    // All-argument constructor
    public Flight(String flightId, String airline, String status, String departureGate, String arrivalGate,
                  String scheduledDeparture, String scheduledArrival, String actualDeparture, String actualArrival,
                  int updated) {
        this.flightId = flightId;
        this.airline = airline;
        this.status = status;
        this.departureGate = departureGate;
        this.arrivalGate = arrivalGate;
        this.scheduledDeparture = scheduledDeparture;
        this.scheduledArrival = scheduledArrival;
        this.actualDeparture = actualDeparture;
        this.actualArrival = actualArrival;
        this.updated = updated;
    }
	
    public String getFlightId() {
		return flightId;
	}

	public void setFlightId(String flightId) {
		this.flightId = flightId;
	}

	public String getAirline() {
		return airline;
	}

	public void setAirline(String airline) {
		this.airline = airline;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getDepartureGate() {
		return departureGate;
	}

	public void setDepartureGate(String departureGate) {
		this.departureGate = departureGate;
	}

	public String getArrivalGate() {
		return arrivalGate;
	}

	public void setArrivalGate(String arrivalGate) {
		this.arrivalGate = arrivalGate;
	}

	public String getScheduledDeparture() {
		return scheduledDeparture;
	}

	public void setScheduledDeparture(String scheduledDeparture) {
		this.scheduledDeparture = scheduledDeparture;
	}

	public String getScheduledArrival() {
		return scheduledArrival;
	}

	public void setScheduledArrival(String scheduledArrival) {
		this.scheduledArrival = scheduledArrival;
	}

	public String getActualDeparture() {
		return actualDeparture;
	}

	public void setActualDeparture(String actualDeparture) {
		this.actualDeparture = actualDeparture;
	}

	public String getActualArrival() {
		return actualArrival;
	}

	public void setActualArrival(String actualArrival) {
		this.actualArrival = actualArrival;
	}

	public int getUpdated() {
		return updated;
	}

	public void setUpdated(int updated) {
		this.updated = updated;
	}

	

    // Getters and Setters
    // ... (omitted for brevity)
}
