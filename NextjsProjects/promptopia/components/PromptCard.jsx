"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const [copied, setCopied] = useState("");
  const pathName = usePathname();

  const handleCopy = () => {
    setCopied("This is a prompt");
    navigator.clipboard.writeText("This is a prompt");
    setTimeout(() => {
      setCopied("");
    }, 3000);
  };

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
            src="assets/images/logo.svg"
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          ></Image>
        </div>
        <div className="flex flex-col">
          <h3 className="font-satoshi font-semibold text-gray-900">
            Kevin Colaco
          </h3>
          <p className="font-inter text-sm text-gray-500">kcolaco@codal.com</p>
        </div>
        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={
              copied === "This is a prompt"
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            width={12}
            height={12}
          />
        </div>
      </div>

      <p className="my-4 font-satoshi text-sm text-gray-700">
        This is a prompt
      </p>
      <p
        className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={() => handleTagClick && handleTagClick("#webdevelopment")}
      >
        #webdevelopment
      </p>

      {pathName === "/profile" && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <p
            className="font-inter text-sm green_gradient cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className="font-inter text-sm orange_gradient cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
