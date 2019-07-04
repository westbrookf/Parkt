package com.claim.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="vehicle")
public class Vehicle {
	
	@Id
	@Column(name="id")
	private int id;
	
	@Column(name="year")
	private int year;
	
	@Column(name="make")
	private String make;
	
	@Column(name="model")
	private String model;
	
	@Column(name="color")
	private String color;


	public Vehicle() {
		super();
	}

	public Vehicle (int id, int year, String make, String model, String color) {
		super();
		
		this.id=id;
		this.year=year;
		this.make=make;
		this.model=model;
		this.color=color;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public String getMake() {
		return make;
	}

	public void setMake(String make) {
		this.make = make;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}
	
	

}