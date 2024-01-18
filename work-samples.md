# Work Samples

Samples of the work I've completed since starting at Brighton Science in July 2022.

## Quick Stats
- **✅ 137 completed stories**
- **🧑🏻‍💻 665 GitHub contributions**
- **🗣️ 3 Engineering Conferences**
- **📚 41 days and counting reading Vue docs regularly**

## Surface Profile Development

Passionate about making internal tools the best they can be for fellow co-workers, I led discovery conversations for improving Surface Profile Development. After a half-day workshop in March 2022 and continued conversations with our primary stakeholders, I created the appropriate initiative, epics, and stories to encapsulate the work.

--- 
#### Discovery Meeting Whiteboard
![Sticky notes on a virtual whiteboard](/assets/surface-profile-development-workshop-notes.png "Surface Profile Development Workshop Notes")

---
#### Jira Initiative

![Jira Initiative outlining the details of Surface Profile Development Project](/assets/surface-profile-development-initiative.png "Jira Initiative")


Browse the Jira Initiative for relevant details and links to corresponding epics, stories, and workshop whiteboard: **[Link to Jira Initiative](https://brightonscience.atlassian.net/browse/SOF-1096)**

---
#### Surface Profile Development Experiment Template

![BConnect web app experiment template selection view with surface profile development selected](/assets/surface-profile-development-template.png "Surface Profile Development Template")

The need for an experiment template specific to surface profile development was identified and created. It needed to be available only to certain internal users so the template is hidden behind an internal user role.

---
#### Network ID Picker

![BConnect web app experiment details view with selection highlighted in environment id dropdown](/assets/surface-profile-development-environment-picker.png "Surface Profile Environment Picker")

This new template presented a unique challenge since a Brighton employee would need to be able to assign it to a specific client. We added an environment picker that only displays for Surface Profile experiments (and, therefore, internal user roles).

---
### More improvements for folks who regularly develop surface profiles:

**Warn a user if they're about to overwrite an existing profile**
![Overwrite Warning Modal](/assets/surface-profile-overwrite-warning.png "Surface Profile Overwrite Warning Modal")

---
**Easily view a profile and all of its fields**

Working with internal stakeholders again, I gathered information about the best way to organize, order, and display surface profile data and then implemented a solution.

In the Surface Profile list, a user can select 'View profile'
![Table row with hyperlink to View Profile](/assets/surface-profile-list-view-profile.png "View profile option")

The user is then taken to the Surface Profile view where they can expand and collapse sections to view relevant fields and easily copy the JSON from this page as well.
![Surface Profile View Profile Page](/assets/surface-profile-view-profile.png "View profile option")

---
**Search Surface Profile list**

The list of surface profiles will continue to grow and now users can search by Network ID.

All results
![Surface Profile List View all results with 2 columns redacted](/assets/surface-profile-list-view-all-results.png "All results")

Search results
![Surface Profile List View search results displays 2 profiles in a list with 2 columns redacted](/assets/surface-profile-list-view-search-results.png "Search results")

## Cypress Advocate

- I follow Cypress improvements by subscribing to their newsletter. Because of this, I saw that a recent update had introduced easier setup for caching test user login. I implemented this update so I could try out the test user caching - and it worked! As a result, we saw major runtime improvements and less flakiness around user login while running the suite.
- I added Cypress screenshots to the PR build - it will now post screenshots to a directory if there are failures.
- I noticed we were unnecessarily uploading videos for every test run even if they passed - this greatly slowed down our pipeline builds. I updated the Cypress config to only publish a video if a test fails saving us time and resources.

## Founding Engineer
As a founding engineer for BConnect Web, I've stretched into various roles including DevOps, Design, Product Management, and Quality Assurance. I'm comfortable wearing many hats to help the team keep moving forward.
- Bicep - to ensure we removed knowledge silos, I completed Microsoft Azure Bicep training and took over most of the infrastructure updates until the team grew and we could keep training folks on this skill. 
- I have contributed weekly to getting MVPs spun up and presented that work at All-Company Sprint Reviews where I field questions and feedback
- I regularly create stories & bugs as needed
- I am a proponent for and regularly contribute to our end-to-end Cypress test suite
- I participated in the engineer interview process, helping to identify a lead engineer and recruit another full-stack engineer to the team
- All of this and more directly contributes to the continuous improvement of BConnect to deliver an excellent product for our customers

## Professional Development
I am passionate about keeping my skills current and continuing to improve individually. A few of the ways I do this is by attending conferences, reading documentation & newsletters, participating in the Code Review process, and self-guided learning.

- Brighton Science Front-End Planning Committee
- VueConf 2023
- Cypress Conf 2023
- Women Who Code Connect Conf 2023
- Newsletters
  - staying aware of current industry trends
- Reading through Vue docs
- VitePress + this portfolio site!

