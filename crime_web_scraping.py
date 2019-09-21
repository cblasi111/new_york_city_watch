# Dependencies
#from splinter import Browser
import requests 
from bs4 import BeautifulSoup
import pandas as pd
from pprint import pprint
from time import sleep
import time 


def scrape():
    
    crime_info = {}

    #Scrape websites
    ##########################
    #NY DAILY NEWS
    daily_news_url = "https://www.nydailynews.com/new-york/nyc-crime/"
    r = requests.get(daily_news_url) 

    daily_news_soup = BeautifulSoup(r.content, 'html5lib')

    # Grab the first title
    daily_news_article = daily_news_soup.find('h6').text
    
    # Grab the first paragraph
    daily_news_para = daily_news_soup.find('p', class_='preview-text spaced spaced-top story-preview spaced-md').text
    
    #Grab the article url using BeautifulSoup only
    daily_news_story_route = daily_news_soup.find('div', class_='width-100 flex-container-column').find('h6', class_='').find('a')['href']
    daily_news_split = daily_news_story_route.split('/')
    daily_news_story_url_split = daily_news_split[3]

    daily_news_story_url = daily_news_url + daily_news_story_url_split

    
    ##########################
    #ABC7NY
    abc7_url = "https://www.abc7ny.com/crime/"
    r = requests.get(abc7_url)

    abc7_soup = BeautifulSoup(r.content, 'html5lib')

    # Grab the first title
    abc7_article = abc7_soup.find('div', class_='headline').text

    #Grab the article URL
    abc7_article_story_route = abc7_soup.find('div', class_='grid3').find('a')['href']

    abc7_article_story_url = abc7_url.replace("/crime", abc7_article_story_route)

    # Grab another ABC7NY article
    r = requests.get(abc7_article_story_url)

    abc7_article2 = abc7_soup.find('div', class_='headline').text

    #Grab the second URL
    abc7_article2_route = abc7_soup.find('div', class_='headline-list-item has-image').find('a')['href']

    abc7_article_story_url2 = abc7_url.replace("/crime", abc7_article2_route)

    ##########################
    #NBC New York
    nbc_url = 'https://www.nbcnewyork.com/news/local/'
    r = requests.get(nbc_url)
    nbc_soup = BeautifulSoup(r.content, 'html5lib')

    # Grab the first title
    nbc_article = nbc_soup.find('h3', id='headline1').text

    # Grab the paragraph
    nbc_paragraph = nbc_soup.find('p', class_='summary').text

    nbc_story_url = nbc_soup.find('p', class_='summary').find('a')['href']
    nbc_story_url = nbc_story_url.replace('//', 'http://')

    ##########################
    #PIX11 Story
    pix11_url = 'https://pix11.com/category/local-stories/'
    r = requests.get(pix11_url)
    pix11_soup = BeautifulSoup(r.content, 'html5lib')

    # Grab the first title
    pix11_article = pix11_soup.find('h2', class_='entry-title').find('a').text

    #Grab the url
    pix11_story_url = pix11_soup.find('h2', class_='entry-title').find('a')['href']

    #Visit the URL to grab more info and another story
    r = requests.get(pix11_story_url)
    pix11_soup = BeautifulSoup(r.content, 'html5lib')

    #Grab the paragraph
    pix11_paragraph = pix11_soup.find('p', class_='wp-caption-text').text

    ##########################
    #TWITTER
    ##########################
    #NYCEM - Notify NYC
    nycem_tweet_url = 'https://twitter.com/NotifyNYC'
    r = requests.get(nycem_tweet_url)
    nycem_tweet_soup = BeautifulSoup(r.content, 'html5lib')

    # Scrape the tweet info
    nycem_tweet = nycem_tweet_soup.find('p', class_='TweetTextSize').text

    #FDNY
    fdny_tweet_url = 'https://twitter.com/FDNY'
    r = requests.get(fdny_tweet_url)
    fdny_tweet_soup = BeautifulSoup(r.content, 'html5lib')

    # Scrape the tweet info
    fdny_tweet = fdny_tweet_soup.find('p', class_='TweetTextSize').text

    #NYC Emergency Management
    nycmgt_tweet_url = 'https://twitter.com/nycemergencymgt'
    r = requests.get(nycmgt_tweet_url)
    nycmgt_tweet_soup = BeautifulSoup(r.content, 'html5lib')

    # Scrape the tweet info
    nycmgt_tweet = nycmgt_tweet_soup.find('p', class_='TweetTextSize').text

    #Gothamist
    gothamist_tweet_url = 'https://twitter.com/Gothamist'
    r = requests.get(gothamist_tweet_url)
    gothamist_tweet_soup = BeautifulSoup(r.content, 'html5lib')

    # Scrape the tweet info
    gothamist_tweet = gothamist_tweet_soup.find('p', class_='TweetTextSize').text

    #NYPDNEWS
    nypd_tweet_url = 'https://twitter.com/NYPDnews'
    r = requests.get(nypd_tweet_url)


    # Create BeautifulSoup object; parse with 'html.parser'
    nypd_tweet_soup = BeautifulSoup(r.content, 'html5lib')


    # Scrape the tweet info
    nypd_tweet = nypd_tweet_soup.find('p', class_='TweetTextSize').text

    ##########################
    #NYPD SCHOOL SAFETY
    nypd__schools_tweet_url = 'https://twitter.com/NYPDSchools'
    r = requests.get(nypd__schools_tweet_url)

    # Create BeautifulSoup object; parse with 'html.parser'
    nypd_schools_tweet_soup = BeautifulSoup(r.content, 'html5lib')

    # Scrape the tweet info
    nypd_schools_tweet = nypd_schools_tweet_soup.find('p', class_='TweetTextSize').text

    ##########################
    #NYPD Crime Stoppers
    crime_stoppers_url = 'https://twitter.com/NYPDTips'
    r = requests.get(crime_stoppers_url)

    # Create BeautifulSoup object; parse with 'html.parser'
    crime_stoppers_soup = BeautifulSoup(r.content, 'html5lib')

    # Scrape the tweet info
    crime_stoppers_tweet = crime_stoppers_soup.find('p', class_='TweetTextSize').text
    
    ##########################
    #Safety First NYC
    safety_first_url = 'https://twitter.com/SafetyFirstNYC'
    r = requests.get(safety_first_url)

    # Create BeautifulSoup object; parse with 'html.parser'
    safety_first_soup = BeautifulSoup(r.content, 'html5lib')

    # Scrape the tweet info
    safety_first_tweet = safety_first_soup.find('p', class_='TweetTextSize').text

    ##########################
    #NYC Fire
    nyc_fire_url = 'https://twitter.com/nycfire'
    r = requests.get(nyc_fire_url)

    # Create BeautifulSoup object; parse with 'html.parser'
    nyc_fire_soup = BeautifulSoup(r.content, 'html5lib')

    # Scrape the tweet info
    nyc_fire_tweet = nyc_fire_soup.find('p', class_='TweetTextSize').text

    ##########################
    #Input all values into dictionary
    ##########################
    
    crime_info = {
        'daily_news_article': daily_news_article,
        'daily_news_paragraph': daily_news_para,
        'daily_news_url': daily_news_story_url,
        'abc7_article': abc7_article,
        'abc7_article_story_url': abc7_article_story_url,
        'abc7_article2': abc7_article2,
        'abc7_article_story_url2': abc7_article_story_url2,
        'nbc_article': nbc_article,
        'nbc_paragraph': nbc_paragraph,
        'nbc_story_url': nbc_story_url,
        'pix11_article': pix11_article,
        'pix11_paragraph': pix11_paragraph,
        'pix11_story_url': pix11_story_url,
        'nycem_tweet_url':nycem_tweet_url,
        'nycem_tweet': nycem_tweet,
        'fdny_tweet_url': fdny_tweet_url,
        'fdny_tweet': fdny_tweet,
        'nycmgt_tweet_url': nycmgt_tweet_url,
        'nycmgt_tweet': nycmgt_tweet,
        'gothamist_tweet_url': gothamist_tweet_url,
        'gothamist_tweet': gothamist_tweet,
        'nypd_tweet_url':nypd_tweet_url,
        'nypd_tweet': nypd_tweet,
        'nypd__schools_tweet_url': nypd__schools_tweet_url,
        'nypd_schools_tweet': nypd_schools_tweet,
        'crime_stoppers_url': crime_stoppers_url,
        'crime_stoppers_tweet': crime_stoppers_tweet,
        'safety_first_url': safety_first_url,
        'safety_first_tweet': safety_first_tweet,
        'nyc_fire_url': nyc_fire_url,
        'nyc_fire_tweet': nyc_fire_tweet
    }    
    
    return crime_info



