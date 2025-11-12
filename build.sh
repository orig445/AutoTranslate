#!/bin/bash
rm -f AutoTranslate.zip
zip -r AutoTranslate.zip manifest.json content.js background.js popup.html
echo "Created AutoTranslate.zip"
