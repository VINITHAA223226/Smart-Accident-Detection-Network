# 🚗 Smart Accident Detection Network

A **Deep Learning-based Accident Detection System** that automatically detects road accidents using camera or sensor data and triggers alerts for emergency response.

---

## 🧠 Features

- ⚡ Real-time accident detection using deep learning (YOLOv8)
- 📍 Instant alerts with GPS coordinates
- 🎥 Camera or video-based input analysis
- ☁️ Cloud-based storage with Cloudinary
- 📡 Lightweight and easy to deploy on edge devices

---

## 🛠️ Tech Stack

### **Frontend**
- [Next.js v14](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript
- Axios
- React Query
- React Hook Form
- Leaflet (for maps & GPS visualization)
- Recharts (for analytics)

### **Backend**
- Flask (Python)
- MongoDB
- Nodemailer
- Cloudinary

### **ML Model**
- YOLOv8 (via [Ultralytics](https://github.com/ultralytics/ultralytics))
- Roboflow (for dataset management & preprocessing)

---

## ⚙️ Setup Guide

### 1️⃣ Clone Repository
```bash
git clone https://github.com/ebraj/Accident-Detection-Web-App.git
cd Accident-Detection-Web-App
```

---

### 2️⃣ Backend Setup

Navigate to the `server` folder:
```bash
cd server
```

#### Create Virtual Environment
- **Windows**
  ```bash
  python -m venv venv
  venv\Scripts\activate
  ```
- **MacOS/Linux**
  ```bash
  python3 -m venv venv
  source venv/bin/activate
  ```

#### Install Dependencies
- **Windows**
  ```bash
  pip install -r requirements.txt
  ```
- **MacOS/Linux**
  ```bash
  pip3 install -r requirements.txt
  ```

#### Environment Variables
Create a `.env` file in `server/` referencing the provided `.env.example`.

#### Run Backend
- **Windows**
  ```bash
  python app.py
  ```
- **MacOS/Linux**
  ```bash
  python3 app.py
  ```

---

### 3️⃣ Frontend Setup

Navigate to the client folder:
```bash
cd client
```

#### Install Packages
```bash
npm install
```

#### Run Frontend
```bash
npm run dev
```

Open your browser at: [http://localhost:3000](http://localhost:3000)

⚠️ Note: The frontend also uses **Nodemailer**, so configure `.env` inside `client/` referencing `.env.example`.

---

### 4️⃣ Model Implementor Setup

If you want to test/run models separately:

1. Setup virtual environment (same as backend steps).
2. Add your trained model files to the `model/` directory.
3. Place test images/videos inside the `data/` folder.
4. Run:
   ```bash
   python app.py
   ```

---

## 🎯 Usage

- Run the backend to start analyzing data and detecting accidents.
- Upload images/videos to test the detection.
- Frontend provides a live dashboard for monitoring accidents and alerts.
- Alerts include **GPS location**, which can be sent to emergency responders.

---

## 📂 Project Structure

```
Accident-Detection-Web-App/
│── client/               # Frontend (Next.js + Tailwind + TypeScript)
│── server/               # Backend (Flask + MongoDB)
│── model/                # YOLOv8 trained models
│── data/                 # Test videos/images
│── .env.example          # Example environment variables
│── README.md             # Project Documentation
```

---

## 🧑‍💻 Author

**Vinithaa Singh**  
GitHub: [VINITHAA223226](https://github.com/VINITHAA223226)

---
