from fastapi import FastAPI
from pydantic import BaseModel
import psycopg2
from psycopg2.extras import RealDictCursor

app = FastAPI()


DB_HOST = "localhost"
DB_NAME = "studentsdb"
DB_USER = "postgres"
DB_PASS = "1234"

def get_connection():
    return psycopg2.connect(
        host=DB_HOST,
        dbname=DB_NAME,
        user=DB_USER,
        password=DB_PASS,
        cursor_factory=RealDictCursor  
    )

class Student(BaseModel):
    id: int = None  
    name: str
    grade: int


def setup_database():
    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS students (
                id SERIAL PRIMARY KEY,
                name TEXT NOT NULL,
                grade INTEGER
            );
        ''')
        conn.commit()
        cursor.close()
        conn.close()
    except Exception as e:
        print("DB setup error:", e)

setup_database()

@app.get("/students/")
async def read_students():
    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM students;")
        rows = cursor.fetchall()    
        cursor.close()
        conn.close()
        return rows
    except Exception as e:
        print("read error:", e)
        return {"error": "Failed to fetch students"}

@app.post("/students/")
async def create_student(student: Student):
    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute(
            "INSERT INTO students (name, grade) VALUES (%s, %s) RETURNING id;",
            (student.name, student.grade)
        )
        new_id = cursor.fetchone()["id"]
        conn.commit()
        cursor.close()
        conn.close()
        return {"message": "Student added", "id": new_id}
    except Exception as e:
        print("create error:", e)
        return {"error": "Failed to create student"}

@app.put("/students/{student_id}")
async def update_student(student_id: int, student: Student):
    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute(
            "UPDATE students SET name = %s, grade = %s WHERE id = %s;",
            (student.name, student.grade, student_id)
        )
        conn.commit()
        cursor.close()
        conn.close()
        return {"id": student_id, **student.dict()}
    except Exception as e:
        print("update error:", e)
        return {"error": "Failed to update student"}


@app.delete("/students/{student_id}")
async def delete_student(student_id: int):
    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM students WHERE id = %s;", (student_id,))
        conn.commit()
        cursor.close()
        conn.close()
        return {"message": "Student deleted"}
    except Exception as e:
        print("delete error:", e)
        return {"error": "Failed to delete student"}
