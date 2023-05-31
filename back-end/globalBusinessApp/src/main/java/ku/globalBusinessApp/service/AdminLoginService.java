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
        adminUserRepository.save(adminDto);
    }

    @Override
    public UserDetails loadUserByUsername(String adminId) throws UsernameNotFoundException {
        Optional<AdminDto> adminUser = adminUserRepository.findByAdminId(adminId);
        if(adminUser.isPresent()) {
            AdminDto admin = adminUser.get();
            log.info("authAdmin : {}", admin);
            return new User(admin.getUsername(), admin.getPassword(),Arrays.asList(new SimpleGrantedAuthority(admin.getRole())));
        }else{
            System.out.println("오류");
        }
        return null;
    }
}
