from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from v1.controllers.vin import *
from v1.controllers.place import *
from v1.controllers.equipment import *
 
urlpatterns = [ 
    path('vin', VinList.as_view()),
    path('place', PlaceList.as_view()),
    path('equipment', EquipmentList.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)