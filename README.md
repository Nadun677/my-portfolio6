# 💻 Nadun Konara — Personal Portfolio

A modern, responsive, and interactive personal portfolio website built to showcase my **software development skills, projects, education, experience, and technical expertise**.

The portfolio is designed with a clean, premium interface and includes animated sections, categorized technical skills, project showcases, social links, CV access, and a working contact form.

---

## 🌐 Portfolio

**Live Website:**
Add your deployed website URL here.

**GitHub:**
https://github.com/Nadun677

---

## 👨‍💻 About Me

Hi, I'm **Nadun Konara**, a Software Engineering / Computing student and aspiring software developer with an interest in building modern web and mobile applications.

I enjoy working with different technologies across frontend development, backend development, databases, mobile applications, networking, and software engineering.

### My Areas of Interest

* 🌐 Web Development
* 📱 Mobile Application Development
* 💻 Software Engineering
* 🤖 Artificial Intelligence & Machine Learning
* 🗄️ Database Management
* 🌐 Networking
* 🎨 UI/UX Design
* 🔧 IT Support

---

## ✨ Features

* 🎨 Modern and responsive UI
* 🌙 Dark-themed premium design
* 👤 Professional hero section
* 🖼️ Animated profile image
* 🛠️ Categorized technical skills
* 🌈 Colorful technology icons
* ✨ Smooth hover animations
* 📂 Projects showcase
* 📄 View CV
* ⬇️ Download CV
* 📧 Working contact form
* 🔗 Social media links
* 📱 Fully responsive on mobile, tablet, and desktop
* ⚡ Fast development with Vite
* 🎯 Smooth navigation between sections

---

## 🛠️ Technologies Used

### Programming Languages

* Java
* Python
* C
* JavaScript
* TypeScript
* Dart
* Kotlin

### Web Development

* HTML
* CSS
* PHP

### Frameworks & Libraries

* React
* Laravel
* Bootstrap
* Angular
* Next.js
* Flutter
* Tailwind CSS

### Database Management

* MySQL
* SQLite
* MongoDB
* Firebase

### Development Tools & IDEs

* Visual Studio Code
* Android Studio
* Eclipse
* Arduino IDE
* Apache NetBeans
* Code::Blocks

### Operating Systems

* Windows
* Linux

### Version Control

* Git
* GitHub

### Networking

* Cisco Packet Tracer

### Concepts

* Object-Oriented Programming
* UI/UX Design
* Software Development
* Networking Fundamentals

---

## 📂 Portfolio Sections

The website currently contains the following sections:

### 🏠 Home

Introduces me with:

* Name
* Professional role
* Social links
* Profile image
* CV buttons
* Contact button

### 👨‍💻 About

Provides information about my background, interests, education, and development journey.

### 🛠️ Skills

Technical skills are organized into categories:

* Programming Languages
* Web Development
* Frameworks & Libraries
* Database Management
* Development Tools
* Operating Systems
* Version Control
* Concepts
* Networking

### 🚀 Projects

Showcases my software development projects with descriptions, technologies, and project links.

### 📬 Contact

Includes a working contact form where visitors can send messages directly.

The contact form uses **EmailJS** for email delivery.

### 🔗 Footer

Contains:

* Email
* LinkedIn
* GitHub
* Copyright information
* Terms / additional links

---

# 🚀 Getting Started

Follow the steps below to run the portfolio locally.

## 1. Clone the Repository

```bash
git clone https://github.com/Nadun677/my-portfolio.git
```

## 2. Navigate to the Project

```bash
cd my-portfolio
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Start the Development Server

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:5173
```

---

# 📧 Contact Form Setup

The portfolio uses **EmailJS** to send messages from the contact form.

Install EmailJS if it is not already installed:

```bash
npm install @emailjs/browser
```

Then configure your EmailJS credentials inside your contact component.

You will need:

```text
Service ID
Template ID
Public Key
```

Example:

```javascript
emailjs.sendForm(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  form.current,
  "YOUR_PUBLIC_KEY"
);
```

### ⚠️ Security Note

Do not upload private API keys, passwords, or secret credentials to GitHub.

Your EmailJS public key can normally be used in frontend applications, but never expose private server-side credentials.

---

# 📄 CV

The portfolio provides options to:

* 👀 View CV
* ⬇️ Download CV

Place your CV inside the project's public directory.

Example:

```text
public/
└── cv/
    └── K M N N KONARAA CV.pdf
```

Then reference it in React:

```jsx
<a
  href="/cv/K M N N KONARAA CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  View CV
</a>
```

---

# 📁 Project Structure

A simplified project structure looks like this:

```text
my-portfolio/
│
├── public/
│   ├── cv/
│   │   └── K M N N KONARAA CV.pdf
│   │
│   └── ...
│
├── src/
│   ├── assets/
│   │   └── profile-image.jpg
│   │
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── SocialLinks.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

# 🎨 Design

The portfolio uses a modern dark interface with:

* Purple accent colors
* Glassmorphism cards
* Rounded components
* Smooth transitions
* Hover effects
* Responsive layouts
* Animated elements

The design focuses on keeping the interface **professional, clean, and easy to navigate**.

---

# 📱 Responsive Design

The portfolio is designed to work across:

| Device     | Support |
| ---------- | ------- |
| 💻 Desktop | ✅       |
| 💻 Laptop  | ✅       |
| 📱 Mobile  | ✅       |
| 📲 Tablet  | ✅       |

Tailwind CSS responsive utilities are used to adapt the layout to different screen sizes.

---

# 📦 Main Dependencies

Some of the main packages used in this project include:

```json
{
  "react": "latest",
  "react-dom": "latest",
  "react-icons": "latest",
  "emailjs-com": "latest"
}
```

The exact versions can be found in `package.json`.

---

# 🔧 Available Scripts

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

# 🚀 Deployment

This project can be deployed using platforms such as:

* Vercel
* Netlify
* GitHub Pages

Before deploying, make sure:

1. All images are correctly referenced.
2. Your CV exists in the `public` folder.
3. EmailJS is correctly configured.
4. Your production build works correctly.

Build the project using:

```bash
npm run build
```

---

# 📸 Screenshots

Add screenshots of your portfolio here.

Example:

```markdown
![Portfolio Home](./screenshots/home.png)

![Skills Section](./screenshots/skills.png)

![Projects Section](./screenshots/projects.png)

![Contact Section](./screenshots/contact.png)
```

Recommended screenshot folder:

```text
screenshots/
├── home.png
├── skills.png
├── projects.png
└── contact.png
```

---

# 📬 Contact Me

If you'd like to discuss a project, job opportunity, collaboration, or software development, feel free to contact me.

### 📧 Email

Add your professional email here.

### 💼 LinkedIn

https://lk.linkedin.com/in/nadun-konara-211502333

### 🐙 GitHub

https://github.com/Nadun677

---

# 🎯 Future Improvements

Planned improvements may include:

* [ ] Add more projects
* [ ] Add project filtering
* [ ] Add project detail pages
* [ ] Add dark/light theme switching
* [ ] Improve accessibility
* [ ] Add more advanced animations
* [ ] Add downloadable certificates
* [ ] Add blog section
* [ ] Add testimonials
* [ ] Add backend analytics
* [ ] Improve SEO
* [ ] Add more AI-powered features

---

# 📜 License

This project is created for personal portfolio and professional presentation purposes.

You are welcome to use the ideas and structure for learning, but please replace personal information, images, CV files, and project details with your own content.

---

## ⭐ Support

If you like this portfolio, consider giving the repository a ⭐ on GitHub.

---

<div align="center">

### 💜 Designed & Developed by Nadun Konara

**Software Developer | Web Developer | Mobile App Developer | IT Support**

</div>
