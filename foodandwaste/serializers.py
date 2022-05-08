from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from . import models

# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ('id', 'username', 'email', 'password')
#         # extra_kwargs = {'password': {'write_only': True, 'required' : True}}

#     def  create(self, validated_data):
#         user = User.objects.create_user(**validated_data)
#         Token.objects.create(user=user)
#         return user


class FoodBeveragePurchasingSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.FoodBeveragePurchasing
        # fields = ('id', 'name', 'description', 'created_at', 'updated_at')
        fields = '__all__'
