package com.codegym.demo.controller;

import com.codegym.demo.dto.TransportDto;
import com.codegym.demo.entity.Location;
import com.codegym.demo.entity.Transport;
import com.codegym.demo.service.ILocationService;
import com.codegym.demo.service.ITransportService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/location")
@CrossOrigin("http://localhost:4200")
public class RestLocationController {
    @Autowired
    private ILocationService locationService;

    @GetMapping(value = "")
    public ResponseEntity<List<Location>> getAll() {
        return new ResponseEntity<>(locationService.findAll(), HttpStatus.OK);
    }

}
