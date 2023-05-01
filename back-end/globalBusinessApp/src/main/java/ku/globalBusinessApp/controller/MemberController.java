package ku.globalBusinessApp.controller;

import ku.globalBusinessApp.dto.BoardDto;
import ku.globalBusinessApp.dto.UserDto;
import ku.globalBusinessApp.service.BoardService;
import ku.globalBusinessApp.service.LoginService;
import ku.globalBusinessApp.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.sql.SQLException;
import java.util.List;

@Controller
public class MemberController {
    private final MemberService memberService;
    @Autowired
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }
    @GetMapping("/admin/main/user/management")
    public String showMemberController(Model model){
        List<UserDto> members = memberService.findMembers();
        model.addAttribute("members", memberService.findMembers());
        return "/member/memberList";
    }

    @GetMapping(value = "/add/member")
    public String addMemberController(Model model) throws SQLException {
        return "/member/addMember";
    }

    @PostMapping(value = "/add/member/finish")
    public String insertMemberController(UserDto user){

        memberService.savaMember(user);

        return "redirect:/admin/main/user/management";
    }

    @GetMapping("/member/view")
    public String boardView(Model model, Long id){
        model.addAttribute("member", memberService.memberView(id));
        return "/member/memberView";
    }

    @GetMapping("/member/delete")
    public String boardDelete(Long id){
        memberService.memberDelete(id);
        return "redirect:/admin/main/user/management";
    }

    @GetMapping("/member/modify/{id}")
    public String boardModify(@PathVariable("id") Long id, Model model){
        model.addAttribute("member", memberService.memberView(id));

        return "/member/memberModify";
    }

    @PostMapping("/member/update/{id}")
    public String boardUpdate(@PathVariable("id") Long id,UserDto member){
        UserDto userTemp = memberService.memberView(id);

        userTemp.setStudentId(member.getStudentId());
        userTemp.setStudentName(member.getStudentName());
        userTemp.setMajor(member.getMajor());
        userTemp.setGender(member.getGender());
        userTemp.setPhoneNum(member.getPhoneNum());
        userTemp.setEmail(member.getEmail());

        memberService.savaMember(member);
        return "redirect:/admin/main/user/management";
    }
}
