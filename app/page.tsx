import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="w-full h-screen flex items-center justify-center">
			<Link href="https://www.tiktok.com/@kornik2212">
				<Image fill alt="image" src="/static/images/mclovin.jpg" />
			</Link>
		</div>
	);
}
