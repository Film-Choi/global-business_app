package ku.globalBusinessApp.controller;

import ku.globalBusinessApp.config.SecurityConfig;
import ku.globalBusinessApp.dto.AdminDto;
import ku.globalBusinessApp.dto.UserDto;
import ku.globalBusinessApp.repository.AdminUserRepository;
import ku.globalBusinessApp.service.AdminLoginService;
import ku.globalBusinessApp.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.List;

@Controller
public class AdminController {
    private final AdminLoginService adminLoginService;

    @Autowired
    private AdminUserRepository adminUserRepository;

    @Autowired
    public AdminController(AdminLoginService adminLoginService) {
        this.adminLoginService = adminLoginService;
    }


    @GetMapping("/adminLogin")
    public String adminController(Model model){

        return "admin/adminLogin";
    }

    @GetMapping("/admin/main")
    public String successController(Model model){
        return "admin/adminMain";
    }

}
