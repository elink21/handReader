
from django.urls import path
from . import views
urlpatterns = [
    path('', views.home, name="home"),
    path('requestSample', views.requestSample, name="requestSample")
]
