import React, { useState, useRef, useEffect } from 'react';
import { X, Upload, Camera, Trash2, Check, Image as ImageIcon, Sparkles } from 'lucide-react';
import { useProfilePhoto } from '../context/PhotoContext';

export const PhotoUploadModal: React.FC = () => {
  const { photo, uploadPhoto, removePhoto, isModalOpen, closeModal } = useProfilePhoto();
  const [dragActive, setDragActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successNotice, setSuccessNotice] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, closeModal]);

  if (!isModalOpen) return null;

  const handleFileChange = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file (PNG, JPG, or JPEG).');
      return;
    }
    setLoading(true);
    const ok = await uploadPhoto(file);
    setLoading(false);
    if (ok) {
      setSuccessNotice(true);
      setTimeout(() => {
        setSuccessNotice(false);
        closeModal();
      }, 1200);
    }
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(true);
  };

  const onDragLeave = () => {
    setDragActive(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={closeModal}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative bg-[#090F1C] border border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl z-10 text-slate-200">
        <button
          type="button"
          onClick={closeModal}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-mono text-teal-400 mb-2">
          <Camera className="w-4 h-4" />
          <span>AUTHENTIC PROFILE PHOTO</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
          Your Unedited Photograph
        </h3>
        <p className="text-xs text-slate-400 mt-1 mb-6 leading-relaxed">
          Select or drop your photo file (<strong>Screenshot 2026-10-13 171623.png</strong>). It will be displayed exactly as it was taken, with zero edits, filters, or AI alterations.
        </p>

        {/* Current Photo Preview if available */}
        {photo ? (
          <div className="mb-6 p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center">
            <div className="relative w-40 h-48 sm:w-48 sm:h-56 rounded-2xl overflow-hidden border-2 border-teal-500/50 shadow-xl mb-4 bg-slate-900">
              <img
                src={photo}
                alt="Biira Joyce Unedited"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="text-xs text-teal-400 font-medium flex items-center gap-1.5 mb-3">
              <Check className="w-4 h-4 text-teal-400" />
              <span>Unedited photo active across your portfolio</span>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-4 py-2 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-xl transition-all"
              >
                Change Photo
              </button>
              <button
                type="button"
                onClick={removePhoto}
                className="px-4 py-2 text-xs font-semibold text-rose-400 hover:text-rose-300 bg-rose-950/30 hover:bg-rose-950/60 border border-rose-800/40 rounded-xl transition-all flex items-center gap-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Remove</span>
              </button>
            </div>
          </div>
        ) : (
          /* Dropzone */
          <div
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`p-8 rounded-2xl border-2 border-dashed transition-all cursor-pointer text-center flex flex-col items-center justify-center mb-6 ${
              dragActive
                ? 'border-teal-400 bg-teal-950/20'
                : 'border-slate-700 hover:border-teal-500/50 bg-slate-950/80 hover:bg-slate-900/40'
            }`}
          >
            <div className="w-14 h-14 rounded-2xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-4">
              <Upload className="w-7 h-7" />
            </div>
            <p className="text-sm font-semibold text-white mb-1">
              Click to select <span className="text-teal-300">Screenshot 2026-10-13 171623.png</span>
            </p>
            <p className="text-xs text-slate-400">
              or drag &amp; drop your image file here
            </p>
            <span className="text-[10px] font-mono text-slate-500 mt-3">
              Direct rendering · No filters · 100% original
            </span>
          </div>
        )}

        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              handleFileChange(e.target.files[0]);
            }
          }}
        />

        {successNotice && (
          <div className="mb-4 p-3 rounded-xl bg-teal-950/60 border border-teal-500/40 text-xs text-teal-300 flex items-center justify-center gap-2">
            <Check className="w-4 h-4" />
            <span>Photo updated successfully without any editing!</span>
          </div>
        )}

        {/* Footer Note */}
        <div className="pt-4 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-start gap-2">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <span>
            Once selected, your exact original image is stored in your browser and automatically displayed in your Navbar, Hero, About Section, and Footer.
          </span>
        </div>
      </div>
    </div>
  );
};
