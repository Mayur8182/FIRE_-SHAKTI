#!/usr/bin/env bash
apt-get update && apt-get install -y \
    python3-dev \
    build-essential \
    libfreetype6-dev \
    libjpeg-dev \
    zlib1g-dev \
    wkhtmltopdf \
    tesseract-ocr

pip install --upgrade pip
pip install -r requirements.txt
