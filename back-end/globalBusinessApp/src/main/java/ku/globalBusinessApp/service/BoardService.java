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

    public BoardDto boardview(Long id){
        return boardRepository.findById(id).get();
    }

    public void boardDelete(Long id){
        boardRepository.deleteById(id);
    }
}
