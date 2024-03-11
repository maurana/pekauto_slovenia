from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from v1.controllers.vin import *
 
urlpatterns = [ 
    path('vin', VinList.as_view()),
    path('vin/<int:pk>', VinDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)