

export default function Card({width, height, src}) {

// width = w = largura do card
// height = h = altura do card
// height menor = hm = altura da parte menor
// height maior = hMa = altura da parte maior


// grossura dos lados das partes menores = lm
// grossura dos lados da parte maior = lMa

// margin bottom da parte superior = mB
// margin top da parte superior = mT

  const hm = height / 14
  const hMa = width - hm
  const lMa = width / 58
  const mT = height / 62.5
  const mB = mT / 2
  const lm = lMa / 2

  return (
    <div className="Card" style={{width:`${width}rem`, height:`${height}rem`}}>
      <div className="ParteSuperiorCard" style={{ height: hm, borderWidth: lm, marginBottom: mB}}>
        <span>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span>
      </div>
      <a className="ParteInferiorCard" style={{ height: hMa, borderWidth: lMa, marginTop: mT, border: `2px solid red`}}>
        <img src={src} alt=""/>
      </a>
    </div>

    
  )
}


