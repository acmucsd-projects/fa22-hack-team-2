# This file currently is able to scrape the nutritional info of all
# the food into into out.csv given a restauraunt link

from bs4 import BeautifulSoup
import requests
from lxml import html
from requests_html import HTML, HTMLSession
import csv


# to be prepended to each url (used across methods)
urlBegin = 'https://hdh-web.ucsd.edu'

# This method takes a URL of a food's nutritional 
# page and formats it on the csv
# @param url URL to be scraped

def scrapeMacros(url, csvName):
    print(url)
    # opens "out.txt" to be written on FOR DEBUGGING PURPOSES
    f = open(csvName, "a")
    source = requests.get(url).text
    soup = BeautifulSoup(source, 'lxml')
    # f.write(soup.prettify())
    # print(soup.find('td'))

    # find the title of the food (second h1 html tag)
    food = soup.find_all('h1')[1]
    f.write(food.text + "\n")

    # find the macros (all td tags)
    macros = soup.find_all('td')

    # put the text values of macros into textMacros 
    # There are 2 extra td tags so we just omit them
    textMacros = []
    textMacros.append(food.text)
    for i in range(len(macros)-2):
        textMacros.append(macros[i].text.replace("\n", ""))

    for macro in macros:
        f.write(macro.text + "\n")

    # find the allergens and append to the list
    c = soup.find('div', class_='container-fluid max-width-1000')
    allergens = c.find_all('p')[4].text
    f.write(allergens + "\n")
    textMacros.append(allergens)

    for macro in textMacros: 
        print(macro)

    # append this row into out.csv
    with open('out.csv', 'a') as csv_file:
        writer = csv.writer(csv_file)
        writer.writerow(textMacros)
        # writer.write(allergens)

    f.close()


# This method pulls the links of each food's nutritional facts
# from the dining hall and calls the function scrapeMacros. 
def scrapeRestauraunts(url): 
    urls = []
    source = requests.get('https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/64').text
    # source = requests.get(url).text
    soup = BeautifulSoup(source, 'lxml')
    f = open("out.txt", "w")
    # f.write(soup.prettify())

    # find name of resturaunt
    resturaunt = soup.find('h1').text
    print(resturaunt)

    # grab all the URLs with "nutritionfacts" in it
    for links in soup.find_all('a', href=True):
        direct = links.get("href")
        if "nutritionfacts" in direct:
            url = urlBegin + direct
            urls.append(url)
            f.write(url + "\n")

    
    # write the header for the csv
    csvName = resturaunt + '.csv'
    with open(csvName, 'w') as csv_file:
        writer = csv.writer(csv_file)
        writer.writerow(["Food", "Calories", "Calories from Fat",  
                "Tot. Fat", "%DV", "Tot. Carb", "%DV", "Sat. Fat", 
                "%DV","Dietary Fiber", "%DV", "Trans Fat", "%DV",
                "Sugars", "%DV", "Cholesterol", "%DV", "Protein", 
                "%DV", "Sodium", "%DV", "Allergens"])

    # call scrapeMacros with each URL.
    for url in urls:
        scrapeMacros(url, csvName)
        # f.write(url)

    f.close()

######
source = requests.get('https://hdh-web.ucsd.edu/dining/apps/diningservices/').text
soup = BeautifulSoup(source, 'lxml')
f = open("out.txt", "w")

urls = set()

for links in soup.find_all('a', href=True):
    directory = links.get("href")
    f.write(directory + "\n")
    if "Restaurants" in directory:
        url = urlBegin + directory
        urls.add(url)

scrapeRestauraunts(url[0])

# for url in urls:
#     print(url)
#     scrapeRestauraunts(url)