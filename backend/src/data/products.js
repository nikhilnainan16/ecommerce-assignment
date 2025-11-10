export const products = [
	// Phones
	{
		id: 'p01',
		title: 'Aurora X Pro Smartphone',
		description: '6.7" AMOLED display, 5G, triple-camera with optical stabilization, 128GB storage.',
		price: 699.00,
		category: 'Phones',
		image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop'
	},
	{
		id: 'p02',
		title: 'Nova S Mini Phone',
		description: 'Compact 5.9" display, 5G connectivity, 256GB storage, 4500mAh battery.',
		price: 549.00,
		category: 'Phones',
		image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop'
	},
	{
		id: 'p03',
		title: 'Edge Ultra Camera Phone',
		description: '50MP wide + 10x telephoto, 6.8" HDR screen, 512GB storage for creators.',
		price: 899.00,
		category: 'Phones',
		image: 'https://images.unsplash.com/photo-1512499617640-c2f999098c9a?q=80&w=1200&auto=format&fit=crop'
	},

	// Laptops
	{
		id: 'p04',
		title: 'ZenBook 14 Performance',
		description: '14" IPS, 16GB RAM, 1TB NVMe SSD, all‑day battery in a 1.2kg chassis.',
		price: 1199.00,
		category: 'Laptops',
		image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop'
	},
	{
		id: 'p05',
		title: 'Creator 16 Studio Laptop',
		description: '16" 4K display, dedicated graphics, 32GB RAM for editing and 3D workloads.',
		price: 1599.00,
		category: 'Laptops',
		image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=1200&auto=format&fit=crop'
	},
	{
		id: 'p06',
		title: 'Feather Air 13',
		description: 'Ultra‑portable 13" laptop, fanless design, instant wake, premium keyboard.',
		price: 999.00,
		category: 'Laptops',
		image: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1200&auto=format&fit=crop'
	},

	// Accessories
	{
		id: 'p07',
		title: 'GaN USB‑C Fast Charger 65W',
		description: 'Compact multi‑port charger with smart power delivery and foldable prongs.',
		price: 39.00,
		category: 'Accessories',
		image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1200&auto=format&fit=crop'
	},
	{
		id: 'p08',
		title: 'USB‑C Hub Pro 7‑in‑1',
		description: 'HDMI 4K, USB‑A, SD/microSD, 100W pass‑through for modern laptops.',
		price: 59.00,
		category: 'Accessories',
		image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?q=80&w=1200&auto=format&fit=crop'
	},
	{
		id: 'p09',
		title: 'Noise‑Isolating Bluetooth Speaker',
		description: 'Portable speaker with deep bass, IPX7 waterproof, 18h battery life.',
		price: 79.00,
		category: 'Accessories',
		image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1200&auto=format&fit=crop'
	},

	// Keyboards
	{
		id: 'p10',
		title: 'Nimbus Mechanical Keyboard 75%',
		description: 'Hot‑swappable switches, PBT keycaps, per‑key RGB, USB‑C.',
		price: 129.00,
		category: 'Keyboards',
		image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop'
	},
	{
		id: 'p11',
		title: 'Atlas Low‑Profile Wireless Keyboard',
		description: 'Slim aluminum build, multi‑device pairing, quiet tactile switches.',
		price: 99.00,
		category: 'Keyboards',
		image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop'
	},
	{
		id: 'p12',
		title: 'Ergo Split Keyboard',
		description: 'Split layout with tenting, gasket mount comfort, programmable layers.',
		price: 149.00,
		category: 'Keyboards',
		image: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1200&auto=format&fit=crop'
	},

	// Monitors
	{
		id: 'p13',
		title: 'Vision 27" 4K Monitor',
		description: 'IPS panel, 99% sRGB, USB‑C 65W, height‑adjustable stand.',
		price: 349.00,
		category: 'Monitors',
		image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop'
	},
	{
		id: 'p14',
		title: 'Arc Ultrawide 34"',
		description: '3440x1440 ultrawide, 100Hz, curved immersive workspace.',
		price: 599.00,
		category: 'Monitors',
		image: 'https://images.unsplash.com/photo-1517061497599-86a52a04b1bb?q=80&w=1200&auto=format&fit=crop'
	},
	{
		id: 'p15',
		title: 'Swift 24" 1080p Monitor',
		description: 'Affordable everyday display with slim bezels and low blue light.',
		price: 129.00,
		category: 'Monitors',
		image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=1200&auto=format&fit=crop'
	},

	// Tablets
	{
		id: 'p16',
		title: 'PixelTab 11',
		description: '11" LCD, quad speakers, 8GB RAM, ideal for media and light work.',
		price: 329.00,
		category: 'Tablets',
		image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop'
	},
	{
		id: 'p17',
		title: 'SketchPad Pro 12.9',
		description: 'Hi‑resolution display with pen support for artists and designers.',
		price: 899.00,
		category: 'Tablets',
		image: 'https://images.unsplash.com/photo-1510554310709-d7f34c3ea57c?q=80&w=1200&auto=format&fit=crop'
	},
	{
		id: 'p18',
		title: 'LiteTab 8',
		description: 'Portable 8" tablet for reading, travel, and smart home control.',
		price: 149.00,
		category: 'Tablets',
		image: 'https://images.unsplash.com/photo-1523477800337-966dbabe060b?q=80&w=1200&auto=format&fit=crop'
	},

	// Wearables
	{
		id: 'p19',
		title: 'Orbit Smartwatch 2',
		description: 'GPS, SpO2, NFC pay, 7‑day battery, premium health tracking.',
		price: 249.00,
		category: 'Wearables',
		image: 'https://images.unsplash.com/photo-1511732351157-1865efcb7b7b?q=80&w=1200&auto=format&fit=crop'
	},
	{
		id: 'p20',
		title: 'Pulse Fitness Band',
		description: 'Lightweight tracker with sleep metrics and guided workouts.',
		price: 79.00,
		category: 'Wearables',
		image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop'
	},
	{
		id: 'p21',
		title: 'Chrono Steel Watch',
		description: 'Hybrid smartwatch with analog face and subtle notifications.',
		price: 199.00,
		category: 'Wearables',
		image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1200&auto=format&fit=crop'
	},

	// Home
	{
		id: 'p22',
		title: 'Home Hub Speaker',
		description: 'Smart speaker with room‑filling sound and voice assistant.',
		price: 129.00,
		category: 'Home',
		image: 'https://images.unsplash.com/photo-1587825140708-7b3b56f0c6c9?q=80&w=1200&auto=format&fit=crop'
	},
	{
		id: 'p23',
		title: 'Smart Plug Duo',
		description: 'Wi‑Fi plugs with energy monitoring and schedule automation.',
		price: 29.00,
		category: 'Home',
		image: 'https://images.unsplash.com/photo-1581276879432-15e50529f34b?q=80&w=1200&auto=format&fit=crop'
	},
	{
		id: 'p24',
		title: 'Mesh Wi‑Fi Router',
		description: 'Whole‑home Wi‑Fi system with easy app setup and parental controls.',
		price: 199.00,
		category: 'Home',
		image: 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c86?q=80&w=1200&auto=format&fit=crop'
	}
];


