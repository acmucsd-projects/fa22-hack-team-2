import os
import csv
import json

# retrieve the database and collection
csv_direc =  os.path.dirname(__file__) + "\scraper\halls"
json_direc = os.path.dirname(__file__) + "\scraper\jsons"

jsonArray = []


# parse the file and write its attributes to a document
def parse_data(file):
    # dict to represent JSON of hall
    hall = {"name":file, "food":[]}

    # get data field labels as keys
    with open(csv_direc + "\\" + file, "r") as f:
        reader = csv.DictReader(f, quoting=csv.QUOTE_ALL, skipinitialspace=True)
    
        # parse each line and write it into a JSON format
        for foodItem in reader:
            # split allergens and restrictions into a list
            restrictionsList = [restriction.strip() for restriction in foodItem["restrictions"].split(",")]

            foodItem["restrictions"] = restrictionsList

            # add food to JSON array
            jsonArray.append(foodItem)

    # set food array to the key of food
    hall["food"] = jsonArray

    # write to json file
    with open((json_direc + "\\" + file)[0:-4], "w", encoding = "utf-8") as f:
        jsonStr = json.dumps(hall, indent = 4)
        f.write(jsonStr)
      
            

# iterate over all CSV files in directory
for file in os.listdir(csv_direc):
    parse_data(file)









