from flask import Flask, render_template, redirect
# Import scrape
import crime_web_scraping
from config import url

# Import our pymongo library, which lets us connect our Flask app to our Mongo database.
from flask_pymongo import PyMongo

# Create an instance of our Flask app.
app = Flask(__name__)

# Create connection variable
mongo = PyMongo(
    app, uri=url)

# Set route
@app.route("/")
def index():
    crime = mongo.db.crime.find_one()
    return render_template("index.html", crime=crime)


def scrape():
    crime = mongo.db.crime
    crime_data = crime_web_scraping.scrape()
    crime.update({}, crime_data, upsert=True)
    return redirect("/")
    
# Chart 
@app.route("/chart")
def chart ():
    return render_template("chart.html")

# Map
@app.route("/map")
def fullmap ():
    return render_template("map.html")

# about
@app.route("/documentation")
def about ():
    return render_template("about.html")

if __name__ == "__main__":
    app.run(debug=True)
