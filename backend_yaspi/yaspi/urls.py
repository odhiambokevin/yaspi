"""yaspi URL Configuration

"""
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('vault/', admin.site.urls),
    path('api/v1/blogs/', include('apps.blog.urls')),
    path('api/v1/works/', include('apps.works.urls')),
    path('api/v1/feedback/', include('apps.feedback.urls')),
]

urlpatterns += static(settings.STATIC_URL, document_root = settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)

admin.site.site_header = "Yaspi Admin"
admin.site.site_title = "Yaspi"
admin.site.index_title = "Admin Panel"