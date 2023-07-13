package ku.globalBusinessApp.repository;

import ku.globalBusinessApp.dto.BoardDto;
import ku.globalBusinessApp.dto.BusScheduleDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Repository
public interface BusScheduleRepository extends JpaRepository<BusScheduleDto, Long> {

    @Query(value = "SELECT * FROM busscheudule " + "where type =?1" + " order by timeAtStation ASC", nativeQuery = true)
    List<BusScheduleDto> getBusSchedule(String type);
}
