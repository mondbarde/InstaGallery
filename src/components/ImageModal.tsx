import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { X } from "lucide-react";

interface ImageModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  imageUrl?: string;
  caption?: string;
  tags?: string[];
  link?: string;
}

const ImageModal = ({
  isOpen = true,
  onClose = () => {},
  imageUrl = "https://images.unsplash.com/photo-1600716051809-e997e11a5d52?w=800&auto=format&fit=crop",
  caption = "Beautiful sunset at the beach",
  tags = ["nature", "sunset", "beach"],
  link = "https://instagram.com",
}: ImageModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-white p-0 overflow-hidden">
        <DialogHeader className="absolute top-2 right-2 z-10">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-white/80 hover:bg-white/90"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="grid md:grid-cols-[2fr,1fr] gap-0 h-[80vh]">
          <div className="relative h-full bg-gray-100">
            <img
              src={imageUrl}
              alt={caption}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="p-6 overflow-y-auto bg-white">
            <DialogTitle className="text-xl font-semibold mb-4">
              {caption}
            </DialogTitle>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 text-blue-600 hover:underline"
                >
                  View on Instagram
                </a>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
