import QR from "./QR";
import { Button, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import "./body_styles.css";

function Form() {
  const [selectedSize, setSelectedSize] = useState("400"); // Initialize with a default size
  const [generated,change]=useState(false);
  const [url,seturl]=useState("");
  const [color,setcolor]=useState("#000000");
  const log = (event) => {
    if(generated)change(false);
    change(true);
    event.preventDefault();
    console.log(selectedSize);
  };

  return (
    <div> 
    <form>
      <label>URL:</label>
      <input type="text" onChange={(event)=>{seturl(event.target.value) ; change(false);}} className="input_style" value={url}/>
      <br />
      <select
        className="dropdown space"
        onChange={(event) => setSelectedSize(event.target.value)}
        value={selectedSize}
      >
        <option value="100">100x100</option>
        <option value="200">200x200</option>
        <option value="300">300x300</option>
        <option value="400">400x400</option>
        <option value="500">500x500</option>
        <option value="600">600x600</option>
        <option value="700">700x700</option>
      </select>
      <br/>
      <input type="text" onChange={(event)=>{setcolor(event.target.value) ; change(false);}} className="input_style" value={color}/>
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
        
        onClick={log}
      >
        Generate QR
      </Box>
    </form>

    {/* // till now it was styling the form now is where the generated QR code will be displayed  */}
    {generated&&<QR url={url} size={selectedSize} color={color} valid={change} />}</div>
  );
}

export default Form;
