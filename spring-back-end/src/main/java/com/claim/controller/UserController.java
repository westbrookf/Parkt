package com.claim.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.claim.entity.Location;
import com.claim.entity.User;
import com.claim.repository.UserRepository;

//Only use @CrossOrigin in claim Academy not in the real world
@CrossOrigin
@RestController
public class UserController {

	@Autowired
	private UserRepository userRepository;
	
	@RequestMapping(value="/submitUserDetails", 
			 consumes=MediaType.APPLICATION_JSON_VALUE, 
			 produces=MediaType.APPLICATION_JSON_VALUE,
			 method= RequestMethod.POST
	)
	
	private void submitUserDetails(@RequestBody User user) {
		
		userRepository.save(user);
		
	}
	
	@RequestMapping(value="/findUserById", 
			 produces=MediaType.APPLICATION_JSON_VALUE,
			 method= RequestMethod.GET
	)
	
	private  ResponseEntity<Optional <User>> findUser(String email) {
	
		
		Optional<User> user1 = userRepository.findById(email);
	
	return new ResponseEntity<>(user1,HttpStatus.OK);
	
		
	}
	
	
	@RequestMapping(value="/login",
			produces=MediaType.APPLICATION_JSON_VALUE,
			method=RequestMethod.POST
			)
			@ResponseBody
			public ResponseEntity<User> checkCredential(@RequestBody User user) {
			  User loggedInUser = userRepository.login(user.getEmail(), user.getPassword());

			  if(loggedInUser != null) {
			  return new ResponseEntity<>(loggedInUser, HttpStatus.OK);
			  }
			 
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
			}
	
	
	
	@RequestMapping(value="/listUsersById",
			 produces=MediaType.APPLICATION_JSON_VALUE,
			 method= RequestMethod.GET
	)
	
	private ResponseEntity <List<User>> listStudent(Iterable<String> user) {
	
		List<User> user2 = userRepository.findAllById(user);
	
	return new ResponseEntity<>(user2,HttpStatus.OK);
	
		
	}

}
