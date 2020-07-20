@Search
Feature: Google Search


  Scenario Outline: Perfrom google search by keyword
    Given I navigate to <URL> website
    When  I perform search using <Keyword> keyword
    Then  I get search result <Keyword>

    Examples:
      |URL|Keyword|
      |https://www.google.com/ |Test Automation|
      |https://www.google.com/ |Corona news|

