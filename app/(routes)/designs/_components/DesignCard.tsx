'use client';

import { RECORD } from '@/app/view-code/[uid]/page';
import { Button } from '@/components/ui/button';
import Constants from '@/data/Constants';
import { Code } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

function DesignCard({ item }: any) {
    const modelObj = item && Constants.AiModelList.find((x => x.name == item?.model));

    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            
            transition={{
                type: "spring",
                ease: [0.65, 0, 0.35, 1],
                duration:0.7,
            }}
            className='p-5 border rounded-lg shadow-md'
        >
            <Image
                src={item?.imageUrl}
                alt='image'
                width={300}
                height={200}
                className='w-full h-[200px] object-cover bg-white rounded-lg'
            />

            <div className='mt-2'>
                <h2 className='line-clamp-3 text-gray-400 text-sm'>{item?.description}</h2>
                <div className='flex justify-between items-center mt-4'>
                    <div className='flex items-center gap-2 p-2 bg-gray-50 rounded-full'>
                        {modelObj && (
                            <Image
                                src={modelObj?.icon}
                                alt={modelObj?.modelName ?? ''}
                                width={30}
                                height={30}
                            />
                        )}
                        <h2>{modelObj.name}</h2>
                    </div>
                    <Link href={'/view-code/' + item?.uid}>
                        <Button><Code /> View Code</Button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

export default DesignCard;
