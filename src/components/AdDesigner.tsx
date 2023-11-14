import "./AdDesigner.css";

const AdDesigner = () => {
  return (
    <section className="AdDesigner">
      <h2>Ad Designer</h2>
      <div className="vote-for-box">
        <p className="vote-for">Vote For</p>
        <p className="dynamic-variable">dynamic</p>
      </div>
      <h3>What to Support</h3>
      <div className="flavor-buttons">
        <button>Chocolate</button>
        <button>Vanilla</button>
        <button>Strawberry</button>
      </div>
      <h3>Color Theme</h3>
      <div className="color-themes">
        <button>Light</button>
        <button>Dark</button>
      </div>
      <h3>Font Size</h3>
      <div className="font-size">
        <button>Down</button>
        <p>0</p>
        <button>Up</button>
      </div>
    </section>
  );
};

export default AdDesigner;
