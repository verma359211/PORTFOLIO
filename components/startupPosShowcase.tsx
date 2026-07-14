import Image from "next/image";
import {
	ArrowUpRight,
	BarChart3,
	Boxes,
	CreditCard,
	Radio,
	Sparkles,
	Store,
} from "lucide-react";

const productAreas = ["Checkout", "Inventory", "Orders", "Analytics"];

const StartupPosShowcase = () => {
	return (
		<section id="startup-build" className="relative overflow-hidden px-4 py-20 md:px-8 md:py-28">
			<div className="pointer-events-none absolute left-1/2 top-24 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[#D3E97A]/10 blur-[120px]" />

			<div className="mx-auto max-w-7xl">
				<div className="mb-12 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
					<div>
						<div className="mb-5 flex items-center gap-3 text-xs tracking-[0.28em] text-[#D3E97A] sm:text-sm">
							<span className="h-px w-10 bg-[#D3E97A]" />
							01 YEAR · STARTUP EXPERIENCE
						</div>
						<h2 className="max-w-4xl text-5xl leading-[0.92] sm:text-6xl md:text-7xl lg:text-[6.4rem]">
							I BUILT THE SYSTEM
							<br />
							<span className="text-[#D3E97A]">BEHIND THE COUNTER.</span>
						</h2>
					</div>

					<div className="lg:pb-2">
						<p className="max-w-xl font-sans text-base leading-7 text-zinc-400 md:text-lg">
							A full POS SaaS product shaped during a year at a startup — bringing checkout,
							inventory, orders and business reporting into one focused workspace.
						</p>
						<div className="mt-6 flex flex-wrap gap-2">
							{productAreas.map((area) => (
								<span
									key={area}
									className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-sans text-xs text-zinc-300"
								>
									{area}
								</span>
							))}
						</div>
					</div>
				</div>

				<div className="grid auto-rows-[210px] grid-cols-1 gap-4 md:auto-rows-[240px] md:grid-cols-12">
					<article className="group relative min-h-[430px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#111311] md:col-span-8 md:row-span-2 md:min-h-0">
						<Image
							src="/image/pos-saas-dashboard.png"
							alt="Dark point-of-sale SaaS dashboard with checkout, sales and recent orders"
							fill
							className="object-cover object-left-top transition duration-700 ease-out group-hover:scale-[1.025]"
							sizes="(min-width: 768px) 66vw, 100vw"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
						<div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-6 md:p-8">
							<div>
								<div className="mb-3 flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] text-[#D3E97A]">
									<Radio size={14} /> Product workspace
								</div>
								<h3 className="text-3xl sm:text-4xl">ONE VIEW. THE WHOLE STORE.</h3>
							</div>
							<span className="hidden rounded-full border border-white/20 bg-black/50 p-3 backdrop-blur md:block">
								<ArrowUpRight size={22} />
							</span>
						</div>
					</article>

					<article className="relative overflow-hidden rounded-[2rem] border border-[#D3E97A]/30 bg-[#D3E97A] p-7 text-black md:col-span-4">
						<div className="absolute -right-6 -top-6 h-32 w-32 rounded-full border-[24px] border-black/[0.06]" />
						<div className="relative flex h-full flex-col justify-between">
							<div className="flex items-start justify-between">
								<Sparkles size={26} strokeWidth={1.7} />
								<span className="font-sans text-xs font-semibold uppercase tracking-[0.18em]">
									The brief
								</span>
							</div>
							<p className="max-w-sm text-3xl leading-[0.98] sm:text-4xl">
								MAKE COMPLEX RETAIL WORK FEEL OBVIOUS.
							</p>
						</div>
					</article>

					<article className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 p-7 md:col-span-4">
						<div className="flex h-full flex-col justify-between">
							<div className="flex items-center justify-between text-zinc-500">
								<span className="font-sans text-xs uppercase tracking-[0.18em]">Product scope</span>
								<Store size={22} className="text-[#D3E97A]" />
							</div>
							<div>
								<div className="mb-2 text-6xl text-white">04</div>
								<p className="font-sans text-sm leading-6 text-zinc-400">
									Connected workflows designed as one product, not four disconnected tools.
								</p>
							</div>
						</div>
					</article>

					<article className="group relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#101210] md:col-span-7 md:row-span-2 md:min-h-0">
						<Image
							src="/image/pos-saas-inventory.png"
							alt="POS SaaS inventory analytics and low-stock management screen"
							fill
							className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.025]"
							sizes="(min-width: 768px) 58vw, 100vw"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />
						<div className="absolute bottom-0 left-0 p-6 md:p-8">
							<div className="mb-2 flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] text-[#D3E97A]">
								<Boxes size={15} /> Inventory intelligence
							</div>
							<h3 className="text-3xl sm:text-4xl">KNOW WHAT MOVES.</h3>
						</div>
					</article>

					<article className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#151515] p-7 md:col-span-5">
						<div className="flex h-full flex-col justify-between">
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-2 font-sans text-xs uppercase tracking-[0.18em] text-zinc-500">
									<CreditCard size={15} /> Checkout flow
								</div>
								<span className="flex items-center gap-1.5 rounded-full bg-[#D3E97A]/10 px-2.5 py-1 font-sans text-[11px] text-[#D3E97A]">
									<span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#D3E97A]" /> LIVE
								</span>
							</div>
							<div className="grid grid-cols-[1fr_auto] items-end gap-5">
								<div>
									<p className="mb-1 font-sans text-xs text-zinc-500">Current order</p>
									<p className="text-4xl">₹4,280</p>
								</div>
								<div className="flex h-14 w-24 items-end gap-1">
									{[42, 68, 52, 88, 72, 100, 84].map((height, index) => (
										<span
											key={index}
											className="flex-1 rounded-sm bg-[#D3E97A]"
											style={{ height: `${height}%`, opacity: 0.45 + index * 0.08 }}
										/>
									))}
								</div>
							</div>
						</div>
					</article>

					<article className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-7 md:col-span-5">
						<div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(211,233,122,0.13),transparent_65%)]" />
						<div className="relative flex h-full flex-col justify-between">
							<BarChart3 size={24} className="text-[#D3E97A]" />
							<div>
								<h3 className="mb-2 text-3xl">FROM TRANSACTION TO DECISION.</h3>
								<p className="max-w-sm font-sans text-sm leading-6 text-zinc-500">
									The same product turns everyday sales into inventory signals and useful reports.
								</p>
							</div>
						</div>
					</article>
				</div>

				<p className="mt-5 text-right font-sans text-xs text-zinc-600">
					Concept screens shown for now · Real product captures coming next
				</p>
			</div>
		</section>
	);
};

export default StartupPosShowcase;
