const Contact = () => {
  return (
    <>
      <div className=" flex ">
        <div>
          <img
            classname="h-52 w-52"
            src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg"
          ></img>
        </div>
        <div className="ml-40 mt-32">
          <h1 className="font-bold text-3xl text-cyan-400 ml-2 mb-4">
            Get In Touch
          </h1>
          <h3 className="mt-2"> Phone: +91 63353788107</h3>
          <h3 className="mt-2"> Email: mahalekalpesh101299@gmail.com </h3>
          <h3 className="mt-2">
            {" "}
            Address: A-243, Millenium park,Dindoli,Surat
          </h3>

          <div className="mt-2">
            <form className="form">
              <input className="mt-2 border-4" placeholder="Your-Name"></input>
              <br></br>
              <input className="mt-2 border-4" placeholder="Your-Email"></input>
              <br></br>
              <input
                className="mt-2 border-4"
                placeholder="Your-Phone"
                type="number"
              ></input>{" "}
              <br></br>
              <input
                className="mt-2 border-4"
                placeholder="Your-Message"
                size="100px"
              ></input>
              <br></br>
              <button className="mt-4 ml-4 border-2 border-black bg-blue-500  rounded-md">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
