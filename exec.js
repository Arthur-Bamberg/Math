function calcular(){
    const a= Number(document.getElementById('a').value)
    let b= Number(document.getElementById('b').value)
    let c= Number(document.getElementById('c').value)
    const res1= document.getElementById('res1')
    const res2= document.getElementById('res2')
    const res3= document.getElementById('res3')
    const res4= document.getElementById('res4')
    const res5= document.getElementById('res5')
    const res6= document.getElementById('res6')
    const res7= document.getElementById('res7')
    const res8= document.getElementById('res8')
    const res9= document.getElementById('res9')
    const delta = b*b-4*a*c
    if(delta>0){
        res4.innerHTML = `A parábola corta o eixo dos x em dois pontos distintos`
    }else if(delta<0){
        res4.innerHTML = `A parábola não corta o eixo dos x`
    }else{
        res4.innerHTML = `A parábola tangencia o eixo dos x`
    }
    if(a>0){
        res4.innerHTML += ` e a concavidade é para cima.`
    }else{
        res4.innerHTML += ` e a concavidade é para baixo.`
    }
    if(b==""){
        b=0
    }
    if(c==""){
        c=0
    }
    const Xv= (-b)/(2*a)
    const Yv= (-delta)/(4*a)
    res5.innerHTML = `Xv = ${Xv}`
    res6.innerHTML = `Yv = ${Yv}`
    res3.innerHTML = `(${Xv}, ${Yv})`
    if(a>0){
        res7.innerHTML = `Ponto de mínimo: ${Yv} `
    }else{
        res7.innerHTML = `Ponto de máximo: ${Yv} `
    }
    const x1 = ((-b)+Math.sqrt(delta))/(2*a)
    const x2 = ((-b)-Math.sqrt(delta))/(2*a)
    res1.innerHTML = `X1= ${x1}`
    res2.innerHTML = `X2 = ${x2}`
    res9.innerHTML = `A parábola intercepta o eixo y no ponto (0, ${c})`
    const cy = c-Yv
    const cdelta = b*b-4*a*cy
    const x3 = ((-b)+Math.sqrt(cdelta))/(2*a)
    const x4 = ((-b)-Math.sqrt(cdelta))/(2*a)
    if (x3>=0 && a<0) {
        res8.innerHTML = `O valor de X no ponto máximo de Y é: ${x3}`
    }else if (x4>=0 && a<0) {
        res8.innerHTML = `O valor de X no ponto máximo de Y é: ${x4}`
    }else{
        res8.innerHTML = ``
    }
}
