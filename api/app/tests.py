from django.test import TestCase
from rest_framework.test import APIClient


class HelloWorldViewTest(TestCase):

    def test_hello_world_view(self):
        client = APIClient()
        response = client.get('/api/title')
        self.assertEqual({'title': 'Hello World'}, response.json())
