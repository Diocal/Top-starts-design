"use client";

import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { CSPostHogProvider } from "./_analytics/provider";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import { ClerkProvider } from "@clerk/nextjs";
import TopNav from "./_components/topnav";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { MessageProvider, useMessageContext } from "~/context/MessageContext";
import { useEffect, useState } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const activeColor = "text-[hsl(var(--light-gold))]";

  return (
    <ClerkProvider signInForceRedirectUrl="/dashboard">
      <CSPostHogProvider>
        <MessageProvider>
          <html lang="en" className={`${GeistSans.variable} flex flex-col gap-4`}>
            <body>
              <TopNav />
              {children}

              {!["/channel/topic", "/channel/topic/subcategories","/channel/language","/channel/local"].includes(pathname) && (
                <nav className="fixed bottom-0 left-0 right-0 bg-gray-900">
                  <div className="flex justify-around p-2">
                    {[
                      { href: "/", label: "Channel", icon: "/Channels.svg" },
                      { href: "/group", label: "Group", icon: "/Groups.svg" },
                      { href: "/analytics", label: "Analytics", icon: "/Analytics.svg" },
                      { href: "/profile", label: "Profile", icon: "/Profile.svg" },
                    ].map(({ href, label, icon }) => (
                      <Link key={href} href={href}>
                        <Button
                          variant="ghost"
                          className={`flex flex-col items-center ${
                            pathname === href ? activeColor : "text-white"
                          }`}
                        >
                          <img
                            src={icon}
                            alt={`${label} Icon`}
                            className="w-6 h-6"
                            style={{
                              filter:
                                pathname === href
                                  ? "invert(48%) sepia(78%) saturate(250%) hue-rotate(10deg) brightness(1.5)"
                                  : "none",
                            }}
                          />
                          <span
                            className={`mt-1 text-xs ${
                              pathname === href ? activeColor : "text-white"
                            }`}
                          >
                            {label}
                          </span>
                        </Button>
                      </Link>
                    ))}
                  </div>
                </nav>
              )}
              <GlobalConfirmationDialog />
              <SuccessMessage />
            </body>
          </html>
        </MessageProvider>
      </CSPostHogProvider>
    </ClerkProvider>
  );
}

function GlobalConfirmationDialog() {
  const { showDialog, closeDialog } = useMessageContext();
  const router = useRouter();

  const handleNoClick = () => {
    closeDialog();
    router.push("/"); // Redirige a la página principal
  };

  return (
    showDialog && (
      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative bg-[#1E1E1E] text-white rounded-lg p-6 w-full max-w-md border border-gray-700"
          style={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)" }}
        >
          <button onClick={closeDialog} className="absolute top-2 right-2 text-gray-400 hover:text-white">
            <X size={20} />
          </button>
          <h3 className="text-lg font-semibold mb-3 text-white">Specific topics</h3>
          <p className="text-sm text-gray-400 mb-4">
            Do you want to have specific topics of your selected topics?
          </p>
          <div className="flex justify-end space-x-2">
            <Button
              onClick={handleNoClick}
              className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-200"
            >
              No
            </Button>
            <Button
              onClick={closeDialog}
              className="bg-lightGold text-black py-2 px-4 rounded-md hover:bg-yellow-500 hover:text-white transition duration-200"
            >
              Yes
            </Button>
          </div>
        </motion.div>
      </div>
    )
  );
}

function SuccessMessage() {
  const { showSuccess, triggerSuccessMessage } = useMessageContext();
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedMessage = localStorage.getItem("showSuccessMessage");
    console.log("Mensaje recuperado de localStorage en layout:", storedMessage); // Log para ver el mensaje recuperado
    if (storedMessage) {
      setMessage(storedMessage);
      triggerSuccessMessage();
      localStorage.removeItem("showSuccessMessage"); // Limpia el mensaje después de mostrarlo
    }
  }, [triggerSuccessMessage]);

  return (
    showSuccess && (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="fixed top-16 left-0 w-full px-3 sm:px-0 sm:max-w-lg mx-auto text-center bg-white text-black py-3 rounded-md shadow-lg z-50 font-sans"
      >
        {message}
      </motion.div>
    )
  );
}