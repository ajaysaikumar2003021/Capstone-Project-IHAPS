# from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from usersauth.permissions import CampusAndCommunityOwner, CampusAndCommunityContributor
from rest_framework.response import Response
from django.db.models import Sum
from . import models
from . import serializers

# Create your views here.

class PeerToPeerOutreachViewSet(viewsets.ModelViewSet):
    queryset = models.PeerToPeerOutreach.objects.all()
    serializer_class = serializers.PeerToPeerOutreachSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated, CampusAndCommunityContributor, )

class StudentSustGrpProgInitiativeViewSet(viewsets.ModelViewSet):
    queryset = models.StudentSustGrpProgInitiative.objects.all()
    serializer_class = serializers.StudentSustGrpProgInitiativeSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated, CampusAndCommunityContributor, )

class ContinuingEducationCourseViewSet(viewsets.ModelViewSet):
    queryset = models.ContinuingEducationCourse.objects.all()
    serializer_class = serializers.ContinuingEducationCourseSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated, CampusAndCommunityContributor, )

class StaffProfessionalDevelopmentViewSet(viewsets.ModelViewSet):
    queryset = models.StaffProfessionalDevelopment.objects.all()
    serializer_class = serializers.StaffProfessionalDevelopmentSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated, CampusAndCommunityContributor, )

class CommunityEducationProgramViewSet(viewsets.ModelViewSet):
    queryset = models.CommunityEducationProgram.objects.all()
    serializer_class = serializers.CommunityEducationProgramSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated, CampusAndCommunityContributor, )

class CommunityPartnershipViewSet(viewsets.ModelViewSet):
    queryset = models.CommunityPartnership.objects.all()
    serializer_class = serializers.CommunityPartnershipSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated, CampusAndCommunityContributor, )

# peer to out reach queries.
class SustOutreachEduProgramsViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = serializers.PeerToPeerOutreachSerializer

    def list(self, request, *args, **kwargs):
        request_data = request.query_params
        queryset = models.PeerToPeerOutreach.objects.filter(program_starting_date__range=[request_data['startdate'], request_data['enddate']])


        return Response({'response':'success', 'data': queryset.count()})


class ActivelyTrainedEducatorsAllProgramsViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = serializers.PeerToPeerOutreachSerializer

    def list(self, request, *args, **kwargs):
        request_data = request.query_params
        queryset = models.PeerToPeerOutreach.objects.filter(program_starting_date__range=[request_data['startdate'], request_data['enddate']]).aggregate(Sum('num_actively_trained_educators'))

        return Response({'response':'success', 'data': queryset['num_actively_trained_educators__sum']})

class TotalNumOfHoursWorkedByTrainedEducatorsViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = serializers.PeerToPeerOutreachSerializer

    def list(self, request, *args, **kwargs):
        request_data = request.query_params
        queryset = models.PeerToPeerOutreach.objects.filter(program_starting_date__range=[request_data['startdate'], request_data['enddate']]).aggregate(Sum('num_hours_worked_weekly_per_trained_educators'))

        return Response({'response':'success', 'data': queryset['num_hours_worked_weekly_per_trained_educators__sum']})

class TypesOfSupportedAudienceViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = serializers.PeerToPeerOutreachSerializer

    def list(self, request, *args, **kwargs):
        request_data = request.query_params
        queryset = models.PeerToPeerOutreach.objects.all()
        target_audiences = []
        print(queryset.values())
        for item in queryset.values():
            if item['target_audience'] not in target_audiences:
                target_audiences.append(item['target_audience'])

        return Response({'response':'success', 'data': target_audiences})

class P2PReportViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = serializers.PeerToPeerOutreachSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated, )

    def list(self, request, *args, **kwargs):
        rep1 = SustOutreachEduProgramsViewSet.as_view({'get': 'list'})(request._request).data
        rep2 = ActivelyTrainedEducatorsAllProgramsViewSet.as_view({'get': 'list'})(request._request).data
        rep3 = TotalNumOfHoursWorkedByTrainedEducatorsViewSet.as_view({'get': 'list'})(request._request).data
        rep4 = TypesOfSupportedAudienceViewSet.as_view({'get': 'list'})(request._request).data
        timestamp = models.PeerToPeerOutreach.objects.last().updated_at
        # timestamp = timestamp.strftime("%Y-%m-%d %H:%M:%S")
        data = {
            1: rep1['data'] or 0,
            2: rep2['data'] or 0,
            3: rep3['data'] or 0,
            4: rep4['data'],
            5: timestamp


        }
        return Response({'response':'success', 'data': data})