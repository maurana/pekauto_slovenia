from django_filters import rest_framework as filters
from v1.models.pekauto import Pekauto

class PekautoFilter(filters.FilterSet):
    nums = filters.NumberFilter()

    class Meta:
        model = Pekauto
        fields = "__all__"