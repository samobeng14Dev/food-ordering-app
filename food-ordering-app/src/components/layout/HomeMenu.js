import Image from "next/image";

function HomeMenu() {
	return (
		<section className='text-center'>
			<div>
				<div className='h-48 relative'>
					<Image
						src='/salad1.jpg'
						alt='salad'
						width='200'
						height='300'
					/>
				</div>
				<div className='h-48 relative'>
					<Image
						src='/salad2.jpg'
						alt='salad'
						width='200'
						height='300'
					/>
				</div>
			</div>
			<div className='text-center'>
				<h3 className=' text-gray-500 font-semibold leading-4 uppercase'>
					Check out
				</h3>
				<h2 className='text-primary font-bold text-4xl italic'>Menu</h2>
			</div>
		</section>
	);
}

export default HomeMenu;
