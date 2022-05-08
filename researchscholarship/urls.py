from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from . import views
from django.conf.urls.static import static
from django.conf import settings

routers = routers.DefaultRouter()
routers.register('facultysustresearchandservice', views.FacultySustResearchAndServiceViewSet, basename='facultysustresearchandservice')
routers.register('employeesengagedinsustresearch', views.EmployessEngagedInSustResearchViewSet, basename='employeesengagedinsustresearch')
routers.register('deptscontainingsustersearchEmp', views.DeptsContainingSustResearchEmpViewSet, basename='deptscontainingSustResearchEmp')
routers.register('facultiesconductingsustresbydept', views.FacultyConductingSustResByDeptViewSet, basename='facultiescontainingSustResByDept')
routers.register('fsrsreport', views.FSRSReportViewSet, basename='fsrsreport')

urlpatterns = [
    path('', include(routers.urls)),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)