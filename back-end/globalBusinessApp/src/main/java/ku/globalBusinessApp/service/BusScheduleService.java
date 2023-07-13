package ku.globalBusinessApp.service;

import ku.globalBusinessApp.dto.BoardDto;
import ku.globalBusinessApp.dto.BusScheduleDto;
import ku.globalBusinessApp.dto.UserDto;
import ku.globalBusinessApp.repository.BusScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BusScheduleService {

    BusScheduleRepository busScheduleRepository;

    @Autowired
    public BusScheduleService(BusScheduleRepository busScheduleRepository){
        this.busScheduleRepository = busScheduleRepository;
    }


    public List<BusScheduleDto> showBusSchedule(String type) {
        return busScheduleRepository.getBusSchedule(type);
    }

    public void savaBusTime(BusScheduleDto busTime) {busScheduleRepository.save(busTime);}

    public BusScheduleDto BusTimeView(Long id){
        return busScheduleRepository.findById(id).get();
    }

    public void BusTimeDelete(Long id){
        busScheduleRepository.deleteById(id);
    }
}
