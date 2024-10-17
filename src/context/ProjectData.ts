export type ProjectType = {
    id: string;
    title: string;
    description: string;
    images: string[],
    link: string,
    github_link: string,
    default_image_index: number;
}

export const PROJECTS: ProjectType[] = [
    {
        id: "1",
        title: "Travel web",
        description: "This is a beautifully crafted, modern, and responsive UI/UX website built with the latest technologies to deliver an exceptional user experience.",
        images: [
            "/images/projects/travel-1.png",
            "/images/projects/travel-2.png",
            "/images/projects/travel-3.png",
            "/images/projects/travel-4.png",
        ],
        link: "https://tourist-website-tau.vercel.app/",
        github_link: "https://github.com/codewarriorninja/tourist-website",
        default_image_index: 0, 
    },
    {
        id: "2",
        title: "Real Estate.",
        description: "The project is designed to showcase real estate listings and provide an engaging experience for users looking for properties.",
        images: [
            "/images/projects/real-estate-1.png",
            "/images/projects/real-estate-2.png",
            "/images/projects/real-estate-3.png",
            "/images/projects/real-estate-4.png",
            "/images/projects/real-estate-5.png",
        ],
        link: "https://real-estate-pi-dusky.vercel.app/",
        github_link: "https://github.com/codewarriorninja/real-estate",
        default_image_index: 0,
    },
    {
        id: "3",
        title: "Gaming Web",
        description: "The website is designed to provide a modern, sleek, and dynamic interface for gaming enthusiasts.",
        images: [
            "/images/projects/gaming-1.png",
            "/images/projects/gaming-2.png",
            "/images/projects/gaming-3.png",
            "/images/projects/gaming-4.png",
        ],
        link: "https://gaming-website-mu.vercel.app/",
        github_link: "https://github.com/codewarriorninja/Gaming-website",
        default_image_index: 0
    },
    {
        id: "4",
        title: "Dashboard",
        description: "it serves as a front-end interface utilizing files for data management.",
        images: [
            "/images/projects/dash-1.png",
            "/images/projects/dash-2.png",
            "/images/projects/dash-3.png",
            "/images/projects/dash-4.png",
            "/images/projects/dash-5.png",
        ],
        link: "https://dashboard-kappa-indol.vercel.app/",
        github_link: "https://github.com/codewarriorninja/dashboard",
        default_image_index: 0
    },
    {
        id: "5",
        title: "NFT Market",
        description: "The platform allows users to browse NFT rankings, explore the marketplace, and connect their wallet.",
        images: [
            "/images/projects/Nft-1.png",
            "/images/projects/Nft-2.png",
            "/images/projects/Nft-3.png",
            "/images/projects/Nft-4.png",
        ],
        link: "https://nft-marketplace-theta-umber.vercel.app/",
        github_link: "https://github.com/codewarriorninja/nft-marketplace",
        default_image_index: 0
    },
    

]