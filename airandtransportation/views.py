# from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from usersauth.permissions import AirAndTransportationOwner, AirAndTransportationContributor

from . import models
from . import serializers

# Create your views here.

class CampusFleetViewSet(viewsets.ModelViewSet):
    queryset = models.CampusFleet.objects.all()
    serializer_class = serializers.CampusFleetSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated, AirAndTransportationContributor, )

class CustomViewSet(viewsets.ReadOnlyModelViewSet):
    # queryset = models.Custom.objects.all()
    serializer_class = serializers.CampusFleetSerializer
    def get_queryset(self):
        return models.CampusFleet.objects.filter(campus_fleet_title='dfdfdf', reporting_period='2018-01-01')