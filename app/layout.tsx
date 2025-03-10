import React from "react";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {ColorSchemeScript, MantineProvider} from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css'; //if using mantine date picker features
import '@mantine/charts/styles.css';
import 'mantine-react-table/styles.css';
import "./globals.css";
import {theme} from "@/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mantine Payments",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <head>
        <ColorSchemeScript/>
        <meta charSet="UTF-8"/>
        <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={inter.className}>
        <MantineProvider theme={theme} defaultColorScheme="dark">
            {children}
        </MantineProvider>
      </body>
      </html>
  );
}
