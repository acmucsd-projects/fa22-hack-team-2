import os

direc = "scraper/halls"

# iterate over all CSV files in directory
for file in os.listdir(direc):
    print("bepis")



# parse the file and write its attributes to a document
def parse_data(file):
    # get data field labels as keys
    with open(file, "r") as f:
        labels = f.readline().split(",")
    
    # parse each line and write it into a document for MongoDB
    for line in f:
        fields = line.split(",")
        foodItem = {};

        for idx, val in enumerate(fields):
            foodItem[labels[idx].strip()] = val.strip()





