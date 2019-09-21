from flask import Flask, render_template, redirect
# Import scrape
import crime_web_scraping

# Import our pymongo library, which lets us connect our Flask app to our Mongo database.
from flask_pymongo import PyMongo

# Create an instance of our Flask app.
app = Flask(__name__)

# Create connection variable
mongo = PyMongo(app, uri='mongodb://localhost:27017/project_2_crime')

# Set route
@app.route("/")
def index():
    crime = mongo.db.crime.find_one()
    return render_template("index.html", crime=crime)

# Scrape 
@app.route("/scrape")
def scrape():
    crime = mongo.db.crime
    crime_data = crime_web_scraping.scrape()
    crime.update({}, crime_data, upsert = True)
    return redirect("http://127.0.0.1:5000//", code=302)

if __name__ == "__main__":
    app.run(debug=True)
