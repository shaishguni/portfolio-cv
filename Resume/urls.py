from django.contrib import (admin)
from django.urls import( path , include)


urlpatterns = [
    # path('',include("about.urls"),namespace='about'),
    # path('experience',include('experience.urls'),namespace='experience')
    # path('education/', include('education.urls', namespace='education')),
    # path('skills/', include('skills.urls', namespace='skills')),
    # path('interests/', include('interests.urls', namespace='interests')),
    # path('awards/', include('awards.urls', namespace='awards')),
    path('admin/', admin.site.urls),
]