package com.claim.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.claim.entity.Location;

@Repository
public interface LocationRepository extends JpaRepository<Location, String> {
	
	//Save Location
	@Query("FROM Location where email =?1 ORDERBY parkdate DESC LIMIT=1")
	List<Location> locate(String email);
	
	
}
