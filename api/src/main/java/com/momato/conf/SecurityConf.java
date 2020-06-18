package com.momato.conf;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.momato.exception.handler.RestAuthenticationEntryPoint;
import com.momato.filter.CustomLogoutFilter;
import com.momato.filter.JwtAuthenticationFilter;
import com.momato.filter.JwtAuthorizationFilter;
import com.momato.filter.JwtExceptionFilter;
import com.momato.member.MemberService;
import com.momato.member.MemberServiceImpl;


@Configuration
@EnableWebSecurity
public class SecurityConf extends WebSecurityConfigurerAdapter{
	@Autowired
	MemberService service;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(authenticationProvider());
    }

    @Bean
    DaoAuthenticationProvider authenticationProvider(){
        DaoAuthenticationProvider daoAuthenticationProvider = new DaoAuthenticationProvider();
        daoAuthenticationProvider.setPasswordEncoder(passwordEncoder());
        daoAuthenticationProvider.setUserDetailsService((MemberServiceImpl)service);
        return daoAuthenticationProvider;
    }
	
	
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.httpBasic().disable()
        		.cors().configurationSource(corsConfigurationSource())
        		.and()
                .csrf().disable()
                .authorizeRequests()
                .antMatchers(HttpMethod.POST, "/members").permitAll()
                .antMatchers(HttpMethod.GET, "/members/tempPass").permitAll()
                .antMatchers(HttpMethod.POST, "/members/signin").permitAll()
                .antMatchers(HttpMethod.GET, "/static/gradeImg/**").permitAll()
                .antMatchers(HttpMethod.GET, "/tomatoTimer/**").permitAll()
                .anyRequest().authenticated()
                .and()
                .exceptionHandling().authenticationEntryPoint(new RestAuthenticationEntryPoint())
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .addFilterBefore(new JwtExceptionFilter(), JwtAuthenticationFilter.class)
                .addFilter(getJWTAuthenticationFilter())
                .addFilter(new JwtAuthorizationFilter(authenticationManager(), service))
                .addFilter(new CustomLogoutFilter(service));
    }
    
    public JwtAuthenticationFilter getJWTAuthenticationFilter() throws Exception {
        final JwtAuthenticationFilter filter = new JwtAuthenticationFilter(authenticationManager());
        filter.setFilterProcessesUrl("/members/signin");
        return filter;
    }

    @Bean
    PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
    
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowCredentials(true);
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
        configuration.setAllowedHeaders(Arrays.asList("X-Requested-With","Origin","Content-Type","Accept","Authorization"));

        configuration.setExposedHeaders(Arrays.asList("Access-Control-Allow-Headers", "Authorization, x-xsrf-token, Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, " +
                "Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"));

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
	
}
