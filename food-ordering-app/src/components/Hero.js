import Image from "next/image";
import Right from "./icons/Right";
const Hero = () => {
	return (
		<section className='hero'>
			<div className='py-12'>
				<h1 className='text-4xl font-semi-bold '>
					Everything <br /> gets better
					<br /> with&nbsp;
					<span className='text-primary'>Sam's Pizza</span>
				</h1>
				<p className='my-6 text-gray-500 text-sm'>
					Our pizza is the missing piece that makes everything complete, a
					simple yet delicious joy in life.
				</p>
				<div className='flex gap-4 text-sm'>
					<button className='bg-primary flex gap-2 text-white uppercase items-center px-4 py-2 rounded-full'>
						Order now
						<Right />
					</button>
					<button className='flex gap-2 py-2 text-gray-500 font-semibold'>
						Learn more <Right />
					</button>
				</div>
			</div>

			<div className='relative'>
				<Image
					src={"/pizza.png"}
					alt={"pizza"}
					layout={"fill"}
					objectFit={"contain"}
				/>
			</div>
		</section>
	);
};

export default Hero;
