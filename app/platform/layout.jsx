
import "@/app/globals.css"
import PlatformLayout from "./PlatformLayout";


export const metadata = {
  title: "Ride Share",
};

export default function RootLayout({
  children,
}) {
  return (
    <PlatformLayout>
        {children}
    </PlatformLayout>
  );
}
