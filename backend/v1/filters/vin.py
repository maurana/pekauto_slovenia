from django_filters import rest_framework as filters
from v1.models.vin import Vin

class VinFilter(filters.FilterSet):
    vin_number = filters.CharFilter()

    class Meta:
        model = Vin
        fields = "__all__"