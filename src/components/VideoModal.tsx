import { useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoModalProps {
  videoSrc: string;
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal = ({ videoSrc, isOpen, onClose }: VideoModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div className="relative w-full max-w-5xl mx-4">
        <Button
          variant="ghost"
          size="icon"
          className="absolute -top-12 right-0 text-white hover:text-white hover:bg-white/20"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>
        <div
          className="relative bg-black rounded-lg overflow-hidden shadow-elegant"
          onClick={(e) => e.stopPropagation()}
        >
          <video
            src={videoSrc}
            controls
            autoPlay
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
