package com.momato.util;

import java.util.Date;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

@Component
public class MailUtil {
	@Autowired
	JavaMailSender javaMailSender;

	//그냥 텍스트 메일
	public void sendMail(String memberId, String tempPassword) throws MessagingException {
	    MimeMessage message = javaMailSender.createMimeMessage();
	    message.setSubject("MOMATO 임시 비밀번호");
	    message.setRecipient(Message.RecipientType.TO, new InternetAddress(memberId));
	    message.setText("임시비밀번호는 " + tempPassword + "입니다.");
	    message.setSentDate(new Date());
	    javaMailSender.send(message);
	}

}
