# Work
Since joining Brighton Science in July 2022, I have successfully completed over 150 stories, leaving a lasting impact on the BConnect web application and our suite of tools including GitHub, Jira, and Azure. Below, I showcase some of my contributions in delivering an exceptional product to our customers. The left-hand navigation outlines additional skills and experience that underscore my value to the team.

## Surface Profile Development

Passionate about making internal tools the best they can be for fellow co-workers, I led discovery conversations for improving Surface Profile Development. After a half-day workshop in March 2022 and continued conversations with our primary stakeholders, I created the appropriate initiative, epics, and stories to encapsulate the work.

### Discovery Meeting Whiteboard
![Sticky notes on a virtual whiteboard](/assets/surface-profile-development-workshop-notes.png "Surface Profile Development Workshop Notes")

### Jira Initiative
Browse the Jira Initiative for relevant details and links to corresponding epics, stories, and workshop whiteboard: **[Link to Jira Initiative](https://brightonscience.atlassian.net/browse/SOF-1096)**
![Jira Initiative outlining the details of Surface Profile Development Project](/assets/surface-profile-development-initiative.png "Jira Initiative")


### Surface Profile Development Experiment Template
The need for an experiment template specific to surface profile development was identified and created. It needed to be available only to certain internal users so the template is hidden behind an internal user role.
![BConnect web app experiment template selection view with surface profile development selected](/assets/surface-profile-development-template.png "Surface Profile Development Template")

### Network ID Picker
This new template presented a unique challenge since a Brighton employee would need to be able to assign it to a specific client. We added an environment picker that only displays for Surface Profile experiments (and, therefore, internal user roles).
![BConnect web app experiment details view with selection highlighted in environment id dropdown](/assets/surface-profile-development-environment-picker.png "Surface Profile Environment Picker")

### More Improvements for Developing Surface Profiles:
<br>

#### Warn a user if they're about to overwrite an existing profile
![Overwrite Warning Modal](/assets/surface-profile-overwrite-warning.png "Surface Profile Overwrite Warning Modal")

#### Easily view a profile and all of its fields

Working with internal stakeholders again, I gathered information about the best way to organize, order, and display surface profile data and then implemented a solution.

In the Surface Profile list, a user can select 'View profile'
![Table row with hyperlink to View Profile](/assets/surface-profile-list-view-profile.png "View profile option")

The user is then taken to the Surface Profile view where they can expand and collapse sections to view relevant fields and easily copy the JSON from this page as well.
![Surface Profile View Profile Page](/assets/surface-profile-view-profile.png "View profile option")

#### Search Surface Profile list

The list of surface profiles will continue to grow and now users can search by Network ID.

All results
![Surface Profile List View all results with 2 columns redacted](/assets/surface-profile-list-view-all-results.png "All results")

Search results
![Surface Profile List View search results displays 2 profiles in a list with 2 columns redacted](/assets/surface-profile-list-view-search-results.png "Search results")

## Client Logos
> :warning: NOTE:
> Due to non-disclosure agreement (NDA) restrictions, I am unable to share images on this public site. However, you can view the images through the associated Jira story: **[Link to Jira story](https://brightonscience.atlassian.net/browse/SOF-2178)**

To ensure our clients would have a personalized touch on their BConnect devices, I added each of their logos to BConnect. This entailed:
1. Finding logos for each client and making sure they would look good on the device
1. Verifying each logo individually on the device emulator 
1. Verifying each logo on the actual BConnect device at the Minneapolis office
1. Receiving approval from management
1. Collaborating with two teammates to upload the client logos directly to the PROD Azure Blob Storage. This was necessary because the Admin - upload client logo feature had not been released yet
1. Lastly, I made improvements to the Administration/Client Upload section based on input from UX to enhance its functionality

## FormKit
VueConf 2022 had a profound impact on me, especially when it comes to FormKit. Recognizing the need for faster form development including improved validation and accessibility support, I successfully integrated FormKit into the BConnect platform, empowering us to create forms more efficiently.

![Blank project form with an open datepicker](/assets/project-details-form.png "Project Details Form")
