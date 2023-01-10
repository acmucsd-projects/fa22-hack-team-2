# This file currently is able to scrape the nutritional info of all
# the food into into out.csv given a restauraunt link

from bs4 import BeautifulSoup
import requests
from lxml import html
from requests_html import HTML, HTMLSession
import csv
from pathlib import Path



# to be prepended to each url (used across methods)
urlBegin = 'https://hdh-web.ucsd.edu'


data_folder = Path("scraper/scrapedDiningData/")

# This method takes a URL of a food's nutritional 
# page and formats it on the csv
# @param url URL to be scraped

def scrapeMacros(url, csvName, restrictions, price):
    print(url)
    # opens "out.txt" to be written on FOR DEBUGGING PURPOSES
    f = open("out.txt", "a")
    source = requests.get(url).text
    soup = BeautifulSoup(source, 'lxml')
    # f.write(soup.prettify())
    # print(soup.find('td'))

    # find the title of the food (second h1 html tag)
    # if no food, then likely the webpage is broken, so return
    foodHTML = soup.find_all('h1')
    if(len(foodHTML) > 1):
        food = foodHTML[1]
        f.write(food.text + "\n")
    else: 
        return

    # find the macros (all td tags)
    macros = soup.find_all('td')

    # put the text values of macros into textMacros 
    # There are 2 extra td tags so we just omit them
    textMacros = []
    textMacros.append(food.text)
    for i in range(len(macros)-2):
        textMacros.append(macros[i].text.replace("\n", ""))

    # for macro in macros:
    #     f.write(macro.text + "\n")

    # strip everything away but the digits
    for i in range(1, len(textMacros)):
        num = ""
        for c in textMacros[i]:
            if c.isdigit() or c == '.':
                num = num + c

        # hard code away the extra decimal points
        if(i == 5): 
            num = num[2:]
        elif(i == 7) :
            num = num[1:]


        textMacros[i] = num

    # NOT USED ANYMORE, PASSED IN
    # find the allergens and append to the list
    # c = soup.find('div', class_='container-fluid max-width-1000')
    # allergensHTML = c.find_all('p')
    # if len(allergensHTML) > 4:
    #     allergens = allergensHTML[4].text
    # f.write(allergens + "\n")
    # textMacros.append(allergens)

    textMacros.append(restrictions)
    if "$" not in price:
        price = ""
    textMacros.append(price)

    # for macro in textMacros: 
    #     print(macro)

    # append this row into out.csv
    with open(csvName, 'a') as csv_file:
        writer = csv.writer(csv_file)
        writer.writerow(textMacros)
        # writer.write(allergens)

    f.close()


# This method pulls the links of each food's nutritional facts
# from the dining hall and calls the function scrapeMacros. 
def scrapeRestauraunts(url): 
    urls = []
    source = requests.get(url).text
    soup = BeautifulSoup(source, 'lxml')
    # HTMLFile = open("web.html", "r")
    # index = HTMLFile.read()
    # soup = BeautifulSoup(index, 'lxml')
    f = open("out.txt", "w")
    # f.write(soup.prettify())

    # find name of resturaunt
    resturaunt = soup.find('h1').text
    # print(type(resturaunt))
    resturaunt = resturaunt.replace(' ', '')
    print(resturaunt)

    # write the header for the csv
    # csvName = data_folder / (resturaunt + '.csv')
    csvName = resturaunt + '.csv'
    with open(csvName, 'w') as csv_file:
        writer = csv.writer(csv_file)
        writer.writerow(["food", "cal", "calFromFat",  
                "totFat", "totFatDV", "totCarb", "totCarbDV", "satFat", 
                "satFatDV","dietaryFiber", "dietaryFiberDV", "transFat", "transFatDV",
                "sugars", "sugarsDV", "cholesterol", "cholesterolDV", "protein", 
                "proteinDV", "sodium", "sodiumDV", "restrictions", "price"])

    # figure out each food's URL, Price, Allergens
    for section in soup.find_all('li'):

        for link in section.find_all('a', href=True):
            # f.write("OPAIWUJD:KLDSF    " + str(section) + "\n")
            direct = link.get("href")
            # print(direct)
            # find URL
            price = ""
            if "nutritionfacts" in direct:
                url = urlBegin + direct
                urls.append(url)

                # find price
                price = link.text.strip()
                if price.find("$") > 1:
                    price = price[price.find("$"):]
            else: 
                continue
            allergens = ""
            for image in section.find_all('img', alt=True):
                txt = image.get("alt")
                f.write(txt + "\n")
                if "Legend:" in txt:
                    allergens = allergens + txt[8:-5] +", "
            # print(allergens)
            scrapeMacros(url, csvName, allergens, price)


        
    # call scrapeMacros with each URL.
    # for url in urls:
    #     scrapeMacros(url, csvName, 0, 0)
    #     f.write(url)

    f.close()

######

# This block of code takes the main page dining services url and 
# runs scrapeResturaunts with all the URLs of the resturaunts.
source = requests.get('https://hdh-web.ucsd.edu/dining/apps/diningservices/').text
soup = BeautifulSoup(source, 'lxml')

f = open("out.txt", "w")

# URLs has to be a set here, since there are multiple instances of each URL.
urls = set()

for links in soup.find_all('a', href=True):
    directory = links.get("href")
    # f.write(directory + "\n")
    if "Restaurants" in directory:
        url = urlBegin + directory
        urls.add(url)

# scrapeRestauraunts(url[0])

for url in urls:
    scrapeRestauraunts(url)



