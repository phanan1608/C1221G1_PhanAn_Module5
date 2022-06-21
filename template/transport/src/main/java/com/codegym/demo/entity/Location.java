package com.codegym.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;

@Entity
@JsonIgnoreProperties({"placeFrom","placeTo"})
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;

    @OneToMany(mappedBy = "placeFrom")
    private List<Transport> placeFrom;

    @OneToMany(mappedBy = "placeTo")
    private List<Transport> placeTo;

    public Location() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Transport> getPlaceFrom() {
        return placeFrom;
    }

    public void setPlaceFrom(List<Transport> placeFrom) {
        this.placeFrom = placeFrom;
    }

    public List<Transport> getPlaceTo() {
        return placeTo;
    }

    public void setPlaceTo(List<Transport> placeTo) {
        this.placeTo = placeTo;
    }
}
