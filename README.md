# react-loan-calculator

[![Deploy to
Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/weskempa-liferay/react-loan-calculator)

Example of a multi-step react component that leverages getting and posting Liferay Object data. This component also contains translated content for French, Portuguese, Spanish, and English based on the user's Liferay language settings.

![Component Outcomes 1](./screenshots/img-1.png)

![Component Outcomes 2](./screenshots/img-2.png)

### Expected Use
This resource can be used as a 7.4 Remote App (Custom Element) or a Client Extension service for LXC.

## Create the required Lifeary Objects

1. Create Object named:

    * Label: "Rate"
    * Pural Label: "Rates"
    * Object Name: "rates"
    * Note: This object represents the list of rates that the user can choose from.

2. Object Needs the Fields

    | Field  |  Type     | Required  |
    | :---   |   :----:  |  :----:   |
    | Rate   | Decimal   | No        |
    | Term   | Integer   | Yes       |

3. Publish the new Rate Object

4. Add a few rate records for the component to use:

    | Rate   | Term      |
    | :---   |   :----:  |
    | 6.75   | 30        |
    | 6.25   | 15        |
    | 5.75   | 10        |

5. Create a second Object named:

    * Label: "Loan Request"
    * Pural Label: "Loan Requests"
    * Object Name: "LoanRequest"
    * Note: This object represents the incoming loan requests that are sent from this component.

6. Object Needs the Fields

    | Field          |  Type       | Required  |
    | :---           |   :----:    |  :----:   |
    | Loan Request   | LongInteger | No        |
    | Interest Rat   | Decimal     | No        |
    | Remaining Term | Integer     | No        |
    | First Name     | Text        | No        |
    | Last Name      | Text        | No        |
    | Email Address  | Text        | No        |

6. Publish the new Loan Request Object


## Clone Repo and Install Packages
Clone repo and once ready run the following:

yarn install

# Display Method Options

So many ways to use Remote Apps!! *Yey!*

## Display Method A - Use as separate React App
  
1. Using 'yarn start' start the server. It should hit Liferay's headless API using Basic Authentication (test@liferay.com:test over port 8080)
 
2. Once the server is running, you should be able to see the application running on it's own server at http://localhost:3000/ or similar. 
 
## Display Method B - Remote App's iFrame 
  
1. Once the server is running (se previous step), you should be able to see the application running on it's own server at http://localhost:3000/ or similar. 
    
2. Then, navigate to Remote Apps within Liferay's control panel.
    
3. Create a new Remote App with the following field details:

| Field    | Value                   |
| :---     | :---                    |
| Name     | React Bar Chart         |
| Type     | iFrame                  |
| URL      | http://localhost:3000/  |
    
Save, then this application will be available in your widgets list.

## Display Method C - Remote App's Custom Element
### [Option 1] Javascript Resources Hosted on Remote Server
  
   *NOTE: These JS files are currently being hosted by the React dev server. This is great to point to these files for development because any changes you make to your code will show as soon as you refresh your page in Liferay. When not developing it will be better to run yarn run build and update the URL's with the JS files in your build directory (Options 2 & 3).*  
  
1. Within your React App, run your server using 'yarn start'
    
2. Once your server is started, your Javascript resources will be available accross the network. 

3. Then, navigate to Remote Apps within Liferay's control panel.
    
4. Create a new Remote App with the following field details.
    * *Note 1: Use the (+) icon for adding additional URL values.* 

| Field             |  Value                                                |
| :---              | :---                                                  |
| Name              | React Bar Chart                                       |
| Type              | Custom Element                                        |
| HTML Element Name | react-headless-chart                                  |
| URL 1             | http://localhost:3000/static/js/main.[RANDOM-ID].js   |
| CSS               | http://localhost:3000/static/css/main.[RANDOM-ID].css |
 
Save, then this application will be available in your widgets list.

### [Option 2] Javascript Resources Added to Document Library

   *NOTE: Choose this method when you are working on a live server that you DO NOT have file system control over (LOL/SaaS/Site or Portal Administrator) and you do not have access to run a separate live react server.* 

Similar to Option 2, however once the files are created they are added to the Liferay Document Library (or any public online resource - Google Drive, etc) and hosted using Resource URLs. 

### [Option 3] LXC Client Extension Service

   * Details coming soon.

![Component Outcomes 3](./screenshots/img-3.png)
