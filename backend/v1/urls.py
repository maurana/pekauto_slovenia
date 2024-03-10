from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from v1.controllers.pekauto import *
 
urlpatterns = [ 
    path('pekauto', PekautoList.as_view()),
    path('pekauto/<int:pk>', PekautoDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)