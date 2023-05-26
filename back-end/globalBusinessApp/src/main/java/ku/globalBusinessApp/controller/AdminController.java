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

    @GetMapping("/createAdmin")
    public String createAdmin(Model model){
        AdminDto admin = new AdminDto();
        admin.setAdminId("test");
        admin.setRole("ROLE_ADMIN");
        adminLoginService.saveAdmin(admin,"test");
        return "admin/adminLogin";
    }

    @GetMapping("/adminLogin")
    public String adminController(Model model){

        return "admin/adminLogin";
    }

//    @PostMapping("/admin/login")
//    @ResponseBody
//    public HashMap<String, String> makeConnect(AdminDto user){
//        System.out.println(user.getUserName());
//       HashMap<String, String> result = new HashMap<>();
//       result.put("status","fail");
//        if(user.getUserName().equals("test")){
//            if(user.getUserPW().equals("test")){
//                result.put("status","success");
//            }
//        }
//
//        return result;
//    }

    @PostMapping("/loginpc")
    public String loginpc(String adminId, String adminPW){
        AdminDto adminDto = adminUserRepository.returnAdmin(adminId, adminPW);
        System.out.println("login 시도 컨트롤러" + adminDto.getPassword());
        return "admin/adminMain";
    }

    @GetMapping("/admin/main")
    public String successController(Model model){
        return "admin/adminMain";
    }

}
