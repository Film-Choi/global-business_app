package ku.globalBusinessApp.config;

import ku.globalBusinessApp.service.AdminLoginService;
import ku.globalBusinessApp.service.LoginService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private AdminLoginService adminLoginService;

    public SecurityConfig(AdminLoginService adminLoginService) {
        this.adminLoginService = adminLoginService;
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Override
    public void configure(HttpSecurity http) throws Exception {

        http.csrf().disable()
                .authorizeRequests()
                .antMatchers("/adminLogin").permitAll()
                .antMatchers("/admin/**").hasRole("ADMIN")
                .and()
                .formLogin()
                .loginPage("/adminLogin")
                .usernameParameter("adminId")
                .passwordParameter("adminPW")
                .loginProcessingUrl("/loginpc")
                .defaultSuccessUrl("/admin/main", true);
//                .failureUrl("/show/board/list");
//                .and()
//                .logout()
//                .logoutSuccessUrl("/adminLogin")
//                .invalidateHttpSession(true) //세션 날리기
//                .and()
//                .exceptionHandling()
//                .accessDeniedPage("/accessDenied");

    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(adminLoginService).passwordEncoder(passwordEncoder());
    }
}