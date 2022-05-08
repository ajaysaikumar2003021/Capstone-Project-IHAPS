# from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from .serializers import UserSerializer, GetUserSerializer, ChangePasswordSerializer
# from .models import Book
from rest_framework.response import Response
from rest_framework import generics, status
from django.shortcuts import get_object_or_404

# from .permissions import SustSiteVisitor

# Create your views here.

class UserViewSet(viewsets.ModelViewSet):

    queryset = User.objects.all()
    serializer_class = UserSerializer


class GetUserViewSet(viewsets.ModelViewSet):
    
    serializer_class = GetUserSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = [IsAuthenticated, ]

    def list(self, request, *args, **kwargs):
        serializer = GetUserSerializer(request.user)
        serializer.data.user_permissions = request.user.get_all_permissions()
        data = serializer.data
        data["user_permissions"] = request.user.get_all_permissions()
        return Response(data)
    
class ChangePasswordViewSet(viewsets.ModelViewSet):
        """
        An endpoint for changing password.
        """
        serializer_class = ChangePasswordSerializer
        model = User
        authentication_classes = (TokenAuthentication,)
        permission_classes = (IsAuthenticated,)

        def get_object(self, queryset=None):
            obj = self.request.user
            return obj

        def update(self, request, *args, **kwargs):
            self.object = self.get_object()
            serializer = self.get_serializer(data=request.data)

            if serializer.is_valid():
                # Check old password
                if not self.object.check_password(serializer.data.get("old_password")):
                    return Response({"old_password": ["Wrong password."]}, status=status.HTTP_400_BAD_REQUEST)
                # set_password also hashes the password that the user will get
                self.object.set_password(serializer.data.get("new_password"))
                self.object.save()
                response = {
                    'status': 'success',
                    'code': status.HTTP_200_OK,
                    'message': 'Password updated successfully',
                    'data': []
                }

                return Response(response)

            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
# class BookViewSet(viewsets.ModelViewSet):
#     queryset = Book.objects.all()
#     serializer_class = BookSerializer
#     authentication_classes = (TokenAuthentication,)
#     permission_classes = (IsAuthenticated)
#     # permission_classes = (SustSiteVisitor, )

#     def update(self, request, *args, **kwargs):
#         instance = self.get_object()
#         serializer = self.get_serializer(instance, data=request.data)
#         serializer.is_valid(raise_exception=True)
#         self.perform_update(serializer)
#         return Response(serializer.data)

    