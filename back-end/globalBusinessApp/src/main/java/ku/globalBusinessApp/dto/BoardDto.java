package ku.globalBusinessApp.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "boardinfo")
@ToString
public class BoardDto extends TimeEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String writer;
    private String title;
    private String header;
    private String department;
    private String content;
    @Column(columnDefinition = "integer default 0", nullable = false)
    private int viewCount;

}
