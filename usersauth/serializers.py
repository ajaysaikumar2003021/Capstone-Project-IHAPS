from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from django.contrib.auth import get_user_model
from django.contrib.auth.backends import ModelBackend
# from .models import Book

User._meta.get_field('email')._unique = True

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # fields = '__all__'
        fields = ('id', 'username', 'email', 'password')
        # extra_kwargs = {'password': {'write_only': True, 'required' : True}}

    def create(self, validated_data):
        validated_data['username'] = validated_data['email']
        print('validated_data', validated_data)
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user
    
class EmailBackend(ModelBackend):
    def authenticate(self, request, username=None, email=None, password=None, **kwargs):
        # print(f'request: {request.POST["email"]}\nusername: {username}\nemail: {email}\npassword: {password}')
        UserModel = get_user_model()
        try:
            user = UserModel.objects.get(email=username)
        except UserModel.DoesNotExist:
            return None
        else:
            if user.check_password(password):
                return user
        return None

class ChangePasswordSerializer(serializers.Serializer):
    model = User

    """
    Serializer for password change endpoint.
    """
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)
    

class GetUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = ['password']
        # fields = ('id', 'username', 'email', 'password')
        # extra_kwargs = {'password': {'write_only': True, 'required' : True}}


# Book Serializer
# class BookSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Book
#         fields = ('id', 'title')        

        