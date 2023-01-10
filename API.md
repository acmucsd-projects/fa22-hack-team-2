
# UCSD Food API
This document details how to use the api to access food items from the mongoDB database.
## Usage
 - FOR **GET** Requests:
 - The main api route is accessed through: `serverURL/api/food/dininghallName` where `serverURl` and `dininghallName` are replaced by the proper values
	 - If no other parameters are specified, the url above will return all food options for that dining hall
 - If you wish to search for specific food items, you can specify query parameters with through: `serverURL/api/food/dininghallName?param=value&param2=value2&param3=value3` and so on, as long as the parameters are valid. Spaces in values are represented by `%20` Supported query parameters (in the form of "**parameter name**:query format") include:
	 - **Protein**: protein=min-max
	 - **Fat**: `fat=min-max`
	 - **Sugars**: `sugar=min-max`
	 - **Calories**: `cal=min-max`
	 - **Carbohydrates**: `carb=min-max`
	 - **Restrictions**: `r=restriction1&r=restriction2&restriction3` (and so on for all restrictions in the array)
	 - **Name**: `name=foodName`
	 - **Meal Size**: `size=mealSize` (meal sizes are small, medium, and large)

 - FOR **PUT** Requests
	 - The only put request that is supported is to delete all the documents in the hall collection. This is used to clear the hall collection when there is new datat to be loaded in.
	 - The route is `serverURL/api/deleteAll/food` and a sample curl command to send this post request is `curl -X  PUT serverURL/api/deleteAll/food`
 - For **POST** Requests
	 - The only post request supported is to upload new documents (in the json format) to the database.
	 - The route is `serverURL/api/location`
	 - If you are in a folder with all the json file to be uploaded to the database, a sample curl command that will upload all of them is `find ./ -name "*" -type f -exec curl -X POST -H "Content-Type: application/json" --data @{} http://localhost:5000/api/location \;`
		 - The wildcard character in the name flag (*) can be changed if you only want to upload documents based on a certain name
## Example GET Queries
I won't list the results for these queries since they will just be random food items, but the important part to note is that these are all valid queries that return the expected results.
 - `serverURL/api/food/64Degrees?r=Vegan&r=Wellness&r=Contains%20Soy&protein=10-20`
 - `serverURL/api/food/CafeVentanas?name=Avocado%20Toast`
 - `serverURL/api/food/64Degrees?protein=10-20&fat=5-10&sugar=0-5`
