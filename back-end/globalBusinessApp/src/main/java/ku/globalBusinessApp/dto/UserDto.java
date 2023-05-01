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
    private Long studentId;
    private String studentName;
    private String major;
    private Long gender;
    private String phoneNum;
    private String email;

}
