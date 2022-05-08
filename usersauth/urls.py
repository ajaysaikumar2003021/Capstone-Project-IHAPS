from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import UserViewSet, GetUserViewSet, ChangePasswordViewSet


router = routers.DefaultRouter()
router.register('users', UserViewSet, basename='users')
router.register('user', GetUserViewSet, basename='user')
router.register('changepassword', ChangePasswordViewSet, basename='updatepassword')
# router.register('books', BookViewSet, basename='books')

urlpatterns = [
    path('', include(router.urls)),
]
