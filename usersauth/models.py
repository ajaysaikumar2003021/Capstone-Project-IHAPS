from django.dispatch import receiver
from django.urls import reverse
from django_rest_passwordreset.signals import reset_password_token_created
from django.core.mail import send_mail  


@receiver(reset_password_token_created)
def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):

    email_plaintext_message = f"https://react-ihaps.herokuapp.com/password_reset_confirm?token={reset_password_token.key}"

    send_mail(
        # title:
        "Password Reset for IHAPS",
        # message:
        email_plaintext_message,
        # from:
        "nikithatadikonda9@gmail.com",
        # to:
        [reset_password_token.user.email],
        fail_silently=True
    )


# from django.contrib.auth.models import AbstractUser
# from django.db import models
# from django.utils.translation import ugettext_lazy as _


# class User(AbstractUser):
#     """User model."""

#     username = None
#     email = models.EmailField(_('email address'), unique=True)

#     USERNAME_FIELD = 'email'
#     REQUIRED_FIELDS = []