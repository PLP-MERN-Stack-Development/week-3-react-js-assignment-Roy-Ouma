// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-center p-4 mt-8">
      <p className="text-sm text-gray-600 dark:text-gray-300">© {new Date().getFullYear()} MyApp</p>
    </footer>
  );
}
// This component can be imported and used in your main App component or any other component where you want to display the footer.
// It provides a simple footer with a copyright notice that updates automatically to the current year.