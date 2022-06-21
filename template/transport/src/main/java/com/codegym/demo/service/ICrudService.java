package com.codegym.demo.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ICrudService<E> {
    void save(E object);

    E findById(Integer id);

    void update(E object);

    void remove(Integer id);

    List<E> findAll();
}
