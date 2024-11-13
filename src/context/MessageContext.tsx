import React, { createContext, useContext, useState, ReactNode } from "react";

// Define la interfaz para el contexto
interface MessageContextType {
  showDialog: boolean;
  showSuccess: boolean;
  openDialog: () => void;
  closeDialog: () => void;
  triggerSuccessMessage: () => void; // Cambié el nombre a triggerSuccessMessage
}

const MessageContext = createContext<MessageContextType | undefined>(undefined);

export const MessageProvider = ({ children }: { children: ReactNode }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const openDialog = () => setShowDialog(true);
  const closeDialog = () => setShowDialog(false);

  const triggerSuccessMessage = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000); // Muestra el mensaje de éxito por 2 segundos
  };

  return (
    <MessageContext.Provider
      value={{
        showDialog,
        showSuccess,
        openDialog,
        closeDialog,
        triggerSuccessMessage,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useMessageContext = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error("useMessageContext debe usarse dentro de un MessageProvider");
  }
  return context;
};
