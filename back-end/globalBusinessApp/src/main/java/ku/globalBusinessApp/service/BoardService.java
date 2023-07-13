package ku.globalBusinessApp.service;

import ku.globalBusinessApp.dto.BoardDto;
import ku.globalBusinessApp.dto.UserDto;
import ku.globalBusinessApp.repository.BoardRepository;
import ku.globalBusinessApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardService {
    UserRepository userRepository;
    BoardRepository boardRepository;
    @Autowired
    public BoardService(UserRepository userRepository, BoardRepository boardRepository) {
        this.userRepository = userRepository;
        this.boardRepository = boardRepository;
    }

    public List<BoardDto> showPost() {
        return boardRepository.findAll();
    }
    public void savePost(BoardDto post) {boardRepository.save(post);}

    public BoardDto boardView(Long id){
        return boardRepository.findById(id).get();
    }

    public void boardDelete(Long id){
        boardRepository.deleteById(id);
    }
    public List<BoardDto> selectPostByDepartment(String department){
        return boardRepository.findByDepartment(department);
    }



    public List<BoardDto> selectPostByTitleSearch(String title){
        return boardRepository.findByTitleContaining(title);
    }

    public List<BoardDto> selectPostByWriterSearch(String writer){
        return boardRepository.findByWriterContaining(writer);
    }

    public List<BoardDto> selectPostByHeaderSearch(String header){
        return boardRepository.findByHeaderContaining(header);
    }

    public List<BoardDto> selectPostByDepartmentSearch(String department){
        return boardRepository.findByDepartmentContaining(department);
    }


}
