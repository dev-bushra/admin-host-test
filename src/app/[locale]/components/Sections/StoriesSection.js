import '@/app/[locale]/scss/sections/storiesSection.scss'
import React from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

// Assets
import { IoPlayCircleOutline } from "react-icons/io5";
import PlayIcon from '../../../../../public/icons/play-icon.png'

const StoriesSection = () => {
  const t = useTranslations('StoriesSection');
  const stories = [
    { title: 'Ahmed Ali', coverImg: 'https://images.unsplash.com/photo-1576558345433-58e777a5e423?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { title: 'Ahmed Kmal', coverImg: 'https://images.unsplash.com/photo-1584949514123-474cfa705dfe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { title: 'Ahmed Ali', coverImg: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { title: 'Ahmed Ali', coverImg: 'https://images.unsplash.com/photo-1618354691551-44de113f0164?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { title: 'Bushra Aboubida', coverImg: 'https://plus.unsplash.com/premium_photo-1683288446478-d998f96592e0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { title: 'Ahmed Kmal', coverImg: 'https://plus.unsplash.com/premium_photo-1683288062196-bdb1c61c7b95?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { title: 'Bushra Aboubida', coverImg: 'https://images.unsplash.com/photo-1618354691249-18772bbac3a5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { title: 'Ahmed Kmal', coverImg: 'https://plus.unsplash.com/premium_photo-1683288062196-bdb1c61c7b95?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
  ];

  return (
    <div className="wrapper min-w-full max-w-full py-[5rem] flex flex-col items-start justify-start text-start">
      <h1 className="main-title mb-10">{t('title')}</h1>
      <div className="stories-wrapper flex items-start justify-start w-full max-w-full overflow-x-auto">
      {stories && stories.map((story, index) => (
          <div 
            className="stories-container relative" 
            key={index} 
            style={{backgroundImage: `url('${story.coverImg})`}}
          >
            <div className="top w-full h-[2.5rem] bg-[#2C6FF4] hover:bg-[#F19371] text-white text-center font-medium rounded-tr-[10px] rounded-tl-[10px] flex items-center justify-center text-[14px]">
              {story.title}
            </div>
            <div className=" absolute top-[50%] right-[35%]">
              {/* TODO: add modal when user click at a story and open it in a pop (use bootstrap module) */}
              <Image src={PlayIcon} width={50} height={50} alt="play-icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StoriesSection;