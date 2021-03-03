from flask import Flask, request, render_template, redirect
import os
import pyrebase
import firebase

app = Flask(__name__)
port = int(os.environ.get("PORT", 5000))

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/sourestaurante", methods=["POST"])
def sourestaurante():
    return render_template('sourestaurante.html')

@app.route("/soucliente", methods=["POST"])
def soucliente():
    return render_template('soucliente.html')

@app.route("/logado")
def logado():
    return render_template('logado.html')

if __name__ == "__main__":
    app.run(debug=True, port=port)