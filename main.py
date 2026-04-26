# main.py

from MailService import EmailService


def main():
    to = 'vassileiosmarkos@gmail.com'
    subject = 'Test email'
    content = 'This is just a dummy message'
    es = EmailService()
    es.create_email(subject, to, content)
    es.send_email()


if __name__ == '__mail__':
    main()
