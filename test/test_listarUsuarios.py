from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
import time

# Configurar el navegador
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

URL = "http://127.0.0.1:5500/C2-SCV0/App/front-end/usuario-listar.html"   



except Exception as e:
    print(f"Error en la prueba: {str(e)}")
    # Captura de pantalla en caso de error
    driver.save_screenshot("error_tabla.png")
    
finally:
    # Cerrar el navegador después de 2 segundos
    time.sleep(2)
    driver.quit()