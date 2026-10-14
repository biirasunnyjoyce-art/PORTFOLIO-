import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { portfolioData } from '../data/portfolioData';

interface PhotoContextType {
  photo: string | null;
  setPhoto: (dataUrl: string) => void;
  uploadPhoto: (file: File) => Promise<boolean>;
  removePhoto: () => void;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const PhotoContext = createContext<PhotoContextType | undefined>(undefined);

const STORAGE_KEY = 'biira_joyce_unedited_photo';

export const PhotoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [photo, setPhotoState] = useState<string | null>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) return stored;
    } catch {
      // localStorage may be unavailable
    }
    return null;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // If not in localStorage, test if a public image is available
    if (!photo) {
      const img = new Image();
      img.onload = () => {
        setPhotoState('/biira-joyce.png');
      };
      img.onerror = () => {
        const fallbackImg = new Image();
        fallbackImg.onload = () => {
          setPhotoState('/Screenshot 2026-10-13 171623.png');
        };
        fallbackImg.src = '/Screenshot 2026-10-13 171623.png';
      };
      img.src = '/biira-joyce.png';
    }
  }, [photo]);

  const setPhoto = (dataUrl: string) => {
    setPhotoState(dataUrl);
    try {
      localStorage.setItem(STORAGE_KEY, dataUrl);
    } catch {
      // ignore
    }
  };

  const uploadPhoto = async (file: File): Promise<boolean> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const result = e.target?.result as string;
        if (result) {
          setPhoto(result);

          // Attempt to also post to server endpoint if running with express/vite backend
          try {
            await fetch('/api/save-photo', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ image: result, filename: file.name }),
            });
          } catch {
            // Client-side localStorage persistence is already active
          }
          resolve(true);
        } else {
          resolve(false);
        }
      };
      reader.onerror = () => resolve(false);
      reader.readAsDataURL(file);
    });
  };

  const removePhoto = () => {
    setPhotoState(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <PhotoContext.Provider
      value={{
        photo,
        setPhoto,
        uploadPhoto,
        removePhoto,
        isModalOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

export const useProfilePhoto = () => {
  const context = useContext(PhotoContext);
  if (!context) {
    throw new Error('useProfilePhoto must be used within a PhotoProvider');
  }
  return context;
};
