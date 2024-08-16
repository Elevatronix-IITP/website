import React from "react";
import ProductCard from "../components/ProductCard";
import style from "./product.module.css";
import Footer from "../components/Footer";

const Product = () => {
  return (
    <div>
      <div className={style.main}>
        <div className={style.topHead}>
          <h1>Cutting-edge Surgical Automation Equipment and Technologies</h1>
          <hr />
          <p>
            Our latest innovations in surgical automation equipment bring
            unprecedented precision and efficiency to medical procedures.
            Utilizing advanced robotics and intelligent control systems, these
            technologies enhance surgical outcomes and reduce recovery times.
            With features like real-time monitoring and adaptive responses, our
            equipment ensures optimal performance in complex operations.
            Designed for user-friendly integration into existing medical
            practices, these tools are set to revolutionize the field of
            surgery. Experience the future of healthcare with our cutting-edge
            solutions.
          </p>
        </div>
        <ProductCard
          src="/asset/Elevator.svg"
          Product="Automated Elevator"
          texts="The Automatic Elevator is an innovative dental device designed to automate tooth extraction by applying precise motion and pressure. This advanced tool enhances accuracy and efficiency, reducing procedure time and minimizing patient discomfort. Equipped with state-of-the-art sensors and control mechanisms, it ensures optimal force application, promoting safer extractions. Its user-friendly interface allows for easy operation by dental professionals. The Automatic Elevator revolutionizes dental surgery by integrating automation into traditional extraction techniques."
        />
        <ProductCard
          src="/asset/Microscope.jpg"
          Product="Portable Microscope"
          texts="A portable digital microscope allows one-handed operation and dynamic magnification adjustment, enhancing dentist mobility and comfort while integrating advanced digital imaging technology for real-time collaboration."
        />
        <ProductCard
          src="/asset/Eye_care.svg"
          Product="Advanced Vitrectomy Cutter"
          texts="An advanced vitrectomy eye cutter is a specialized surgical tool used in vitrectomy procedures, which involve the removal of the vitreous gel from the eye. This instrument operates in multiple stages, allowing for precise cutting and removal of vitreous tissue. The multistage feature enables the surgeon to adjust the cutting speed and flow rate, optimizing the tool's performance for different phases of the surgery, such as removing more fibrous or delicate tissue. This technology enhances control and efficiency during complex retinal surgeries, improving patient outcomes."
        />
        <ProductCard
          src="/asset/Gloves.jpg"
          Product="Surgical Tactile Sensing Gloves"
          texts="Surgical tactile sensing gloves are advanced medical devices designed to enhance a surgeon's sense of touch during procedures. These gloves are embedded with sensors that detect and transmit tactile information, such as pressure, texture, and temperature, to the surgeon, This technology allows for more precise manipulation of tissues and instruments especially in minimally invasive surgeries where direct touch is limited. By providing real-time feedback, tactile sensing gloves improve surgical accuracy, reduce the risk of injury, and enhance the surgeon's ability to distinguish between different tissue types, ultimately leading to better patient outcomes."
        />
      </div>
      <Footer />
    </div>
  );
};

export default Product;
