# Multi-Site Generator 🚀

Generate multiple professional React websites from CSV data with Tailwind CSS styling.

## ✨ Features

- 🎨 **Modern Design**: Built with Tailwind CSS
- 📊 **CSV-Driven**: Generate multiple sites from CSV data
- ⚛️ **React-Based**: Complete React applications
- 📱 **Mobile Responsive**: Optimized for all devices

## 📁 Project Structure

```
/project-root
├── template-app/              # Base React template
├── build/                     # Generated websites
├── websites.csv               # Site data source
├── generate.js                # Generation script
└── package.json               # Dependencies
```

## 🛠 Installation

```bash
# Install root dependencies
npm install

# Install template dependencies
cd template-app
npm install
cd ..
```

## 🚀 Quick Start

### 1. Generate Websites

```bash
npm run generate
```

### 2. Run a Website

```bash
cd build/foodexpress.com
npm start
```

Visit `http://localhost:3000`

### 3. Edit Template

```bash
cd template-app
npm start
```

## 📊 CSV Format

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
```

## 🎨 Generated Website Features

- **Header**: Responsive navigation with gradient background
- **Hero Section**: Large headlines with animated elements and CTA buttons
- **Contact Section**: Contact form with information display
- **Footer**: Company info and links
- **Responsive Design**: Mobile-first approach

## 🔧 Common Commands

```bash
# Generate all sites
node generate.js

# Run template
cd template-app && npm start

# Run generated site
cd build/[domain] && npm start

# Build for production
cd build/[domain] && npm run build
```

## 🛠 Customization

Edit components in `template-app/src/components/`:

- **Header.jsx**: Navigation and branding
- **Hero.jsx**: Hero section with animations
- **Contact.jsx**: Contact form and information
- **Layout.jsx**: Layout wrapper and footer

Styling: Modify `template-app/src/index.css` and `tailwind.config.js`

## 🔄 Workflow

1. Edit `websites.csv` with your data
2. Run `node generate.js`
3. Test sites in `build/[domain]` folders
4. Deploy using `npm run build`

## 🔧 Troubleshooting

**Port 3000 in use:**

```bash
pkill -f "react-scripts start"
```

**Dependencies issues:**

```bash
rm -rf node_modules package-lock.json
npm install
```

**Tailwind not working:**

- Check `tailwind.config.js` exists
- Restart development server

---

Built with ❤️ using React, Tailwind CSS, and Node.js
