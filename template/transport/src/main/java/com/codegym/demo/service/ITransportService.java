package com.codegym.demo.service;

import com.codegym.demo.entity.Transport;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ITransportService extends ICrudService<Transport> {
    Page<Transport> findAllAndSearch(String numberControl,Integer from, Integer to, Pageable pageable);
}
