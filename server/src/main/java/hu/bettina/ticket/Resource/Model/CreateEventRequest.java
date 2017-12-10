package hu.bettina.ticket.Resource.Model;



/**
 * Created by Stefyy on 2017. 11. 22..
 */
public class CreateEventRequest {
/*létrehoz egy új eventet*/
    private long id;
    private String imagePath;
    private String title;
    private String description;
    private String town;
    private String address;
    private String time;
    private String eventType;
    private String eventGenre;
    private String ticketType0;
    private String ticketType1;
    private String ticketType2;
    private String ticketType3;
    private String ticketType4;
    private int ticketPrice0;
    private int ticketPrice1;
    private int ticketPrice2;
    private int ticketPrice3;
    private int ticketPrice4;

    private String[] ticketType;
    private int[] ticketPrice;

    public CreateEventRequest() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTown() {
        return town;
    }

    public void setTown(String town) {
        this.town = town;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getEventType() {
        return eventType;
    }

    public void setEventType(String eventType) {
        this.eventType = eventType;
    }

    public String getEventGenre() {
        return eventGenre;
    }

    public void setEventGenre(String eventGenre) {
        this.eventGenre = eventGenre;
    }

    public String getTicketType0() {
        return ticketType0;
    }

    public void setTicketType0(String ticketType0) {
        this.ticketType0 = ticketType0;
    }

    public String getTicketType1() {
        return ticketType1;
    }

    public void setTicketType1(String ticketType1) {
        this.ticketType1 = ticketType1;
    }

    public String getTicketType2() {
        return ticketType2;
    }

    public void setTicketType2(String ticketType2) {
        this.ticketType2 = ticketType2;
    }

    public String getTicketType3() {
        return ticketType3;
    }

    public void setTicketType3(String ticketType3) {
        this.ticketType3 = ticketType3;
    }

    public String getTicketType4() {
        return ticketType4;
    }

    public void setTicketType4(String ticketType4) {
        this.ticketType4 = ticketType4;
    }

    public int getTicketPrice0() {
        return ticketPrice0;
    }

    public void setTicketPrice0(int ticketPrice0) {
        this.ticketPrice0 = ticketPrice0;
    }

    public int getTicketPrice1() {
        return ticketPrice1;
    }

    public void setTicketPrice1(int ticketPrice1) {
        this.ticketPrice1 = ticketPrice1;
    }

    public int getTicketPrice2() {
        return ticketPrice2;
    }

    public void setTicketPrice2(int ticketPrice2) {
        this.ticketPrice2 = ticketPrice2;
    }

    public int getTicketPrice3() {
        return ticketPrice3;
    }

    public void setTicketPrice3(int ticketPrice3) {
        this.ticketPrice3 = ticketPrice3;
    }

    public int getTicketPrice4() {
        return ticketPrice4;
    }

    public void setTicketPrice4(int ticketPrice4) {
        this.ticketPrice4 = ticketPrice4;
    }

    public String[] getTicketType() {
        return ticketType;
    }

    public void setTicketType(String[] ticketType) {
        this.ticketType = ticketType;
    }

    public int[] getTicketPrice() {
        return ticketPrice;
    }

    public void setTicketPrice(int[] ticketPrice) {
        this.ticketPrice = ticketPrice;
    }

    public void settingTicketType(){
        if(ticketType.length==1){
            for(int i=0;i<ticketType.length;i++){
                setTicketType0(ticketType[0]);
                setTicketPrice0(ticketPrice[0]);
            }
        }
        if(ticketType.length==2){
            for(int i=0;i<ticketType.length;i++){
                setTicketType0(ticketType[0]);
                setTicketPrice0(ticketPrice[0]);
                setTicketType1(ticketType[1]);
                setTicketPrice1(ticketPrice[1]);
            }
        }
        if(ticketType.length==3){
            for(int i=0;i<ticketType.length;i++){
                setTicketType0(ticketType[0]);
                setTicketPrice0(ticketPrice[0]);
                setTicketType1(ticketType[1]);
                setTicketPrice1(ticketPrice[1]);
                setTicketType2(ticketType[2]);
                setTicketPrice2(ticketPrice[2]);
            }
        }
        if(ticketType.length==4){
            for(int i=0;i<ticketType.length;i++){
                setTicketType0(ticketType[0]);
                setTicketPrice0(ticketPrice[0]);
                setTicketType1(ticketType[1]);
                setTicketPrice1(ticketPrice[1]);
                setTicketType2(ticketType[2]);
                setTicketPrice2(ticketPrice[2]);
                setTicketType3(ticketType[3]);
                setTicketPrice3(ticketPrice[3]);
            }
        }
        if(ticketType.length==5){
            for(int i=0;i<ticketType.length;i++){
                setTicketType0(ticketType[0]);
                setTicketPrice0(ticketPrice[0]);
                setTicketType1(ticketType[1]);
                setTicketPrice1(ticketPrice[1]);
                setTicketType2(ticketType[2]);
                setTicketPrice2(ticketPrice[2]);
                setTicketType3(ticketType[3]);
                setTicketPrice3(ticketPrice[3]);
                setTicketType4(ticketType[4]);
                setTicketPrice4(ticketPrice[4]);
            }
        }

    }
}
