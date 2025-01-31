import React, { useState } from "react";
import { motion } from "framer-motion";
import ImageModal from "./ImageModal";

interface GalleryItem {
  id: string;
  imageUrl: string;
  caption: string;
  tags: string[];
  link: string;
  height: number;
}

interface MasonryGalleryProps {
  items?: GalleryItem[];
}

const defaultItems: GalleryItem[] = [
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
];

const MasonryGallery = ({ items = defaultItems }: MasonryGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const columns = {
    base: 1,
    sm: 2,
    lg: 3,
  };

  return (
    <div className="w-full min-h-screen bg-white p-4 md:p-6 lg:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <React.Fragment key={item.id}>
            {/* Insert ad placeholder every 6 items */}
            {index > 0 && index % 6 === 0 && (
              <div className="col-span-1 sm:col-span-2 lg:col-span-3 h-[250px] bg-gray-100 flex items-center justify-center">
                <p className="text-gray-500">Advertisement Space</p>
              </div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div
                className="relative overflow-hidden rounded-lg"
                style={{ paddingBottom: `${(item.height / 800) * 100}%` }}
              >
                <img
                  src={item.imageUrl}
                  alt={item.caption}
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-semibold truncate">
                      {item.caption}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="text-sm bg-white/20 px-2 py-1 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </React.Fragment>
        ))}
      </div>

      {selectedImage && (
        <ImageModal
          isOpen={true}
          onClose={() => setSelectedImage(null)}
          imageUrl={selectedImage.imageUrl}
          caption={selectedImage.caption}
          tags={selectedImage.tags}
          link={selectedImage.link}
        />
      )}
    </div>
  );
};

export default MasonryGallery;
