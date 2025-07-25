from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
import time

# Configurar el navegador
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

URL = "http://127.0.0.1:5501/Front-end/usuario-listar.html"   

try: 
    # 1. Abrir el navegador 
    driver.get(URL)
    
    # 2. Esperar a que la tabla cargue
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CSS_SELECTOR, "#tblUsuarios tbody tr")))

    # 3. Obtener todas las filas de la tabla
    filas = driver.find_elements(By.CSS_SELECTOR, "#tblUsuarios tbody tr")

    #4. Verificar que no se vacío (que exista al menos una fila)
    assert len(filas) >= 1, "Error: la tabla no contiene datos"

    # 5. Obtener los datos de la primer fila
    primeraFila = filas[0].find_elements(By.TAG_NAME, "td")

    # 6. Verificar que los campos no estén vacíos
    assert primeraFila[0].text != "", "El correo está vacío"
    assert primeraFila[1].text != "", "La cédula está vacía"
    assert primeraFila[2].text != "", "El nombre está vacío"
    assert primeraFila[3].text != "", "Las certificaciones están vacías"

    


except Exception as e:
    print(f"Error en la prueba: {str(e)}")
    # Captura de pantalla en caso de error
    driver.save_screenshot("error_tabla.png")
    
finally:
    # Cerrar el navegador después de 2 segundos
    time.sleep(2)
    driver.quit()