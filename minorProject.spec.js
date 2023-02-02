// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('minorProject', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').usingServer('http://localhost:4444/wd/hub').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('minorProject', async function() {
    // Test name: minorProject
    // Step # | name | target | value
    // 1 | open | / | 
    await driver.get("http://localhost:3000/")
    // 2 | setWindowSize | 1030x693 | 
    await driver.manage().window().setRect({ width: 1030, height: 693 })
    // 3 | click | css=.fa-user-plus | 
    await driver.findElement(By.css(".fa-user-plus")).click()
    // 4 | type | id=exampleInputEmail1 | Surajkumar8987673516@gmail.com
    await driver.findElement(By.id("exampleInputEmail1")).sendKeys("Surajkumar8987673516@gmail.com")
    // 5 | type | id=password | suraj
    await driver.findElement(By.id("password")).sendKeys("suraj")
    // 6 | click | id=name | 
    await driver.findElement(By.id("name")).click()
    // 7 | type | id=name | Suraj kumarSingh
    await driver.findElement(By.id("name")).sendKeys("Suraj kumarSingh")
    // 8 | mouseDownAt | id=exampleInputEmail1 | 11,21
    {
      const element = await driver.findElement(By.id("exampleInputEmail1"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    // 9 | mouseMoveAt | id=exampleInputEmail1 | 11,21
    {
      const element = await driver.findElement(By.id("exampleInputEmail1"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 10 | mouseUpAt | id=exampleInputEmail1 | 11,21
    {
      const element = await driver.findElement(By.id("exampleInputEmail1"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    // 11 | click | id=exampleInputEmail1 | 
    await driver.findElement(By.id("exampleInputEmail1")).click()
    // 12 | type | id=exampleInputEmail1 | suraj31kumar1999
    await driver.findElement(By.id("exampleInputEmail1")).sendKeys("suraj31kumar1999")
    // 13 | click | css=.col-md-6 | 
    await driver.findElement(By.css(".col-md-6")).click()
    // 14 | click | id=profession | 
    await driver.findElement(By.id("profession")).click()
    // 15 | type | id=profession | student
    await driver.findElement(By.id("profession")).sendKeys("student")
    // 16 | click | id=phone | 
    await driver.findElement(By.id("phone")).click()
    // 17 | type | id=phone | 9876543210
    await driver.findElement(By.id("phone")).sendKeys("9876543210")
    // 18 | click | id=password | 
    await driver.findElement(By.id("password")).click()
    // 19 | type | id=password | 123
    await driver.findElement(By.id("password")).sendKeys("123")
    // 20 | click | id=cpassword | 
    await driver.findElement(By.id("cpassword")).click()
    // 21 | type | id=cpassword | 123
    await driver.findElement(By.id("cpassword")).sendKeys("123")
    // 22 | click | css=.btn-primary | 
    await driver.findElement(By.css(".btn-primary")).click()
    // 23 | assertAlert | Register Successfully... Redirecting to Login.. | 
    assert(await driver.switchTo().alert().getText() == "Register Successfully... Redirecting to Login..")
    // 24 | type | id=email | Surajkumar8987673516@gmail.com
    await driver.findElement(By.id("email")).sendKeys("Surajkumar8987673516@gmail.com")
    // 25 | type | id=password | suraj
    await driver.findElement(By.id("password")).sendKeys("suraj")
    // 26 | click | id=email | 
    await driver.findElement(By.id("email")).click()
    // 27 | type | id=email | suraj31kumar1999@gmail.com
    await driver.findElement(By.id("email")).sendKeys("suraj31kumar1999@gmail.com")
    // 28 | click | id=password | 
    await driver.findElement(By.id("password")).click()
    // 29 | type | id=password | 123
    await driver.findElement(By.id("password")).sendKeys("123")
    // 30 | click | css=.btn-primary | 
    await driver.findElement(By.css(".btn-primary")).click()
    // 31 | assertAlert | Password is Wrong | 
    assert(await driver.switchTo().alert().getText() == "Password is Wrong")
    // 32 | click | id=password | 
    await driver.findElement(By.id("password")).click()
    // 33 | type | id=password | 1234
    await driver.findElement(By.id("password")).sendKeys("1234")
    // 34 | click | css=.btn-primary | 
    await driver.findElement(By.css(".btn-primary")).click()
    // 35 | assertAlert | Password is Wrong | 
    assert(await driver.switchTo().alert().getText() == "Password is Wrong")
    // 36 | click | id=email | 
    await driver.findElement(By.id("email")).click()
    // 37 | type | id=password | suraj
    await driver.findElement(By.id("password")).sendKeys("suraj")
    // 38 | type | id=email | Surajkumar8987673516@gmail.com
    await driver.findElement(By.id("email")).sendKeys("Surajkumar8987673516@gmail.com")
    // 39 | click | id=password | 
    await driver.findElement(By.id("password")).click()
    // 40 | type | id=password | 8988
    await driver.findElement(By.id("password")).sendKeys("8988")
    // 41 | click | css=.btn-primary | 
    await driver.findElement(By.css(".btn-primary")).click()
    // 42 | assertAlert | Password is Wrong | 
    assert(await driver.switchTo().alert().getText() == "Password is Wrong")
    // 43 | click | css=form | 
    await driver.findElement(By.css("form")).click()
    // 44 | click | id=password | 
    await driver.findElement(By.id("password")).click()
    // 45 | click | css=.btn-primary | 
    await driver.findElement(By.css(".btn-primary")).click()
    // 46 | assertAlert | Password is Wrong | 
    assert(await driver.switchTo().alert().getText() == "Password is Wrong")
    // 47 | type | id=email | Surajkumar8987673516@gmail.com
    await driver.findElement(By.id("email")).sendKeys("Surajkumar8987673516@gmail.com")
    // 48 | type | id=password | suraj
    await driver.findElement(By.id("password")).sendKeys("suraj")
    // 49 | click | id=email | 
    await driver.findElement(By.id("email")).click()
    // 50 | click | id=password | 
    await driver.findElement(By.id("password")).click()
    // 51 | type | id=password | 8988
    await driver.findElement(By.id("password")).sendKeys("8988")
    // 52 | click | css=.btn-primary | 
    await driver.findElement(By.css(".btn-primary")).click()
    // 53 | assertAlert | Password is Wrong | 
    assert(await driver.switchTo().alert().getText() == "Password is Wrong")
    // 54 | click | id=password | 
    await driver.findElement(By.id("password")).click()
    // 55 | type | id=password | 123
    await driver.findElement(By.id("password")).sendKeys("123")
    // 56 | click | css=.btn-primary | 
    await driver.findElement(By.css(".btn-primary")).click()
    // 57 | assertAlert | Password is Wrong | 
    assert(await driver.switchTo().alert().getText() == "Password is Wrong")
    // 58 | click | id=email | 
    await driver.findElement(By.id("email")).click()
    // 59 | type | id=email | suraj31kumar1999@gmail.com
    await driver.findElement(By.id("email")).sendKeys("suraj31kumar1999@gmail.com")
    // 60 | click | id=password | 
    await driver.findElement(By.id("password")).click()
    // 61 | click | css=.btn-primary | 
    await driver.findElement(By.css(".btn-primary")).click()
    // 62 | assertAlert | Password is Wrong | 
    assert(await driver.switchTo().alert().getText() == "Password is Wrong")
    // 63 | click | id=email | 
    await driver.findElement(By.id("email")).click()
    // 64 | type | id=email | suraj@gmail.com
    await driver.findElement(By.id("email")).sendKeys("suraj@gmail.com")
    // 65 | click | id=password | 
    await driver.findElement(By.id("password")).click()
    // 66 | type | id=password | 8988
    await driver.findElement(By.id("password")).sendKeys("8988")
    // 67 | click | css=.btn-primary | 
    await driver.findElement(By.css(".btn-primary")).click()
    // 68 | assertAlert | User Login Successful... | 
    assert(await driver.switchTo().alert().getText() == "User Login Successful...")
    // 69 | click | linkText=Lecture | 
    await driver.findElement(By.linkText("Lecture")).click()
    // 70 | click | linkText=Class | 
    await driver.findElement(By.linkText("Class")).click()
    // 71 | click | linkText=Wanna JOIN | 
    await driver.findElement(By.linkText("Wanna JOIN")).click()
    // 72 | click | linkText=Class | 
    await driver.findElement(By.linkText("Class")).click()
    // 73 | click | linkText=Wanna Create | 
    await driver.findElement(By.linkText("Wanna Create")).click()
    // 74 | click | css=.form-control | 
    await driver.findElement(By.css(".form-control")).click()
    // 75 | type | css=.form-control | 1
    await driver.findElement(By.css(".form-control")).sendKeys("1")
    // 76 | click | css=.btn-secondary | 
    await driver.findElement(By.css(".btn-secondary")).click()
    // 77 | click | css=.VsTVUAD89KWleD0YRVsD | 
    await driver.findElement(By.css(".VsTVUAD89KWleD0YRVsD")).click()
    // 78 | click | id=inputGroup-sizing-default | 
    await driver.findElement(By.id("inputGroup-sizing-default")).click()
    // 79 | type | id=inputGroup-sizing-default | C:\fakepath\052615_0721_Howtocreate1.png
    await driver.findElement(By.id("inputGroup-sizing-default")).sendKeys("C:\\fakepath\\052615_0721_Howtocreate1.png")
    // 80 | click | id=inputGroupFileAddon04 | 
    await driver.findElement(By.id("inputGroupFileAddon04")).click()
    // 81 | click | linkText=Services | 
    await driver.findElement(By.linkText("Services")).click()
    // 82 | click | linkText=About | 
    await driver.findElement(By.linkText("About")).click()
    // 83 | click | css=.ml-3 | 
    await driver.findElement(By.css(".ml-3")).click()
    // 84 | click | css=.btn:nth-child(5) | 
    await driver.findElement(By.css(".btn:nth-child(5)")).click()
    // 85 | click | linkText=Lecture | 
    await driver.findElement(By.linkText("Lecture")).click()
    // 86 | click | linkText=Login | 
    await driver.findElement(By.linkText("Login")).click()
    // 87 | type | id=email | Surajkumar8987673516@gmail.com
    await driver.findElement(By.id("email")).sendKeys("Surajkumar8987673516@gmail.com")
    // 88 | type | id=password | suraj
    await driver.findElement(By.id("password")).sendKeys("suraj")
    // 89 | click | css=.btn-outline-dark | 
    await driver.findElement(By.css(".btn-outline-dark")).click()
    // 90 | type | id=exampleInputEmail1 | Surajkumar8987673516@gmail.com
    await driver.findElement(By.id("exampleInputEmail1")).sendKeys("Surajkumar8987673516@gmail.com")
    // 91 | type | id=password | suraj
    await driver.findElement(By.id("password")).sendKeys("suraj")
    // 92 | click | css=.btn-primary | 
    await driver.findElement(By.css(".btn-primary")).click()
    // 93 | assertAlert | Error Found | 
    assert(await driver.switchTo().alert().getText() == "Error Found")
    // 94 | click | css=.ml-5 | 
    await driver.findElement(By.css(".ml-5")).click()
  })
})