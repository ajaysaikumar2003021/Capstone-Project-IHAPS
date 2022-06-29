# from django.shortcuts import render
from time import time
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from usersauth.permissions import CurriculumOwner, CurriculumContributor
from django.db.models import Q, Count
from rest_framework.response import Response
from . import models
from . import serializers
from django.http import HttpResponse
import datetime
# Create your views here.


# class POCViewSet(viewsets.ModelViewSet):
#     queryset = models.POC.objects.all()
#     serializer_class = serializers.POCSerializer    

class AcademicCourseViewSet(viewsets.ModelViewSet):
    queryset = models.AcademicCourse.objects.all()
    serializer_class = serializers.AcademicCourseSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated, CurriculumContributor, )

class AcademicProgramViewSet(viewsets.ModelViewSet):
    queryset = models.AcademicProgram.objects.all()
    serializer_class = serializers.AcademicProgramSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated, CurriculumContributor, )

class CampusAsLivingLabViewSet(viewsets.ModelViewSet):
    queryset = models.CampusAsLivingLab.objects.all()
    serializer_class = serializers.CampusAsLivingLabSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated, CurriculumContributor, )

# Queries for Reports
class UGCoursesOfferedViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = serializers.AcademicCourseSerializer

    def list(self, request, *args, **kwargs):
        queryset = models.AcademicCourse.objects.filter(level_of_course='ug')
        return Response({'results': 'response', 'data': queryset.count()})

class UGCoursesSustFocusedViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = serializers.AcademicCourseSerializer

    def list(self, request, *args, **kwargs):
        queryset = models.AcademicCourse.objects.filter(level_of_course='ug', course_type='Sustainability-Focused')
        return Response({'results': 'response', 'data': queryset.count()})
    
class UGCoursesSustInclusiveViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = serializers.AcademicCourseSerializer

    def list(self, request, *args, **kwargs):
        queryset = models.AcademicCourse.objects.filter(level_of_course='ug', course_type='Sustainability-Inclusive')
        return Response({'results': 'response', 'data': queryset.count()})

class PGCoursesOfferedViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = serializers.AcademicCourseSerializer

    def list(self, request, *args, **kwargs):
        queryset = models.AcademicCourse.objects.filter(level_of_course='pg')
        return Response({'results': 'response', 'data': queryset.count()})

class PGCoursesSustFocusedViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = serializers.AcademicCourseSerializer

    def list(self, request, *args, **kwargs):
        queryset = models.AcademicCourse.objects.filter(level_of_course='pg', course_type='Sustainability-Focused')
        
        return Response({'results': 'response', 'data': queryset.count()})

class PGCoursesSustInclusiveViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = serializers.AcademicCourseSerializer

    def list(self, request, *args, **kwargs):
        queryset = models.AcademicCourse.objects.filter(level_of_course='pg', course_type='Sustainability-Inclusive')
        
        return Response({'results': 'response', 'data': queryset.count()})

class DeptOfferCoursesViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = serializers.AcademicCourseSerializer

    def list(self, request, *args, **kwargs):
        queryset = models.AcademicCourse.objects.filter(Q(level_of_course='ug') | Q(level_of_course='pg'))
        vals = queryset.values()
        distinct_dept = []
        for v in vals:
            if v['department'] not in distinct_dept:
                distinct_dept.append(v['department'])
        # print(distinct_dept)  
        return Response({'results': 'response', 'data': len(distinct_dept)})

class DeptOfferSustCoursesViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = serializers.AcademicCourseSerializer

    def list(self, request, *args, **kwargs):
        queryset = models.AcademicCourse.objects.filter(Q(course_type='Sustainability-Focused') | Q(course_type='Sustainability-Inclusive')).values().annotate(dcount=Count('department'))
        vals = queryset.values()
        distinct_dept = []
        for v in vals:
            if v['department'] not in distinct_dept:
                distinct_dept.append(v['department'])
        # print(distinct_dept)  
        return Response({'results': 'response', 'data': len(distinct_dept)})

class ACReportViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = serializers.AcademicCourseSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated, )
    
    def list(self, request, *args, **kwargs):
        rep1 = UGCoursesOfferedViewSet.as_view({'get': 'list'})(request._request).data
        rep2 = UGCoursesSustFocusedViewSet.as_view({'get': 'list'})(request._request).data
        rep3 = UGCoursesSustInclusiveViewSet.as_view({'get': 'list'})(request._request).data
        rep4 = PGCoursesOfferedViewSet.as_view({'get': 'list'})(request._request).data
        rep5 = PGCoursesSustFocusedViewSet.as_view({'get': 'list'})(request._request).data
        rep6 = PGCoursesSustInclusiveViewSet.as_view({'get': 'list'})(request._request).data
        rep7 = DeptOfferCoursesViewSet.as_view({'get': 'list'})(request._request).data
        rep8 = DeptOfferSustCoursesViewSet.as_view({'get': 'list'})(request._request).data
        timestamp = models.AcademicCourse.objects.last().updated_at
        # timestamp = timestamp.strftime("%Y-%m-%d %H:%M:%S")
        # print(timestamp)
        data = {
            1: rep1['data'] or 0,
            2: rep2['data'] or 0,
            3: rep3['data'] or 0,
            4: rep4['data'] or 0,
            5: rep5['data'] or 0,
            6: rep6['data'] or 0,
            7: rep7['data'] or 0,
            8: rep8['data'] or 0,
            9: timestamp
        }
        return Response({'response':'success', 'data': data})


# Academic Program Queries
class AcademicProgramByLevelViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = serializers.AcademicProgramSerializer

    def list(self, request, *args, **kwargs):
        levels = {
            'ug': 0,
            'pg': 0
        }
        queryset = models.AcademicProgram.objects.all()
        for program in queryset:
            levels[program.level_of_program] += 1
            
        levels1 = {
            'Under Graduate': levels["ug"],
            'Graduate': levels["pg"]
        }
        return Response({'results': 'response', 'data': levels1})

class AcademicProgramByTypeViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = serializers.AcademicProgramSerializer

    def list(self, request, *args, **kwargs):
        types = {
            'Major': 0,
            'Minor': 0,
            'Concentration': 0,
            'Degree': 0,
            'Certificate': 0,
            'Imersive Experience': 0
        }
        
        queryset = models.AcademicProgram.objects.all()
        for program in queryset:
            types[program.program_type] += 1

        return Response({'results': 'response', 'data': types})

# breif description one need to be discussed
class NameAndDescViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = serializers.AcademicProgramSerializer
    
    def list(self, request, *args, **kwargs):
        queryset = models.AcademicProgram.objects.all()
        vals = queryset.values()
        print(vals)
        desc_by_type = {}
        for v in vals:
            print('came to loop')
            if v['program_type'] not in desc_by_type:
                desc_by_type[v['program_type']] = v['description']
        print(desc_by_type)  
        return Response({'results': 'response', 'data': desc_by_type})

class AcademicProgramWithSustOutcomeViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = serializers.AcademicProgramSerializer
    
    def list(self, request, *args, **kwargs):
        queryset = models.AcademicProgram.objects.filter(adopted_sust_focused_learning_outcome=True)
        # vals = queryset.values()
        # desc_by_type = {}
        # for v in vals:
        #     if v['type'] not in desc_by_type:
        #         v['type'] = v['description']
        # # print(distinct_dept)  
        return Response({'results': 'response', 'data': queryset.count()})


    def list(self, request, *args, **kwargs):
        queryset = models.AcademicProgram.objects.filter(adopted_sust_focused_learning_outcome=True)
        
        return Response({'response': 'success', 'data': queryset.count()})

class AcademicProgramSustByDeptViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = serializers.AcademicProgramSerializer

    def list(self, request, *args, **kwargs):
        queryset = models.AcademicProgram.objects.filter(adopted_sust_focused_learning_outcome=True)
        vals = queryset.values()
        programs_in_dept = {}
        for v in vals:
            if v['college_or_unit'] not in programs_in_dept:
                programs_in_dept[v['college_or_unit']] = 1
            else:
                programs_in_dept[v['college_or_unit']] += 1
                
        return Response({'results': 'response', 'data': programs_in_dept})

class APReportViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = serializers.AcademicProgramSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated, )

    def list(self, request, *args, **kwargs):
        rep1 = AcademicProgramByLevelViewSet.as_view({'get': 'list'})(request._request).data
        rep2 = AcademicProgramByTypeViewSet.as_view({'get': 'list'})(request._request).data
        rep3 = NameAndDescViewSet.as_view({'get': 'list'})(request._request).data
        rep4 = AcademicProgramWithSustOutcomeViewSet.as_view({'get': 'list'})(request._request).data
        rep5 = AcademicProgramSustByDeptViewSet.as_view({'get': 'list'})(request._request).data
        timestamp = models.AcademicProgram.objects.last().updated_at
        # timestamp = timestamp.strftime("%Y-%m-%d %H:%M:%S")

        data = {
            1: rep1['data'] or 0,
            2: rep2['data'] or 0,
            3: rep3['data'],
            4: rep4['data'] or 0,
            5: rep5['data'],
            6: timestamp
        }
        return Response({'response':'success', 'data': data})
   

# Applied Student Learning
class CLLProjectsByAcadYearViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = serializers.CampusAsLivingLabSerializer

    def list(self, request, *args, **kwargs):
        queryset = models.CampusAsLivingLab.objects.all()
        vals = queryset.values()
        distinct_years = {}
        for v in vals:
            print(f"value being fetched: {v['reporting_period_start_date']}")
            datem = str(v['reporting_period_start_date']).split('-')[0]
            print(f"printing date: {datem}")
            # if v['reporting_academic_year'] not in distinct_years:
            #     distinct_years[v['reporting_academic_year']] = 1
            # else:
            #     distinct_years[v['reporting_academic_year']] += 1
            if v['reporting_period_start_date'] not in distinct_years:
                distinct_years[datem] = 1
            else:
                distinct_years[datem ] += 1
        return Response({'results': 'response', 'data': distinct_years})

# multiple selections need to be handled

class ProjectsByImpactAreaViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = serializers.CampusAsLivingLabSerializer

    def list(self, request, *args, **kwargs):
        
        request_params = request.query_params
        queryset = models.CampusAsLivingLab.objects.filter(project_date__range=(request_params['startdate'], request_params['enddate']))
        vals = queryset.values()
        distinct_areas = {}
        for v in vals:
            if v['contribution_to_impact_area'] not in distinct_areas:
                distinct_areas[v['contribution_to_impact_area']] = 1
            else:
                distinct_areas[v['contribution_to_impact_area']] += 1
        return Response({'results': 'response', 'data': distinct_areas})

class ProjectsByTypeViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = serializers.CampusAsLivingLabSerializer

    def list(self, request, *args, **kwargs):
        request_params = request.query_params

        queryset = models.CampusAsLivingLab.objects.filter(project_date__range=(request_params['startdate'], request_params['enddate']))
        vals = queryset.values()
        distinct_types = {}
        for v in vals:
            if v['project_type'] not in distinct_types:
                distinct_types[v['project_type']] = 1
            else:
                distinct_types[v['project_type']] += 1
        return Response({'results': 'response', 'data': distinct_types})


class CLLReportViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = serializers.CampusAsLivingLabSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated, )

    def list(self, request, *args, **kwargs):
        rep1 = CLLProjectsByAcadYearViewSet.as_view({'get': 'list'})(request._request).data
        rep2 = ProjectsByImpactAreaViewSet.as_view({'get': 'list'})(request._request).data
        rep3 = ProjectsByTypeViewSet.as_view({'get': 'list'})(request._request).data
        timestamp = models.CampusAsLivingLab.objects.last().updated_at
        # timestamp = timestamp.strftime("%Y-%m-%d %H:%M:%S")

        data = {
            1: rep1['data'],
            2: rep2['data'],
            3: rep3['data'],
            4: timestamp 
        }
        return Response({'response':'success', 'data': data})