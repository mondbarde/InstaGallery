import React from "react";
import Header from "./Header";
import MasonryGallery from "./MasonryGallery";
import AdBlock from "./AdBlock";

interface HomeProps {
  profileInfo?: {
    name: string;
    profileImage: string;
    socialLinks: {
      instagram: string;
      twitter: string;
      youtube: string;
    };
  };
  galleryItems?: Array<{
    id: string;
    imageUrl: string;
    caption: string;
    tags: string[];
    link: string;
    height: number;
  }>;
}

const Home = ({
  profileInfo = {
    name: "Jane Doe",
    profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
    socialLinks: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      youtube: "https://youtube.com",
    },
  },
  galleryItems = [
    {
      id: "1",
      imageUrl:
        "https://images.unsplash.com/photo-1600716051809-e997e11a5d52?w=800",
      caption: "Sunset at the beach",
      tags: ["nature", "sunset", "beach"],
      link: "https://instagram.com/post1",
      height: 400,
    },
    {
      id: "2",
      imageUrl:
        "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800",
      caption: "Mountain landscape",
      tags: ["nature", "mountains", "adventure"],
      link: "https://instagram.com/post2",
      height: 300,
    },
    {
      id: "3",
      imageUrl:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      caption: "City lights",
      tags: ["urban", "night", "city"],
      link: "https://instagram.com/post3",
      height: 500,
    },
  ],
}: HomeProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Header
        name={profileInfo.name}
        profileImage={profileInfo.profileImage}
        socialLinks={profileInfo.socialLinks}
      />

      <main className="container mx-auto px-4 py-8">
        <MasonryGallery items={galleryItems} />
      </main>

      {/* Fixed ad block for desktop */}
      <div className="hidden lg:block">
        <AdBlock width={300} height={600} position="fixed" className="z-40" />
      </div>

      {/* Mobile bottom ad */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40">
        <AdBlock width={320} height={100} className="mx-auto" />
      </div>
    </div>
  );
};

export default Home;
