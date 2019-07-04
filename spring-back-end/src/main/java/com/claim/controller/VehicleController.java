package com.claim.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.claim.entity.Vehicle;
import com.claim.repository.VehicleRepository;


@CrossOrigin
@RestController
public class VehicleController {
	
	
	@Autowired
	private VehicleRepository vehicleRepository;
	
	@RequestMapping(value="/submitNewVehicle", 
			 consumes=MediaType.APPLICATION_JSON_VALUE, 
			 produces=MediaType.APPLICATION_JSON_VALUE,
			 method= RequestMethod.POST
	)
	
	private void submitNewVehicle(@RequestBody Vehicle vehicle) {
		
		vehicleRepository.save(vehicle);
		
	}
}
