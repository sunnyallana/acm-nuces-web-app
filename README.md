# ACM NUCES Web App

This repository contains the code for the **Coders Cup 24** Web Application, built to facilitate the registration process for the competition. The app saw remarkable success, with over 2,500 users, 9,900 views, and 900 registrations consisting of 2-3 team members.

## Demo
![gtg](https://github.com/user-attachments/assets/ecd32989-f3ea-4b28-9de7-2efb7073ec7a)
  
*Insert image of Google Analytics stats showing user engagement here.*

## Features

### Key Tasks & Achievements:
- **Enhanced Security**: Integrated Google Captcha V2 for robust DDoS protection and overall security enhancement.
- **Secure API Requests**: Implemented Axios to safeguard against XSS and CSRF vulnerabilities, ensuring secure data exchanges.
- **Engaging Animations**: Utilized **Framer Motion** and **GSAP** to create captivating animations, enhancing the overall user experience.
- **Optimized Performance**: Leveraged cloud services for optimized asset delivery, resulting in faster load times.
- **Scalability**: Deployed the application on **Azure**, ensuring scalability and reliability for thousands of concurrent users.
- **Streamlined Development**: Established a **CI/CD pipeline** to automate testing, deployment, and ensure code quality.
- **SEO Optimization**: Enhanced the app’s SEO, achieving top rankings for competitive keywords like “Coders Cup,” “Coders Cup ACM,” and “Coders Cup Fast.”
- **Effective Collaboration**: Worked efficiently with the team using **Git/GitHub** for version control, ensuring smooth integration of features.
- **Real-time Notifications**: Implemented **React Toaster** to provide immediate feedback to users based on their actions.
- **Cross-Browser Compatibility**: Thoroughly tested the application on multiple browsers to ensure a consistent and seamless experience.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express
- **Deployment**: Azure Cloud
- **Animations**: Framer Motion, GSAP
- **Security**: Google Captcha V2, Axios (for API security)
- **CI/CD**: GitHub Actions for automated testing and deployment

## Installation

To run the project locally:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/sunnyallana/acm-nuces-web-app.git
    ```

2. **Navigate into the project directory**:

    ```bash
    cd acm-nuces-web-app
    ```

3. **Install the dependencies**:

    For the frontend (React app):

    ```bash
    cd client
    npm install
    ```

    For the backend (Node.js app):

    ```bash
    cd server
    npm install
    ```

4. **Set up environment variables**:

    Create a `.env` file in both the `client` and `server` directories. Example variables to include:
    
    ```env
    REACT_APP_API_URL=<your-api-url>
    GOOGLE_RECAPTCHA_SITE_KEY=<your-site-key>
    GOOGLE_RECAPTCHA_SECRET_KEY=<your-secret-key>
    ```

5. **Run the project**:

    For the frontend (React):

    ```bash
    cd client
    npm start
    ```

    For the backend (Node.js):

    ```bash
    cd server
    npm start
    ```

The app will be running locally at `http://localhost:3000` (or any other port configured in your environment).

## Deployment

This project is deployed on **Azure** for scalability and optimal performance. You can find the live application at:  
[**Coders Cup 24 Web App**](https://coderscup.acmnuceskhi.com)

## Contributing

1. Fork this repository.
2. Create a new branch (`git checkout -b feature-xyz`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-xyz`).
6. Open a Pull Request.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgments

- **Coders Cup Team**: Special thanks to the entire team for their contributions.
- **Google Captcha V2**: For added security.
- **Framer Motion and GSAP**: For the awesome animations.
- **React and Node.js**: For providing the tools to build a seamless web experience.
- **Azure**: For reliable cloud services and deployment.

