# UCSD Food API
This document details how to use the api for accessing food items from the mongoDB database.
## Usage
 - Only GET requests are supported
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
## Examples
I won't list the results for these queries since they will just be random food items, but the important part to note is that these are all valid queries that return the expected results.
 - `serverURL/api/food/64Degrees?r=Vegan&r=Wellness&r=Contains%20Soy&protein=10-20`
 - `serverURL/api/food/CafeVentanas?name=Avocado%20Toast`
 - `serverURL/api/food/64Degrees?protein=10-20&fat=5-10&sugar=0-5`
 - 
