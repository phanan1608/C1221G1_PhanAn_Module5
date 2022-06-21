package com.codegym.demo.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
public class Transport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String numberControl;
    private String type;
    private String owner;
    private String phone;
    private String email;
    private String startTime;
    private String endTime;

    @ManyToOne
    @JoinColumn(name = "place_from", referencedColumnName = "id")
    private Location placeFrom;

    @ManyToOne
    @JoinColumn(name = "place_to", referencedColumnName = "id")
    private Location placeTo;

    public Transport() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNumberControl() {
        return numberControl;
    }

    public void setNumberControl(String numberControl) {
        this.numberControl = numberControl;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public Location getPlaceTo() {
        return placeTo;
    }

    public void setPlaceTo(Location placeTo) {
        this.placeTo = placeTo;
    }

    public Location getPlaceFrom() {
        return placeFrom;
    }

    public void setPlaceFrom(Location placeFrom) {
        this.placeFrom = placeFrom;
    }
}
