
# App de lista de tareas
class Tarea:
    def __init__(self):
        self.tareas = []  # Simula una base de datos

    def crear_tarea(self, titulo, descripcion):
        if not titulo.strip():
            raise ValueError("El título no puede estar vacío")
        nueva_tarea = {"titulo": titulo, "descripcion": descripcion}
        self.tareas.append(nueva_tarea)
        return nueva_tarea

    def obtener_tareas(self):
        return self.tareas