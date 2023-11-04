import pymongo
import sys
import os
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import csv

#Note: Make sure to enable access from all IP addresses in MongoDB before using. Otherwise it will fail.
# Using code samples from here: https://github.com/mongodb-university/atlas_starter_python/blob/master/atlas-starter.py


mongodb_pwd = os.environ['MONGODB_PWD']
uri = "mongodb+srv://sroberts:{}@serverlessinstance0.qxaqke3.mongodb.net/?retryWrites=true&w=majority&tlsCAFile=isrgrootx1.pem".format(mongodb_pwd)

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)


# use a database named "myDatabase"
db = client.KnockEveryDoor

# use a collection named "recipes"
my_collection = db["MapMetadata"]

with open('soli_maps.csv', mode='r') as infile:
    reader = csv.reader(infile)
    mydict = []
    for row in reader:
        mydict.append({"drive_id": row[0], "name": row[1], "map_id": row[2], "map_url": row[3]})
     #   mydict = {rows[0]:rows[1] for rows in reader}
    mydict.pop(0)

print(mydict[0], len(mydict))

# INSERT DOCUMENTS
#
# You can insert individual documents using collection.insert_one().
# In this example, we're going to create four documents and then 
# insert them all with insert_many().

one_map = [{"drive_id": "1m0KAc7J01xirK055qpeiXkQ-06ue0t0X", "name": "Adrian Seventh-day Adventist Company", "map_id": "E016551", "map_url": "https://drive.google.com/drive/folders/1m0KAc7J01xirK055qpeiXkQ-06ue0t0X"}
           ]

try: 
 result = my_collection.insert_many(mydict)

# return a friendly error if the operation fails
except pymongo.errors.OperationFailure:
  print("An authentication error was received. Are you sure your database user is authorized to perform write operations?")
  sys.exit(1)
else:
  inserted_count = len(result.inserted_ids)
  print("I inserted %x documents." %(inserted_count))

  print("\n")

# FIND DOCUMENTS
#
# Now that we have data in Atlas, we can read it. To retrieve all of
# the data in a collection, we call find() with an empty filter. 

#result = my_collection.find()

#if result:    
#  for doc in result:
#    my_recipe = doc['name']
#    my_ingredient_count = len(doc['ingredients'])
#   my_prep_time = doc['prep_time']
#    print("%s has %x ingredients and takes %x minutes to make." %(my_recipe, my_ingredient_count, my_prep_time))
    
#else:
#  print("No documents found.")

#print("\n")

# We can also find a single document. Let's find a document
# that has the string "potato" in the ingredients list.
my_doc = my_collection.find_one({"ingredients": "potato"})

#if my_doc is not None:
#  print("A recipe which uses potato:")
#  print(my_doc)
#else:
#  print("I didn't find any recipes that contain 'potato' as an ingredient.")
#print("\n")

# UPDATE A DOCUMENT
#
# You can update a single document or multiple documents in a single call.
# 
# Here we update the prep_time value on the document we just found.
#
# Note the 'new=True' option: if omitted, find_one_and_update returns the
# original document instead of the updated one.

#my_doc = my_collection.find_one_and_update({"ingredients": "potato"}, {"$set": { "prep_time": 72 }}, new=True)
#if my_doc is not None:
#  print("Here's the updated recipe:")
#  print(my_doc)
#else:
#  print("I didn't find any recipes that contain 'potato' as an ingredient.")
#print("\n")

# DELETE DOCUMENTS
#
# As with other CRUD methods, you can delete a single document 
# or all documents that match a specified filter. To delete all 
# of the documents in a collection, pass an empty filter to 
# the delete_many() method. In this example, we'll delete two of 
# the recipes.
#
# The query filter passed to delete_many uses $or to look for documents
# in which the "name" field is either "elotes" or "fried rice".

#my_result = my_collection.delete_many({ "$or": [{ "name": "elotes" }, { "name": "fried rice" }]})
#print("I deleted %x records." %(my_result.deleted_count))
#print("\n")


