function nombres ()
{
    let nombres = []
    nombres.push('ana')
    console.log(nombres)
    nombres.push('luis')
    console.log(nombres)
    nombres.push('carlos')
    console.log(nombres)
    nombres.splice(0,1,'maria')
    console.log(nombres);
}
nombres();   