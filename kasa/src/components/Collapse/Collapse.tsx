import React from "react";
import { useCollapse } from "./Collapse.hook.tsx";
import "./collapse.css";
import vector from "../../assets/Vector.svg";

export interface CollapseProps {
  title: string;
  content?: string;
  contents?: string[];
}
const Collapse = (props: CollapseProps) => {
  const h = useCollapse(props);

  return (
    <div>
      <div>
        <div onClick={() => h.setIsOpen(!h.isOpen)} className="collapse">
          <h2 className="collapse-text ">{h.title}</h2>
          <div>
            <img
              src={vector}
              alt="flèche"
              className={
                h.isOpen
                  ? "collapse-arrow collapse-arrow-turn"
                  : "collapse-arrow"
              }
            />
          </div>
        </div>
        {h.isOpen && (
          <div className="collapse-description">
            {h.content && <p>{h.content}</p>}
            {h.contents && h.contents.map((c, i) => <p key={i}>{c}</p>)}
          </div>
        )}
      </div>
    </div>
  );
};

export default Collapse;
