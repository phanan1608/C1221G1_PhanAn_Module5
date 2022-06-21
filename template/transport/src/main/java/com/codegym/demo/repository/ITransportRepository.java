package com.codegym.demo.repository;

import com.codegym.demo.entity.Location;
import com.codegym.demo.entity.Transport;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ITransportRepository extends JpaRepository<Transport, Integer> {
    Page<Transport> findAllByPlaceFrom_IdAndPlaceTo_Id(Integer placeFrom_id, Integer placeTo_id, Pageable pageable);
    Page<Transport> findAllByPlaceTo_Id(Integer placeTo_id, Pageable pageable);
    Page<Transport> findAllByPlaceFrom_Id(Integer placeFrom_id, Pageable pageable);
    Page<Transport> findAll(Pageable pageable);
}
