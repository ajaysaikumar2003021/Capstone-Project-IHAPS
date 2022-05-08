from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from . import views

routers = routers.DefaultRouter()
# routers.register('poc', views.POCViewSet, basename='poc')
routers.register('academiccourse', views.AcademicCourseViewSet, basename='academiccourse')
routers.register('academicprogram', views.AcademicProgramViewSet, basename='academicprogram')
routers.register('campusaslivinglab', views.CampusAsLivingLabViewSet, basename='campusaslivinglab')

# Academic Courses
routers.register('ugcoursesoffered', views.UGCoursesOfferedViewSet, basename='ugcoursesoffered')
routers.register('ugcoursessustfocused', views.UGCoursesSustFocusedViewSet, basename='ugcoursessustfocused')
routers.register('ugcoursessustinclusive', views.UGCoursesSustInclusiveViewSet, basename='ugcoursessustinclusive')
routers.register('pgcoursesoffered', views.PGCoursesOfferedViewSet, basename='pgcoursesoffered')
routers.register('pgcoursessustfocused', views.PGCoursesSustFocusedViewSet, basename='ugcoursessustfocused')
routers.register('pgcoursessustinclusive', views.PGCoursesSustInclusiveViewSet, basename='ugcoursessustinclusive')
routers.register('deptoffercourses', views.DeptOfferCoursesViewSet, basename='deptoffercourses')
routers.register('deptoffersustcourses', views.DeptOfferSustCoursesViewSet, basename='deptoffersustcourses')
routers.register('acreport', views.ACReportViewSet, basename='acreport')

# academic programs
routers.register('academicprogrambylevel', views.AcademicProgramByLevelViewSet, basename='academicprogrambylevel')
routers.register('academicprogrambytype', views.AcademicProgramByTypeViewSet, basename='academicprogrambytype')
# 1 remaining here
routers.register('academicprogramwithsustoutcome', views.AcademicProgramWithSustOutcomeViewSet, basename='academicprogramwithsustoutcome')
routers.register('academincprogramsustbydept', views.AcademicProgramSustByDeptViewSet, basename='academincprogramsustbydept')
routers.register('apreport', views.APReportViewSet, basename='apreport')

# Applied student learning
routers.register('cllprojectsbyacadyear', views.CLLProjectsByAcadYearViewSet, basename='cllprojectsbyacadyear')
# 1 remaining
routers.register('cllprojectsbytype', views.ProjectsByTypeViewSet, basename='cllprojectsbytype')
routers.register('cllreport', views.CLLReportViewSet, basename='cllreport')


urlpatterns = [
    path('', include(routers.urls)),
]