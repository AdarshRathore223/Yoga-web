import footimg from "../assets/footer.png"
const Footer = () => {

  return (
    <div className="flex justify-center mt-4 w-full fixed bottom-0 -z-10">
      <img src={footimg} alt="" className="w-full" />
    </div>
  );
};

export default Footer;
