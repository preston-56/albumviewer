export interface ErrorBoundaryProps {
  children: React.ReactNode; // Child components to wrap
  fallback: React.ReactNode; // Fallback UI when an error occurs
}

export interface ErrorBoundaryState {
  hasError: boolean;
}
