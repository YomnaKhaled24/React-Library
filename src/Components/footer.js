import { useTranslation } from "react-i18next";

function Footer() {
   const { t } = useTranslation(); 
  return (
    <footer style={{marginBottom:"0"}}>
      
    <div className="copyright mt-5">
       <div className="container ">
          <p className="text-light m-auto">{t("copyright")}</p> 
       </div>
    </div>
 </footer>
  );
}

export default Footer;
