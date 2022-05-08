from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from . import views

routers = routers.DefaultRouter()
routers.register('foodbeveragepurchasing', views.FoodBeveragePurchasingViewSet, basename='foodbeveragepurchasing')

urlpatterns = [
    path('', include(routers.urls)),
]