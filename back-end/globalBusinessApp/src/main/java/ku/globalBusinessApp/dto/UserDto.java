package ku.globalBusinessApp.dto;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "userinfo")
@Getter
@Setter
public class UserDto {
    @Id
    public Long studentId;
    public String studentName;
    public String major;
    public Long gender;
    public String phoneNum;
    public String email;

}
