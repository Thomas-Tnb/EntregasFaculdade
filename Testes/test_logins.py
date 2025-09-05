import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# ==========================
# FIXTURE DO NAVEGADOR
# ==========================
@pytest.fixture
def driver():
    options = Options()
    options.add_argument("--headless")  # roda sem abrir janela
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    driver = webdriver.Chrome(options=options)
    driver.implicitly_wait(5)
    yield driver
    driver.quit()

# ==========================
# 1. SAUCE DEMO
# ==========================
def test_saucedemo_login(driver):
    driver.get("https://www.saucedemo.com/")
    driver.find_element(By.ID, "user-name").send_keys("standard_user")
    driver.find_element(By.ID, "password").send_keys("secret_sauce")
    driver.find_element(By.ID, "login-button").click()

    # Valida se entrou no inventário
    assert "inventory" in driver.current_url
    assert driver.find_element(By.CLASS_NAME, "inventory_list").is_displayed()

# ==========================
# 2. HEROKUAPP LOGIN
# ==========================
def test_the_internet_login(driver):
    driver.get("https://the-internet.herokuapp.com/login")
    driver.find_element(By.ID, "username").send_keys("tomsmith")
    driver.find_element(By.ID, "password").send_keys("SuperSecretPassword!")
    driver.find_element(By.CSS_SELECTOR, "button.radius").click()

    # Valida mensagem de sucesso
    message = driver.find_element(By.ID, "flash").text
    assert "You logged into a secure area!" in message

# ==========================
# 3. PRACTICE TEST AUTOMATION
# ==========================
def test_practice_test_login(driver):
    driver.get("https://practicetestautomation.com/practice-test-login/")
    driver.find_element(By.ID, "username").send_keys("student")
    driver.find_element(By.ID, "password").send_keys("Password123")
    driver.find_element(By.ID, "submit").click()

    # Valida página de sucesso
    assert "practicetestautomation.com/logged-in-successfully/" in driver.current_url
    assert "Logged In Successfully" in driver.page_source

# ==========================
# 4. ORANGE HRM DEMO
# ==========================
def test_orangehrm_login(driver):
    driver.get("https://opensource-demo.orangehrmlive.com/")

    driver.find_element(By.NAME, "username").send_keys("Admin")
    driver.find_element(By.NAME, "password").send_keys("admin123")
    driver.find_element(By.CSS_SELECTOR, "button[type='submit']").click()

    # Aguarda até que o Dashboard seja carregado
    wait = WebDriverWait(driver, 10)
    dashboard_header = wait.until(
        EC.presence_of_element_located((By.TAG_NAME, "h6"))
    )

    # Valida se está na página principal
    assert "dashboard" in driver.current_url.lower()
    assert "Dashboard" in dashboard_header.text