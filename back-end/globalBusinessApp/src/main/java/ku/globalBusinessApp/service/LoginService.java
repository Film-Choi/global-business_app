package ku.globalBusinessApp.service;

import ku.globalBusinessApp.dto.UserDto;
import ku.globalBusinessApp.repository.AdminUserRepository;
import ku.globalBusinessApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoginService {
    AdminUserRepository adminUserRepository;

    UserRepository userRepository;
    @Autowired
    public LoginService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public boolean canLogin(Long studentId, String phoneNum) {

        if(userRepository.getPhoneNum(studentId).size() != 0) {
            String inputPhoneNum = userRepository.getPhoneNum(studentId).get(0);
            if (phoneNum.equals(inputPhoneNum)) {
                return true;
            } else {
                return false;
            }
        }else{
            return false;
        }
    }

}