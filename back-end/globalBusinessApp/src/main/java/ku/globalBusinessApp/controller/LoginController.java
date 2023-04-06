package ku.globalBusinessApp.controller;

import ku.globalBusinessApp.dto.UserDto;
import ku.globalBusinessApp.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@Controller
public class LoginController {
    private final LoginService loginService;

    @Autowired
    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @GetMapping("show")
    public String showController(Model model){
        List<UserDto> members = loginService.findMembers();
        model.addAttribute("members", loginService.findMembers());
        return "members/memberList";
    }

    @PostMapping ("login")
    @ResponseBody
    public HashMap<String, String> loginController(@RequestBody UserDto userDto){
        HashMap<String, String> result = new HashMap<>();

        if(loginService.canLogin(userDto.getStudentId(), userDto.getPhoneNum())){
            result.put("status", "success");
        }else{
            result.put("status", "fail");
        }

        return result;
    }


}
