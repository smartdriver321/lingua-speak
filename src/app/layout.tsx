import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Lingua Speak',
	description: 'Bridging Voices, Connecting Worlds',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<script src='./node_modules/preline/dist/preline.js' async></script>

			<body className={inter.className}>{children}</body>
		</html>
	)
}
