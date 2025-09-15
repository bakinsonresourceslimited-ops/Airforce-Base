import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";

const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();

  return (<Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames, description);
};

export { Toaster, toast };









