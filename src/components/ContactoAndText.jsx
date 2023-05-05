import {BsFillEmojiSmileFill} from "react-icons/bs";
import {AiOutlineWhatsApp} from "react-icons/ai";


export default function ContactoAndText() {
  return (
    <>
        <div className="container-fluid bg-v">
            <div className="row">
               <div className="col-sm-4"></div>
               <div className="col-12 col-sm-4 mt-4">
                <h5 className="textContact text-white">
                    Si consideras que podemos ayudarte, no dudes en contactarnos sin compromiso <BsFillEmojiSmileFill/>
                </h5>
               </div>
                
         
          <div className="col-sm-4 d-flex justify-content-center align-items-center">
                <a  href="https://wa.me/543405500234?Contactame%20por%20WhattSap" target="blank"> <AiOutlineWhatsApp className="wsap mb-3"/></a>
          </div>
        </div>
    
        </div>
    </>
  )
}
