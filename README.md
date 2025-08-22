# 🚗 Smart Accident Detection Network

A Deep Learning-based Accident Detection System that automatically detects road accidents using camera or sensor data and triggers alerts for emergency response.

## 🧠 Features

- Real-time accident detection using deep learning
- Alerts with GPS coordinates
- Camera or video-based input analysis
- Lightweight and easy to deploy


Tech Stack Used
Frontend
Next JS v.14
Tailwind CSS
TypeScript
Axios
React Query
React Hook Form
Leaflet
Recharts
Backend
Flask
Python
MongoDB
Nodemailer
Cloudinary
ML Model
YOLOv8
Roboflow
Setup Guide
Firstly clone this repo locally(if you want you can fork it and clone it too) :
git clone https://github.com/ebraj/Accident-Detection-Web-App.git
Once cloned successfully, open this project in your favourite IDE(VSCode in my case)


Backend Setup
Once the above steps are done, open the terminal of your IDE and head over to the server directory using cd server

Then we will create the virutalenv. To create the virtualenv we will use the below command :

# For windows
python -m venv venv

<!-- OR -->

# For macos
python3 -m venv venv
Once the virtualenv is created, we will activate it using the below command :

source venv/bin/activate
And finally we will install the packages which are required for our project using the below command :

# For windows
pip install -r requirements.txt

<!-- OR -->

# For macos
pip3 install -r requirements.txt
Create the .env file referencing to the .env.example file.

As everything is ready now, we can run the backend as

# For windows
python app.py

<!-- OR -->

# For macos
python3 app.py

Frontend Setup
The frontend setup is quite easy, unlike backend setup as it does not require any virtual env setup. Let's proceed to frontend setup.

Open the new vscode terminal, and head over into the client directory as cd client simply run the package installation command as
npm install
Once the packages are installed properly, run the frontend application
npm run dev
And you can view the page with the url http://localhost:3000
Note: We are using the Nodemailer service in the frontend also, so we need to setup the .env file for the frontend too(Reference to .env.example file).
Final Setup(Model Implementor)
Setup the virtual environment like in the backend setup(Step 1-4).
And then run the application using python app.py

🎯 Usage
Add your trained model files to the model/ directory.

Place any test video or image files in data/.

Run the backend to start analyzing data and detecting accidents.

Frontend (if included) provides a UI for monitoring.


🧑‍💻 Author
Vinithaa Singh
GitHub: VINITHAA223226
