import './CSS/main.css'

export default function CardFlex({ width, height, children }) {
  const hm = height / 14;
  const hMa = height - hm;
  const lMa = width / 58;
  const lm = lMa / 2;
  const mT = height / 62.5;
  const mB = mT / 2;

  return (
    <div
      className="Card"
      style={{
        width: `${width}rem`,
        height: `${height}rem`,
        borderWidth: `3px solid`,
      }}
    >
      <div
        className="ParteSuperiorCard"
        style={{
          height: `${hm}rem`,
          borderTopWidth: `${mT}rem`,
          borderInlineWidth: `${lm}rem`,
          borderBottomWidth: `${mB}rem`,
          borderStyle: 'solid',
        }}
      >
        <button>
          <span>x</span>
        </button>
      </div>
      <div
        className="ParteInferiorCard"
        style={{
          height: `${hMa}rem`,
          borderWidth: `${lMa}rem`,
          boxSizing: 'border-box',
          borderStyle: 'solid',
        }}
      >
        {children}
      </div>
    </div>
  );
}