"use client";

import { useEffect } from "react";
import Lenis from "lenis";

import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Featured from "@/components/Featured";

export default function Home() {
	useEffect(() => {
		const lenis = new Lenis();
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	});
	return (
		<>
			<Hero />
			<Info />
			<Featured />
		</>
	);
}
