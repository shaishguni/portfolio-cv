
from django.contrib import admin
from django.urls import path,include

from django.views.static import serve
from django.conf.urls import url


admin.site.site_header = "shaishguni"
admin.site.site_title = "Shaish Guni Your-Go-To-Source"
admin.site.index_title = "Welcome to my own site."


urlpatterns = [
        path('admin/', admin.site.urls),
        path("", include("portfolio.urls")),
        path('admin/', admin.site.urls),
    ]



