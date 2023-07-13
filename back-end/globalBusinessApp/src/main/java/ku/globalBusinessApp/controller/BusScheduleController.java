package ku.globalBusinessApp.controller;

import ku.globalBusinessApp.dto.BoardDto;
import ku.globalBusinessApp.dto.BusScheduleDto;
import ku.globalBusinessApp.dto.UserDto;
import ku.globalBusinessApp.service.BoardService;
import ku.globalBusinessApp.service.BusScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.sql.SQLException;
import java.util.List;

@Controller
public class BusScheduleController {

    private final BusScheduleService busScheduleService;
    @Autowired
    public BusScheduleController(BusScheduleService busScheduleService) {
        this.busScheduleService = busScheduleService;
    }
    @GetMapping("admin/busSchedule/list")
    public String showBusScheduleController(Model model, String type) throws SQLException {
        List<BusScheduleDto> busS = busScheduleService.showBusSchedule(type);
        System.out.println(busS);
        model.addAttribute("busScheduleDto", busS);
        return "/busSchedule/busScheduleList";
    }

    @GetMapping(value = "/admin/busSchedule/add")
    public String addBusTimeController(Model model) throws SQLException {
        return "/busSchedule/busScheduleAdd";
    }

    @PostMapping(value = "/admin/busSchedule/add/finish")
    public String insertBusTimeController(BusScheduleDto busTime){

        busScheduleService.savaBusTime(busTime);

        return "redirect:/admin/busSchedule/list";
    }

    @GetMapping("admin/busSchedule/view")
    public String busTimeView(Model model, Long id){
        model.addAttribute("busTime", busScheduleService.BusTimeView(id));
        return "/busSchedule/busScheduleView";
    }

    @GetMapping("admin/busSchedule/delete")
    public String busTimeDelete(Long id){
        busScheduleService.BusTimeDelete(id);
        return "redirect:/admin/busSchedule/list";
    }

    @GetMapping("admin/busSchedule/modify/{id}")
    public String busTimeModify(@PathVariable("id") Long id, Model model){
        model.addAttribute("busTime", busScheduleService.BusTimeView(id));

        return "/busSchedule/busScheduleModify";
    }

    @PostMapping("admin/busSchedule/update/{id}")
    public String busScheduleUpdate(@PathVariable("id") Long id,BusScheduleDto busScheduleDto){
        BusScheduleDto busScheduleDtoTemp = busScheduleService.BusTimeView(id);

        busScheduleDtoTemp.setType(busScheduleDto.getType());
        busScheduleDtoTemp.setTimeAtSchool(busScheduleDto.getTimeAtSchool());
        busScheduleDtoTemp.setTimeAtStation(busScheduleDto.getTimeAtStation());


        busScheduleService.savaBusTime(busScheduleDtoTemp);
        return "redirect:/admin/busSchedule/list";
    }

}
