# Cypress Advocate

- I follow Cypress improvements by subscribing to their newsletter. Because of this, I saw that a recent update had introduced easier setup for caching test user login. I implemented this update so I could try out the test user caching - and it worked! As a result, we saw major runtime improvements and less flakiness around user login while running the suite.
- I added Cypress screenshots to the PR build - it will now post screenshots to a directory if there are failures.
- I noticed we were unnecessarily uploading videos for every test run even if they passed - this greatly slowed down our pipeline builds. I updated the Cypress config to only publish a video if a test fails saving us time and resources.
- I researched and implemented our new suite, component testing. Moving forward we will have separation of concerns to further improve our test run times & PR build times.
  + End-to-end tests will house our full workflow tests, simulating how a user gets from Point A -> B -> C and verifying actual API calls
  + Component tests will house our display & text verification tests, ensuring the web app looks the way we expect it to without relying on full API calls & database querying which can significantly decrease runtime and slow down our CI/CD pipelines