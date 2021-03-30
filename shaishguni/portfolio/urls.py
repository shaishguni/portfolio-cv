
from django.urls import path,include
from portfolio import views

urlpatterns = [
       path("",views.home ),
]


