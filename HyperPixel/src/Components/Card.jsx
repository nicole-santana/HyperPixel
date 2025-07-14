import './CSS/main.css'

export default function Card({width, height, src}) {

// width = w = largura do card
// height = h = altura do card
// height menor = hm = altura da parte menor
// height maior = hMa = altura da parte maior


// grossura dos lados das partes menores = lm
// grossura dos lados da parte maior = lMa

// border bottom da parte superior = mB
// border top da parte superior = mT

  const hm = height / 14
  const hMa = height - hm

  const lMa = width / 58
  const lm = lMa / 2


  const mT = height / 62.5
  const mB = mT / 2

  const b = width/32
  

return (
  <div className="Card" style={{ width: `${width}rem`, height: `${height}rem`, borderWidth:`${3}px solid`}}>
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
      <button><span>x</span></button>
    </div>
    <a
      className="ParteInferiorCard"
       style={{
            height: `${hMa}rem`,
            borderWidth: `${lMa}rem`,
            boxSizing: 'border-box',
            borderStyle: 'solid',
           
         // marginTop: `${mT}rem`,
         // borderStyle: 'solid',
         // borderColor: 'red'
     }}
    >
      <img src={src} alt=""  />
    </a>
  </div>
)

}
