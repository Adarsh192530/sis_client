import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { AppRole } from "@/types/roles"; // Ensure this matches your actual path
import { Loader2 } from "lucide-react";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: AppRole[];
  redirectTo?: string;
}

export function ProtectedRoute({ children, allowedRoles, redirectTo = "/auth" }: ProtectedRouteProps) {
  const { user, role, loading } = useAuth();
  const location = useLocation();



  return <>{children}</>;
}

// --- SPECIFIC ROUTE GUARDS ---

// 1. For Employees (Dashboard, etc.)
export function EmployeeRoute({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute allowedRoles={[AppRole.EMPLOYEE]}>
      {children}
    </ProtectedRoute>
  );
}

// 2. For Standard Users (Clients)
export function UserRoute({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute allowedRoles={[AppRole.USER]}>
      {children}
    </ProtectedRoute>
  );
}

// 3. For Admins (Admin Panel) - ADDED THIS
export function AdminRoute({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute allowedRoles={[AppRole.ADMIN]}>
      {children}
    </ProtectedRoute>
  );
}