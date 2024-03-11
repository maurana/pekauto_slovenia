from rest_framework import serializers 
from v1.models.place import Place
 
class PlaceSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Place
        fields = '__all__'