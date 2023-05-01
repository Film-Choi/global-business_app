package ku.globalBusinessApp.repository;

import ku.globalBusinessApp.dto.BoardDto;
import ku.globalBusinessApp.dto.UserDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BoardRepository extends JpaRepository<BoardDto, Long> {
}
