import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const playfairDisplay = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-playfair-display",
});

export const metadata: Metadata = {
	title: "Nartowski.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} ${playfairDisplay.variable} relative`}
			>
				{children}
			</body>
		</html>
	);
}
