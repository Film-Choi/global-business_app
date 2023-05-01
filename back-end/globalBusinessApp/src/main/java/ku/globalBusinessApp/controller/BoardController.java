package ku.globalBusinessApp.controller;

import ku.globalBusinessApp.dto.BoardDto;
import ku.globalBusinessApp.dto.UserDto;
import ku.globalBusinessApp.service.BoardService;
import ku.globalBusinessApp.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.sql.SQLException;
import java.util.List;


@Controller
public class BoardController {
    private final BoardService boardService;
    @Autowired
    public BoardController(BoardService boardService) {
        this.boardService = boardService;
    }
    @GetMapping(value = "/show/board/list")
    public String showPostController(Model model) throws SQLException {
        List<BoardDto> boardDto = boardService.showPost();
        System.out.println(boardDto);
        model.addAttribute("boardDto", boardService.showPost());
        return "/board/boardList";
    }
    @GetMapping(value = "/register/post")
    public String registerPostController(Model model) throws SQLException {
        return "/board/register";
    }

    @PostMapping (value = "/register/post/finish")
    public String insertPostController(BoardDto post){

        boardService.savePost(post);

        return "redirect:/show/board/list";
    }

    @GetMapping("/board/view")
    public String boardView(Model model, Long id){
        BoardDto boardTemp = boardService.boardview(id);
        boardTemp.setViewCount(boardTemp.getViewCount()+1);
        boardService.savePost(boardTemp);
        model.addAttribute("post", boardService.boardview(id));

        return "/board/boardView";
    }

    @GetMapping("/board/delete")
    public String boardDelete(Long id){
        boardService.boardDelete(id);
        return "redirect:/show/board/list";
    }

    @GetMapping("/board/modify/{id}")
    public String boardModify(@PathVariable("id") Long id, Model model){
        model.addAttribute("post", boardService.boardview(id));

        return "/board/boardModify";
    }

    @PostMapping("/board/update/{id}")
    public String boardUpdate(@PathVariable("id") Long id, BoardDto post){
        BoardDto boardTemp = boardService.boardview(id);

        boardTemp.setTitle(post.getTitle());
        boardTemp.setWriter(post.getWriter());
        boardTemp.setHeader(post.getHeader());
        boardTemp.setDepartment(post.getDepartment());
        boardTemp.setContent(post.getContent());

        boardService.savePost(boardTemp);
        return "redirect:/show/board/list";
    }
}
