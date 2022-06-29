
# from django.shortcuts import render
import re
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from usersauth.permissions import ResearchAndScholarshipOwner, ResearchAndScholarshipContributor
from rest_framework.response import Response
from . import models
from . import serializers

# Create your views here.



class FacultySustResearchAndServiceViewSet(viewsets.ModelViewSet):
    queryset = models.FacultySustResearchAndService.objects.all()
    serializer_class = serializers.FacultySustResearchAndServiceSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated, ResearchAndScholarshipContributor, )

class EmployessEngagedInSustResearchViewSet(viewsets.ReadOnlyModelViewSet):
    
    serializer_class = serializers.FacultySustResearchAndServiceSerializer

    def list(self, request, *args, **kwargs):
        queryset = models.FacultySustResearchAndService.objects.all()
        
        return Response({'response':'success', 'data': queryset.count()})


class DeptsContainingSustResearchEmpViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = serializers.FacultySustResearchAndServiceSerializer

    def list(self, request, *args, **kwargs):
        queryset = models.FacultySustResearchAndService.objects.all()
        depts = []
        for obj in queryset.values():
            # print(obj['department_affiliation'])
            if obj['department'] not in depts:
                depts.append(obj['department'])
        return Response({'response':'success', 'data': len(depts)})


class FacultyConductingSustResByDeptViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = serializers.FacultySustResearchAndServiceSerializer

    def list(self, request, *args, **kwargs):
        request_data = request.query_params
        print(request_data)
        queryset = models.FacultySustResearchAndService.objects.filter(reporting_period_start_date__range=[request.query_params['startdate'], request.query_params['enddate']])
        depts = {}
        for obj in queryset.values():
            # print(obj['department_affiliation'])
            if obj['department'] not in depts:
                # depts.append(obj['department_affiliation'])
                depts[obj['department']] = 1
            else:
                depts[obj['department']] += 1
        return Response({'response':'success', 'data': depts})


class FSRSReportViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = serializers.FacultySustResearchAndServiceSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated, )
    def list(self, request, *args, **kwargs):
        rep1 = EmployessEngagedInSustResearchViewSet.as_view({'get': 'list'})(request._request).data
        rep2 = DeptsContainingSustResearchEmpViewSet.as_view({'get': 'list'})(request._request).data
        rep3 = FacultyConductingSustResByDeptViewSet.as_view({'get': 'list'})(request._request).data
        try:
            timestamp = models.FacultySustResearchAndService.objects.last().updated_at
        except:
            timestamp = "None"
        # timestamp = timestamp.strftime("%Y-%m-%d %H:%M:%S")
        data = {
            1: rep1['data'] or 0,
            2: rep2['data'] or 0,
            3: rep3['data'],
            4: timestamp
        }
        print(data)
        return Response({'response':'success', 'data': data})