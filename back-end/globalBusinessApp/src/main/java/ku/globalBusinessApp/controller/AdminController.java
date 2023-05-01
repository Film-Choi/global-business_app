package ku.globalBusinessApp.controller;

import ku.globalBusinessApp.dto.AdminDto;
import ku.globalBusinessApp.dto.UserDto;
import ku.globalBusinessApp.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.List;

@Controller
public class AdminController {
    private final LoginService loginService;
    @Autowired
    public AdminController(LoginService loginService) {
        this.loginService = loginService;
    }
    @GetMapping("/admin")
    public String adminController(Model model){
        return "admin/adminLogin";
    }

    @PostMapping("/admin/login")
    @ResponseBody
    public HashMap<String, String> makeConnect(AdminDto user){
        System.out.println(user.getUserName());
        HashMap<String, String> result = new HashMap<>();
        result.put("status","fail");
        if(user.getUserName().equals("test")){
            if(user.getUserPW().equals("test")){
                result.put("status","success");
            }
        }

        return result;
    }

    @GetMapping("/admin/login/success")
    public String successController(Model model){
        return "admin/adminMain";
    }

}
