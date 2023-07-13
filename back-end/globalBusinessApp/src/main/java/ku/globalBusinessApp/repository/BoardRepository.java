package ku.globalBusinessApp.repository;

import ku.globalBusinessApp.dto.BoardDto;
import ku.globalBusinessApp.dto.BusScheduleDto;
import ku.globalBusinessApp.dto.UserDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BoardRepository extends JpaRepository<BoardDto, Long> {
    List<BoardDto> findByDepartment (String department);
    List<BoardDto> findByTitleContaining (String title);
    List<BoardDto> findByWriterContaining (String writer);
    List<BoardDto> findByHeaderContaining (String header);
    List<BoardDto> findByDepartmentContaining (String department);
}
