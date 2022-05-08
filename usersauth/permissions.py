from rest_framework import permissions

# class SustSiteVisitor(permissions.BasePermission):
#     """can view reports and vist site other than workgroup forms."""

#     def has_permission(self, request, view):
#         """return True if the user is authenticated """  
#         print("checking permissions")     
#         print(request.user.get_group_permissions()) 
#         if request.user.is_authenticated and request.user.has_perm('researchscholarship.view_facultysustresearchandservice'):
#             print(request.user.user_permissions)
#             return True
        # return False

class ResearchAndScholarshipOwner(permissions.BasePermission):
    """can view add delete change research and scholarship data """

    def has_permission(self, request, view):
        if (request.user.has_perm('researchscholarship.view_facultysustresearchandservice')
        and request.user.has_perm('researchscholarship.add_facultysustresearchandservice')
        and request.user.has_perm('researchscholarship.delete_facultysustresearchandservice')
        and request.user.has_perm('researchscholarship.change_facultysustresearchandservice')):
            return True
        return False

class ResearchAndScholarshipContributor(permissions.BasePermission):
    """can view add delete change research and scholarship data """

    def has_permission(self, request, view):
        if (request.user.has_perm('researchscholarship.view_facultysustresearchandservice')
        and request.user.has_perm('researchscholarship.add_facultysustresearchandservice')
        and request.user.has_perm('researchscholarship.delete_facultysustresearchandservice')
        and request.user.has_perm('researchscholarship.change_facultysustresearchandservice')):
            return True
        return False

class CampusAndCommunityOwner(permissions.BasePermission):
    """can view add delete change research and scholarship data """

    def has_permission(self, request, view):
        if (request.user.has_perm('campusandcommunity.view_communityeducationprogram')
        and request.user.has_perm('campusandcommunity.add_communityeducationprogram')
        and request.user.has_perm('campusandcommunity.delete_communityeducationprogram')
        and request.user.has_perm('campusandcommunity.change_communityeducationprogram')
        
        and request.user.has_perm('campusandcommunity.view_communitypartnership')
        and request.user.has_perm('campusandcommunity.add_communitypartnership')
        and request.user.has_perm('campusandcommunity.delete_communitypartnership')
        and request.user.has_perm('campusandcommunity.change_communitypartnership')

        and request.user.has_perm('campusandcommunity.view_continuingeducationcourse')
        and request.user.has_perm('campusandcommunity.add_continuingeducationcourse')
        and request.user.has_perm('campusandcommunity.delete_continuingeducationcourse')
        and request.user.has_perm('campusandcommunity.change_continuingeducationcourse')

        and request.user.has_perm('campusandcommunity.view_peertopeeroutreach')
        and request.user.has_perm('campusandcommunity.add_peertopeeroutreach')
        and request.user.has_perm('campusandcommunity.delete_peertopeeroutreach')
        and request.user.has_perm('campusandcommunity.change_peertopeeroutreach')

        and request.user.has_perm('campusandcommunity.view_staffprofessionaldevelopment')
        and request.user.has_perm('campusandcommunity.add_staffprofessionaldevelopment')
        and request.user.has_perm('campusandcommunity.delete_staffprofessionaldevelopment')
        and request.user.has_perm('campusandcommunity.change_staffprofessionaldevelopment')
        
        and request.user.has_perm('campusandcommunity.view_studentsustgrpproginitiative')
        and request.user.has_perm('campusandcommunity.add_studentsustgrpproginitiative')
        and request.user.has_perm('campusandcommunity.delete_studentsustgrpproginitiative')
        and request.user.has_perm('campusandcommunity.change_studentsustgrpproginitiative')
        ):
            return True
        return False

class CampusAndCommunityContributor(permissions.BasePermission):

    """can view add delete change research and scholarship data """

    def has_permission(self, request, view):
        if (request.user.has_perm('campusandcommunity.view_communityeducationprogram')
        and request.user.has_perm('campusandcommunity.add_communityeducationprogram')
        and request.user.has_perm('campusandcommunity.delete_communityeducationprogram')
        and request.user.has_perm('campusandcommunity.change_communityeducationprogram')
        
        and request.user.has_perm('campusandcommunity.view_communitypartnership')
        and request.user.has_perm('campusandcommunity.add_communitypartnership')
        and request.user.has_perm('campusandcommunity.delete_communitypartnership')
        and request.user.has_perm('campusandcommunity.change_communitypartnership')

        and request.user.has_perm('campusandcommunity.view_continuingeducationcourse')
        and request.user.has_perm('campusandcommunity.add_continuingeducationcourse')
        and request.user.has_perm('campusandcommunity.delete_continuingeducationcourse')
        and request.user.has_perm('campusandcommunity.change_continuingeducationcourse')

        and request.user.has_perm('campusandcommunity.view_peertopeeroutreach')
        and request.user.has_perm('campusandcommunity.add_peertopeeroutreach')
        and request.user.has_perm('campusandcommunity.delete_peertopeeroutreach')
        and request.user.has_perm('campusandcommunity.change_peertopeeroutreach')

        and request.user.has_perm('campusandcommunity.view_staffprofessionaldevelopment')
        and request.user.has_perm('campusandcommunity.add_staffprofessionaldevelopment')
        and request.user.has_perm('campusandcommunity.delete_staffprofessionaldevelopment')
        and request.user.has_perm('campusandcommunity.change_staffprofessionaldevelopment')
        
        and request.user.has_perm('campusandcommunity.view_studentsustgrpproginitiative')
        and request.user.has_perm('campusandcommunity.add_studentsustgrpproginitiative')
        and request.user.has_perm('campusandcommunity.delete_studentsustgrpproginitiative')
        and request.user.has_perm('campusandcommunity.change_studentsustgrpproginitiative')
        ):
            return True
        return False

class CurriculumOwner(permissions.BasePermission):
    """can view add delete change research and scholarship data """

    def has_permission(self, request, view):
        print(request.user.get_all_permissions())
        if (request.user.has_perm('curriculum.view_academiccourse')
        and request.user.has_perm('curriculum.add_academiccourse')
        and request.user.has_perm('curriculum.delete_academiccourse')
        and request.user.has_perm('curriculum.change_academiccourse')
        
        and request.user.has_perm('curriculum.view_academicprogram')
        and request.user.has_perm('curriculum.add_academicprogram')
        and request.user.has_perm('curriculum.delete_academicprogram')
        and request.user.has_perm('curriculum.change_academicprogram')

        and request.user.has_perm('curriculum.view_campusaslivinglab')
        and request.user.has_perm('curriculum.add_campusaslivinglab')
        and request.user.has_perm('curriculum.delete_campusaslivinglab')
        and request.user.has_perm('curriculum.change_campusaslivinglab')
        ):
            return True
        return False

class CurriculumContributor(permissions.BasePermission):

    """can view add delete change research and scholarship data """
    def has_permission(self, request, view):
        print(request.user.get_all_permissions())
        if (request.user.has_perm('curriculum.view_academiccourse')
        and request.user.has_perm('curriculum.add_academiccourse')
        and request.user.has_perm('curriculum.delete_academiccourse')
        and request.user.has_perm('curriculum.change_academiccourse')
        
        and request.user.has_perm('curriculum.view_academicprogram')
        and request.user.has_perm('curriculum.add_academicprogram')
        and request.user.has_perm('curriculum.delete_academicprogram')
        and request.user.has_perm('curriculum.change_academicprogram')

        and request.user.has_perm('curriculum.view_campusaslivinglab')
        and request.user.has_perm('curriculum.add_campusaslivinglab')
        and request.user.has_perm('curriculum.delete_campusaslivinglab')
        and request.user.has_perm('curriculum.change_campusaslivinglab')
        ):
            return True
        return False

class FoodAndWasteOwner(permissions.BasePermission):
    """can view add delete change research and scholarship data """

    def has_permission(self, request, view):
        if (request.user.has_perm('foodandwaste.view_foodbeveragepurchasing')
        and request.user.has_perm('foodandwaste.add_foodbeveragepurchasing')
        and request.user.has_perm('foodandwaste.delete_foodbeveragepurchasing')
        and request.user.has_perm('foodandwaste.change_foodbeveragepurchasing')
        ):
            return True
        return False

class FoodAndWasteContributor(permissions.BasePermission):

    """can view add delete change research and scholarship data """

    def has_permission(self, request, view):
        if (request.user.has_perm('foodandwaste.view_foodbeveragepurchasing')
        and request.user.has_perm('foodandwaste.add_foodbeveragepurchasing')
        and request.user.has_perm('foodandwaste.delete_foodbeveragepurchasing')
        and request.user.has_perm('foodandwaste.change_foodbeveragepurchasing')
        
        ):
            return True
        return False

class AirAndTransportationOwner(permissions.BasePermission):
    """can view add delete change Air and Transportation data """

    def has_permission(self, request, view):
        if (request.user.has_perm('airandtransportation.view_campusfleet')
        and request.user.has_perm('airandtransportation.add_campusfleet')
        and request.user.has_perm('airandtransportation.delete_campusfleet')
        and request.user.has_perm('airandtransportation.change_campusfleet')
        ):
            return True
        return False

class AirAndTransportationContributor(permissions.BasePermission):

    """can view add delete change research and scholarship data """

    def has_permission(self, request, view):
        
        if (request.user.has_perm('airandtransportation.view_campusfleet')
        and request.user.has_perm('airandtransportation.add_campusfleet')
        and request.user.has_perm('airandtransportation.delete_campusfleet')
        and request.user.has_perm('airandtransportation.change_campusfleet')
        
        ):
            return True
        return False


