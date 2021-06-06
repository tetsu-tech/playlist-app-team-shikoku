build:
	docker-compose build

upFront:
	docker-compose up -d

upDjango:
	docker-compose run web django-admin.py startproject playlist .

stop:
	docker-compose down
