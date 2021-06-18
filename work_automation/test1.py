from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
import time

options = webdriver.ChromeOptions()
options.add_argument('--headless')
options.add_argument('--no-sandbox')
options.add_argument('--disable-dev-shm-usage')
options.add_argument('window-size=1920x1480')
options.add_experimental_option("excludeSwitches", ["enable-logging"])

driver = webdriver.Chrome(executable_path=r"C:\\chromedriver.exe")
driver.get('https://hr.bespinglobal.com:9870')

driver.maximize_window()

ID = driver.find_element_by_name("S_USER_ID")
ID.clear()
ID.send_keys("BG00943")

PW = driver.find_element_by_name("S_PWD")
PW.clear()
PW.send_keys("zhkaxo156!")

driver.find_element_by_id("btn_login").click()
time.sleep(2)

driver.find_element_by_xpath("//img[@src='/common/images/V01/main/gnb11.png']").click()
time.sleep(2)

driver.find_elements_by_class_name("pgmStyle")[7].click()
time.sleep(2)

driver.switch_to.frame("iframe_biz_essMeessme47")

driver.find_element_by_xpath('//input[@class="btn_goWork_ko"]').click()

time.sleep(3)

driver.switch_to.default_content()

iframes = driver.find_elements_by_tag_name('iframe')
print('현재 페이지에 iframe은 %d개가 있습니다.' % len(iframes))

for iframe in iframes:
    print(iframe.get_attribute('name'))

driver.switch_to.frame(iframes[3].get_attribute('name'))

cv=WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, '//input[@class="save"]')))

time.sleep(5)
driver.find_element_by_xpath('//input[@class="save"]').click()

time.sleep(4)

alert = driver.switch_to_alert()

alert.accept()

time.sleep(5000)