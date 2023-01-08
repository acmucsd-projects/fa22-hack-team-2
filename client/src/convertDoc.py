import os
import csv
import json

# retrieve the database and collection
csv_direc =  os.path.dirname(__file__) + "\scraper"
json_direc = os.path.dirname(__file__) + "\jsons"

jsonArray = []


# parse the file and write its attributes to a document
def parse_data(file):
    # dict to represent JSON of hall
    hall = {"name":file, "food":[]}

    # get data field labels as keys
    with open(csv_direc + "\\" + file, "r") as f:
        #TODO: CHange to csv.QUOTE_NONNUMERIC???
        reader = csv.DictReader(f, quoting=csv.QUOTE_ALL, skipinitialspace=True)
    
        # parse each line and write it into a JSON format
        for foodItem in reader:
            # split allergens and restrictions into a list
            #TODO: Change "allergens" back to "restrictions" once CSV files fixed
            #TODO: Remove dollar sign from price
            restrictionsList = [restriction.strip() for restriction in foodItem["allergens"].split(",")]

            foodItem["restrictions"] = restrictionsList
            foodItem["price"] = foodItem["price"][1:]

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
    print(file)
    parse_data(file)










