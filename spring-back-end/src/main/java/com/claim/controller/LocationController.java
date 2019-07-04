package com.claim.controller;

import java.sql.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.claim.entity.Location;
import com.claim.repository.LocationRepository;

//Only use @CrossOrigin in claim Academy not in the real world
@CrossOrigin
@RestController
public class LocationController {

	@Autowired
	private LocationRepository locationRepository;
	
	//Vehicle Parking 
	@RequestMapping(value="/parkedCar", 
			 consumes=MediaType.APPLICATION_JSON_VALUE,
			 produces=MediaType.APPLICATION_JSON_VALUE,
			 method= RequestMethod.POST
	)
	
	private void parkedCar(@RequestBody Location location) {
		
		location.setParkdate(new Date(System.currentTimeMillis()));
		locationRepository.save(location);
		
	}
}
