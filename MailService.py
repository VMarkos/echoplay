# MailService.py

from smtplib import SMTP

from email.message import EmailMessage

class EmailService:
    """Email Message service, which sends and receives messages - to be used as middleware for jekyll site forms"""
    def __init__(self, host: str='localhost') -> None:
        self.host: str = host
        self.msg: EmailMessage = EmailMessage()
    

    def create_email(self,
        subject: str,
        to_addr: str,
        content: str,
        from_addr: str='noreply@nowhere.com',
    ):
        self.msg.set_content(contents)
        self.msg['Subject'] = subject
        self.msg['To'] = to_addr
        self.msg['From'] = from_addr


    def send_email(self) -> None:
        s = SMTP(self.host)
        s.send_message(self.msg)
        s.quit()
