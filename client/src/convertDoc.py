import os
import csv
# Get the database using the method we defined in pymongo_test_insert file
from pymongo_get_db import get_database

# retrieve the database and collection
dbname = get_database()
collection_name = dbname["foods"]
direc =  os.path.dirname(__file__) + "\scraper\halls"

# parse the file and write its attributes to a document
def parse_data(file):
    # get data field labels as keys
    with open(direc + "\\" + file, "r") as f:
        reader = csv.DictReader(f, quoting=csv.QUOTE_ALL, skipinitialspace=True)
    
        # parse each line and write it into a document for MongoDB
        for foodItem in reader:
            print(foodItem)

            # add food item into collection
            collection_name.insert_one(foodItem)  
            

# iterate over all CSV files in directory
for file in os.listdir(direc):
    parse_data(file)









