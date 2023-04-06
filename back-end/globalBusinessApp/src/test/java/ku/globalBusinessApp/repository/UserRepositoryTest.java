//package ku.globalBusinessApp.repository;
//
//import ku.globalBusinessApp.dto.UserDto;
//import lombok.RequiredArgsConstructor;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//
//import java.util.Optional;
//
//import static org.junit.jupiter.api.Assertions.*;
//
//@SpringBootTest
//class UserRepositoryTest {
//
//    UserRepository userRepository;
//    @Autowired(required = false)
//    public UserRepositoryTest(UserRepository userRepository) {
//        this.userRepository = userRepository;
//    }
//
//    @Test
//    public void selectUserByStudentId() {
//
//        Long studentId = 2020050555L;
//
//        Optional<UserDto> result = userRepository.findByStudentId(studentId);
//
//        System.out.println("=============================");
//
//        if(result.isPresent()) {
//            UserDto user = result.get();
//            System.out.println(user);
//        }
//
//    }
//}
