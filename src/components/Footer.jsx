import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";

//import dev
import { DiJsBadge, DiIllustrator, DiMongodb, DiNodejs, DiNpm, DiReact, DiSass, DiJava } from "react-icons/di";
import { SiApachemaven } from "react-icons/si";
import {  AiFillHtml5, AiFillGithub} from "react-icons/ai";
import { BsGit } from "react-icons/bs";

export default function Footer() {
  return (
    <>
        <div className="container-fluid bg-dark text-white footer">
            <div className="row footerTop">
            <div className="tecnologiasUso col-12 col-md-6 mt-4">
                <div className="col-12 d-flex justify-content-center"><span>Tecnologias</span></div>

                    <div className="tecn1 container-fluid d-flex justify-content-around align-items-center">
                        <DiIllustrator className="icoT"/>
                        <DiJava className="icoT"/>
                        <DiJsBadge className="icoT"/>
                        <DiMongodb className="icoT"/>
                        <DiNodejs className="icoT"/>
                        <DiNpm className="icoT"/>
                        <DiReact className="icoT"/>
                        <DiSass className="icoT"/>

                    </div>
                    <div className="tecn2 container-fluid d-flex justify-content-around align-items-center">
                            <SiApachemaven className="icoT"/>
                            <AiFillGithub className="icoT"/>
                            <BsGit className="icoT"/>
                            <AiFillHtml5 className="icoT"/>

                    </div>

                </div>
           
                <div className="redesSociales col-12 col-md-6 mt-4">
                <div className="col-12 d-flex justify-content-center"><span>Redes</span></div>
                        <div className="containerIconos container-fluid d-flex justify-content-around align-items-center">
                            <AiFillFacebook className="ico"/>
                            <AiFillInstagram className="ico"/>
                            <AiFillLinkedin className="ico"/>
                            <AiOutlineWhatsApp className="ico"/>
                        </div>
                        <div className="col-12 mt-3 contactFooter d-flex justify-content-end align-items-end">
                            <div>
                            <h5 className="fotext">Santa Fe - Argentina</h5>
                            <h5 className="fotext">contacto@rocfar.com</h5>
                            <h5 className="fotext">Tel: +543405405315</h5>
                            </div>
                          
                        </div>
                </div>

            </div>
            <div className="row">
            <div className="col-12 d-flex align-items-end justify-content-center">
                    <h5 className="text-white Copyright mt-5">Copyright - 2023</h5>
                </div>
            </div>
        </div>
    </>
  )
}
