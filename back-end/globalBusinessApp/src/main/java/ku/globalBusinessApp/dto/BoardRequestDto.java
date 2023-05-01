package ku.globalBusinessApp.dto;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.Id;

@Getter
@Setter
public class BoardRequestDto {
    @Id
    private Long id;
    private String writer;
    private String title;
    private String header;
    private String department;
    private String content;
}
