from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import random
import string

# Configurar el navegador
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

# URLs
REGISTER_URL = "http://127.0.0.1:5500/C2-SCV0/App/front-end/usuario-registrar.html"  
LIST_URL = "http://127.0.0.1:5500/C2-SCV0/App/front-end/usuario-listar.html" 

def generar_datos_usuario():
    """Genera datos de usuario aleatorios para la prueba"""
    random_str = ''.join(random.choices(string.ascii_lowercase, k=6))
    return {
        "correo": f"test_{random_str}@example.com",
        "cedula": ''.join(random.choices(string.digits, k=10)),
        "nombre": f"Usuario Test {random_str}",
        "contrasenia": f"P@ssw0rd{random_str}"
    }

def verificar_usuario_en_tabla(correo):
    """Verifica si el usuario aparece en la tabla de listado"""
    # Navegar a la página de listado
    driver.get(LIST_URL)
    
    # Esperar a que la tabla cargue
    WebDriverWait(driver, 15).until(
        EC.presence_of_element_located((By.CSS_SELECTOR, "#tblUsuarios tbody tr"))
    )
    
    # Buscar el usuario por correo en la tabla
    filas = driver.find_elements(By.CSS_SELECTOR, "#tblUsuarios tbody tr")
    for fila in filas:
        celdas = fila.find_elements(By.TAG_NAME, "td")
        if len(celdas) > 0 and celdas[0].text == correo:
            return True
    return False

try:
    # Generar datos de prueba
    usuario = generar_datos_usuario()
    print("\n" + "="*50)
    print("INICIANDO PRUEBA DE REGISTRO Y VERIFICACIÓN")
    print("="*50)
    print("Datos de prueba generados:")
    print(f"Correo: {usuario['correo']}")
    print(f"Cédula: {usuario['cedula']}")
    print(f"Nombre: {usuario['nombre']}")
    

except Exception as e:
    print("\n" + "="*50)
    print(f"¡ERROR EN LA PRUEBA!: {str(e)}")
    print("="*50)
    
    # Tomar captura de pantalla en caso de error
    driver.save_screenshot("error_prueba.png")
    print("Captura de pantalla guardada como 'error_prueba.png'")

finally:
    print("\nNavegador abierto por 60 segundos para inspección...")
    print(f"URL de registro: {REGISTER_URL}")
    print(f"URL de listado: {LIST_URL}")
    time.sleep(60)
    driver.quit()
    print("Navegador cerrado")