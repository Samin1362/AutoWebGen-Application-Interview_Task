# Multi-Site Generator 🚀

A powerful Node.js tool that generates multiple professional React websites from CSV data. Perfect for creating landing pages, business websites, or portfolio sites at scale.

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Usage](#usage)
- [CSV Data Format](#csv-data-format)
- [Customization](#customization)
- [Generated Website Features](#generated-website-features)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

## ✨ Features

- 🎨 **Modern Design**: Built with Tailwind CSS for beautiful, responsive layouts
- 📊 **CSV-Driven**: Generate multiple sites from simple CSV data
- ⚛️ **React-Based**: Each generated site is a complete React application
- 🎯 **Professional Components**: Header, Hero, Contact sections with animations
- 📱 **Mobile Responsive**: Optimized for all device sizes
- 🔧 **Customizable**: Easy to modify templates and styling
- 🚀 **Production Ready**: Clean, optimized code without test files

## 📁 Project Structure

```
/project-root
├── template-app/              # Base React template
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header/        # Navigation component
│   │   │   ├── Hero/          # Hero section with animations
│   │   │   ├── Contact/       # Contact form and info
│   │   │   └── Layout/        # Layout wrapper with footer
│   │   ├── App.jsx            # Main application component
│   │   ├── index.js           # React entry point
│   │   └── index.css          # Tailwind CSS setup
│   ├── public/                # Static assets
│   ├── tailwind.config.js     # Tailwind configuration
│   └── package.json           # React dependencies
├── build/                     # Generated websites (auto-created)
│   ├── foodexpress.com/       # Example generated site
│   ├── techhubbd.com/         # Example generated site
│   └── bookbazaar.com/        # Example generated site
├── websites.csv               # Site data source
├── generate.js                # Generation script
├── package.json               # Project dependencies
└── README.md                  # This file
```

## 🛠 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup

1. **Clone or download** the project to your local machine

2. **Install root dependencies**:

   ```bash
   npm install
   ```

3. **Install template dependencies**:
   ```bash
   cd template-app
   npm install
   cd ..
   ```

## 🚀 Quick Start

### 1. Generate Websites

Run the generator script to create websites from the CSV data:

```bash
npm run generate
# or
node generate.js
```

This will:

- Read data from `websites.csv`
- Create individual React apps in the `/build` folder
- Replace template content with site-specific data

### 2. Run a Generated Website

Navigate to any generated site and start it:

```bash
cd build/foodexpress.com
npm install  # (if not already installed)
npm start
```

Your website will be available at `http://localhost:3000`

### 3. Test the Template

To work on the base template:

```bash
cd template-app
npm start
```

## 📖 Usage

### Basic Workflow

1. **Edit CSV Data**: Modify `websites.csv` with your site information
2. **Generate Sites**: Run `node generate.js`
3. **Test Sites**: Navigate to any `build/[domain]` folder and run `npm start`
4. **Deploy**: Use `npm run build` in any generated site for production

### Available Scripts

- `npm run generate` - Generate all websites from CSV
- `cd template-app && npm start` - Run template in development mode
- `cd build/[site] && npm start` - Run specific generated site
- `cd build/[site] && npm run build` - Build site for production

## 📊 CSV Data Format

The `websites.csv` file should contain the following columns:

| Column        | Description                | Example                           |
| ------------- | -------------------------- | --------------------------------- |
| `domain`      | Website domain/folder name | `foodexpress.com`                 |
| `title`       | Business/site name         | `Food Express`                    |
| `description` | Business description       | `Delicious meals delivered fast`  |
| `phone`       | Contact phone number       | `01712345678`                     |
| `address`     | Business address           | `House 12, Road 5, Banani, Dhaka` |

### Example CSV:

```csv
domain,title,description,phone,address
foodexpress.com,Food Express,Delicious meals delivered fast,01712345678,"House 12, Road 5, Banani, Dhaka"
techhubbd.com,Tech Hub BD,Your trusted tech partner,01898765432,"Level 4, Block B, Dhanmondi, Dhaka"
bookbazaar.com,Book Bazaar,Buy and sell books online,01911223344,"Shop 22, New Market, Chittagong"
```

### Adding New Sites

1. Add a new row to `websites.csv`
2. Run `node generate.js`
3. The new site will be available in `/build/[domain]`

## 🎨 Customization

### Modifying the Template

Edit files in the `template-app/src/components/` directory:

- **Header.jsx**: Navigation and branding
- **Hero.jsx**: Main hero section with call-to-action
- **Contact.jsx**: Contact information and form
- **Layout.jsx**: Overall layout and footer

### Styling with Tailwind

The project uses Tailwind CSS. Key files:

- `template-app/src/index.css`: Global styles and custom components
- `template-app/tailwind.config.js`: Tailwind configuration and custom colors

### Custom Components

Add new components in `template-app/src/components/` and import them in `App.jsx`.

### Changing the Generation Script

Modify `generate.js` to:

- Add new CSV columns
- Change the generated code structure
- Add additional processing logic

## 🌟 Generated Website Features

Each generated website includes:

### 🎯 Header Component

- Responsive navigation
- Gradient background
- Mobile hamburger menu
- Smooth hover animations

### 🚀 Hero Section

- Large, impactful headlines
- Animated floating elements
- Call-to-action buttons
- Responsive design

### 📧 Contact Section

- Contact information display
- Working contact form
- Social media links
- Professional styling

### 🦶 Footer

- Company information
- Quick links
- Service links
- Copyright notice

### 📱 Responsive Design

- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interactions

## 🔧 Troubleshooting

### Common Issues

1. **Port 3000 already in use**:

   ```bash
   # Kill existing React processes
   pkill -f "react-scripts start"
   ```

2. **Dependencies not found**:

   ```bash
   # Reinstall dependencies
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Tailwind styles not loading**:

   - Ensure `tailwind.config.js` exists
   - Check `index.css` has Tailwind directives
   - Restart the development server

4. **CSV parsing errors**:
   - Check for proper CSV formatting
   - Ensure all required columns are present
   - Use double quotes for addresses with commas

### Development Tips

- **Hot Reload**: Changes to template files require regeneration
- **CSS Changes**: Modify `index.css` for global styles
- **Component Changes**: Edit individual component files
- **New Features**: Add to template, then regenerate sites

## 🔄 Updating Existing Sites

To update all generated sites with template changes:

1. Make changes to `template-app/`
2. Run `node generate.js` (this will overwrite existing sites)
3. Test your changes in any generated site

**Note**: This will overwrite any manual changes to generated sites.

## 🏗 Building for Production

To create production builds:

```bash
cd build/[site-name]
npm run build
```

This creates an optimized build in the `build/` folder ready for deployment.

## 📂 File Organization

### Template App Structure

```
template-app/src/
├── components/
│   ├── Header/
│   │   ├── Header.jsx
│   │   └── index.js
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   └── index.js
│   ├── Contact/
│   │   ├── Contact.jsx
│   │   └── index.js
│   └── Layout/
│       ├── Layout.jsx
│       └── index.js
├── App.jsx
├── index.js
└── index.css
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test with sample data
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Support

If you encounter any issues or have questions:

1. Check the [Troubleshooting](#troubleshooting) section
2. Review the CSV format requirements
3. Ensure all dependencies are installed
4. Create an issue with detailed error information

---

**Happy site generating! 🎉**

Built with ❤️ using React, Tailwind CSS, and Node.js
