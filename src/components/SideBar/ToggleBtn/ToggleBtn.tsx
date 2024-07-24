import "./toggleBtn.scss";
const ToggleBtn = ({ setOpen, open }) => {
  console.log(open);

  return (
    <button onClick={() => setOpen((prev) => !prev)} className="linksButtonHolder">
      <div className={`book  ${open ? "active" : ""}`}>
        <div className="back"></div>
        <div className="page6"></div>
        <div className="page5"></div>
        <div className="page4"></div>
        <div className="page3"></div>
        <div className="page2"></div>
        <div className="page1"></div>
        <div className="front"></div>
      </div>
    </button>
  );
};

export default ToggleBtn;
