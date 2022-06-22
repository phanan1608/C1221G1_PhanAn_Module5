package com.codegym.demo.service.impl;

import com.codegym.demo.entity.Transport;
import com.codegym.demo.repository.ITransportRepository;
import com.codegym.demo.service.ITransportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransportService implements ITransportService {
    @Autowired
    private ITransportRepository transportRepository;

    @Override
    public void save(Transport transport) {
        this.transportRepository.save(transport);
    }

    @Override
    public Transport findById(Integer id) {
        return this.transportRepository.findById(id).orElse(null);
    }


    @Override
    public void update(Transport transport) {
        this.transportRepository.save(transport);
    }

    @Override
    public void remove(Integer id) {
        this.transportRepository.delete(findById(id));
    }


    @Override
    public List<Transport> findAll() {
        return this.transportRepository.findAll();
    }

    @Override
    public Page<Transport> findAllAndSearch(String numberControl,Integer from, Integer to, Pageable pageable) {
        if (from == -1 && to == -1) {
            return this.transportRepository.findAllByNumberControlContaining(numberControl, pageable);
        } else if (from == -1) {
            return this.transportRepository.findAllByNumberControlContainingAndPlaceTo_Id(numberControl,to, pageable);
        } else if (to == -1) {
            return this.transportRepository.findAllByNumberControlContainingAndPlaceFrom_Id(numberControl,from, pageable);
        } else {
            return this.transportRepository.findAllByNumberControlContainingAndPlaceFrom_IdAndPlaceTo_Id(numberControl,from, to, pageable);
        }
    }
}
