from bs4 import BeautifulSoup
import requests
from lxml import html
from requests_html import HTML, HTMLSession
import csv


def scrapeMacros(url):
    # session = HTMLSession()
    # r = session.get('https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/nutritionfacts2/482351159')
    # print(r.text)
    print(url)
    f = open("out.txt", "a")
    source = requests.get(url).text
    # source = requests.get('https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/nutritionfacts2/482457744').text
    soup = BeautifulSoup(source, 'lxml')
    # f.write(soup.prettify())
    # print(soup.find('td'))
    food = soup.find_all('h1')[1]
    f.write(food.text + "\n")
    macros = soup.find_all('td')
    textMacros = []
    textMacros.append(food.text)

    for i in range(len(macros)-2):
        textMacros.append(macros[i].text)

    for macro in macros:
        f.write(macro.text + "\n")
    
    c = soup.find('div', class_='container-fluid max-width-1000')
    allergens = c.find_all('p')[4].text
    f.write(allergens + "\n")
    textMacros.append(allergens)

    with open('out.csv', 'a') as csv_file:
        writer = csv.writer(csv_file)
        writer.writerow(textMacros)
        # writer.write(allergens)
        #    print(comments[i])





    # soup.title.text
    # article soup.find('div', class_='article')
    # for article in soup.find_all('div', class_='article'):
        #headline = article.h2.a.text

    f.close()

urls = []
source = requests.get('https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/64').text
soup = BeautifulSoup(source, 'lxml')
f = open("out.txt", "w")
# f.write(soup.prettify())
urlBegin = 'https://hdh-web.ucsd.edu'
for links in soup.find_all('a', href=True):
    direct = links.get("href")
    if "nutritionfacts" in direct:
        url = urlBegin + direct
        urls.append(url)
        f.write(url + "\n") 

with open('out.csv', 'w') as csv_file:
    writer = csv.writer(csv_file)
    writer.writerow(["Food", "Calories", "Calories from Fat",  
            "Tot. Fat", "%DV", "Tot. Carb", "%DV", "Sat. Fat", 
            "%DV","Dietary Fiber", "%DV", "Trans Fat", "%DV",
            "Sugars", "%DV", "Cholesterol", "%DV", "Protein", 
            "%DV", "Sodium", "%DV", "Allergens"])

for url in urls:
    scrapeMacros(url)
    # f.write(url)

f.close()

