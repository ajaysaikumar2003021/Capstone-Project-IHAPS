from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from . import views

routers = routers.DefaultRouter()

routers.register('campusfleet', views.CampusFleetViewSet, basename='campusfleet')
# routers.register('campusfleetcustom', views.CustomViewSet, basename='campusfleet')



urlpatterns = [
    path('', include(routers.urls)),
]