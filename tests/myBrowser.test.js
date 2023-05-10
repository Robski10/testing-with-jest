const { Builder, By, until } = require('selenium-webdriver');
require('geckodriver');

describe('Web page', () => {
  let driver;
  const DEFAULT_TIMEOUT = 5000;
  const fileUnderTest = 'file:///C:/Users/justi/OneDrive/Desktop/Fleraplatfornassignment5/testing-with-jest/dist/index.html'; // define the URL of the web page to test

  beforeAll(async () => {
    driver = await new Builder().forBrowser('firefox').build();
  });

  afterAll(async () => {
    await driver.quit();
  }, DEFAULT_TIMEOUT);

  test('stack is empty ', async () => {
    await driver.get(fileUnderTest);
    let stack = await driver.findElement(By.id('top_of_stack')).getText();
    expect(stack).toEqual("n/a");
  });

  test('should push an element onto the stack', async () => {
    await driver.get(fileUnderTest);
  
    let push = await driver.findElement(By.css('button[name="push"]'));
    await push.click();
  
    // wait until alert dialog is displayed
    await driver.wait(until.alertIsPresent());
  
    // switch to the alert dialog
    let alertDialog = await driver.switchTo().alert();
  
    // get the text of the alert dialog and dismiss it
    let alertText = await alertDialog.getText();
    await alertDialog.dismiss();
  
    // assert that the text of the alert dialog is correct
    expect(alertText).toEqual('Vad ska vi lägga på stacken?');
  });

});
