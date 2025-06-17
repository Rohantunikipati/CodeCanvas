"use client"
import { useAuthContext } from '@/app/provider'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DesignCard from './_components/DesignCard';
import { RECORD } from '@/app/view-code/[uid]/page';
import { motion } from "framer-motion"

function Designs() {

    const { user } = useAuthContext();
    const [wireframeList, setWireframeList] = useState([]);
    useEffect(() => {
        user && GetAllUserWireframe();
    }, [user])

    const GetAllUserWireframe = async () => {

        const result = await axios.get('/api/wireframe-to-code?email='
            + user?.email);
        console.log(result.data);
        setWireframeList(result.data);
    }


    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.5,
            },
        },
    };


    return (
        <div>
            <h2 className='font-bold text-2xl'>Wireframe & Codes</h2>

            <motion.div
                variants={container}
                initial="hidden"
                animate="visible" 
                className='grid grid-cols-2 lg:grid-cols-3 gap-7 mt-10'>
                {wireframeList?.map((item: RECORD, index) => (
                    <DesignCard key={index} item={item} />
                ))}
            </motion.div>
        </div>
    )
}

export default Designs