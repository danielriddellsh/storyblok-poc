import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "@/components/StoryblokProvider/storyblok-provider";

import 'bootstrap/dist/css/bootstrap.min.css';

storyblokInit({
  accessToken: "Pfx3cHRXE7mZU2V2QTly8Att",
  use: [apiPlugin],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </StoryblokProvider>
  );
}