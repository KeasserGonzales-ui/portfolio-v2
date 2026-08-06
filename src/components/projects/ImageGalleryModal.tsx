import { useEffect, useState } from "react";

interface ImageGalleryModalProps {
    isOpen: boolean;
    onClose: () => void;
    images: string[];
    initialIndex: number;
}

export default function ImageGalleryModal({
    isOpen,
    onClose,
    images,
    initialIndex,
}: ImageGalleryModalProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();

            if (e.key === "ArrowRight") {
                setCurrentIndex((prev) => (prev + 1) % images.length);
            }

            if (e.key === "ArrowLeft") {
                setCurrentIndex((prev) =>
                    prev === 0 ? images.length - 1 : prev - 1
                );
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () =>
            window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, images.length, onClose]);

    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(initialIndex);
        }
    }, [isOpen, initialIndex]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={onClose}
        >
            <div
                className="relative w-[90vw] max-w-7xl rounded-3xl bg-[#111111] p-6"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute right-6 top-6 text-4xl text-white hover:text-red-400"
                >
                    ✕
                </button>

                <img
                    src={images[currentIndex]}
                    alt="Project Screenshot"
                    className="mx-auto max-h-[80vh] rounded-2xl"
                />

                <div className="mt-6 flex items-center justify-between">

                    <button
                        onClick={() =>
                            setCurrentIndex(
                                currentIndex === 0
                                    ? images.length - 1
                                    : currentIndex - 1
                            )
                        }
                        className="rounded-xl border border-white/20 px-6 py-3"
                    >
                        ← Previous
                    </button>

                    <p className="text-gray-400">
                        {currentIndex + 1} / {images.length}
                    </p>

                    <button
                        onClick={() =>
                            setCurrentIndex(
                                (currentIndex + 1) % images.length
                            )
                        }
                        className="rounded-xl border border-white/20 px-6 py-3"
                    >
                        Next →
                    </button>

                </div>

            </div>
        </div>
    );
}