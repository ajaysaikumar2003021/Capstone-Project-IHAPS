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


class PeerToPeerOutreachSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.PeerToPeerOutreach
        # fields = ('id', 'name', 'description', 'created_at', 'updated_at')
        fields = '__all__'

class StudentSustGrpProgInitiativeSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.StudentSustGrpProgInitiative
        # fields = ('id', 'name', 'description', 'created_at', 'updated_at')
        fields = '__all__'

class ContinuingEducationCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ContinuingEducationCourse
        # fields = ('id', 'name', 'description', 'created_at', 'updated_at')
        fields = '__all__'

class StaffProfessionalDevelopmentSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.StaffProfessionalDevelopment
        # fields = ('id', 'name', 'description', 'created_at', 'updated_at')
        fields = '__all__'

class CommunityEducationProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CommunityEducationProgram
        # fields = ('id', 'name', 'description', 'created_at', 'updated_at')
        fields = '__all__'

class CommunityPartnershipSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CommunityPartnership
        # fields = ('id', 'name', 'description', 'created_at', 'updated_at')
        fields = '__all__'
