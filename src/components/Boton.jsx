import React from "react";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';



export default function Boton(props) {
    const navigate = useNavigate();

    function handleClick() {
        if (props.title === "Subir fotografía") {
            navigate("/foto")

        }
    }

    return (
        <motion.div
            layout
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            whileTap={{ scale: 0.7, backgroundColor: "#146b2b" }}
            className="boton">
            <div className="boton-title" onClick={handleClick}>
                <span>{props.title}</span>
            </div>
        </motion.div>
    )

}