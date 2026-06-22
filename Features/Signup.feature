Feature: ParaBank Registration and Login
Scenario: Register and Login Successfully

Given User opens ParaBank website
When User registers a new account
And User logs in with registered credentials
Then User should be logged in successfully
And User balance should be displayed