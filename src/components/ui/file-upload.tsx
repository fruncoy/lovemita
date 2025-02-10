import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Upload, AlertTriangle } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { Link } from "react-router-dom";
import { GradientButton } from "./gradient-button";
const mainVariant = {
  initial: {
    x: 0,
    y: 0
  },
  animate: {
    x: 20,
    y: -20,
    opacity: 0.9
  }
};
const secondaryVariant = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  }
};
export const FileUpload = ({
  onChange,
  onScan
}: {
  onChange?: (files: File[]) => void;
  onScan?: (files: File[]) => void;
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleFileChange = (newFiles: File[]) => {
    const txtFiles = newFiles.filter(file => file.type === "text/plain");
    if (txtFiles.length > 0) {
      setFiles(txtFiles);
      onChange && onChange(txtFiles);
    }
  };
  const handleClick = () => {
    fileInputRef.current?.click();
  };
  const {
    getRootProps,
    isDragActive
  } = useDropzone({
    multiple: false,
    noClick: true,
    accept: {
      "text/plain": [".txt"]
    },
    onDrop: handleFileChange,
    onDropRejected: error => {
      console.log("Only .txt files are accepted");
    }
  });
  const handleScan = () => {
    if (files.length > 0 && acceptedPrivacy) {
      onScan && onScan(files);
    }
  };
  return <div className="w-full" {...getRootProps()}>
      <motion.div onClick={handleClick} whileHover="animate" className="p-10 group/file block rounded-lg cursor-pointer w-full relative overflow-hidden">
        <input ref={fileInputRef} id="file-upload-handle" type="file" accept=".txt" onChange={e => handleFileChange(Array.from(e.target.files || []))} className="hidden" />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
          <GridPattern />
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="relative z-20 font-sans font-bold text-neutral-300 text-base">
            Upload WhatsApp Chat
          </p>
          <p className="relative z-20 font-sans font-normal text-neutral-400 text-base mt-2">
            Drag and drop your exported chat file here (.txt only)
          </p>
          <div className="relative w-full mt-10 max-w-xl mx-auto">
            {files.length > 0 ? <div className="space-y-6">
                <motion.div layoutId="file-upload" className="relative overflow-hidden z-40 bg-neutral-900 flex flex-col items-start justify-start md:h-24 p-4 mt-4 w-full mx-auto rounded-md shadow-sm">
                  <div className="flex justify-between w-full items-center gap-4">
                    <motion.p className="text-base text-neutral-300 truncate max-w-xs">
                      {files[0].name}
                    </motion.p>
                    <motion.p className="rounded-lg px-2 py-1 w-fit flex-shrink-0 text-sm bg-neutral-800 text-white shadow-input">
                      {(files[0].size / (1024 * 1024)).toFixed(2)} MB
                    </motion.p>
                  </div>
                </motion.div>
                <div className="bg-neutral-900/50 p-4 rounded-lg border border-white/10">
                  <div className="flex items-center gap-2 mb-4">
                    <input type="checkbox" id="privacy-check" checked={acceptedPrivacy} onChange={e => setAcceptedPrivacy(e.target.checked)} className="rounded border-white/20 bg-white/10" />
                    <label htmlFor="privacy-check" className="text-white/60 text-sm">
                      I agree to the{" "}
                      <Link to="/privacy" className="text-rose-400 hover:text-rose-300">
                        privacy policy
                      </Link>
                    </label>
                  </div>
                  <GradientButton onClick={handleScan} disabled={!acceptedPrivacy} className="w-full">
                    Start Scan
                  </GradientButton>
                </div>
              </div> : <motion.div layoutId="file-upload" variants={mainVariant} transition={{
            type: "spring",
            stiffness: 300,
            damping: 20
          }} className={cn("relative group-hover/file:shadow-2xl z-40 bg-neutral-900 flex items-center justify-center h-32 mt-4 w-full max-w-[8rem] mx-auto rounded-md", "shadow-[0px_10px_50px_rgba(0,0,0,0.1)]")}>
                {isDragActive ? <motion.p initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} className="text-neutral-400 flex flex-col items-center">
                    Drop it
                    <Upload className="h-4 w-4 text-neutral-400" />
                  </motion.p> : <Upload className="h-4 w-4 text-neutral-300" />}
              </motion.div>}
          </div>
        </div>
      </motion.div>
    </div>;
};
export function GridPattern() {
  const columns = 41;
  const rows = 11;
  return <div className="flex bg-neutral-900 flex-shrink-0 flex-wrap justify-center items-center gap-x-px gap-y-px scale-105">
      {Array.from({
      length: rows
    }).map((_, row) => Array.from({
      length: columns
    }).map((_, col) => {
      const index = row * columns + col;
      return <div key={`${col}-${row}`} className={`w-10 h-10 flex flex-shrink-0 rounded-[2px] ${index % 2 === 0 ? "bg-neutral-950" : "bg-neutral-950 shadow-[0px_0px_1px_3px_rgba(0,0,0,1)_inset]"}`} />;
    }))}
    </div>;
}