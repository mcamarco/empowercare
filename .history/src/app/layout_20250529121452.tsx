// Import the Navigation component from the components folder
import Navigation from '@/components/Navigation'
// Import the Header component from the components folder
import Header from '@/components/Header'
import Footer from '@/components/Footer'
// Import global CSS styles for the app
import './globals.css'

// Export the RootLayout component as the default export
export default function RootLayout({ children }) {
  // The RootLayout component receives 'children' as a prop,
  // which will be the content of each specific page
  return (
    // Set the language of the HTML document to English
    <html lang="en">
      <body>
        {/* Render the Header component at the top of every page */}
        <Header />
        {/* Render the Navigation component below the header on every page */}
        <Navigation />
        {/* Render the main content of the current page */}
        <main>
          {children}
        </main>
        {/* Render the Footer component at the bottom of every page */}
        <Footer />
      </body>
    </html>
  )
}