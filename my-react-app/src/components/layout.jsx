// src/components/Layout.jsx
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-4 max-w-4xl mx-auto">{children}</main>
      <Footer />
    </div>
  );
}
