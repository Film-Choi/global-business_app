//package ku.globalBusinessApp.service;
//
//import ku.globalBusinessApp.dto.UserDto;
//import ku.globalBusinessApp.repository.UserRepository;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//
//import java.util.List;
//
//class LoginServiceTest {
//    LoginService loginService;
//    UserRepository userRepository;
//
//    @Autowired
//    public LoginServiceTest(UserRepository userRepository) {
//        this.userRepository = userRepository;
//    }
//
//    @BeforeEach
//    void before()  {
//        UserDto u1 = new UserDto();
//        u1.setStudentId(2020187620L);
//        u1.setStudentName("손흥민");
//        u1.setMajor("융합경영학부 디지털경영전공");
//        u1.setGender(1L);
//        u1.setPhoneNum("010-1234-5711");
//        u1.setEmail("test34@korea.ac.kr");
//        userRepository.save(u1);
//    }
//
//    @Test
//    void checkPhoneNum() {
//        List<String> users = loginService.canLogin(2020187620L);
//
//        System.out.println(users);
//    }
//
//}