package ku.globalBusinessApp.controller;

import ku.globalBusinessApp.dto.BoardDto;
import ku.globalBusinessApp.dto.UserDto;
import ku.globalBusinessApp.service.BoardService;
import ku.globalBusinessApp.service.LoginService;
import ku.globalBusinessApp.service.MemberService;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;

@Controller
public class MemberController {


    @Autowired
    private LoginService loginService;

    private final MemberService memberService;
    @Autowired
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }
    @GetMapping("/admin/member/list")
    public String showMemberController(Model model){
        List<UserDto> members = memberService.findMembers();
        model.addAttribute("members", memberService.findMembers());
        return "/member/memberList";
    }

    @GetMapping(value = "/admin/member/add")
    public String addMemberController(Model model) throws SQLException {
        return "/member/addMember";
    }

    @PostMapping(value = "/admin/member/add/finish")
    public String insertMemberController(UserDto user){

        memberService.savaMember(user);

        return "redirect:/admin/member/list";
    }

    @GetMapping("admin/member/view")
    public String memberView(Model model, Long id){
        model.addAttribute("member", memberService.memberView(id));
        return "/member/memberView";
    }

    @GetMapping("admin/member/delete")
    public String memberDelete(Long id){
        memberService.memberDelete(id);
        return "redirect:/admin/member/list";
    }

    @GetMapping("admin/member/modify/{id}")
    public String memberModify(@PathVariable("id") Long id, Model model){
        model.addAttribute("member", memberService.memberView(id));

        return "/member/memberModify";
    }

    @PostMapping("admin/member/update/{id}")
    public String memberUpdate(@PathVariable("id") Long id,UserDto member){
        UserDto userTemp = memberService.memberView(id);

        userTemp.setStudentId(member.getStudentId());
        userTemp.setStudentName(member.getStudentName());
        userTemp.setMajor(member.getMajor());
        userTemp.setGender(member.getGender());
        userTemp.setPhoneNum(member.getPhoneNum());
        userTemp.setEmail(member.getEmail());

        memberService.savaMember(userTemp);
        return "redirect:/admin/member/list";
    }
}
