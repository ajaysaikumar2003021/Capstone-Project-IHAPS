# from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from usersauth.permissions import FoodAndWasteOwner, FoodAndWasteContributor
from . import models
from . import serializers

# Create your views here.

class FoodBeveragePurchasingViewSet(viewsets.ModelViewSet):
    queryset = models.FoodBeveragePurchasing.objects.all()
    serializer_class = serializers.FoodBeveragePurchasingSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated, FoodAndWasteContributor, )