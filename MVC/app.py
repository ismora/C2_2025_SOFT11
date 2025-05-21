from flask import Flask, render_template, request, redirect
from modelo import Tarea

app = Flask(__name__)
tarea_model = Tarea()

@app.route('/')
def lista_tareas():
    tareas = tarea_model.obtener_tareas()
    return render_template('lista_tareas.html', tareas=tareas)

@app.route('/agregar', methods=['GET', 'POST'])
def agregar_tarea():
    if request.method == 'POST':
        titulo = request.form['titulo']
        descripcion = request.form['descripcion']
        try:
            tarea_model.crear_tarea(titulo, descripcion)
            return redirect('/')
        except ValueError as e:
            return render_template('error.html', mensaje=str(e))
    return render_template('agregar_tarea.html')

if __name__ == '__main__':
    app.run(debug=True)

"""
python .\app.py
http://localhost:5000/
"""
