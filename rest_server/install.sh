# !/bin/sh

## create virtual environment 

virtualenv .venv


## install requirements 
source .venv/bin/activate
pip install -r requirements.txt
