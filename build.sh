# This script can be as much as you want it to be
# At the minimum, we need to build and place the UI into the Django app

cd ui
yarn run build

cd ..

cd api
python manage.py collectstatic --no-input
