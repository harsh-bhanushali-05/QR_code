import "./body_styles.css";
import Form from "./form_input";
import { Box, Flex } from "@chakra-ui/react";
function Body() {
  return (
    <div>
      {" "}
      <div className="container">
        <div className="content">
          <div className="text">
            <h2 className="name_text">QR Code Generator</h2>
            <p> This app allows you to convert any website url into a QR Code and download it as a image</p>
            <Form></Form>
          </div>
          <div className="image">
            <img
              src="https://media.istockphoto.com/id/1324706565/vector/qr-code-scan-on-smartphone-in-hand-scan-qr-code-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=0Sha6-32q_xjPjp67_dxGDdaGTrBmac2VNBBGFUPXjE="
              alt="Image Description"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Body;
