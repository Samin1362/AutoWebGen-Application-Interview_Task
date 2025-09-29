# Live CSV Website Generator 🚀

A React web application that allows users to upload CSV files and generate beautiful website previews instantly in the browser.

## ✨ Features

- 📁 **Drag & Drop CSV Upload**: Easy file upload with validation
- 🎨 **Live Website Previews**: Instant generation of beautiful website previews
- 📱 **Responsive Design**: Works perfectly on all devices
- ⚡ **Client-Side Processing**: No backend required - everything runs in your browser
- 🔍 **CSV Validation**: Ensures your CSV has all required columns
- 📊 **Statistics Dashboard**: See summary of generated websites
- 💾 **Download Features**: Download sample CSV and results summary

## 🛠 Installation & Setup

```bash
# Clone or navigate to the project
cd live-csv-generator

# Install dependencies
npm install

# Start the development server
npm start
```

The app will open at `http://localhost:3000`

## 📊 CSV Format Required

Your CSV file must include these columns:

| Column        | Description          | Example                           |
| ------------- | -------------------- | --------------------------------- |
| `domain`      | Website domain       | `foodexpress.com`                 |
| `title`       | Business name        | `Food Express`                    |
| `description` | Business description | `Delicious meals delivered fast`  |
| `phone`       | Contact phone        | `01712345678`                     |
| `address`     | Business address     | `House 12, Road 5, Banani, Dhaka` |

### Sample CSV:

```csv
domain,title,description,phone,address
foodexpress.com,Food Express,Delicious meals delivered fast,01712345678,"House 12, Road 5, Banani, Dhaka"
techhubbd.com,Tech Hub BD,Your trusted tech partner,01898765432,"Level 4, Block B, Dhanmondi, Dhaka"
```

## 🚀 How to Use

1. **Open the App**: Visit the live application in your browser
2. **Upload CSV**: Drag and drop your CSV file or click "Choose File"
3. **View Results**: See instant website previews generated from your data
4. **Download Sample**: Click "Download Sample CSV" if you need an example

## 🎯 Generated Website Features

Each generated website preview includes:

- **Header**: Business name and domain
- **Hero Section**: Title + description with call-to-action buttons
- **Contact Section**: Phone, address, email display
- **Contact Form**: Preview of a working contact form
- **Footer**: Copyright and business information

## 🔧 Technologies Used

- **React 18**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **PapaParse**: CSV parsing library
- **Create React App**: Build tooling

## 📱 Browser Support

Works in all modern browsers:

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🎨 Customization

The generated website previews use a consistent design system with:

- Gradient backgrounds
- Professional color scheme
- Responsive grid layouts
- Modern UI components

## 🔒 Privacy & Security

- **No Data Upload**: All processing happens in your browser
- **No Server Required**: Completely client-side application
- **Private**: Your CSV data never leaves your device

## 🚀 Deployment

To deploy this app:

```bash
# Build for production
npm run build

# Deploy the 'build' folder to any static hosting service
# (Netlify, Vercel, GitHub Pages, etc.)
```

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ using React, Tailwind CSS, and PapaParse**
