import { useState } from "react";
import QRCode from 'qrcode.react';
import { Button, Box } from "@chakra-ui/react";
import "./body_styles.css";
import { Spinner } from '@chakra-ui/react'
function QR(params){
    const [qrDataURL, setQRDataURL] = useState('');
    console.log(params.url);
    console.log(params.size);
    if(params.url==''){
        params.valid(false);
        alert('Please enter a URL');
    }
    const handleDownload = () => {
        const canvas = document.querySelector(".qr_style");

        if (canvas) 
            setQRDataURL(canvas.toDataURL("image/png"));
    }
    const [loading,status]=useState(true);
    return <div> {loading==false &&<Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      /> 
      }
      {
        loading&&<center><QRCode size={params.size} className="qr_style " value={params.url} fgColor={params.color} /></center>
          
      }
      <Box
      margin="5%"
        as="button"
        padding="3%"
        borderRadius="10px"
        lineHeight="1.2"
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        border="1px"
        px="8px"
        
        fontSize="1.5rem"
        fontWeight="semibold"
        bg="#D2DE32"
        
        borderColor="#ccd0d5"
        color="#FFFFDD"
        _hover={{ bg: "#016A70" }}
        _active={{
          bg: "#016A70",
          transform: "scale(0.98)",
          borderColor: "#bec3c9",
        }}
        _focus={{
          boxShadow:
            "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
        }}
        
      >
         <a  onClick={handleDownload} href={qrDataURL} download="qrcode.png">Click here to download</a>
      </Box>
    
      
    </div>
}
export default QR;