# Writes the names of all textures in this directory to the 'index.json' file, to be used in the app later.
import os, json
index = open('index.json', "w")
files = os.listdir()
images = [ f for f in files if f.endswith('.jpg') ]
index.write("{\"images\":" + json.dumps(images) + "}")
index.close()