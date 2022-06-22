package com.codegym.demo.repository;

import com.codegym.demo.entity.Location;
import com.codegym.demo.entity.Transport;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ITransportRepository extends JpaRepository<Transport, Integer> {
    Page<Transport> findAllByNumberControlContainingAndPlaceFrom_IdAndPlaceTo_Id(String numberControl, Integer placeFrom_id, Integer placeTo_id, Pageable pageable);
    Page<Transport> findAllByNumberControlContainingAndPlaceTo_Id(String numberControl, Integer placeTo_id, Pageable pageable);
    Page<Transport> findAllByNumberControlContainingAndPlaceFrom_Id(String numberControl, Integer placeFrom_id, Pageable pageable);
    Page<Transport> findAllByNumberControlContaining(String numberControl, Pageable pageable);
}
