interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "danger" | "success";
  loading?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}

export default function Button({ 
  children, 
  variant = "primary", 
  loading = false,
  className = "",
  ...props 
}: ButtonProps) {
  
  const base = "w-full p-3 rounded-md font-bold flex items-center justify-center gap-2 transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-70";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 active:scale-95",
    danger: "bg-red-600 text-white hover:bg-red-700 active:scale-95",
    success: "bg-green-600 text-white hover:bg-green-700 active:scale-95"
  };

  return (
    <button 
      disabled={loading} 
      className={`${base} ${variants[variant]} ${className}`} 
      {...props}
    >
      {loading && (
        <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
      )}
      {children}
    </button>
  );
}
