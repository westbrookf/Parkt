package com.claim.entity;



import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="location")
public class Location {
	
	@Id
	@Column(name="id")
	private int id;
	
	@Column(name="email")
	private String email;
	
	@Column(name="lat")
	private double lat;
	
	@Column(name="lng")
	private double lng;
	
	@Column(name="floor")
	private String floor;
	
	@Column(name="parkdate")
	private Date parkdate;
	
	@Column(name="pickupdate")
	private Date pickupdate;

	
	
	public Location() {
		super();
	}
	
	public Location(int id, String user, double lat, double lng, String floor, Date parkDate, Date pickupDate) {
		super();
		
		this.id = id;
		this.email = email;
		this.lat = lat;
		this.lng = lng;
		this.floor = floor;
		this.parkdate = parkdate;
		this.pickupdate = pickupdate;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFloor() {
		return floor;
	}

	public void setFloor(String floor) {
		this.floor = floor;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public double getLat() {
		return lat;
	}

	public void setLat(double lat) {
		this.lat = lat;
	}

	public double getLng() {
		return lng;
	}

	public void setLng(double lng) {
		this.lng = lng;
	}

	public Date getParkdate() {
		return parkdate;
	}

	public void setParkdate(Date parkdate) {
		this.parkdate = parkdate;
	}

	public Date getPickupdate() {
		return pickupdate;
	}

	public void setPickupdate(Date pickupdate) {
		this.pickupdate = pickupdate;
	}
	
}