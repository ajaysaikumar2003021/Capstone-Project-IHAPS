from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from . import views

routers = routers.DefaultRouter()

routers.register('peertopeeroutreach', views.PeerToPeerOutreachViewSet, basename='peertopeeroutreach')
routers.register('studentsustgrpproginitiative', views.StudentSustGrpProgInitiativeViewSet, basename='studentsustgrpproginitiative')
routers.register('continuingeducationcourse', views.ContinuingEducationCourseViewSet, basename='continuingeducationcourse')
routers.register('staffprofessionaldevelopment', views.StaffProfessionalDevelopmentViewSet, basename='staffprofessionaldevelopment')
routers.register('communityeducationprogram', views.CommunityEducationProgramViewSet, basename='communityeducationprogram')
routers.register('communitypartnership', views.CommunityPartnershipViewSet, basename='communitypartnership')
routers.register('sustoutreacheduprograms', views.SustOutreachEduProgramsViewSet, basename='sustoutreacheduprograms')
routers.register('activelytrainededucatorsallprograms', views.ActivelyTrainedEducatorsAllProgramsViewSet, basename='activelytrainededucatorsallprograms')
routers.register('totalnumofhoursworkedbytrainededucators', views.TotalNumOfHoursWorkedByTrainedEducatorsViewSet, basename='totalnumofhoursworkedbytrainededucators')
routers.register('typesofsupportedaudience', views.TypesOfSupportedAudienceViewSet, basename='typesofsupportedaudience')
routers.register('p2preport', views.P2PReportViewSet, basename='p2preport')

urlpatterns = [
    path('', include(routers.urls)),
]