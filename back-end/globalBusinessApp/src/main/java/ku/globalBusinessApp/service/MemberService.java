package ku.globalBusinessApp.service;

import ku.globalBusinessApp.dto.UserDto;
import ku.globalBusinessApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MemberService {
    UserRepository userRepository;
    @Autowired
    public MemberService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    public void savaMember(UserDto user) {userRepository.save(user);}
    public List<UserDto> findMembers() {
        return userRepository.findAll();
    }

    public UserDto memberView(Long id){
        return userRepository.findById(id).get();
    }

    public void memberDelete(Long id){
        userRepository.deleteById(id);
    }

    public List<UserDto> selectMemberByStudentIdSearch(String studentId){
        return userRepository.getMemberByStudentIdSearch(studentId);
    }

    public List<UserDto> selectMemberByStudentNameSearch(String studentName){
        return userRepository.findByStudentNameContaining(studentName);
    }

    public List<UserDto> selectMemberByMajorSearch(String major){
        return userRepository.findByMajorContaining(major);
    }

    public List<UserDto> selectMemberByPhoneNumSearch(String phoneNum){
        return userRepository.findByPhoneNumContaining(phoneNum);
    }
}
