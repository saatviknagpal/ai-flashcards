<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">AI-FLASHCARDS</h1>
</p>
<p align="center">
    <em>AI Flashcards: Expand Memory, Streamline Learning</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/saatviknagpal/ai-flashcards?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/saatviknagpal/ai-flashcards?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/saatviknagpal/ai-flashcards?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/saatviknagpal/ai-flashcards?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/Firebase-FFCA28.svg?style=flat&logo=Firebase&logoColor=black" alt="Firebase">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white" alt="Axios">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/Stripe-008CDD.svg?style=flat&logo=Stripe&logoColor=white" alt="Stripe">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

##  Quick Links

> - [ Overview](#-overview)
> - [ Features](#-features)
> - [ Repository Structure](#-repository-structure)
> - [ Modules](#-modules)
> - [ Getting Started](#-getting-started)
>   - [ Installation](#-installation)
>   - [ Running ai-flashcards](#-running-ai-flashcards)
>   - [ Tests](#-tests)
> - [ Project Roadmap](#-project-roadmap)
> - [ Contributing](#-contributing)
> - [ License](#-license)
> - [ Acknowledgments](#-acknowledgments)

---

##  Overview

The ai-flashcards project is a Next.js web application that leverages AI to create, purchase, and study flashcards. It integrates Tailwind CSS for enhanced styling, and uses Clerk for route protection, ensuring robust security. The app facilitates flashcard generation and checkout processes via API routes, enabling users to create and purchase custom flashcards. With AI-powered flashcard creation and seamless payment processing, ai-flashcards provides a valuable tool for efficient and personalized learning experiences.

---

##  Features

|    |   Feature         | Description |
|----|-------------------|---------------------------------------------------------------|
| ⚙️  | **Architecture**  | Next.js with Tailwind CSS, leveraging API routes and serverless functions for dynamic content creation and delivery. Utilizes path aliases for streamlined access to modules and components. |
| 🔩 | **Code Quality**  | Follows a modular structure with well-defined API routes and middleware for route protection. Uses ESLint for code linting and follows Tailwind CSS for consistent styling. |
| 📄 | **Documentation** | Limited information regarding code documentation and architectural decision-making. More comprehensive documentation could improve understanding and onboarding for contributors. |
| 🔌 | **Integrations**  | Integrates with Stripe for payment processing, Clerk for route protection, and Firebase for database operations. |
| 🧩 | **Modularity**    | Modular architecture with separate API routes and middleware for route protection, promoting reusability and maintainability. |
| 🧪 | **Testing**       | No explicit mention of testing frameworks and tools. Consideration for incorporating unit and integration tests would enhance code reliability. |
| ⚡️  | **Performance**   | Utilizes Tailwind CSS for efficient styling and responsive design. Efficient resource usage and speed can be inferred from the use of Next.js. |
| 🛡️ | **Security**      | Implements Clerk for route protection, ensuring secure access control. Measures for data protection include API route protection and secure payment processing using Stripe. |
| 📦 | **Dependencies**  | Relies on various dependencies such as Next.js, Stripe, Tailwind CSS, Firebase, and others. |
| 🚀 | **Scalability**   | Next.js and serverless functions support scalability, enabling the app to handle increased traffic and load efficiently. |


---

##  Repository Structure

```sh
└── ai-flashcards/
    ├── README.md
    ├── app
    │   ├── [id]
    │   │   └── page.js
    │   ├── api
    │   │   ├── checkout
    │   │   │   └── route.js
    │   │   ├── generate-flashcards
    │   │   │   └── route.js
    │   │   └── generate-flashcards-from-text
    │   │       └── route.js
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.js
    │   ├── page.js
    │   ├── pricing
    │   │   └── page.js
    │   ├── providers
    │   │   └── QueryClientProvider.js
    │   ├── saved-flashcards
    │   │   ├── [id]
    │   │   │   └── page.js
    │   │   └── page.js
    │   └── utils
    │       ├── flashcardUtils.js
    │       └── get-stripe.js
    ├── components
    │   ├── Checkout.js
    │   ├── FileUpload.js
    │   ├── Navbar.js
    │   ├── dark-mode-toggle.js
    │   ├── text-flashcards.js
    │   └── ui
    │       ├── button.jsx
    │       ├── card.jsx
    │       ├── dialog.jsx
    │       ├── dropdown-menu.jsx
    │       ├── input.jsx
    │       └── theme-provider.js
    ├── components.json
    ├── firebase.js
    ├── jsconfig.json
    ├── lib
    │   ├── stripe.js
    │   └── utils.js
    ├── middleware.js
    ├── next.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    ├── public
    │   ├── next.svg
    │   └── vercel.svg
    └── tailwind.config.js
```

---

##  Modules

<details closed><summary>.</summary>

| File                                                                                                | Summary                                                                                                                                                                                                                                                                                                                                        |
| ---                                                                                                 | ---                                                                                                                                                                                                                                                                                                                                            |
| [jsconfig.json](https://github.com/saatviknagpal/ai-flashcards/blob/master/jsconfig.json)           | The code snippet in jsconfig.json sets up path aliases for the parent repository's architecture, providing streamlined access to various modules and components throughout the codebase.                                                                                                                                                       |
| [postcss.config.mjs](https://github.com/saatviknagpal/ai-flashcards/blob/master/postcss.config.mjs) | The code in postcss.config.mjs configures Tailwind CSS for the parent ai-flashcards repository, enhancing styling capabilities within the application.                                                                                                                                                                                         |
| [components.json](https://github.com/saatviknagpal/ai-flashcards/blob/master/components.json)       | The code snippet in api/checkout/route.js handles the API route for checkout in the ai-flashcards repository. It facilitates payment processing and order completion for flashcard purchases.                                                                                                                                                  |
| [middleware.js](https://github.com/saatviknagpal/ai-flashcards/blob/master/middleware.js)           | Code snippet overview: `middleware.js` adds route protection using Clerk for selected routes in the Next.js app. It uses `clerkMiddleware` to define and enforce route protection based on specified criteria. The `createRouteMatcher` validates routes, and `auth().protect()` secures them. The code is crucial for enhancing app security. |
| [package.json](https://github.com/saatviknagpal/ai-flashcards/blob/master/package.json)             | This code snippet orchestrates the API routes for generating flashcards, ensuring seamless integration within the app's architecture. It facilitates dynamic content creation and delivery.                                                                                                                                                    |
| [next.config.mjs](https://github.com/saatviknagpal/ai-flashcards/blob/master/next.config.mjs)       | The code snippet in next.config.mjs configures Next.js settings for the parent repository ai-flashcards. It defines custom Next.js configurations.                                                                                                                                                                                             |
| [tailwind.config.js](https://github.com/saatviknagpal/ai-flashcards/blob/master/tailwind.config.js) | This code snippet provides a route for generating flashcards from text as part of the AI Flashcards app's API. It contributes to the app's functionality related to creating flashcards from text inputs.                                                                                                                                      |
| [package-lock.json](https://github.com/saatviknagpal/ai-flashcards/blob/master/package-lock.json)   | This code snippet is responsible for handling the generation of flashcards from text input in the AI Flashcards parent repository. It plays a critical role in the application's feature set by enabling users to convert plain text into flashcards seamlessly.                                                                               |
| [firebase.js](https://github.com/saatviknagpal/ai-flashcards/blob/master/firebase.js)               | Code in `firebase.js` initializes Firebase app, firestore, and storage for the parent repository's frontend app to interact with the Firebase cloud services to store and retrieve data. This integration enables efficient handling of user data and assets.                                                                                  |

</details>

<details closed><summary>components</summary>

| File                                                                                                             | Summary                                                                                                                                                                                                                                                                                                    |
| ---                                                                                                              | ---                                                                                                                                                                                                                                                                                                        |
| [text-flashcards.js](https://github.com/saatviknagpal/ai-flashcards/blob/master/components/text-flashcards.js)   | This code snippet, situated in the `components` directory, powers the generation of flashcards from text input. It integrates with the `generate-flashcards-from-text` API endpoint and handles the UI component for text input-based flashcard creation.                                                  |
| [dark-mode-toggle.js](https://github.com/saatviknagpal/ai-flashcards/blob/master/components/dark-mode-toggle.js) | This code snippet, `dark-mode-toggle.js`, provides a component for toggling between light and dark themes in the parent repository's UI. It imports and utilizes the `useTheme` hook to enable theme switching. The component offers a visually appealing and user-friendly interface for theme selection. |
| [FileUpload.js](https://github.com/saatviknagpal/ai-flashcards/blob/master/components/FileUpload.js)             | This code snippet in the `ai-flashcards` repository implements API routes for flashcard generation and payment checkout. It's pivotal to the repository's backend architecture, handling critical functionalities.                                                                                         |
| [Navbar.js](https://github.com/saatviknagpal/ai-flashcards/blob/master/components/Navbar.js)                     | Code Summary:The Navbar.js component renders a navbar with links to home, saved flashcards, pricing, and a dark mode toggle. It also includes a user button for authentication. This component helps create a cohesive and navigable user interface within the parent repository's architecture.           |
| [Checkout.js](https://github.com/saatviknagpal/ai-flashcards/blob/master/components/Checkout.js)                 | This Checkout.js component facilitates seamless integration of Stripe payments into the AI Flashcards platform. It allows the user to purchase a specific plan, efficiently handling the payment process.                                                                                                  |

</details>

<details closed><summary>components.ui</summary>

| File                                                                                                            | Summary                                                                                                                                                                                                                                      |
| ---                                                                                                             | ---                                                                                                                                                                                                                                          |
| [dialog.jsx](https://github.com/saatviknagpal/ai-flashcards/blob/master/components/ui/dialog.jsx)               | This code snippet adds routing for flashcard generation and text extraction to the existing API structure in the AI Flashcards repository. It enables users to dynamically create flashcards through the application's interface.            |
| [input.jsx](https://github.com/saatviknagpal/ai-flashcards/blob/master/components/ui/input.jsx)                 | Code Summary: The input.jsx component provides a reusable UI input element with dynamic styling for React applications. It enhances the parent repository's UI capabilities by enabling flexible and consistent input fields across the app. |
| [theme-provider.js](https://github.com/saatviknagpal/ai-flashcards/blob/master/components/ui/theme-provider.js) | The code in theme-provider.js facilitates the implementation of a theme provider component within the repository's architecture. It enables the usage of themes in the application's UI components.                                          |
| [card.jsx](https://github.com/saatviknagpal/ai-flashcards/blob/master/components/ui/card.jsx)                   | Summary: The card.jsx code provides reusable UI components for creating cards with title, description, and footer, supporting customization. It contributes essential UI elements to the parent repository's frontend architecture.          |
| [dropdown-menu.jsx](https://github.com/saatviknagpal/ai-flashcards/blob/master/components/ui/dropdown-menu.jsx) | This code snippet adds routes for generating flashcards from text to the parent repository's API module. It supports the creation of flashcards from user-provided text inputs.                                                              |
| [button.jsx](https://github.com/saatviknagpal/ai-flashcards/blob/master/components/ui/button.jsx)               | This code snippet defines a flexible Button component using class variance authority for styling variations. It plays a crucial role in providing consistent and customizable UI buttons across the app.                                     |

</details>

<details closed><summary>lib</summary>

| File                                                                                  | Summary                                                                                                                                                                                                                                 |
| ---                                                                                   | ---                                                                                                                                                                                                                                     |
| [utils.js](https://github.com/saatviknagpal/ai-flashcards/blob/master/lib/utils.js)   | The code snippet in **lib/utils.js** provides a utility function for merging CSS class names using **clsx** and **tailwind-merge** libraries. This enhances the repository's architecture by centralizing CSS class merging operations. |
| [stripe.js](https://github.com/saatviknagpal/ai-flashcards/blob/master/lib/stripe.js) | The code in lib/stripe.js defines pricing plans and their features for the billing component in the ai-flashcards repository, helping manage subscription options and billing logic.                                                    |

</details>

<details closed><summary>app</summary>

| File                                                                                      | Summary                                                                                                                                                                                                                                                                  |
| ---                                                                                       | ---                                                                                                                                                                                                                                                                      |
| [layout.js](https://github.com/saatviknagpal/ai-flashcards/blob/master/app/layout.js)     | Code in `app/layout.js` configures the base layout for the Next.js application, utilizing Clerk for authentication and QueryProvider for managing data querying. It establishes global styles and theme handling.                                                        |
| [page.js](https://github.com/saatviknagpal/ai-flashcards/blob/master/app/page.js)         | The app/page.js code provides the Home component for the AI flashcards app. It handles user authentication, presents UI components, and allows generating flashcards from PDF or text.                                                                                   |
| [globals.css](https://github.com/saatviknagpal/ai-flashcards/blob/master/app/globals.css) | Code snippet in generate-flashcards/route.js handles API requests for creating flashcards. This module interfaces with the app's backend to process and store flashcard data. It's a key component of the flashcard generation feature in the repository's architecture. |

</details>

<details closed><summary>app.[id]</summary>

| File                                                                                   | Summary                                                                                                                                                                         |
| ---                                                                                    | ---                                                                                                                                                                             |
| [page.js](https://github.com/saatviknagpal/ai-flashcards/blob/master/app/[id]/page.js) | This code snippet is a route for generating flashcards from text in the api section of the AI Flashcards repository. It facilitates the creation of flashcards from input text. |

</details>

<details closed><summary>app.saved-flashcards</summary>

| File                                                                                               | Summary                                                                                                                                                                                                            |
| ---                                                                                                | ---                                                                                                                                                                                                                |
| [page.js](https://github.com/saatviknagpal/ai-flashcards/blob/master/app/saved-flashcards/page.js) | This code snippet implements flashcard generation and text-to-flashcard conversion, contributing to the parent repository's app functionality in the generate-flashcards and generate-flashcards-from-text routes. |

</details>

<details closed><summary>app.saved-flashcards.[id]</summary>

| File                                                                                                    | Summary                                                                                                                                                                        |
| ---                                                                                                     | ---                                                                                                                                                                            |
| [page.js](https://github.com/saatviknagpal/ai-flashcards/blob/master/app/saved-flashcards/[id]/page.js) | This code snippet includes the route.js files within the api folder, responsible for handling checkout and flashcards generation APIs in the parent repository's architecture. |

</details>

<details closed><summary>app.utils</summary>

| File                                                                                                        | Summary                                                                                                                                                                                                                                                           |
| ---                                                                                                         | ---                                                                                                                                                                                                                                                               |
| [get-stripe.js](https://github.com/saatviknagpal/ai-flashcards/blob/master/app/utils/get-stripe.js)         | Code in app/utils/get-stripe.js: Handles lazy loading of Stripe library to reduce initial page load by asynchronously fetching the library when needed. Improves performance in the payment flow.                                                                 |
| [flashcardUtils.js](https://github.com/saatviknagpal/ai-flashcards/blob/master/app/utils/flashcardUtils.js) | The code in app/utils/flashcardUtils.js facilitates saving flashcards to a user's account by leveraging Firebase Firestore and the Clerk authentication library. It integrates with the parent repository's architecture to handle user-specific data management. |

</details>

<details closed><summary>app.pricing</summary>

| File                                                                                      | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---                                                                                       | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [page.js](https://github.com/saatviknagpal/ai-flashcards/blob/master/app/pricing/page.js) | Summary:In app/pricing/page.js, the code defines a web page for selecting pricing plans and integrating with the Stripe API for checkout. It incorporates user authentication using Clerk and displays plan details dynamically.This code snippet plays a critical role in the frontend UI of the parent repository by creating a user-friendly interface for users to choose from various pricing plans. It seamlessly integrates with the Stripe API for secure payment processing and utilizes user authentication to provide personalized experiences based on the user's identity. |

</details>

<details closed><summary>app.api.checkout</summary>

| File                                                                                             | Summary                                                                                                                                          |
| ---                                                                                              | ---                                                                                                                                              |
| [route.js](https://github.com/saatviknagpal/ai-flashcards/blob/master/app/api/checkout/route.js) | The `route.js` code in `app/api/checkout` manages Stripe checkout for subscription. It creates and retrieves checkout sessions using Stripe API. |

</details>

<details closed><summary>app.api.generate-flashcards</summary>

| File                                                                                                        | Summary                                                                                                                                                               |
| ---                                                                                                         | ---                                                                                                                                                                   |
| [route.js](https://github.com/saatviknagpal/ai-flashcards/blob/master/app/api/generate-flashcards/route.js) | This code snippet contains API routes for generating flashcards. It plays a critical role in handling flashcard creation within the parent repository's architecture. |

</details>

<details closed><summary>app.api.generate-flashcards-from-text</summary>

| File                                                                                                                  | Summary                                                                                                                                                                                                |
| ---                                                                                                                   | ---                                                                                                                                                                                                    |
| [route.js](https://github.com/saatviknagpal/ai-flashcards/blob/master/app/api/generate-flashcards-from-text/route.js) | This code snippet in the ai-flashcards repository manages API routes for flashcard generation and checkout. It plays a critical role in handling user requests and integrating with external services. |

</details>

<details closed><summary>app.providers</summary>

| File                                                                                                                      | Summary                                                                                                                                                                                                  |
| ---                                                                                                                       | ---                                                                                                                                                                                                      |
| [QueryClientProvider.js](https://github.com/saatviknagpal/ai-flashcards/blob/master/app/providers/QueryClientProvider.js) | The `QueryClientProvider.js` file in the `ai-flashcards` repository sets up a query client for React components using the @tanstack/react-query library, enhancing the app's data fetching capabilities. |

</details>

---

##  Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* **JavaScript**: `version x.y.z`

###  Installation

1. Clone the ai-flashcards repository:

```sh
git clone https://github.com/saatviknagpal/ai-flashcards
```

2. Change to the project directory:

```sh
cd ai-flashcards
```

3. Install the dependencies:

```sh
npm install
```

###  Running ai-flashcards

Use the following command to run ai-flashcards:

```sh
node app.js
```

###  Tests

To execute tests, run:

```sh
npm test
```

---

##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/saatviknagpal/ai-flashcards/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/saatviknagpal/ai-flashcards/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/saatviknagpal/ai-flashcards/issues)**: Submit bugs found or log feature requests for Ai-flashcards.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/saatviknagpal/ai-flashcards
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

##  License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

##  Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-quick-links)

---
