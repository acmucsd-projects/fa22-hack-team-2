import os
import csv
import json

# retrieve the database and collection
csv_direc =  os.path.dirname(__file__) + "\scraper"
json_direc = os.path.dirname(__file__) + "\jsons"


# parse the file and write its attributes to a document
def parse_data(file):
    jsonArray = []
    
    # dict to represent JSON of hall
    hall = {"name":file[:-4], "food":[]}

    # get data field labels as keys
    with open(csv_direc + "\\" + file, "r") as f:
        
        reader = csv.DictReader(f, quoting=csv.QUOTE_ALL, skipinitialspace=True)
    
        #TODO: Maybe find way to get number fields as numbers and non number fields as numbers
        # parse each line and write it into a JSON format
        for foodItem in reader:
            # split allergens and restrictions into a list
            restrictionsList = [restriction.strip() for restriction in foodItem["allergens"].split(",")]

            foodItem["restrictions"] = restrictionsList[:-1]

            # remove dollar sign from price
            foodItem["price"] = foodItem["price"][1:]

            # remove extra whitespace from food name
            foodItem["food"] = foodItem["food"].strip()



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










