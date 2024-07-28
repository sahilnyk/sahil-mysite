echo "BUILD START"

# Use the specific Python version
python3.10 -m pip install --upgrade pip
python3.10 -m pip install -r requirements.txt
python3.10 manage.py collectstatic --noinput --clear

echo "BUILD END"
