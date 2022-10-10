# React Loan Calculator

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

  * Delivery Method A - Remote App's Custom Element
  
     * [Option 1] Javascript Resources Hosted on Remote Server or LXC Client Extension Service
     * [Option 2] Javascript Resources Hosted on Liferay Server in webapps
     * [Option 3] Javascript Resources Added to Document Library
     
  * Delivery Method B - Use as separate React App (Make sure to set the CORs Policy to support this approach if on a separate domain) 
  * Delivery Method C - Remote App's iFrame 

![Component Outcomes 3](./screenshots/img-3.png)
