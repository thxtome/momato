package com.momato.conf;

import javax.servlet.ServletContext;
import javax.websocket.server.ServerContainer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;
import org.springframework.web.socket.server.standard.ServletServerContainerFactoryBean;

import com.momato.websocket.handler.TomatoSocketHandler;

@Configuration
@EnableWebSocket
public class WebSocketConf implements WebSocketConfigurer {

	@Autowired
    private ServletContext servletContext;
    private boolean ignoreNullWsContainer;
	
	@Autowired
	private TomatoSocketHandler tomatoSocketHandler;
	
	@Override
	public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
		registry.addHandler(tomatoSocketHandler, "/tomatoTimer").setAllowedOrigins("*").withSockJS();
	}
	
    @Bean
    public ServletServerContainerFactoryBean createWebSocketContainer() {
    	// Check if null-container is allowed to prevent Exceptions
        if (ignoreNullWsContainer) {
            // Check if attribute is set in the ServletContext
            ServerContainer serverContainer = (ServerContainer) this.servletContext.getAttribute("javax.websocket.server.ServerContainer");
            if (serverContainer == null) {
                System.out.println("Could not initialize Websocket Container in Testcase.");
                return null;
            }
        }
    	
        ServletServerContainerFactoryBean container = new ServletServerContainerFactoryBean();
        container.setMaxSessionIdleTimeout(1000*3600*24L);
        return container;
    }

    @Value("${project.ignore-null-websocket-container:false}")
    private void setIgnoreNullWsContainer(String flag) {
        this.ignoreNullWsContainer = Boolean.parseBoolean(flag);
    }
	
}
