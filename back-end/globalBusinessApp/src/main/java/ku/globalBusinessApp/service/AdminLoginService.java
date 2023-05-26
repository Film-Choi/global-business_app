package ku.globalBusinessApp.service;

import ku.globalBusinessApp.dto.AdminDto;
import ku.globalBusinessApp.repository.AdminUserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Optional;



@Service
@Slf4j
public class AdminLoginService implements UserDetailsService {
    private AdminUserRepository adminUserRepository;

    public AdminLoginService(AdminUserRepository adminUserRepository) {
        this.adminUserRepository = adminUserRepository;
    }

    public void saveAdmin(AdminDto adminDto, String pw) {
        System.out.println(pw);
        String newPw =  new BCryptPasswordEncoder().encode(pw);
        adminDto.setAdminPW(newPw);
        System.out.println(adminDto.getAdminId());
        System.out.println(adminDto.getAdminPW());
        System.out.println(adminDto.getRole());
        adminUserRepository.save(adminDto);
    }

    @Override
    public UserDetails loadUserByUsername(String adminId) throws UsernameNotFoundException {

        boolean check = new BCryptPasswordEncoder().matches("test", adminUserRepository.findByAdminId(adminId).get().getPassword());
        System.out.println("login 시도 " + adminId + " " + check);
//        AdminDto activeUserInfo = adminUserRepository.findByAdminId(adminId).get();
//        String dBuserName = activeUserInfo.getAdminId();
//        if(dBuserName == null){
//            throw new UsernameNotFoundException("User not authorized.");
//        }
//        GrantedAuthority authority = new SimpleGrantedAuthority(activeUserInfo.getRole());
//        UserDetails userDetails = (UserDetails)new User(dBuserName,
//                activeUserInfo.getPassword(), Arrays.asList(authority));
//        return userDetails;

        Optional<AdminDto> adminUser = adminUserRepository.findByAdminId(adminId);
        if(adminUser.isPresent()) {
            AdminDto admin = adminUser.get();

            AdminDto authAdmin = AdminDto.builder()
                    .adminId(admin.getAdminId())
                    .adminPW(admin.getPassword())
                    .role(admin.getRole())
                    .build();


            log.info("authAdmin : {}", authAdmin);
            System.out.println(authAdmin.getRole());
            return authAdmin;
        }else{
            System.out.println("오류");
        }
        return null;
    }
}
