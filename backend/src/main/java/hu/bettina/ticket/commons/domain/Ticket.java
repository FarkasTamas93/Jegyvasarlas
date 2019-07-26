package hu.bettina.ticket.commons.domain;

import javax.persistence.*;

/**
 * Created by Stefyy on 2017. 12. 10..
 */
@Entity
public class Ticket {
    @Id
    @GeneratedValue
    private long id;
    private int chair;
    private int price;
    private boolean reserved;
    private int row;
    private String sector;
    private int eventNumber;

    public Ticket(){

    }

    public Ticket(int chair, int price, boolean reserved, int row, String sector, int eventNumber) {
        this.chair = chair;
        this.price = price;
        this.reserved = reserved;
        this.row = row;
        this.sector = sector;
        this.eventNumber = eventNumber;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getChair() {
        return chair;
    }

    public void setChair(int chair) {
        this.chair = chair;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public boolean isReserved() {
        return reserved;
    }

    public void setReserved(boolean reserved) {
        this.reserved = reserved;
    }

    public int getRow() {
        return row;
    }

    public void setRow(int row) {
        this.row = row;
    }

    public String getSector() {
        return sector;
    }

    public void setSector(String sector) {
        this.sector = sector;
    }

    public int getEventNumber() {
        return eventNumber;
    }

    public void setEventNumber(int eventNumber) {
        this.eventNumber = eventNumber;
    }
}
