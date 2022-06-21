package com.codegym.demo.service.impl;

import com.codegym.demo.entity.Location;
import com.codegym.demo.repository.ILocationRepository;
import com.codegym.demo.service.ILocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationService implements ILocationService {
    @Autowired
    private ILocationRepository locationRepository;


    @Override
    public void save(Location object) {

    }

    @Override
    public Location findById(Integer id) {
        return null;
    }

    @Override
    public void update(Location object) {

    }

    @Override
    public void remove(Integer id) {

    }

    @Override
    public List<Location> findAll() {
        return this.locationRepository.findAll();
    }
}
