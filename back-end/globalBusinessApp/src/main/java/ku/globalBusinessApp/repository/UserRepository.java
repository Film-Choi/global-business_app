package ku.globalBusinessApp.repository;

import ku.globalBusinessApp.dto.UserDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<UserDto, Long> {
    @Query(value = "SELECT phoneNum FROM userinfo " + "where studentId =?1", nativeQuery = true)
    List<String> getPhoneNum(Long studentId);

    @Query(value = "SELECT * FROM userinfo WHERE studentId LIKE %?1%", nativeQuery = true)
    List<UserDto> getMemberByStudentIdSearch(String studentId);

    List<UserDto> findByStudentNameContaining (String studentName);
    List<UserDto> findByMajorContaining (String major);
    List<UserDto> findByPhoneNumContaining (String phoneNum);

}
