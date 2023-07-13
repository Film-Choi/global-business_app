package ku.globalBusinessApp.repository;

import ku.globalBusinessApp.dto.AdminDto;
import ku.globalBusinessApp.dto.BoardDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdminUserRepository extends JpaRepository<AdminDto, String> {
    Optional<AdminDto> findByAdminId(String adminId);

    @Query(value = "SELECT adminPW FROM admininfo " + "where adminId =?1", nativeQuery = true)
    String AdminPasswordCheck(String adminId);

}
