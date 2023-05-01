package ku.globalBusinessApp.dto;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDateTime;


@Getter
public class BoardResponseDto {
    @Id
    private Long id;
    private String writer;
    private String title;
    private String header;
    private String department;
    private String content;
    private int viewCount;
    private LocalDateTime registerTime;
}
