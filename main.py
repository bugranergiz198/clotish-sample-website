#working tree
from flask import Flask, render_template, flash, redirect, url_for, session, logging, request,jsonify,get_flashed_messages
from flask_mysqldb import MySQL
from wtforms import Form, StringField, TextAreaField, PasswordField, validators
from passlib.hash import sha256_crypt
from functools import wraps
import json
from bs4 import BeautifulSoup
import os 
import time
from email.message import EmailMessage
import ssl
import smtplib
import random
import string

app = Flask(__name__)
app.secret_key = "clotish"

app.config["MYSQL_HOST"] = "localhost"
app.config["MYSQL_USER"] = "root"
app.config["MYSQL_PASSWORD"] = ""
app.config["MYSQL_DB"] = "clotish_website"
app.config["MYSQL_CURSORCLASS"] = "DictCursor"

mysql = MySQL(app)

basketlist = []
dict_list = []
new_dict_list = []
@app.route("/")
def index():
    return render_template("index.html",basketlist = basketlist)

@app.route("/ürünler")
def products():
    cursor=mysql.connection.cursor()
    question = "Select * From clotish_products"
    result = cursor.execute(question)
    if result>0:
        cloths = cursor.fetchall()
    return render_template("products.html",cloths = cloths,basketlist = basketlist)

@app.route("/loader")
def loaderpage():
    return render_template("includes/pageloader.html")


@app.route("/kıyafetdetay/<string:id>", methods = ["GET","POST"])
def details(id): #id is a string. keep this in your head.
    cursor = mysql.connection.cursor()
    question = "Select * From clotish_products"
    result = cursor.execute(question)
    prodakt = ""
    product_list = "" #  "/static/image/3dvideo.mp4","/static/image/beyazhoodie1.jpg","/static/image/beyazhoodie2.jpg","/static/image/beyazhoodie4.jpg"
    if result>0:
        global basketlist
        prodaktvalue = cursor.fetchall()
        for p_product in prodaktvalue:
            if p_product["id"] == int(id):
                prodakt = p_product
                newString=p_product["detailedPhotos"].replace("[","").replace("]","").replace('"','')
                product_list = newString.split(",")
    return render_template("detailcloth.html",prodakt=prodakt, product_list = product_list,basketlist = basketlist)
@app.route("/hakkımızda")
def aboutus():
    return render_template("aboutus.html",basketlist = basketlist)
if __name__ == "__main__":
    app.run(debug=True)