import { createContext, useContext, useState, ReactNode } from "react";

type Role = "member" | "partner" | null;

interface RoleContextType {
  role: Role;
  setRole: (r: Role) => void;
}

const RoleContext = createContext<RoleContextType>({ role: null, setRole: () => {} });

export const useRole = () => useContext(RoleContext);

export const RoleProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<Role>(null);
  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};
