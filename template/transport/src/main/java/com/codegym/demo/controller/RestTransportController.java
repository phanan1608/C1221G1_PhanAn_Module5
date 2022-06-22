package com.codegym.demo.controller;

import com.codegym.demo.dto.TransportDto;
import com.codegym.demo.entity.Transport;
import com.codegym.demo.service.ITransportService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/transport")
@CrossOrigin("http://localhost:4200")
public class RestTransportController {
    @Autowired
    private ITransportService transportService;

//    @GetMapping(value = "")
//    public ResponseEntity<List<Transport>> getAllTransport() {
//        return new ResponseEntity<>(transportService.findAll(), HttpStatus.OK);
//    }

    @GetMapping(value = "")
    public ResponseEntity<Page<Transport>> getAll(@RequestParam Optional<Integer> from,
                                                  @RequestParam Optional<Integer> to,
                                                  @RequestParam Optional<String> numberControl,
                                                  @PageableDefault(value = 5) Pageable pageable) {
//        Pageable pageable = PageRequest.of(page, size);
        Integer fromValue = from.orElse(-1);
        Integer toValue = to.orElse(-1);
        String numberControlValue = numberControl.orElse("");
        Page<Transport> transports = this.transportService.findAllAndSearch(numberControlValue,fromValue, toValue, pageable);
        return new ResponseEntity<>(transports, HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Object> getCustomerById(@PathVariable Integer id) {
        Transport transport = this.transportService.findById(id);
        if (transport != null) {
            return new ResponseEntity<Object>(transport, HttpStatus.OK);
        }
        String error = "NOT FOUND";
        return new ResponseEntity<Object>(error, HttpStatus.NO_CONTENT);
    }

    @PostMapping(value = "")
    public ResponseEntity<?> createCustomer(@Validated @RequestBody TransportDto transportDto,
                                            BindingResult bindingResult) {
//        new CustomerDto().validate(customerDto, bindingResult);
        if (bindingResult.hasFieldErrors()) {
            return new ResponseEntity<>("Error", HttpStatus.BAD_REQUEST);
        } else {
            System.out.println(transportDto);
            Transport transport = new Transport();
            BeanUtils.copyProperties(transportDto, transport);
            this.transportService.save(transport);
            return new ResponseEntity<>( HttpStatus.CREATED);
        }
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> updateCustomer(@PathVariable("id") Integer id, @RequestBody @Validated TransportDto transportDto,
                                            BindingResult bindingResult) {
//        new CustomerDto().validate(customerDto, bindingResult);
        if (bindingResult.hasFieldErrors()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        Transport transport = new Transport();
        BeanUtils.copyProperties(transportDto, transport);
        this.transportService.save(transport);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<String> deleteUserById(@PathVariable Integer id) {
        this.transportService.remove(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
