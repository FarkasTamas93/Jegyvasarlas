package hu.bettina.ticket.Resource.Model;

/**
 * Created by Stefyy on 2017. 12. 08..
 */
public class UserLoginRequest {

    String userName;
    String password;

    public UserLoginRequest(){}

    public UserLoginRequest(String userName, String password) {
        this.userName = userName;
        this.password = password;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
