# GPS Missing Person Tracker App

This project is a full-stack application to help track and predict missing persons using GPS data and AI. It includes:

- A **React Native frontend** for reporting and viewing missing people on a map
- A **Flask backend** for data handling, image serving, AI prediction, user authentication, and admin panel
- A **MySQL** or **PostgreSQL** database for storing person data and users
- AI module to predict next possible location using age and time missing
- Optional: Flask-Login auth and Flask-Admin interface

---

## 🚀 Quick Start

### 1. Clone or unzip the frontend and backend folders

### 2. Backend Setup

#### Environment setup

Copy `.env.template` to `.env` and fill in your DB credentials:

```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=missing_app
```

#### Install dependencies

```bash
pip install -r requirements.txt
```

#### Run SQL setup

Use `sql/schema.sql` and `sql/users.sql` to set up database tables:

```bash
mysql -u root -p missing_app < sql/schema.sql
mysql -u root -p missing_app < sql/users.sql
```

#### Start the Flask app

```bash
python app.py
```

---

### 3. Frontend Setup (React Native)

Install dependencies:

```bash
npm install
```

Start Expo (React Native dev environment):

```bash
npx expo start
```

Make sure the API URL in `App.js` points to your machine’s IP address (e.g., `http://10.0.2.2:5000/` for Android emulator).

---

## 🔐 Authentication API

- `POST /register`: { username, password }
- `POST /login`: { username, password }

Session stored via Flask session.

---

## 🧠 AI Prediction

- `POST /predict`: { age, hours_missing }
- Returns: predicted latitude and longitude

---

## 🛠 Admin Panel

Run `admin_panel.py` for browser-based admin interface (CRUD for missing_persons).

```bash
python admin_panel.py
```

---

## 📦 Project Structure

```bash
backend/
├── app.py
├── auth.py
├── ai_predict.py
├── admin_panel.py
├── static/images/
├── sql/
│   ├── schema.sql
│   └── users.sql

frontend-react-native/
├── App.js
```

---

## ✅ Integration Instructions

1. **Mount auth system in app.py:**

```python
from auth import auth_bp
app.register_blueprint(auth_bp)
```

2. **Ensure CORS is enabled:**

```python
from flask_cors import CORS
CORS(app)
```

3. **Use `ai_predict.py` in `/predict` route already shown**

4. **Run admin panel with SQLAlchemy URI using your `.env`**

---

## 📬 Contact

Created for humanitarian use cases such as search and rescue and emergency tracking.
