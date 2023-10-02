import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            soluta ut odit recusandae aliquam vero quibusdam atque ipsum.
            Quaerat numquam dolorem vitae laborum blanditiis magnam perspiciatis
            aliquam beatae tempora laudantium.
          </p>
          <p>&copy; Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="mt-5">Lorem ipsum dolor</p>
          <p className="mt-5">dolorem vitae laborum </p>
          <p className="mt-5">odit recusandae aliquam </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="mt-5">repellendus sapiente libero quaerat rem</p>
          <p className="mt-5">+(123) 345-567-890 </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
